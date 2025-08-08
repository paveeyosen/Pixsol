export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Software Development</span> Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We deliver comprehensive technology services including web development, mobile apps, custom software, graphic design, and consulting across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-center"
              >
                Get Started Today
              </button>
              <button 
                onClick={scrollToPortfolio}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-all text-center"
              >
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern software development workspace with multiple monitors" 
              className="rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
