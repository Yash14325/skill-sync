export interface EmployeeData {
  age: number;
  workclass: string;
  educationNum: number;
  maritalStatus: string;
  occupation: string;
  relationship: string;
  race: string;
  gender: string;
  hoursPerWeek: number;
  nativeCountry: string;
}

export interface PredictionResult {
  prediction: '>50K' | '<=50K';
  confidence: number;
  probability: number;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
}