import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section id="about-story" className="py-24 px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
             <div className="aspect-square rounded-2xl bg-surface-container-low overflow-hidden border border-white/5 relative">
               <img 
                 src="/NEpaligirl.webp" 
                 alt="Octoways development team in Kathmandu, Nepal" 
                 className="w-full h-full object-cover"
                 loading="lazy"
                 width="800"
                 height="800"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
               <div className="absolute bottom-6 left-6">
                 <p className="font-headline text-2xl font-bold">Innovation born in Kathmandu</p>
                 <p className="text-sm text-gray-400">Serving global excellence</p>
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
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Our Story
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
            Crafting the Future, <br />One Line of Code at a Time.
          </h2>
          
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
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
