import { EmployeeData, PredictionResult, FeatureImportance } from '../types';

// Mock prediction logic based on common salary prediction patterns
export const predictSalary = (data: EmployeeData): PredictionResult => {
  let score = 0;
  
  // Age factor
  if (data.age >= 30 && data.age <= 50) score += 0.3;
  else if (data.age > 50) score += 0.2;
  
  // Education factor
  if (data.educationNum >= 13) score += 0.4;
  else if (data.educationNum >= 10) score += 0.2;
  
  // Hours per week factor
  if (data.hoursPerWeek >= 40) score += 0.3;
  else if (data.hoursPerWeek >= 35) score += 0.1;
  
  // Workclass factor
  if (['Private', 'Self-emp-inc', 'Federal-gov'].includes(data.workclass)) {
    score += 0.2;
  }
  
  // Occupation factor
  if (['Exec-managerial', 'Prof-specialty', 'Tech-support'].includes(data.occupation)) {
    score += 0.3;
  }
  
  // Marital status factor
  if (data.maritalStatus === 'Married-civ-spouse') {
    score += 0.2;
  }
  
  // Relationship factor
  if (['Husband', 'Wife'].includes(data.relationship)) {
    score += 0.1;
  }
  
  // Add some randomness for realism
  score += (Math.random() - 0.5) * 0.2;
  
  const probability = Math.min(Math.max(score, 0), 1);
  const prediction = probability > 0.5 ? '>50K' : '<=50K';
  const confidence = Math.abs(probability - 0.5) * 2;
  
  return {
    prediction,
    confidence: Math.round(confidence * 100),
    probability: Math.round(probability * 100)
  };
};

export const getFeatureImportance = (): FeatureImportance[] => [
  { feature: 'Education Level', importance: 0.25 },
  { feature: 'Age', importance: 0.18 },
  { feature: 'Hours per Week', importance: 0.15 },
  { feature: 'Occupation', importance: 0.12 },
  { feature: 'Workclass', importance: 0.10 },
  { feature: 'Marital Status', importance: 0.08 },
  { feature: 'Relationship', importance: 0.06 },
  { feature: 'Race', importance: 0.03 },
  { feature: 'Gender', importance: 0.02 },
  { feature: 'Native Country', importance: 0.01 }
];