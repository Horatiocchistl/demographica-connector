
import React, { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required = false,
  error,
  hint,
  children
}) => {
  return (
    <div className="mb-6 animate-fade-in">
      <label htmlFor={id} className="cms-field-label">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      
      {hint && (
        <div className="mt-1 text-sm text-secondary mb-2">{hint}</div>
      )}
      
      {children}
      
      {error && (
        <div className="mt-1 text-destructive text-sm animate-slide-up">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormField;
