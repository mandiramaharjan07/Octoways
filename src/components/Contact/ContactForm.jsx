import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
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
      <section className="py-24 px-8 bg-background border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center bg-surface-container-low p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(61,146,204,0.1)] relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 text-primary">
            <span className="material-symbols-outlined text-5xl">send</span>
          </div>
          <h2 className="font-headline text-4xl font-bold mb-4 text-white">Message Sent!</h2>
          <p className="text-on-surface-variant text-lg mb-8">
            Thank you for reaching out to Octoways. Our team will review your message and get back to you within 24 business hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-primary text-on-primary-fixed px-10 py-4 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(61,146,204,0.4)] transition-all"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-8 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="glass-panel ghost-border p-10 md:p-12 rounded-[2.5rem]">
            <h2 className="font-headline text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="5ecf3ff2-07dd-4167-8933-68ce0f2fa228" />
              <input type="hidden" name="from_name" value="Octoways Contact Form" />
              <input type="hidden" name="subject" value="New Website Inquiry from Octoways" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-gray-400 ml-4">Full Name *</label>
                  <input
                    required
                    id="fullName"
                    name="name"
                    type="text"
                    className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner hover:bg-surface-variant/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-400 ml-4">Phone Number * (WhatsApp preferred)</label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner hover:bg-surface-variant/50"
                    placeholder="+977-..."
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-400 ml-4">Email Address *</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner hover:bg-surface-variant/50"
                  placeholder="yourname@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-gray-400 ml-4">Subject</label>
                <select
                  id="subject"
                  name="subject_tag"
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none shadow-inner hover:bg-surface-variant/50"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Request a Quote">Request a Quote</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career">Career</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-400 ml-4">Message / Project Description *</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none shadow-inner hover:bg-surface-variant/50"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary-fixed py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(61,146,204,0.4)] transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                We'll respond within 24 hours. For urgent matters, call us directly at <a href="tel:+9779851177597" className="text-primary hover:underline">+977-9851177597</a>.
              </p>
            </form>
          </div>

          {/* Map Column */}
          <div className="h-full min-h-[500px] lg:min-h-full">
            <div className="glass-panel ghost-border rounded-[2.5rem] overflow-hidden h-full relative">
              <iframe
                title="Octoways Location Map - Bansbari, Kathmandu"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Octoways%20Pvt%20Ltd%20Bansbari%20Kathmandu+(Octoways)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="filter brightness-75 contrast-125 grayscale-[0.3]"
              ></iframe>
              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <div className="glass-panel p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Octoways Pvt. Ltd.</h4>
                      <p className="text-xs text-gray-400">Bansbari, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <button className="w-full bg-white/10 text-white py-3 rounded-xl text-xs font-bold pointer-events-auto hover:bg-white/20 transition-all">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
