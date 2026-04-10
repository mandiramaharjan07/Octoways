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
    <section className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => (
            <a 
              key={index}
              href={detail.link}
              target={detail.link.startsWith('http') ? '_blank' : undefined}
              rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-panel ghost-border p-8 rounded-[2rem] hover:bg-surface-bright transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {detail.icon}
                </span>
              </div>
              <h3 className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{detail.label}</h3>
              <div className="font-headline text-lg font-bold text-white mb-2 leading-tight">
                {detail.value}
              </div>
              <p className="text-on-surface-variant text-sm border-t border-white/5 pt-4 w-full mt-2">
                {detail.subtext}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
