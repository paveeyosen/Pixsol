export default function IndustriesSection() {
  const industries = [
    {
      icon: "fas fa-industry",
      name: "Manufacturing",
      description: "Streamline operations with custom ERP systems, inventory management, and process automation solutions.",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: "fas fa-heartbeat",
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems, telemedicine platforms, and healthcare analytics solutions.",
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: "fas fa-shopping-cart",
      name: "Retail",
      description: "E-commerce platforms, POS systems, inventory management, and customer engagement solutions.",
      gradient: "from-violet-600 to-violet-700"
    },
    {
      icon: "fas fa-graduation-cap",
      name: "Education",
      description: "Learning management systems, student portals, online course platforms, and educational mobile apps.",
      gradient: "from-orange-600 to-orange-700"
    },
    {
      icon: "fas fa-home",
      name: "Real Estate",
      description: "Property management systems, listing platforms, virtual tour solutions, and CRM for real estate.",
      gradient: "from-cyan-600 to-cyan-700"
    },
    {
      icon: "fas fa-user",
      name: "Freelance",
      description: "Portfolio websites, client management tools, invoicing systems, and personal branding solutions.",
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Industries We Serve</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our expertise spans across diverse industries, delivering tailored solutions that meet specific sector requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`${industry.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
              <p className="text-slate-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
