
import React from 'react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const FormStepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="mb-10">
      <div className="step-indicator py-8">
        <div className="flex justify-between w-full">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const status = isCompleted ? 'completed' : isActive ? 'active' : 'incomplete';
            
            return (
              <div key={index} className="flex flex-col items-center relative">
                <div className={`step-bubble ${status}`}>
                  {isCompleted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className={`mt-2 text-sm font-medium whitespace-nowrap ${isActive ? 'text-primary' : 'text-secondary'}`}>
                  {step}
                </div>
                
                {/* Add connecting line, except for the last element */}
                {index < steps.length - 1 && (
                  <div 
                    className={`absolute h-1 top-4 left-8 right-0 -z-10 ${
                      isCompleted ? 'bg-success' : 'bg-secondary-light'
                    }`} 
                    style={{ width: 'calc(100% - 2rem)' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FormStepIndicator;
