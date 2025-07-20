import React from 'react';
import { FeatureImportance } from '../types';
import { BarChart3 } from 'lucide-react';

interface FeatureImportanceProps {
  features: FeatureImportance[];
}

export const FeatureImportanceChart: React.FC<FeatureImportanceProps> = ({ features }) => {
  const maxImportance = Math.max(...features.map(f => f.importance));
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <BarChart3 className="h-6 w-6 text-purple-600 mr-2" />
        <h3 className="text-xl font-bold text-gray-800">Feature Importance</h3>
      </div>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="w-32 text-sm font-medium text-gray-700 truncate">
              {feature.feature}
            </div>
            <div className="flex-1 mx-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(feature.importance / maxImportance) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="w-12 text-sm font-medium text-gray-600 text-right">
              {(feature.importance * 100).toFixed(0)}%
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <p className="text-xs text-gray-600">
          Feature importance indicates how much each factor contributes to the salary prediction model.
        </p>
      </div>
    </div>
  );
};