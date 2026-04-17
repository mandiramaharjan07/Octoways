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
    <section className="py-24 px-8 bg-surface-raised transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-text-primary">Built on Industry-Leading Technologies</h2>
          <p className="text-text-secondary text-lg font-medium">Our products are built using modern, battle-tested tech stacks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((item, index) => (
            <div key={index} className="bg-surface-card p-10 rounded-[2.5rem] hover:bg-surface-raised transition-all duration-500 shadow-card hover:shadow-xl group">
              <h3 className="font-headline text-xl font-bold mb-8 text-primary pb-6 uppercase tracking-widest text-xs">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {item.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-surface-raised hover:bg-primary/10 hover:text-primary transition-all duration-300 px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-text-secondary cursor-default shadow-sm"
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
      <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-primary/10 to-transparent -z-0"></div>
    </section>
  );
}
