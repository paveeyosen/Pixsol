import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "custom-software", label: "Custom Software Solutions" },
    { value: "graphic-design", label: "Graphic Design Services" },
    { value: "domain-hosting", label: "Domain & Hosting" },
    { value: "consulting", label: "Consulting & Support" }
  ];

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      details: "joesph@pix-sol.com",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: "fas fa-phone",
      title: "Call Us",
      details: "+91 90031 79421",
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: "fas fa-clock",
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      gradient: "from-violet-600 to-violet-700"
    },
    {
  icon: "fab fa-whatsapp",
  title: "WhatsApp",
  details: "+1 (900) 317-9421",
  gradient: "from-green-600 to-green-700",
  isWhatsApp: true
   },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss how we can help you achieve your technology goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-lg text-slate-600 mb-8">
                Whether you need a new website, mobile app, or custom software solution, our team is ready to bring your vision to life with professional expertise and cutting-edge technology.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center`}>
                    <i className={`${info.icon} text-white`}></i>
                  </div>
                  <div>
                    <div className="font-semibold">{info.title}</div>
                    {info.isWhatsApp ? (
  <a 
    href={`https://wa.me/19003179421`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 hover:text-green-600 transition-colors"
  >
    {info.details}
  </a>
) : (
  <div className="text-slate-600">{info.details}</div>
)}
                    <div className="text-slate-600">{info.details}</div>
                  </div>
                </div>
              ))}
            </div>


          </div>

          
          
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                     required 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Interested In
                </label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" 
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center space-x-2">
                  {contactMutation.isPending ? (
                    <>
                      <span>Sending...</span>
                      <i className="fas fa-spinner fa-spin"></i>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
