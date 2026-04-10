import React from 'react';

const stack = [
  {
    category: 'Backend',
    techs: ['Java', '.NET', 'PHP', 'Ruby on Rails', 'Python', 'Node.js', 'JavaScript']
  },
  {
    category: 'Frontend',
    techs: ['React', 'Angular', 'Next.js', 'Vue.js', 'Bootstrap', 'jQuery', 'Django']
  },
  {
    category: 'Mobile',
    techs: ['React Native', 'iOS', 'Android']
  },
  {
    category: 'DevOps / Cloud & Tools',
    techs: ['MySQL', 'MongoDB', 'Docker', 'Microsoft SQL Server', 'Figma', 'Microsoft Azure', 'Amazon Web Services']
  }
];

export default function ProductsTechStack() {
  return (
    <section className="py-24 px-8 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Built on Industry-Leading Technologies</h2>
          <p className="text-on-surface-variant text-lg">Our products are built using modern, battle-tested tech stacks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((item, index) => (
            <div key={index} className="glass-panel ghost-border p-8 rounded-3xl hover:bg-surface-bright transition-all duration-300">
              <h3 className="font-headline text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-4">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors px-3 py-1.5 rounded-lg text-sm text-on-surface-variant border border-white/5 hover:border-primary/40 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-0"></div>
    </section>
  );
}
