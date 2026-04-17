import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section className="py-24 px-8 bg-background transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center bg-surface-card p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 text-primary">
            <span className="material-symbols-outlined text-5xl">send</span>
          </div>
          <h2 className="font-headline text-4xl font-bold mb-4 text-text-primary">Message Sent!</h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Thank you for reaching out to Octoways. Our team will review your message and get back to you within 24 business hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-8 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <div className="bg-surface-card p-10 md:p-12 rounded-[2.5rem] shadow-card">
            <h2 className="font-headline text-3xl font-bold mb-8 text-text-primary">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="5ecf3ff2-07dd-4167-8933-68ce0f2fa228" />
              <input type="hidden" name="from_name" value="Octoways Contact Form" />
              <input type="hidden" name="subject" value="New Website Inquiry from Octoways" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4">Full Name *</label>
                  <input
                    required
                    id="fullName"
                    name="name"
                    type="text"
                    className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner hover:bg-surface-raised font-body"
                    placeholder="Mandira Maharjan"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4">Phone Number *</label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner hover:bg-surface-raised font-body"
                    placeholder="+977-9851177597"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4">Email Address *</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner hover:bg-surface-raised font-body"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4">Subject</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject_tag"
                    className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none shadow-inner hover:bg-surface-raised font-body"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Request a Quote">Request a Quote</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Career">Career</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4">Message / Project Description *</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-inner hover:bg-surface-raised font-body"
                  placeholder="Tell us about your project goals or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-lg hover:bg-secondary transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
              
              <p className="text-center text-text-muted text-sm mt-4 font-body">
                We'll respond within 24 hours. For urgent matters, call us at <a href="tel:+9779851177597" className="text-primary hover:underline font-bold">+977-9851177597</a>.
              </p>
            </form>
          </div>

          {/* Map Column */}
          <div className="h-full min-h-[500px] lg:min-h-full">
            <div className="bg-surface-card rounded-[2.5rem] overflow-hidden h-full relative shadow-card">
              <iframe
                title="Octoways Location Map - Bansbari, Kathmandu"
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Octoways%20Pvt%20Ltd%20Bansbari%20Kathmandu+(Octoways)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="filter brightness-75 contrast-125 grayscale-[0.3] theme-aware-map"
              ></iframe>
              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <div className="bg-surface-raised/90 p-6 rounded-2xl backdrop-blur-md shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary text-sm">Octoways Pvt. Ltd.</h4>
                      <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Bansbari, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/Octoways+Pvt+Ltd+Bansbari+Kathmandu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-on-primary py-3 rounded-xl text-xs font-bold text-center pointer-events-auto hover:bg-secondary transition-all"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
