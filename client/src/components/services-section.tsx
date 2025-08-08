export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "E-commerce platforms, business websites, and modern web applications built with the latest technologies.",
      features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Development",
      description: "Native iOS and Android apps, plus cross-platform solutions for maximum reach and performance.",
      features: ["iOS Development", "Android Development", "Cross-Platform Solutions"],
      gradient: "from-violet-600 to-violet-700"
    },
    {
      icon: "fas fa-cogs",
      title: "Custom Software Solutions",
      description: "Tailored ERP, CRM, and automation systems designed specifically for your business needs.",
      features: ["Enterprise Resource Planning", "Customer Relationship Management", "Process Automation"],
      gradient: "from-cyan-600 to-cyan-700"
    },
    {
      icon: "fas fa-paint-brush",
      title: "Graphic Design Services",
      description: "Professional logos, branding, and UI/UX design that creates lasting impressions.",
      features: ["Logo & Branding", "UI/UX Design", "Marketing Materials"],
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: "fas fa-server",
      title: "Domain & Hosting",
      description: "Domain registration, reliable cloud hosting, and SSL certificates for secure online presence.",
      features: ["Domain Registration", "Cloud Hosting", "SSL Certificates"],
      gradient: "from-orange-600 to-orange-700"
    },
    {
      icon: "fas fa-headset",
      title: "Consulting & Support",
      description: "Expert technology consulting and 24/7 support to keep your systems running smoothly.",
      features: ["Technology Consulting", "24/7 Support", "System Maintenance"],
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward with cutting-edge expertise and professional excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="text-sm text-slate-500 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
