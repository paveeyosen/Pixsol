export default function AboutSection() {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "8+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">About PIX GPX</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, PIX GPX has emerged as a trusted partner for companies seeking comprehensive digital solutions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team of experienced developers, designers, and consultants work collaboratively to deliver solutions that not only meet current needs but also scale with future growth. We pride ourselves on understanding each client's unique challenges and crafting tailored approaches that drive measurable results.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional development team collaborating on software projects" 
              className="rounded-xl shadow-2xl" 
            />
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border border-slate-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                  <i className="fas fa-award text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">Award Winner</div>
                  <div className="text-slate-600">Best Software Solutions 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
