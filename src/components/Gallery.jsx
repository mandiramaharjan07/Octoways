import React from 'react';
import SectionTitle from './SectionTitle';

export default function Gallery() {
  return (
    <section className="py-24 px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-primary pl-8">
          <div>
            <SectionTitle className="mb-4">Neural Output Gallery</SectionTitle>
            <p className="text-on-surface-variant max-w-lg">Showcasing the high-fidelity outputs of Octoways' proprietary generative AI engines.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full glass-panel ghost-border hover:bg-primary/20 hover:text-primary transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">science</span> Explore AI Labs
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          <div className="row-span-2 col-span-2 rounded-xl overflow-hidden relative group border border-white/10">
            <img
              alt="Advanced AI structural visualization of complex neural geometry optimized for spatial computing"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDol65oDcTybCHP8fvCKVkBzBVCtkrPU_zhC6I4zWeP7iB8oCRjh2jO9bzAEl2WY3Y5VKDmUx5yGDZwsu75rd6fgWK2Qg71c2FflywZr60SYUR43MEUrFXcUhb_vvA33456OhmqtANd5lvjGECI90IR1ClQOHkD_sIq2hK0r8RAmA5UgfxCjsJ0MfWpqDP17DrLm_TUUEfa1PoRxpe8WLVJyK0ng8o5GnVxzMWfG6ev4Kn10jG2gGSTjtBx8sMjmBZc_Ui_ecr8jl8"
              width="800"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <span className="text-primary text-xs font-bold mb-2 uppercase tracking-widest">Generative Architecture</span>
              <p className="text-sm italic text-gray-300">"Complex neural geometry optimized for spatial computing."</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative group border border-white/10">
            <img
              alt="Synthetic human-AI interface concept by Octoways"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7jOcNht3Q8pF7Jz7C-ByLrIN-yE_G5eKGFXNBhYLlfrgQe_q68RZmRaJemzwX7x-ElP6LH5zR6VctJTDLisEwBKEolawddWdAqjEwQ7Z40AG_nlJ1fxW6flU4GSUvJTn-FI2tV82auwet24OAgDh1bpNGk0vElYWvPq2NcW-HbkCjh2_UnV-_pdqhTndaRYnqiXyvz28usDnBTY94AAeiUrhFOvmqCrAisxPLdjIlitEH4alhALfazgnA1kwHwmqQufKpa1O86-s"
              width="400"
              height="300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full">AI PORTRAITURE</span>
            </div>
          </div>
          <div className="row-span-2 rounded-xl overflow-hidden relative group border border-white/10">
            <img
              alt="AI-generated sustainable futuristic cityscape visualization"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1XONSoQZGP17U78pJc_wpDuMochhYX2NGrPYr9YqQSW7nzJbd3NBkHaGq3UgKPcTP4lUZvVtQPNFwMfPM5J822aBvDWytpwNKuOm04RniEpvCkZ5NYcCre3FNrtju2DKKmImHBQ_Zze0FWNrFDmQnS32OsAhzzkoh4E0i2UD9AOVAGuCJ_UpRqrSsHPsOeEg2r2CH1xojfC-nE79xlKTFMTyWS0jYOK217puGsUQvTqrCs6HmqOSn-hf7XyB9uRlB4N2O8wPdVdQ"
              width="400"
              height="600"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative group border border-white/10">
            <img
              alt="Brutalist architectural AI design study for enterprise systems"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              src="https://media.craiyon.com/2023-09-14/98a67a3e507d447fa0f99e6052a0c940.webp"
              width="400"
              height="300"
            />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden relative group border border-white/10">
            <img
              alt="Bioluminescent AI botanical study showcasing neural biology visualization"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGLz1VXBqb1W61h7CNsWd715ETCREe1FAFt4B3kYLzGcLFog_pMMSV_XlWEm1dUK_X6Ti8K5aqLO4zZWjy8a2QB94Opqd_Sx-G6y3-cbH_d_FS-O5kkh9MmgAJv_b4dZ6yVxDjBFV4EL4NLXrl5Yc79LaEFRHnOlVwpQbxxX5Cw5F8-MSuCIYXdoj5UfXcOe6BM8zSC-uHjhThvoithN54LfnYIFfrlj1KVX6CLp9BnpjJgC1d3uCUs0GTPcOguReq3jn9j7Cb1To"
              width="800"
              height="300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6">
              <p className="text-sm text-gray-400">Octoways Bio-Gen™ Engine Visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
