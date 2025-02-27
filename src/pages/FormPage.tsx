
import Navbar from '../components/Navbar';
import DemographicForm from '../components/DemographicForm';

const FormPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar />
      
      <main className="flex-grow">
        <div className="cms-container py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary-dark mb-4">
                Demographic Information Form
              </h1>
              <p className="text-secondary text-lg">
                Please complete all required fields marked with an asterisk (*). 
                Your information helps us improve healthcare services for all communities.
              </p>
            </div>
            
            <DemographicForm />
          </div>
        </div>
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

export default FormPage;
