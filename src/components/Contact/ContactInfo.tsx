import React from 'react';

const contactDetails = [
  {
    icon: 'call',
    label: 'Phone',
    value: '+977-9851177597',
    link: 'tel:+9779851177597',
    subtext: 'WhatsApp preferred'
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'info@octoways.com',
    link: 'mailto:info@octoways.com',
    subtext: 'We respond in 24h'
  },
  {
    icon: 'location_on',
    label: 'Address',
    value: 'Bansbari, Kathmandu, Nepal',
    link: 'https://www.google.com/maps/search/Octoways+Pvt+Ltd+Bansbari+Kathmandu',
    subtext: 'Visit us by appointment'
  },
  {
    icon: 'schedule',
    label: 'Hours',
    value: 'Mon–Sat, 9am–6pm',
    link: '#',
    subtext: 'Nepal Standard Time'
  }
];

export default function ContactInfo() {
  return (
    <section className="py-24 px-8 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => (
            <a 
              key={index}
              href={detail.link}
              target={detail.link.startsWith('http') ? '_blank' : undefined}
              rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-surface-card border border-border p-8 rounded-[2.5rem] hover:bg-surface-raised transition-all duration-300 group flex flex-col items-center text-center shadow-card hover:shadow-xl hover:border-border-accent"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {detail.icon}
                </span>
              </div>
              <h3 className="text-text-muted text-[11px] font-bold uppercase tracking-[0.2em] mb-3">{detail.label}</h3>
              <div className="font-headline text-lg font-bold text-text-primary mb-3 leading-tight">
                {detail.value}
              </div>
              <p className="text-text-secondary text-sm border-t border-border pt-4 w-full mt-auto font-medium">
                {detail.subtext}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
