import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import Workflow from '../components/Workflow';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Impact />
      <Gallery />
      <Features />
      <TechStack />
      <Workflow />
    </Layout>
  );
}
