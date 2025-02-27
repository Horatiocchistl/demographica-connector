
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ConfirmationPage = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return (
      <div className="min-h-screen flex flex-col bg-muted">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="cms-container py-12">
            <div className="max-w-md mx-auto cms-card text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-warning mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h1 className="text-2xl font-serif font-bold text-secondary-dark mb-4">
                No Form Data Found
              </h1>
              <p className="text-secondary mb-6">
                It looks like you navigated here directly without submitting the form.
              </p>
              <Link to="/form" className="cms-button-primary">
                Go to Form
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar />
      
      <main className="flex-grow">
        <div className="cms-container py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-slide-up">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-success rounded-full animate-pulse-gentle opacity-25"></div>
                <div className="bg-success text-white p-4 rounded-full relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary-dark mb-4">
                Thank You for Your Submission!
              </h1>
              
              <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
                Your demographic information has been successfully submitted. This information will help us improve healthcare services and ensure they meet the needs of all communities.
              </p>
            </div>
            
            <div className="cms-card mb-12 animate-fade-in delay-100">
              <h2 className="text-xl font-serif font-bold text-secondary-dark mb-6">
                Submission Summary
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-medium mb-3">Personal Information</h3>
                  <p className="mb-1">
                    <span className="text-secondary">Name:</span> {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <span className="text-secondary">Date of Birth:</span> {formData.dateOfBirth}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                  <p className="mb-1">
                    <span className="text-secondary">Email:</span> {formData.email}
                  </p>
                  <p>
                    <span className="text-secondary">Phone:</span> {formData.phone}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up delay-200">
              <p className="text-secondary mb-6">
                A confirmation email has been sent to <span className="font-medium">{formData.email}</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/" className="cms-button-primary">
                  Return to Home
                </Link>
                <button 
                  onClick={() => window.print()} 
                  className="cms-button-outline"
                >
                  Print Confirmation
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-white py-12">
          <div className="cms-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-bold text-secondary-dark mb-8">
                What Happens Next?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cms-card">
                  <div className="bg-primary-light h-12 w-12 flex items-center justify-center rounded-full text-primary font-bold text-xl mb-4 mx-auto">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                  <p className="text-secondary">
                    Your information will be securely processed and stored in our system.
                  </p>
                </div>
                
                <div className="cms-card">
                  <div className="bg-primary-light h-12 w-12 flex items-center justify-center rounded-full text-primary font-bold text-xl mb-4 mx-auto">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Analysis</h3>
                  <p className="text-secondary">
                    Data will be analyzed to identify patterns and needs across different demographics.
                  </p>
                </div>
                
                <div className="cms-card">
                  <div className="bg-primary-light h-12 w-12 flex items-center justify-center rounded-full text-primary font-bold text-xl mb-4 mx-auto">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Improvements</h3>
                  <p className="text-secondary">
                    Insights will be used to improve healthcare programs and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-secondary-dark text-white py-6">
        <div className="cms-container text-center">
          <p className="text-secondary-light text-sm">
            &copy; {new Date().getFullYear()} Centers for Medicare & Medicaid Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConfirmationPage;
