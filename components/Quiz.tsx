import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, title }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQ = questions[currentQIndex];

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    if (index === currentQ.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto border border-legal-200">
        <h3 className="text-2xl font-serif font-bold text-legal-900 mb-4">Quiz Complete!</h3>
        <div className="text-6xl font-bold text-legal-600 mb-6">
          {Math.round((score / questions.length) * 100)}%
        </div>
        <p className="text-legal-600 mb-8 text-lg">
          You got <span className="font-bold">{score}</span> out of <span className="font-bold">{questions.length}</span> correct.
        </p>
        <button 
          onClick={resetQuiz}
          className="inline-flex items-center px-6 py-3 bg-legal-600 text-white rounded-lg hover:bg-legal-700 transition-colors font-medium"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Review Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-legal-200 overflow-hidden max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-legal-50 px-6 py-4 border-b border-legal-200 flex justify-between items-center">
        <h2 className="text-lg font-serif font-bold text-legal-800">{title}</h2>
        <span className="text-sm font-medium text-legal-500 bg-white px-3 py-1 rounded-full border border-legal-200">
          Question {currentQIndex + 1} of {questions.length}
        </span>
      </div>

      {/* Question Body */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
          {currentQ.question}
        </h3>

        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            let itemClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex justify-between items-center group ";
            
            if (showResult) {
              if (idx === currentQ.correctAnswer) {
                itemClass += "border-green-500 bg-green-50";
              } else if (idx === selectedOption) {
                itemClass += "border-red-500 bg-red-50";
              } else {
                itemClass += "border-gray-100 opacity-50";
              }
            } else {
              itemClass += "border-gray-100 hover:border-legal-300 hover:bg-legal-50";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={showResult}
                className={itemClass}
              >
                <span className={`font-medium ${showResult && idx === currentQ.correctAnswer ? 'text-green-800' : 'text-gray-700'}`}>
                  {option}
                </span>
                {showResult && idx === currentQ.correctAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                {showResult && idx === selectedOption && idx !== currentQ.correctAnswer && <XCircle className="w-5 h-5 text-red-600" />}
              </button>
            );
          })}
        </div>

        {/* Explanation & Next Button */}
        {showResult && (
          <div className="mt-8 animate-fade-in">
            <div className={`p-4 rounded-lg border mb-6 ${
              selectedOption === currentQ.correctAnswer 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}>
              <h4 className="font-bold mb-1 flex items-center">
                {selectedOption === currentQ.correctAnswer ? 'Correct!' : 'Explanation:'}
              </h4>
              <p className="text-sm leading-relaxed">{currentQ.explanation}</p>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                className="inline-flex items-center px-6 py-3 bg-legal-800 text-white rounded-lg hover:bg-legal-900 transition-colors shadow-sm font-medium"
              >
                {currentQIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
