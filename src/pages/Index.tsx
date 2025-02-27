
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar />
      
      <main className="flex-grow">
        <section className="cms-container py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-light text-primary font-medium rounded-full text-sm mb-4 animate-fade-in">
              Simple • Secure • Accessible
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-dark mb-6 animate-slide-up">
              Demographic Data Collection
            </h1>
            
            <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed animate-slide-up delay-100">
              Help us improve healthcare services by providing your demographic information. 
              Your data is protected and used to ensure equitable access to healthcare for all communities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-200">
              <Link to="/form" className="cms-button-primary">
                Start the Form
              </Link>
              <a 
                href="https://www.cms.gov/about-cms/agency-information/aboutwebsite/cmsnondiscriminationnotice" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cms-button-outline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </section>
        
        <section className="bg-white py-16">
          <div className="cms-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-dark mb-8 text-center">
                Why We Collect This Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cms-card text-center">
                  <div className="bg-primary-light p-4 inline-flex items-center justify-center rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Improve Healthcare Access</h3>
                  <p className="text-secondary">
                    Identify disparities in healthcare access across different demographic groups.
                  </p>
                </div>
                
                <div className="cms-card text-center">
                  <div className="bg-primary-light p-4 inline-flex items-center justify-center rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Ensure Privacy</h3>
                  <p className="text-secondary">
                    Your information is protected and only used to improve healthcare services.
                  </p>
                </div>
                
                <div className="cms-card text-center">
                  <div className="bg-primary-light p-4 inline-flex items-center justify-center rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Support All Communities</h3>
                  <p className="text-secondary">
                    Help create programs that are responsive to the needs of diverse communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-b from-white to-muted">
          <div className="cms-container">
            <div className="cms-card bg-primary text-white max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                    Your Information Makes a Difference
                  </h2>
                  <p className="mb-6">
                    By sharing your demographic information, you're helping us identify and address 
                    healthcare disparities. This allows us to create more equitable and effective 
                    healthcare programs for everyone.
                  </p>
                  <Link to="/form" className="inline-block bg-white text-primary font-medium px-6 py-3 rounded hover:bg-primary-light transition-colors">
                    Get Started
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-secondary-dark text-white py-12">
        <div className="cms-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-white px-2 py-1 rounded text-primary font-bold">CMS</span>
                  <span className="text-xl font-serif font-bold">Demographic Data Collection</span>
                </div>
                <p className="mb-4 text-secondary-light">
                  Improving healthcare through data-driven insights.
                </p>
                <p className="text-secondary-light text-sm">
                  &copy; {new Date().getFullYear()} Centers for Medicare & Medicaid Services
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.cms.gov/" className="text-secondary-light hover:text-white transition-colors">CMS Website</a>
                  </li>
                  <li>
                    <a href="https://www.medicare.gov/" className="text-secondary-light hover:text-white transition-colors">Medicare</a>
                  </li>
                  <li>
                    <a href="https://www.medicaid.gov/" className="text-secondary-light hover:text-white transition-colors">Medicaid</a>
                  </li>
                  <li>
                    <a href="https://www.healthcare.gov/" className="text-secondary-light hover:text-white transition-colors">Healthcare.gov</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-secondary-light hover:text-white transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-secondary-light hover:text-white transition-colors">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#" className="text-secondary-light hover:text-white transition-colors">Accessibility</a>
                  </li>
                  <li>
                    <a href="#" className="text-secondary-light hover:text-white transition-colors">FOIA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
