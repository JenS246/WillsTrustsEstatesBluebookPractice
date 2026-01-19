import React, { useState } from 'react';
import { DraftingScenario } from '../types';
import { PenTool, Check, Eye, RefreshCw } from 'lucide-react';

interface DraftingDrillProps {
  scenarios: DraftingScenario[];
}

const DraftingDrill: React.FC<DraftingDrillProps> = ({ scenarios }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userDraft, setUserDraft] = useState('');
  const [showModel, setShowModel] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Guard against empty data
  if (!scenarios || scenarios.length === 0) return null;

  const scenario = scenarios[activeIndex];

  const handleNext = () => {
    if (activeIndex < scenarios.length - 1) {
      setShowModel(false);
      setUserDraft('');
      setActiveIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetDrill = () => {
    setActiveIndex(0);
    setUserDraft('');
    setShowModel(false);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-legal-200">
          <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-legal-900 mb-4">Drafting Practice Complete!</h3>
          <p className="text-legal-600 mb-8 text-lg">
            You have reviewed all <span className="font-bold">{scenarios.length}</span> drafting scenarios in this section.
          </p>
          <button 
            onClick={resetDrill}
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
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-legal-200 overflow-hidden">
        <div className="bg-legal-100 p-6 border-b border-legal-200 flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 text-legal-800 mb-2">
              <PenTool className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">Drafting Practice</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-legal-900">{scenario.title}</h2>
            <p className="mt-2 text-legal-700">{scenario.instruction}</p>
          </div>
          <span className="text-xs font-bold bg-white px-3 py-1 rounded-full text-legal-500 border border-legal-200 shrink-0 ml-4">
            {activeIndex + 1} of {scenarios.length}
          </span>
        </div>

        <div className="p-6 bg-legal-50 border-b border-legal-200">
          <h3 className="text-sm font-bold text-legal-500 uppercase mb-2">Context</h3>
          <p className="font-mono text-sm bg-white p-3 border border-legal-200 rounded text-legal-800">
            {scenario.context}
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Draft</label>
            <textarea
              className="w-full h-40 p-4 rounded-lg border-2 border-legal-200 focus:border-legal-500 focus:ring-0 font-serif text-lg leading-relaxed resize-none"
              placeholder="Start typing your legal clause here..."
              value={userDraft}
              onChange={(e) => setUserDraft(e.target.value)}
              spellCheck={false}
            />
          </div>

          {!showModel ? (
            <button
              onClick={() => setShowModel(true)}
              className="w-full py-3 bg-legal-600 hover:bg-legal-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>Reveal Model Answer</span>
            </button>
          ) : (
            <div className="animate-fade-in space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-green-900 font-bold mb-3 flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Model Answer
                </h3>
                <p className="font-serif text-lg text-gray-800 bg-white p-4 rounded border border-green-100 italic">
                  "{scenario.modelAnswer}"
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-blue-900 font-bold mb-3">Checklist: Did you include?</h3>
                <ul className="space-y-2">
                  {scenario.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start text-blue-800">
                      <span className="mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-2 border-2 border-legal-600 text-legal-600 hover:bg-legal-50 rounded-lg font-medium transition-colors"
                >
                  {activeIndex === scenarios.length - 1 ? "Finish Session" : "Next Scenario"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DraftingDrill;