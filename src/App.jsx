import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LeafParticlesCanvas from './components/LeafParticlesCanvas';
import HeroSection from './components/HeroSection';
import TreeCanopyVisualizer from './components/TreeCanopyVisualizer';
import ModulesReader from './components/ModulesReader';
import CarbonCalculator from './components/CarbonCalculator';
import CaseStudiesSection from './components/CaseStudiesSection';
import QuizSection from './components/QuizSection';
import GlossarySection from './components/GlossarySection';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [leafParticlesActive, setLeafParticlesActive] = useState(true);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Floating Leaf Particles Background Canvas */}
      <LeafParticlesCanvas isEnabled={leafParticlesActive} />

      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        leafParticlesActive={leafParticlesActive}
        setLeafParticlesActive={setLeafParticlesActive}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section & Realtime Biosphere Counter */}
        <HeroSection onNavigate={scrollToSection} />

        {/* 2. Dendro-Atlas, Canopy Layers & Tree Species Catalog */}
        <TreeCanopyVisualizer />

        {/* 3. 6 Research Modules Reader */}
        <ModulesReader />

        {/* 4. Computational Carbon Lab: Chave Allometry & Scope 1-3 Matrix */}
        <CarbonCalculator />

        {/* 5. Policy & Empirical Case Studies (Peatland, CBAM, Amazon, Kalundborg) */}
        <CaseStudiesSection />

        {/* 6. Comprehensive Examination & Printable Certificate */}
        <QuizSection />

        {/* 7. Academic Glossary (30+ Terms with Filter) */}
        <GlossarySection />
      </main>

      {/* Search Modal (Cmd+K / Search button) */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Comprehensive Academic Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
