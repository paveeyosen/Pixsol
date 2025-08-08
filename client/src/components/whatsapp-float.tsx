export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/19003179421?text=Hello! I\'m interested in your software development services.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </button>
    </div>
  );
}