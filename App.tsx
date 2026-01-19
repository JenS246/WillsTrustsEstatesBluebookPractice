import React, { useState } from 'react';
import Layout from './components/Layout';
import Quiz from './components/Quiz';
import DraftingDrill from './components/DraftingDrill';
import CitationGame from './components/CitationGame';
import TechStack from './components/TechStack';
import { View } from './types';
import { 
  willsQuestions, 
  willsDrafting, 
  trustsQuestions, 
  trustsDraftingQuestions,
  estatesQuestions, 
  estatesDrafting 
} from './data/content';
import { BookOpen, FileText, Gavel } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return (
          <div className="space-y-8">
            <section className="text-center py-10">
              <h1 className="text-4xl font-serif font-bold text-legal-900 mb-4">
                Welcome, Paralegal Students
              </h1>
              <p className="text-xl text-legal-600 max-w-2xl mx-auto">
                Review key concepts for Wills, Trusts, and Estates in Philadelphia. 
                Prepare for practice with drafting drills, local workflow guides, and Bluebook citations.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button 
                onClick={() => setCurrentView(View.WILLS)}
                className="bg-white p-8 rounded-xl shadow-sm border border-legal-200 hover:border-legal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wills & Drafting</h3>
                <p className="text-gray-500 text-sm">Execution requirements, self-proving affidavits, and drafting basic clauses.</p>
              </button>

              <button 
                onClick={() => setCurrentView(View.TRUSTS)}
                className="bg-white p-8 rounded-xl shadow-sm border border-legal-200 hover:border-legal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center text-purple-700 mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trusts</h3>
                <p className="text-gray-500 text-sm">Revocable trusts, UTC adoption in PA, and fiduciary duties.</p>
              </button>

              <button 
                onClick={() => setCurrentView(View.ESTATES)}
                className="bg-white p-8 rounded-xl shadow-sm border border-legal-200 hover:border-legal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center text-emerald-700 mb-4 group-hover:scale-110 transition-transform">
                  <Gavel className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estates & Probate</h3>
                <p className="text-gray-500 text-sm">Grant of Letters, Register of Wills workflows, and Inheritance Tax (REV-1500).</p>
              </button>
            </div>
          </div>
        );

      case View.WILLS:
        return (
          <div className="space-y-12">
            <div>
               <h2 className="text-3xl font-serif font-bold text-legal-900 mb-6 border-b border-legal-200 pb-4">Wills: Concepts</h2>
               <Quiz questions={willsQuestions} title="PA Wills Review" />
            </div>
            <div>
               <h2 className="text-3xl font-serif font-bold text-legal-900 mb-6 border-b border-legal-200 pb-4">Wills: Drafting Lab</h2>
               <DraftingDrill scenarios={willsDrafting} />
            </div>
          </div>
        );

      case View.TRUSTS:
        return (
          <div className="space-y-12">
             <div>
               <h2 className="text-3xl font-serif font-bold text-legal-900 mb-6 border-b border-legal-200 pb-4">Trusts & Fiduciaries</h2>
               <Quiz questions={trustsQuestions} title="Trust Administration Review" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-legal-900 mb-6 border-b border-legal-200 pb-4">Trusts: Drafting Concepts</h2>
              <div className="bg-legal-50 rounded-xl p-8 border border-legal-200 mb-8">
                <h3 className="text-xl font-bold text-legal-800 mb-4">Note on Drafting Trusts</h3>
                <p className="text-legal-700">
                  Trust drafting is complex and usually template-driven in practice (e.g., utilizing Lackner or practical guides). 
                  However, understanding the core provisions is essential for a paralegal assisting with funding and administration.
                </p>
              </div>
              <Quiz questions={trustsDraftingQuestions} title="Drafting Considerations for Trusts" />
            </div>
          </div>
        );

      case View.ESTATES:
        return (
           <div className="space-y-12">
            <div>
               <h2 className="text-3xl font-serif font-bold text-legal-900 mb-6 border-b border-legal-200 pb-4">Estate Administration</h2>
               <Quiz questions={estatesQuestions} title="Probate & Tax Review" />
            </div>
            <div>
               <h2 className="text-3xl font-serif font-bold text-legal-900 mb-6 border-b border-legal-200 pb-4">Probate Drafting</h2>
               <DraftingDrill scenarios={estatesDrafting} />
            </div>
          </div>
        );

      case View.BLUEBOOK:
        return <CitationGame />;

      case View.TECH:
        return <TechStack />;

      default:
        return <div>Select a module</div>;
    }
  };

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

export default App;