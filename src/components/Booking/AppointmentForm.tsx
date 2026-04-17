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
      <div className="max-w-3xl mx-auto py-24 px-8 text-center bg-surface-card rounded-[3rem] shadow-xl my-12 transition-colors duration-300">
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 text-primary">
          <span className="material-symbols-outlined text-5xl">task_alt</span>
        </div>
        <h2 className="font-headline text-4xl font-bold mb-4 text-text-primary">Request Received!</h2>
        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
          Thank you for choosing Octoways. We'll WhatsApp or call you within 2 business hours to confirm your appointment slot.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 rounded-xl hover:bg-surface-raised transition-all font-bold text-text-primary"
          >
            Submit Another Request
          </button>
          <a href="/" className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-8 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface-card p-10 md:p-16 rounded-[3.5rem] relative shadow-card">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-8xl text-text-primary">calendar_month</span>
          </div>
          
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-text-primary">Confirm Your Session</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="access_key" value="5ecf3ff2-07dd-4167-8933-68ce0f2fa228" />
            <input type="hidden" name="from_name" value="Octoways Appointment Request" />
            <input type="hidden" name="subject" value="New Appointment Booking from Octoways Website" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="fullName" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">person</span> Full Name *
                </label>
                <input
                  required
                  id="fullName"
                  name="name"
                  type="text"
                  className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none shadow-inner hover:bg-surface-raised font-body"
                  placeholder="e.g. Rajesh Sharma"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="phone" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">chat</span> WhatsApp Number *
                </label>
                <input
                  required
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none shadow-inner hover:bg-surface-raised font-body"
                  placeholder="+977-98..."
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">mail</span> Email Address *
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="w-full bg-input-bg border border-border rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-primary transition-all shadow-inner hover:bg-surface-raised font-body"
                placeholder="name@domain.com"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="service" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">category</span> Service Interested In *
              </label>
              <div className="relative">
                <select
                  required
                  id="service"
                  name="service"
                  className="w-full bg-input-bg border border-border rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-primary transition-all appearance-none shadow-inner hover:bg-surface-raised font-body"
                >
                  <option value="">Select a service</option>
                  {services.map((service, i) => (
                    <option key={i} value={service}>{service}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="prefDate" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">event</span> Preferred Date *
                </label>
                <input
                  required
                  id="prefDate"
                  name="preferred_date"
                  type="date"
                  className="w-full bg-input-bg border border-border rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-primary transition-all shadow-inner hover:bg-surface-raised font-body dark:[color-scheme:dark]"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="timeSlot" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">timer</span> Preferred Time Slot *
                </label>
                <div className="relative">
                  <select
                    required
                    id="timeSlot"
                    name="preferred_time"
                    className="w-full bg-input-bg border border-border rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:border-primary transition-all appearance-none shadow-inner hover:bg-surface-raised font-body"
                  >
                    <option value="">Select a slot</option>
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>{slot}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">groups</span> Meeting Type *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-4 bg-input-bg p-5 rounded-2xl cursor-pointer hover:bg-surface-raised transition-all shadow-inner group">
                  <input type="radio" name="meetingType" required value="in-person" className="w-5 h-5 accent-primary" />
                  <span className="font-bold text-text-primary text-sm group-hover:text-primary transition-colors">In-Person (Kathmandu)</span>
                </label>
                <label className="flex items-center gap-4 bg-input-bg p-5 rounded-2xl cursor-pointer hover:bg-surface-raised transition-all shadow-inner group">
                  <input type="radio" name="meetingType" required value="online" className="w-5 h-5 accent-primary" />
                  <span className="font-bold text-text-primary text-sm group-hover:text-primary transition-colors">Online (Zoom/Meet)</span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="projectDesc" className="text-xs font-bold text-text-muted uppercase tracking-widest ml-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">description</span> Tell us about your project
              </label>
              <textarea
                id="projectDesc"
                name="message"
                rows={4}
                className="w-full bg-input-bg rounded-2xl px-6 py-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-inner hover:bg-surface-raised font-body"
                placeholder="Briefly describe your requirements..."
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-6 rounded-[2rem] font-bold text-2xl hover:bg-secondary transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Confirm Appointment
              </button>
              <p className="text-center text-text-muted text-sm mt-6 font-medium">
                We'll confirm via WhatsApp at <a href="tel:+9779851177597" className="text-primary hover:underline font-bold">+977-9851177597</a> within 2 business hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
