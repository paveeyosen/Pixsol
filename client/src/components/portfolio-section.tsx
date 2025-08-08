export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive online marketplace with advanced product management, secure payment processing, and real-time analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800"]
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management platform with appointment scheduling, medical records, and telemedicine capabilities.",
      image: "https://cse.lmu.edu/media/lmucse/departments/healthcaresystemsengineering/HEALTHCARE.jpg",
      tech: ["Vue.js", "Laravel", "PostgreSQL", "AWS"],
      techColors: ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800"]
    },
    {
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform mobile app for workout tracking, nutrition monitoring, and social fitness challenges with real-time synchronization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tech: ["React Native", "Express.js", "Firebase", "GraphQL"],
      techColors: ["bg-cyan-100 text-cyan-800", "bg-green-100 text-green-800", "bg-orange-100 text-orange-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "Manufacturing ERP System",
      description: "Comprehensive enterprise resource planning system for manufacturing with inventory management, production scheduling, and quality control.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tech: ["Angular", "Django", "PostgreSQL", "Redis"],
      techColors: ["bg-indigo-100 text-indigo-800", "bg-yellow-100 text-yellow-800", "bg-blue-100 text-blue-800", "bg-red-100 text-red-800"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Our Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our recent projects showcasing innovative solutions across various industries and technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {portfolioItems.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <img 
                src={project.image} 
                alt={`${project.title} interface`} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${project.techColors[techIndex]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                  <span>View Case Study</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
