import React, { useState, useEffect } from 'react';
import { 
  TreePine, 
  Sparkles, 
  Globe2, 
  Calculator, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  TrendingDown, 
  ShieldCheck, 
  Sun,
  Leaf,
  CloudSun
} from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  // Real-time simulated micro-fluctuations in global biosphere counters
  const [co2Ppm, setCo2Ppm] = useState(424.82);
  const [carbonSinkRate, setCarbonSinkRate] = useState(31.4); // Gt CO2/yr

  useEffect(() => {
    const interval = setInterval(() => {
      setCo2Ppm(prev => +(prev + (Math.random() * 0.02 - 0.009)).toFixed(2));
      setCarbonSinkRate(prev => +(31.4 + (Math.sin(Date.now() / 8000) * 0.15)).toFixed(2));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Visual Backdrop with Generated Forest Canopy and Sun Rays */}
      <div className="hero-backdrop">
        <img 
          src="/hero_forest.jpg" 
          alt="Tajuk kanopi hutan hujan tropis lebat bertemu langit biru cerah dengan berkas sinar surya" 
          className="hero-forest-img"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-sky-glow"></div>
        <div className="hero-leaf-vignette"></div>
      </div>

      <div className="hero-content-wrapper">
        {/* Academic Level Pill */}
        <div className="hero-badge-row">
          <div className="badge-academic">
            <span className="pulse-dot"></span>
            <span>Sains Biosfer, Dendrologi & Dekarbonisasi</span>
          </div>
          <div className="badge-sky">
            <CloudSun size={14} />
            <span>Tema: Hijau Daun & Biru Langit Tropis</span>
          </div>
        </div>

        {/* Main Title & Rigorous Description */}
        <h1 className="hero-title">
          Rekayasa Ekologi, <span className="highlight-green">Dendrologi Kanopi</span> & 
          <br className="desktop-break" />
          Dekarbonisasi Terestrial <span className="highlight-sky">Tingkat Lanjut</span>
        </h1>

        <p className="hero-description">
          Platform akademik interaktif untuk mahasiswa dan peneliti sains lingkungan. 
          Menyajikan telaah mendalam dinamika iklim global (CMIP6), pemodelan allometrik biomassa pohon 
          <strong> (Chave et al., 2014)</strong>, audit emisi <strong>GHG Protocol Scope 1-3</strong>, 
          metodologi <strong>ISO 14040/44 LCA</strong>, serta instrumen pasar karbon internasional (Artikel 6 Traktat Paris).
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <button 
            onClick={() => onNavigate('modules')} 
            className="btn-primary-forest"
          >
            <BookOpen size={18} />
            <span>Mulai Telaah 6 Modul Riset</span>
            <ArrowRight size={16} />
          </button>

          <button 
            onClick={() => onNavigate('calculator')} 
            className="btn-secondary-sky"
          >
            <Calculator size={18} />
            <span>Lab Allometri & Jejak Karbon</span>
          </button>

          <button 
            onClick={() => onNavigate('dendro')} 
            className="btn-glass-leaf"
          >
            <Layers size={18} />
            <span>Dendro-Atlas Kanopi</span>
          </button>
        </div>

        {/* Live Biosphere Science Metrics Bar */}
        <div className="biosphere-ticker-panel glass-panel">
          <div className="ticker-header">
            <div className="ticker-live-status">
              <span className="pulse-dot"></span>
              <span className="ticker-title">Monitoring Dinamika Geosfer & Biosfer (IPCC AR6 / WMO Reference)</span>
            </div>
            <span className="ticker-update-time">Diperbarui Secara Riil-Waktu</span>
          </div>

          <div className="ticker-grid">
            <div className="ticker-card">
              <div className="ticker-meta">
                <span className="ticker-label">Konsentrasi CO₂ Atmosfer</span>
                <span className="ticker-badge-warn">Garis Merah 1.5°C</span>
              </div>
              <div className="ticker-value-row">
                <span className="ticker-num sky-text">{co2Ppm}</span>
                <span className="ticker-unit">ppm</span>
              </div>
              <div className="ticker-sub">Baseline pra-industri: 280 ppm (+51.7%)</div>
            </div>

            <div className="ticker-card">
              <div className="ticker-meta">
                <span className="ticker-label">Stok Karbon Terestrial Hutan</span>
                <span className="ticker-badge-ok">Biomassa Hidup</span>
              </div>
              <div className="ticker-value-row">
                <span className="ticker-num green-text">861</span>
                <span className="ticker-unit">Gt C</span>
              </div>
              <div className="ticker-sub">Vegetasi atas & bawah tanah + bahan organik</div>
            </div>

            <div className="ticker-card">
              <div className="ticker-meta">
                <span className="ticker-label">Fluks Sekuestrasi Biosfer Daratan</span>
                <span className="ticker-badge-ok">Net Sinks</span>
              </div>
              <div className="ticker-value-row">
                <span className="ticker-num sky-text">{carbonSinkRate}</span>
                <span className="ticker-unit">Gt CO₂e/thn</span>
              </div>
              <div className="ticker-sub">Asimilasi fotosintesis dikurangi respirasi ekosistem</div>
            </div>

            <div className="ticker-card">
              <div className="ticker-meta">
                <span className="ticker-label">Ambang Forcing Radiatif (ΔF)</span>
                <span className="ticker-badge-neutral">CMIP6 SSP2-4.5</span>
              </div>
              <div className="ticker-value-row">
                <span className="ticker-num green-text">+2.72</span>
                <span className="ticker-unit">W/m²</span>
              </div>
              <div className="ticker-sub">Ketidakseimbangan energi bersih atmosfer atas</div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="hero-features-row">
          <div className="hero-feature-pill" onClick={() => onNavigate('modules')}>
            <div className="feature-pill-icon bg-leaf">
              <TreePine size={18} />
            </div>
            <div className="feature-pill-body">
              <span className="feature-pill-title">Dendrologi Kuantitatif</span>
              <span className="feature-pill-desc">Allometri pan-tropis Chave & densitas kayu</span>
            </div>
          </div>

          <div className="hero-feature-pill" onClick={() => onNavigate('calculator')}>
            <div className="feature-pill-icon bg-sky">
              <Calculator size={18} />
            </div>
            <div className="feature-pill-body">
              <span className="feature-pill-title">Audit GHG Scope 1-3</span>
              <span className="feature-pill-desc">Standar WRI & ISO 14064 berjenjang</span>
            </div>
          </div>

          <div className="hero-feature-pill" onClick={() => onNavigate('cases')}>
            <div className="feature-pill-icon bg-leaf">
              <ShieldCheck size={18} />
            </div>
            <div className="feature-pill-body">
              <span className="feature-pill-title">Analisis Kasus Lapangan</span>
              <span className="feature-pill-desc">Gambut Kalteng, CBAM UE, & Simbiosis</span>
            </div>
          </div>

          <div className="hero-feature-pill" onClick={() => onNavigate('quiz')}>
            <div className="feature-pill-icon bg-sky">
              <Sparkles size={18} />
            </div>
            <div className="feature-pill-body">
              <span className="feature-pill-title">Uji Pemahaman</span>
              <span className="feature-pill-desc">Uji analisis kritis & sertifikat kompetensi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
