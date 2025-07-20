import React from 'react';
import { PredictionResult } from '../types';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';

interface PredictionResultProps {
  result: PredictionResult;
}

export const PredictionResults: React.FC<PredictionResultProps> = ({ result }) => {
  const isHighSalary = result.prediction === '>50K';
  
  return (
    <div className={`p-6 rounded-lg shadow-lg ${
      isHighSalary 
        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' 
        : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'
    }`}>
      <div className="flex items-center justify-center mb-4">
        {isHighSalary ? (
          <TrendingUp className="h-12 w-12 text-green-600" />
        ) : (
          <TrendingDown className="h-12 w-12 text-blue-600" />
        )}
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">
          <span className={isHighSalary ? 'text-green-700' : 'text-blue-700'}>
            Predicted Salary: {result.prediction}
          </span>
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Target className="h-5 w-5 text-gray-600 mr-1" />
              <span className="text-sm font-medium text-gray-600">Confidence</span>
            </div>
            <span className="text-xl font-bold text-gray-800">{result.confidence}%</span>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div className="h-5 w-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-1"></div>
              <span className="text-sm font-medium text-gray-600">Probability</span>
            </div>
            <span className="text-xl font-bold text-gray-800">{result.probability}%</span>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-white rounded-md">
          <p className="text-sm text-gray-600">
            {isHighSalary 
              ? '🎉 The model predicts this employee likely earns more than $50,000 annually.'
              : '📊 The model predicts this employee likely earns $50,000 or less annually.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};