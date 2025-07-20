import React, { useState } from 'react';
import { EmployeeData } from '../types';
import {
  workclassOptions,
  maritalStatusOptions,
  occupationOptions,
  relationshipOptions,
  raceOptions,
  nativeCountryOptions
} from '../data/formOptions';

interface PredictionFormProps {
  onSubmit: (data: EmployeeData) => void;
  isLoading: boolean;
}

export const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<EmployeeData>({
    age: 30,
    workclass: 'Private',
    educationNum: 10,
    maritalStatus: 'Never-married',
    occupation: 'Other-service',
    relationship: 'Not-in-family',
    race: 'White',
    gender: 'Male',
    hoursPerWeek: 40,
    nativeCountry: 'United-States'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof EmployeeData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <input
            type="number"
            min="17"
            max="90"
            value={formData.age}
            onChange={(e) => updateField('age', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Workclass */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workclass
          </label>
          <select
            value={formData.workclass}
            onChange={(e) => updateField('workclass', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {workclassOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Education Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Education Level (1-16)
          </label>
          <input
            type="range"
            min="1"
            max="16"
            value={formData.educationNum}
            onChange={(e) => updateField('educationNum', parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-sm text-gray-600 mt-1">
            {formData.educationNum} - {
              formData.educationNum <= 8 ? 'Elementary' :
              formData.educationNum <= 12 ? 'High School' :
              formData.educationNum <= 14 ? 'Some College' :
              'Graduate'
            }
          </div>
        </div>

        {/* Marital Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marital Status
          </label>
          <select
            value={formData.maritalStatus}
            onChange={(e) => updateField('maritalStatus', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {maritalStatusOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Occupation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Occupation
          </label>
          <select
            value={formData.occupation}
            onChange={(e) => updateField('occupation', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {occupationOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Relationship */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Relationship
          </label>
          <select
            value={formData.relationship}
            onChange={(e) => updateField('relationship', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {relationshipOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Race */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Race
          </label>
          <select
            value={formData.race}
            onChange={(e) => updateField('race', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {raceOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={(e) => updateField('gender', e.target.value)}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={(e) => updateField('gender', e.target.value)}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        {/* Hours per Week */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hours per Week
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={formData.hoursPerWeek}
            onChange={(e) => updateField('hoursPerWeek', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Native Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Native Country
          </label>
          <select
            value={formData.nativeCountry}
            onChange={(e) => updateField('nativeCountry', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {nativeCountryOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Predicting...
            </div>
          ) : (
            '🎯 Predict Salary Bracket'
          )}
        </button>
      </div>
    </form>
  );
};