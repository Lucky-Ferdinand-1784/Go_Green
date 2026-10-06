import React, { useState, useEffect } from 'react';
import { 
  TreePine, 
  BookOpen, 
  Calculator, 
  Layers, 
  FileText, 
  Award, 
  BookMarked, 
  Volume2, 
  VolumeX, 
  Wind, 
  Search, 
  Menu, 
  X
} from 'lucide-react';
import { forestAudioInstance } from '../utils/ambientAudio';

export default function Navbar({ 
  activeSection, 
  setActiveSection, 
  leafParticlesActive, 
  setLeafParticlesActive,
  onOpenSearch
}) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = forestAudioInstance.toggle();
    setIsAudioPlaying(state);
  };

  const navItems = [
    { id: 'hero', label: 'Ikhtisar', icon: TreePine },
    { id: 'modules', label: 'Modul Riset', icon: BookOpen },
    { id: 'dendro', label: 'Dendro-Atlas', icon: Layers },
    { id: 'calculator', label: 'Kalkulator', icon: Calculator },
    { id: 'cases', label: 'Studi Kasus', icon: FileText },
    { id: 'quiz', label: 'Uji Pemahaman', icon: Award },
    { id: 'glossary', label: 'Glosarium', icon: BookMarked }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-brand" onClick={() => handleNavClick('hero')} role="button" tabIndex={0}>
          <div className="brand-icon-wrapper">
            <TreePine className="brand-tree-icon" size={24} />
            <span className="brand-dot"></span>
          </div>
          <div className="brand-text">
            <div className="brand-title">
              <span className="brand-sylva">Sylva</span>
              <span className="brand-sphere">Sphere</span>
            </div>
            <div className="brand-subtitle">Portal Sains Biosfer & Dekarbonisasi</div>
          </div>
        </div>

        {/* Desktop Navigation Links: Icon-First Dock (Expands on Hover / Active) */}
        <nav className="desktop-dock-nav" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`dock-btn ${isActive ? 'active' : ''}`}
                title={item.label}
                aria-label={item.label}
              >
                <Icon size={18} className="dock-btn-icon" />
                <span className="dock-btn-label">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Soundscape, Leaves FX, Search */}
        <div className="navbar-controls">
          {/* Ambient Forest Sound Toggle with expandable label on hover */}
          <button
            onClick={toggleSound}
            className={`control-expand-btn ${isAudioPlaying ? 'active-audio' : ''}`}
            title={isAudioPlaying ? 'Matikan Suara Hutan' : 'Putar Desau Angin Hutan (Web Audio)'}
            aria-label="Toggle Suara Hutan"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 size={17} className="control-icon" />
                <span className="control-expand-label">Suara Aktif</span>
                <span className="audio-live-dot"></span>
              </>
            ) : (
              <>
                <VolumeX size={17} className="control-icon" />
                <span className="control-expand-label">Suara Hutan</span>
              </>
            )}
          </button>

          {/* Leaves FX toggle */}
          <button
            onClick={() => setLeafParticlesActive(!leafParticlesActive)}
            className={`icon-round-btn ${leafParticlesActive ? 'active-fx' : ''}`}
            title={leafParticlesActive ? 'Sembunyikan partikel dedaunan' : 'Nyalakan partikel dedaunan'}
            aria-label="Toggle Partikel Dedaunan"
          >
            <Wind size={17} />
          </button>

          {/* Search Trigger Button with expandable label */}
          <button
            onClick={onOpenSearch}
            className="search-expand-btn"
            title="Cari materi modul, rumus, atau istilah (⌘K)"
            aria-label="Cari Materi"
          >
            <Search size={16} className="search-icon" />
            <span className="search-expand-label">Cari Riset</span>
            <kbd className="search-kbd">⌘K</kbd>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-trigger"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <div className="mobile-drawer-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="mobile-actions-row">
              <button onClick={toggleSound} className="mobile-action-pill">
                {isAudioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span>{isAudioPlaying ? 'Audio Hutan Aktif' : 'Aktifkan Audio Hutan'}</span>
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }} 
                className="mobile-action-pill"
              >
                <Search size={16} />
                <span>Cari Materi</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
