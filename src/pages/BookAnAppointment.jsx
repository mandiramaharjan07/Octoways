import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import BookingHero from '../components/Booking/BookingHero';
import HowItWorks from '../components/Booking/HowItWorks';
import AppointmentForm from '../components/Booking/AppointmentForm';
import WhyBook from '../components/Booking/WhyBook';
import FAQSection from '../components/FAQSection';

const bookingFaqs = [
  {
    q: "How do I confirm my appointment with Octoways?",
    a: "After submitting the form, our team will WhatsApp or call you at +977-9851177597 within 2 hours during business hours."
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes. All initial consultations with Octoways are completely free of charge — no commitment required."
  },
  {
    q: "Can I book an online appointment instead of visiting Kathmandu?",
    a: "Absolutely. Select 'Online (Google Meet / Zoom)' in the booking form and we'll send you a meeting link."
  },
  {
    q: "What happens after I submit the booking form?",
    a: "Our team reviews your request and contacts you within 2 hours via WhatsApp or phone to confirm the slot and discuss your needs."
  },
  {
    q: "Can I book a same-day appointment?",
    a: "We try our best. For same-day bookings, call or WhatsApp us directly at +977-9851177597 for fastest response."
  },
  {
    q: "What should I prepare before the appointment?",
    a: "Just a brief idea of your project or problem. Our experts will guide you through the rest — no technical preparation needed."
  }
];

const testimonials = [
  {
    quote: "Octoways built our entire website in 6 weeks. From discovery to launch, the team in Kathmandu was responsive and professional.",
    author: "Rajesh S.",
    role: "eProperty Nepal"
  },
  {
    quote: "We booked a free consultation and within a week had a clear project roadmap. Highly recommend the Octoways team.",
    author: "Priya M.",
    role: "Lalitpur"
  },
  {
    quote: "The KTM AI Assistance demo was mind-blowing. Easy booking, fast confirmation, expert team.",
    author: "Bikash T.",
    role: "Kathmandu"
  }
];

export default function BookAnAppointment() {
  useEffect(() => {
    document.title = "Book an Appointment | Free Consultation | Octoways, Kathmandu Nepal";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Book a free appointment with Octoways Pvt. Ltd. in Bansbari, Kathmandu. Nepal's trusted AI & software development company. Confirm within 2 hours via WhatsApp.");
    }
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ReservationAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://octoways.com/book-an-appointment",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Octoways Pvt. Ltd.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bansbari",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "addressCountry": "NP"
      },
      "telephone": "+977-9851177597"
    }
  };

  return (
    <Layout>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="max-w-7xl mx-auto px-8 pt-8 text-white">
        <Breadcrumbs items={[{ name: 'Book an Appointment', path: '/book-an-appointment' }]} />
      </div>

      <BookingHero />
      <HowItWorks />
      
      <div className="bg-background relative">
        <AppointmentForm />
      </div>

      <WhyBook />

      {/* Appointment Policies Section */}
      <section className="py-24 px-8 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel ghost-border p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-3 gap-12">
            <h2 className="font-headline text-3xl font-bold text-white flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">rule</span>
              Appointment Policies
            </h2>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">cancel</span> Cancellation
                </h4>
                <p className="text-on-surface-variant text-sm border-l-2 border-primary/20 pl-4 py-1">
                  Please notify us at least 24 hours before your appointment via WhatsApp or call at <strong>+977-9851177597</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">event_repeat</span> Rescheduling
                </h4>
                <p className="text-on-surface-variant text-sm border-l-2 border-primary/20 pl-4 py-1">
                  Rescheduling is free and easy — just message us at <strong>+977-9851177597</strong> and we'll find a new slot.
                </p>
              </div>
              <div className="space-y-4 md:col-span-2">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">verified_user</span> Confirmation Note
                </h4>
                <p className="text-on-surface-variant text-sm border-l-2 border-primary/20 pl-4 py-1">
                  All appointments are confirmed via WhatsApp or phone call by our Kathmandu-based specialist team. No appointment is finalized until confirmed by our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 bg-surface-container-low border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold mb-4 text-white">Trust the Experience</h2>
            <p className="text-on-surface-variant">What our clients say about our consultation and delivery process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:bg-white/5 transition-all">
                <div className="mb-8">
                  <div className="flex gap-1 text-primary mb-6">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant italic leading-relaxed">"{t.quote}"</p>
                </div>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-primary text-xs font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection 
        items={bookingFaqs}
        title="Booking Frequently Asked Questions"
        description="Quick answers about our consultation process, confirmation times, and meeting formats."
      />

      {/* Direct Contact Fallback Section */}
      <section className="py-24 px-8 bg-background relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold mb-4 text-white">Prefer to reach us directly?</h2>
          <p className="text-on-surface-variant mb-12">Alternatively, you can message our team via these channels.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/9779851177597" 
              className="w-full md:w-auto bg-[#25D366] text-white px-10 py-4 rounded-2xl font-bold text-xl hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">chat</span> WhatsApp +977-9851177597
            </a>
            <a 
              href="mailto:info@octoways.com" 
              className="w-full md:w-auto px-10 py-4 rounded-2xl font-bold text-xl border border-white/10 hover:bg-white/5 transition-all text-white text-center flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">mail</span> info@octoways.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
