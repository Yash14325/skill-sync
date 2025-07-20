import React from 'react';
import { User, Database, Brain, Info } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div>
        <div className="flex items-center mb-3">
          <User className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-gray-800">About This App</h3>
        </div>
        <p className="text-sm text-gray-600">
          Predict employee salary brackets using machine learning based on demographic and work-related features.
        </p>
      </div>
      
      <div>
        <div className="flex items-center mb-3">
          <Database className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Dataset Info</h3>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>📊 Features: 10 input variables</p>
          <p>🎯 Target: {'>'}50K or ≤50K salary</p>
          <p>🤖 Model: Random Forest Classifier</p>
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-3">
          <Brain className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Model Performance</h3>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>✅ Accuracy: 85.2%</p>
          <p>🎯 Precision: 82.1%</p>
          <p>📈 Recall: 78.9%</p>
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-3">
          <Info className="h-5 w-5 text-orange-600 mr-2" />
          <h3 className="font-semibold text-gray-800">How to Use</h3>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>1. Fill in employee details</p>
          <p>2. Click "Predict Salary"</p>
          <p>3. View prediction results</p>
          <p>4. Analyze feature importance</p>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Developer: Dimili Yaswanth<br />
          Tech: React + TypeScript
        </p>
      </div>
    </div>
  );
};