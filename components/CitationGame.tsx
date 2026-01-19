import React, { useState } from 'react';
import { citationChallenges } from '../data/content';
import { GraduationCap, AlertCircle, Check, ArrowRight, Plus, RefreshCw } from 'lucide-react';

const CitationGame: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'CORRECT' | 'INCORRECT'>('IDLE');
  const [isCompleted, setIsCompleted] = useState(false);

  const challenge = citationChallenges[index];

  const insertSymbol = (symbol: string) => {
    setInput(prev => prev + symbol);
  };

  const checkAnswer = () => {
    // Normalize string: trim ends, collapse multiple spaces to single space, convert to lower case.
    // We keep punctuation and symbols to ensure strict Bluebook compliance.
    const normalize = (s: string) => s.trim().replace(/\s+/g, ' ').toLowerCase();
    
    const userNorm = normalize(input);
    const correctNorm = normalize(challenge.correctCitation);

    if (userNorm === correctNorm) {
      setStatus('CORRECT');
    } else {
      setStatus('INCORRECT');
    }
  };

  const next = () => {
    if (index < citationChallenges.length - 1) {
      setIndex(i => i + 1);
      setInput('');
      setStatus('IDLE');
    } else {
      setIsCompleted(true);
    }
  };

  const resetGame = () => {
    setIndex(0);
    setInput('');
    setStatus('IDLE');
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-legal-200">
          <div className="bg-legal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-legal-700" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-legal-900 mb-4">Citation Drills Complete!</h3>
          <p className="text-legal-600 mb-8 text-lg">
            You have successfully formatted all <span className="font-bold">{citationChallenges.length}</span> citations.
          </p>
          <button 
            onClick={resetGame}
            className="inline-flex items-center px-6 py-3 bg-legal-600 text-white rounded-lg hover:bg-legal-700 transition-colors font-medium"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Practice Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border border-legal-200 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-legal-100 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-legal-700" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-legal-900">Bluebook Citation Drill</h2>
              <p className="text-sm text-legal-500">Pennsylvania Wills & Estates Context</p>
            </div>
          </div>
          <span className="text-xs font-bold bg-legal-50 px-3 py-1 rounded-full text-legal-500 border border-legal-200">
            {index + 1} of {citationChallenges.length}
          </span>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Source to Cite</h3>
          <div className="bg-legal-50 p-4 rounded-lg border border-legal-200 text-legal-900 font-medium text-lg">
            {challenge.sourceDescription}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Citation</label>
          <div className="relative">
            <input
              type="text"
              className={`w-full p-4 pr-12 rounded-lg border-2 text-lg font-mono transition-colors focus:ring-0 outline-none
                ${status === 'IDLE' ? 'border-legal-200 focus:border-legal-500' : ''}
                ${status === 'CORRECT' ? 'border-green-500 bg-green-50 text-green-900' : ''}
                ${status === 'INCORRECT' ? 'border-red-300 bg-red-50 text-red-900' : ''}
              `}
              placeholder="e.g., 20 Pa. C.S. § ..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (status !== 'IDLE') setStatus('IDLE');
              }}
              onKeyDown={(e) => e.key === 'Enter' && status === 'IDLE' && checkAnswer()}
            />
          </div>
          <div className="mt-2 flex gap-2">
            <button 
              onClick={() => insertSymbol('§')}
              className="text-xs bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 px-3 py-1 rounded transition-colors flex items-center"
              title="Insert Section Symbol"
            >
              <Plus className="w-3 h-3 mr-1" /> Insert §
            </button>
            <button 
              onClick={() => insertSymbol('¶')}
              className="text-xs bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 px-3 py-1 rounded transition-colors flex items-center"
              title="Insert Paragraph Symbol"
            >
              <Plus className="w-3 h-3 mr-1" /> Insert ¶
            </button>
          </div>
        </div>

        {status === 'IDLE' && (
          <div className="flex justify-between items-center">
             <div className="text-sm text-legal-400 italic">
               Hint: {challenge.hint}
             </div>
             <button
              onClick={checkAnswer}
              disabled={!input.trim()}
              className="px-6 py-2 bg-legal-800 text-white rounded-lg hover:bg-legal-900 disabled:opacity-50 font-medium"
            >
              Check Citation
            </button>
          </div>
        )}

        {status === 'CORRECT' && (
          <div className="animate-fade-in">
            <div className="flex items-center text-green-700 font-bold mb-4">
              <Check className="w-5 h-5 mr-2" />
              Correct!
            </div>
            <div className="flex justify-end">
              <button onClick={next} className="px-6 py-2 bg-legal-600 text-white rounded-lg hover:bg-legal-700 flex items-center">
                {index === citationChallenges.length - 1 ? 'Finish Drill' : 'Next Challenge'} 
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {status === 'INCORRECT' && (
          <div className="animate-fade-in bg-red-50 p-4 rounded-lg border border-red-100">
            <div className="flex items-start mb-3">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
              <div>
                <p className="text-red-800 font-bold">Incorrect Format</p>
                <p className="text-red-700 text-sm mt-1">Make sure to check your punctuation, spacing, and symbols (e.g., §).</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase">Correct Citation</span>
              <p className="font-mono text-lg text-gray-900 mt-1">{challenge.correctCitation}</p>
            </div>
            <div className="flex justify-end space-x-3">
               <button onClick={() => setStatus('IDLE')} className="px-4 py-2 text-legal-600 hover:text-legal-800 font-medium">
                Try Again
              </button>
              <button onClick={next} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium">
                Skip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitationGame;