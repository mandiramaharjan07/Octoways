import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Products = lazy(() => import('./pages/Products'));
const Works = lazy(() => import('./pages/Works'));
const Contact = lazy(() => import('./pages/Contact'));
const BookAnAppointment = lazy(() => import('./pages/BookAnAppointment'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { OttoProvider } from './context/OttoContext';
import ScrollToTop from './components/ScrollToTop';
const OttoGuide = lazy(() => import('./components/OttoGuide/OttoGuide'));
const OttoAgent = lazy(() => import('./components/Otto/OttoAgent'));


function App() {
  const [scrollMsg, setScrollMsg] = useState({ state: 'idle', message: '' });

  return (
    <>
      <ScrollToTop />
      <div className="relative">
        <Suspense fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="text-primary font-medium uppercase tracking-widest text-xs animate-pulse">Initializing Interface...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-an-appointment" element={<BookAnAppointment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        
        <OttoProvider>
          <Suspense fallback={null}>
            <OttoAgent triggeredState={scrollMsg.state} triggeredMessage={scrollMsg.message} />
            <OttoGuide />
          </Suspense>
        </OttoProvider>
      </div>
    </>
  );
}

export default App;
