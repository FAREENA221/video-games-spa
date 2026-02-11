import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [position, setPosition] = useState({ x: 20, y: 8 });

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);

    if (
      updated.name.trim() &&
      updated.email.trim() &&
      updated.message.trim()
    ) {
      setButtonText("Send");
      setPosition({ x: 20, y: 8 });
    }
  };

  const moveButton = () => {
    if (!isFormValid) {
      setButtonText("Pehle Form fill kar 😜");
      const maxX = 80;
      const maxY = 20;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      setPosition({ x: randomX, y: randomY });
    }
  };

  const handleSubmit = (e) => {
    if (!isFormValid) {
      e.preventDefault();
      moveButton();
      return;
    }

    e.preventDefault();
    alert("Form Submitted Successfully 🎉");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#061a2b] to-[#020c18] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl text-white text-center">
        <h2 className="text-2xl tracking-widest mb-4">GET IN TOUCH</h2>
        <p className="text-sm text-gray-400 mb-10">
          Trysail transom furl Sea Legs scallywag Jack Ketch chandler mizzenmast reef sails skysail.
          Shiver me timbers boot buckle belaying pin Sea Legs boom gunwalls booty jury mast fore.
        </p>
        <div className="bg-[#0d2236] p-8 rounded-lg shadow-xl text-left">
          <h4 className="text-gray-300 mb-6">Contact Form</h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                onChange={handleChange}
                className="flex-1 p-3 bg-[#132f4c] border border-[#1f3c5a] rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                onChange={handleChange}
                className="flex-1 p-3 bg-[#132f4c] border border-[#1f3c5a] rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message *"
              rows="4"
              onChange={handleChange}
              className="w-full p-3 bg-[#132f4c] border border-[#1f3c5a] rounded text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative h-16 w-full ml-auto overflow-hidden">
              <button
                type="submit"
                onMouseEnter={moveButton}
                onClick={moveButton}
                style={{
                  position: "absolute",
                  top: `${position.y}px`,
                  left: `${position.x}px`,
                  transition: "all 0.2s ease",
                }}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white whitespace-nowrap"
              >
                {isFormValid ? "Send" : buttonText}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;