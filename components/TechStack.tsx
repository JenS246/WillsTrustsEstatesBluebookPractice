import React from 'react';
import { softwareList } from '../data/content';
import { Monitor, Server, Calculator, Clock } from 'lucide-react';

const TechStack: React.FC = () => {
  const getIcon = (cat: string) => {
    if (cat.includes("Tax") || cat.includes("Estate")) return <Calculator className="w-6 h-6" />;
    if (cat.includes("Management")) return <Server className="w-6 h-6" />;
    if (cat.includes("Time")) return <Clock className="w-6 h-6" />;
    return <Monitor className="w-6 h-6" />;
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-serif font-bold text-legal-900 mb-4">Paralegal Technology</h2>
        <p className="text-legal-600">
          Proficiency in these tools is often required for Philadelphia estate administration roles. 
          Focus on understanding <strong>Lackner 6-in-1</strong> as it is the regional standard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softwareList.map((sw, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-legal-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-legal-50 rounded-lg text-legal-700">
                {getIcon(sw.category)}
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded uppercase tracking-wide">
                {sw.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{sw.name}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {sw.description}
            </p>
            
            <div className="bg-blue-50 p-3 rounded border border-blue-100">
              <p className="text-xs text-blue-800 font-medium">
                <span className="font-bold">Why it matters:</span> {sw.relevance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
