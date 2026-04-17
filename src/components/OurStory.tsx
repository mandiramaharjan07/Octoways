import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section id="about-story" className="py-24 px-8 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="bg-surface-card p-10 rounded-[2.5rem] relative z-10 shadow-card">
             <div className="aspect-square rounded-2xl bg-background overflow-hidden relative shadow-inner">
               <img 
                 src="/NEpaligirl.webp" 
                 alt="Octoways development team in Kathmandu, Nepal" 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                 loading="lazy"
                 width="800"
                 height="800"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
               <div className="absolute bottom-6 left-6">
                 <p className="font-headline text-2xl font-bold text-text-primary">Innovation born in Kathmandu</p>
                 <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted mt-1">Serving global excellence</p>
               </div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-surface-raised text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
            Our Story
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-text-primary">
            Crafting the Future, <br />One Line of Code at a Time.
          </h2>
          
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-medium">
            <p>
              At Octoways, we believe innovation is born when human creativity meets intelligent adaptability. Founded in Kathmandu, Nepal, we combine cutting-edge technology with skilled talent to deliver digital solutions that are thoughtful, scalable, and built to drive real business results.
            </p>
            <p>
              Our team thrives in a culture of continuous learning, agile methodologies, and strong collaboration — ensuring we stay ahead in a constantly evolving digital landscape. We focus on user-centric design and real-world impact, working closely with our clients to transform ideas into powerful, lasting solutions.
            </p>
            <p>
              At Octoways, we are not just service providers — we are long-term partners dedicated to shaping smarter, more connected futures through creativity, innovation, and excellence. From Kathmandu to global clients, we redefine what's possible in the digital world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
