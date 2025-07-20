import React, { useState } from 'react';
import { PredictionForm } from './components/PredictionForm';
import { PredictionResults } from './components/PredictionResult';
import { FeatureImportanceChart } from './components/FeatureImportance';
import { Sidebar } from './components/Sidebar';
import { predictSalary, getFeatureImportance } from './utils/mockModel';
import { EmployeeData, PredictionResult } from './types';
import { DollarSign, Brain, User } from 'lucide-react';

function App() {
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrediction = async (data: EmployeeData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = predictSalary(data);
    setPrediction(result);
    setIsLoading(false);
  };

  const featureImportance = getFeatureImportance();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <DollarSign className="h-10 w-10 text-green-600 mr-3" />
            <Brain className="h-10 w-10 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Employee Salary Prediction
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Predict whether an employee earns above or below $50K using advanced machine learning algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Prediction Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="h-6 w-6 text-blue-600 mr-2" />
                Employee Information
              </h2>
              <PredictionForm onSubmit={handlePrediction} isLoading={isLoading} />
            </div>

            {/* Results */}
            {prediction && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PredictionResults result={prediction} />
                <FeatureImportanceChart features={featureImportance} />
              </div>
            )}

            {/* Feature Importance (full width when no prediction) */}
            {!prediction && (
              <FeatureImportanceChart features={featureImportance} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;