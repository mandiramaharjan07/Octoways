import React, { useState } from 'react';

const services = [
  'AI Integration',
  'Custom Application Development',
  'Website Development',
  'Mobile App Development',
  'Big Data & Analytics',
  'Design & Branding',
  'Cloud Solutions',
  'QA Services',
  'Product Demo (KTM AI / POV / Entry Keeper / VAT Bills)',
  'General Consultation'
];

const timeSlots = [
  'Morning 9am–12pm',
  'Afternoon 12pm–3pm',
  'Evening 3pm–6pm'
];

export default function AppointmentForm() {
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
      <div className="max-w-3xl mx-auto py-24 px-8 text-center bg-surface-container-low rounded-[3rem] border border-primary/20 shadow-[0_0_50px_rgba(61,146,204,0.1)] my-12">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 text-primary">
          <span className="material-symbols-outlined text-5xl">task_alt</span>
        </div>
        <h2 className="font-headline text-4xl font-bold mb-4">Request Received!</h2>
        <p className="text-on-surface-variant text-lg mb-8">
          Thank you for choosing Octoways. We'll WhatsApp or call you within 2 business hours to confirm your appointment slot.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold"
          >
            Submit Another Request
          </button>
          <a href="/" className="bg-primary text-on-primary-fixed px-8 py-3 rounded-xl font-bold transition-all">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel ghost-border p-10 md:p-16 rounded-[3.5rem] relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-8xl">calendar_month</span>
          </div>
          
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10">Confirm Your High-Fidelity Session</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="access_key" value="5ecf3ff2-07dd-4167-8933-68ce0f2fa228" />
            <input type="hidden" name="from_name" value="Octoways Appointment Request" />
            <input type="hidden" name="subject" value="New Appointment Booking from Octoways Website" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="fullName" className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">person</span> Full Name *
                </label>
                <input
                  required
                  id="fullName"
                  name="name"
                  type="text"
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner hover:bg-surface-variant/50"
                  placeholder="e.g. Rajesh Sharma"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="phone" className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">chat</span> Phone / WhatsApp Number *
                </label>
                <input
                  required
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner hover:bg-surface-variant/50"
                  placeholder="+977-98..."
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">mail</span> Email Address *
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner hover:bg-surface-variant/50"
                placeholder="yourname@domain.com"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="service" className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">category</span> Service Interested In *
              </label>
              <select
                required
                id="service"
                name="service"
                className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none shadow-inner hover:bg-surface-variant/50"
              >
                <option value="">Select a service</option>
                {services.map((service, i) => (
                  <option key={i} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="prefDate" className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">event</span> Preferred Date *
                </label>
                <input
                  required
                  id="prefDate"
                  name="preferred_date"
                  type="date"
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all [color-scheme:dark] shadow-inner hover:bg-surface-variant/50"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="timeSlot" className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">timer</span> Preferred Time Slot *
                </label>
                <select
                  required
                  id="timeSlot"
                  name="preferred_time"
                  className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none shadow-inner hover:bg-surface-variant/50"
                >
                  <option value="">Select a slot</option>
                  {timeSlots.map((slot, i) => (
                    <option key={i} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">groups</span> Meeting Type *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-4 bg-surface-container-low p-4 rounded-2xl cursor-pointer hover:bg-surface-variant/50 transition-all shadow-inner">
                  <input type="radio" name="meetingType" required value="in-person" className="w-5 h-5 accent-primary" />
                  <span className="font-bold text-white">In-Person at Bansbari, Kathmandu</span>
                </label>
                <label className="flex items-center gap-4 bg-surface-container-low p-4 rounded-2xl cursor-pointer hover:bg-surface-variant/50 transition-all shadow-inner">
                  <input type="radio" name="meetingType" required value="online" className="w-5 h-5 accent-primary" />
                  <span className="font-bold text-white">Online (Google Meet / Zoom)</span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="projectDesc" className="text-sm font-bold text-gray-400 ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">description</span> Tell us about your project (optional)
              </label>
              <textarea
                id="projectDesc"
                name="message"
                rows="4"
                className="w-full bg-surface-container-low rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none shadow-inner hover:bg-surface-variant/50"
                placeholder="Briefly describe your requirements..."
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed py-6 rounded-[2rem] font-bold text-2xl hover:shadow-[0_0_50px_rgba(61,146,204,0.5)] transition-all active:scale-[0.98]"
              >
                Confirm My Appointment
              </button>
              <p className="text-center text-gray-500 text-sm mt-6 font-medium">
                We'll WhatsApp or call <a href="tel:+9779851177597" className="text-primary hover:underline font-bold">+977-9851177597</a> to confirm your slot within 2 business hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
