import React, { useState } from 'react';
import { View } from '../types';
import { BookOpen, FileText, Gavel, Scale, Code, GraduationCap, Menu, X } from 'lucide-react';

interface LayoutProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, setCurrentView, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { view: View.DASHBOARD, label: 'Dashboard', icon: <BookOpen className="w-5 h-5" /> },
    { view: View.WILLS, label: 'Wills & Drafting', icon: <FileText className="w-5 h-5" /> },
    { view: View.TRUSTS, label: 'Trusts & Fiduciaries', icon: <Scale className="w-5 h-5" /> },
    { view: View.ESTATES, label: 'Estates & Probate', icon: <Gavel className="w-5 h-5" /> },
    { view: View.BLUEBOOK, label: 'Bluebook Citations', icon: <GraduationCap className="w-5 h-5" /> },
    { view: View.TECH, label: 'Paralegal Tech', icon: <Code className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-legal-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-legal-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-legal-700">
          <h1 className="text-xl font-serif font-bold tracking-wide">Philadelphia Paralegal</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-300 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => {
                setCurrentView(item.view);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === item.view
                  ? 'bg-legal-700 text-white shadow-md'
                  : 'text-legal-300 hover:bg-legal-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-6 border-t border-legal-700">
          <p className="text-xs text-legal-400">© 2024 Course Review Tool</p>
          <p className="text-xs text-legal-500 mt-1">Philadelphia Jurisdiction</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header (Mobile) */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden flex items-center p-4">
          <button onClick={() => setIsSidebarOpen(true)} className="text-legal-700 p-1 mr-4">
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-serif font-bold text-legal-900">Philadelphia Paralegal Prep</span>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;