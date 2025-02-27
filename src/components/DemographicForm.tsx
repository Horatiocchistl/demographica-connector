
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from './FormField';
import FormStepIndicator from './FormStepIndicator';
import { toast } from 'sonner';

// Define form steps
const FORM_STEPS = ['Personal Information', 'Demographics', 'Contact', 'Review'];

// Define initial form data
interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  genderOther: string;
  race: string[];
  raceOther: string;
  ethnicity: string;
  language: string;
  languageOther: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  genderOther: '',
  race: [],
  raceOther: '',
  ethnicity: '',
  language: '',
  languageOther: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
};

// Define form validation errors
interface FormErrors {
  [key: string]: string;
}

const DemographicForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          [name]: [...prev[name as keyof FormData] as string[], value],
        };
      } else {
        return {
          ...prev,
          [name]: (prev[name as keyof FormData] as string[]).filter(item => item !== value),
        };
      }
    });
  };

  // Validate the current step
  const validateStep = () => {
    const newErrors: FormErrors = {};
    
    // Step 1: Personal Information validation
    if (currentStep === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    // Step 2: Demographics validation
    else if (currentStep === 1) {
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (formData.gender === 'other' && !formData.genderOther.trim()) {
        newErrors.genderOther = 'Please specify your gender';
      }
      if (formData.race.length === 0) newErrors.race = 'Race is required';
      if (formData.race.includes('other') && !formData.raceOther.trim()) {
        newErrors.raceOther = 'Please specify your race';
      }
      if (!formData.ethnicity) newErrors.ethnicity = 'Ethnicity is required';
      if (!formData.language) newErrors.language = 'Preferred language is required';
      if (formData.language === 'other' && !formData.languageOther.trim()) {
        newErrors.languageOther = 'Please specify your language';
      }
    }
    
    // Step 3: Contact Information validation
    else if (currentStep === 2) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid';
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
      
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'ZIP code is required';
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
        newErrors.zipCode = 'ZIP code format is invalid';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next button click
  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < FORM_STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo(0, 0);
      }
    } else {
      toast.error('Please fix the errors before continuing');
    }
  };

  // Handle back button click
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep()) {
      // In a real application, you would send the data to your backend here
      console.log('Form submitted:', formData);
      
      // Show success toast
      toast.success('Form submitted successfully!');
      
      // Navigate to confirmation page
      navigate('/confirmation', { state: { formData } });
    }
  };

  return (
    <div className="animate-fade-in">
      <FormStepIndicator steps={FORM_STEPS} currentStep={currentStep} />
      
      <form onSubmit={handleSubmit} className="bg-white rounded border border-input p-6 shadow-cms">
        {/* Step 1: Personal Information */}
        {currentStep === 0 && (
          <div className="animate-slide-in-right">
            <h2 className="text-2xl font-serif font-bold text-secondary-dark mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField id="firstName" label="First Name" required error={errors.firstName}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="cms-text-input"
                  aria-required="true"
                />
              </FormField>
              
              <FormField id="lastName" label="Last Name" required error={errors.lastName}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="cms-text-input"
                  aria-required="true"
                />
              </FormField>
            </div>
            
            <FormField 
              id="dateOfBirth" 
              label="Date of Birth" 
              hint="Please enter in MM/DD/YYYY format"
              required 
              error={errors.dateOfBirth}
            >
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="cms-text-input"
                aria-required="true"
              />
            </FormField>
          </div>
        )}
        
        {/* Step 2: Demographics */}
        {currentStep === 1 && (
          <div className="animate-slide-in-right">
            <h2 className="text-2xl font-serif font-bold text-secondary-dark mb-6">Demographics</h2>
            
            <FormField id="gender" label="Gender" required error={errors.gender}>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="cms-select"
                aria-required="true"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="transgender">Transgender</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </FormField>
            
            {formData.gender === 'other' && (
              <FormField id="genderOther" label="Please specify gender" required error={errors.genderOther}>
                <input
                  type="text"
                  id="genderOther"
                  name="genderOther"
                  value={formData.genderOther}
                  onChange={handleChange}
                  className="cms-text-input"
                  aria-required="true"
                />
              </FormField>
            )}
            
            <FormField id="race" label="Race (select all that apply)" required error={errors.race}>
              <div className="space-y-2">
                {[
                  { value: 'american-indian', label: 'American Indian or Alaska Native' },
                  { value: 'asian', label: 'Asian' },
                  { value: 'black', label: 'Black or African American' },
                  { value: 'pacific-islander', label: 'Native Hawaiian or Other Pacific Islander' },
                  { value: 'white', label: 'White' },
                  { value: 'other', label: 'Other' },
                ].map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`race-${option.value}`}
                      name="race"
                      value={option.value}
                      checked={formData.race.includes(option.value)}
                      onChange={handleCheckboxChange}
                      className="cms-checkbox"
                    />
                    <label htmlFor={`race-${option.value}`} className="ml-2">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </FormField>
            
            {formData.race.includes('other') && (
              <FormField id="raceOther" label="Please specify race" required error={errors.raceOther}>
                <input
                  type="text"
                  id="raceOther"
                  name="raceOther"
                  value={formData.raceOther}
                  onChange={handleChange}
                  className="cms-text-input"
                  aria-required="true"
                />
              </FormField>
            )}
            
            <FormField id="ethnicity" label="Ethnicity" required error={errors.ethnicity}>
              <select
                id="ethnicity"
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleChange}
                className="cms-select"
                aria-required="true"
              >
                <option value="">Select ethnicity</option>
                <option value="hispanic">Hispanic or Latino</option>
                <option value="not-hispanic">Not Hispanic or Latino</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </FormField>
            
            <FormField id="language" label="Preferred Language" required error={errors.language}>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="cms-select"
                aria-required="true"
              >
                <option value="">Select language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="chinese">Chinese</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="korean">Korean</option>
                <option value="french">French</option>
                <option value="arabic">Arabic</option>
                <option value="other">Other</option>
              </select>
            </FormField>
            
            {formData.language === 'other' && (
              <FormField id="languageOther" label="Please specify language" required error={errors.languageOther}>
                <input
                  type="text"
                  id="languageOther"
                  name="languageOther"
                  value={formData.languageOther}
                  onChange={handleChange}
                  className="cms-text-input"
                  aria-required="true"
                />
              </FormField>
            )}
          </div>
        )}
        
        {/* Step 3: Contact Information */}
        {currentStep === 2 && (
          <div className="animate-slide-in-right">
            <h2 className="text-2xl font-serif font-bold text-secondary-dark mb-6">Contact Information</h2>
            
            <FormField id="email" label="Email Address" required error={errors.email}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="cms-text-input"
                aria-required="true"
              />
            </FormField>
            
            <FormField id="phone" label="Phone Number" required error={errors.phone}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="cms-text-input"
                aria-required="true"
              />
            </FormField>
            
            <FormField id="address" label="Street Address" required error={errors.address}>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="cms-text-input"
                aria-required="true"
              />
            </FormField>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField id="city" label="City" required error={errors.city}>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="cms-text-input"
                  aria-required="true"
                />
              </FormField>
              
              <FormField id="state" label="State" required error={errors.state}>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="cms-select"
                  aria-required="true"
                >
                  <option value="">Select state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  {/* Add more states */}
                </select>
              </FormField>
              
              <FormField id="zipCode" label="ZIP Code" required error={errors.zipCode}>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="cms-text-input"
                  aria-required="true"
                />
              </FormField>
            </div>
          </div>
        )}
        
        {/* Step 4: Review */}
        {currentStep === 3 && (
          <div className="animate-slide-in-right">
            <h2 className="text-2xl font-serif font-bold text-secondary-dark mb-6">Review Your Information</h2>
            
            <div className="cms-alert-info mb-6">
              <p className="font-semibold">Please review your information carefully before submitting.</p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-muted p-4 rounded">
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-secondary">First Name</dt>
                    <dd className="font-medium">{formData.firstName}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-secondary">Last Name</dt>
                    <dd className="font-medium">{formData.lastName}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-secondary">Date of Birth</dt>
                    <dd className="font-medium">{formData.dateOfBirth}</dd>
                  </div>
                </dl>
              </div>
              
              <div className="bg-muted p-4 rounded">
                <h3 className="text-lg font-semibold mb-4">Demographics</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-secondary">Gender</dt>
                    <dd className="font-medium">
                      {formData.gender === 'other' 
                        ? formData.genderOther 
                        : formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-secondary">Race</dt>
                    <dd className="font-medium">
                      {formData.race.map(race => {
                        if (race === 'other') return formData.raceOther;
                        return race
                          .split('-')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ');
                      }).join(', ')}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-secondary">Ethnicity</dt>
                    <dd className="font-medium">
                      {formData.ethnicity === 'hispanic' 
                        ? 'Hispanic or Latino' 
                        : formData.ethnicity === 'not-hispanic'
                          ? 'Not Hispanic or Latino'
                          : 'Prefer not to say'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-secondary">Preferred Language</dt>
                    <dd className="font-medium">
                      {formData.language === 'other' 
                        ? formData.languageOther 
                        : formData.language.charAt(0).toUpperCase() + formData.language.slice(1)}
                    </dd>
                  </div>
                </dl>
              </div>
              
              <div className="bg-muted p-4 rounded">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-secondary">Email</dt>
                    <dd className="font-medium">{formData.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-secondary">Phone Number</dt>
                    <dd className="font-medium">{formData.phone}</dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="text-sm text-secondary">Address</dt>
                    <dd className="font-medium">
                      {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="cms-button-outline"
            >
              Back
            </button>
          )}
          
          {currentStep < FORM_STEPS.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="cms-button-primary ml-auto"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="cms-button-primary ml-auto bg-success hover:bg-success-dark focus:ring-success"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DemographicForm;
