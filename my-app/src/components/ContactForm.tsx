import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-dark rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-secondary mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-light/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-light/5 border-2 border-secondary/20 rounded-xl 
                     text-light placeholder-light/50 focus:border-secondary 
                     focus:outline-none transition-colors duration-300"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-light/80">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-light/5 border-2 border-secondary/20 rounded-xl 
                     text-light placeholder-light/50 focus:border-secondary 
                     focus:outline-none transition-colors duration-300"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-light/80">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-light/5 border-2 border-secondary/20 rounded-xl 
                     text-light placeholder-light/50 focus:border-secondary 
                     focus:outline-none transition-colors duration-300 min-h-[120px]"
            placeholder="Enter your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 border-2 border-secondary text-secondary rounded-xl 
                   bg-light/10 hover:bg-secondary hover:text-primary shadow-lg 
                   transition-all duration-500 mt-6"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}