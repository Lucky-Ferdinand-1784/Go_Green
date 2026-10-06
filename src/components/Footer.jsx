import React from 'react';
import { TreePine, Globe, Shield, ArrowUp, Heart, BookOpen, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="academic-footer">
      <div className="footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <TreePine size={24} className="text-leaf-dark" />
              <span className="footer-brand-title">SylvaSphere</span>
            </div>
            <p className="footer-brand-desc">
              Pusat Repositori Digital & Komputasi Bio-Kuantitatif untuk Ilmu Lingkungan, 
              Kehutanan Tropis, dan Manajemen Dekarbonisasi Berkelanjutan.
            </p>
            <div className="sdg-badges-row">
              <span className="sdg-pill sdg-13" title="SDG 13: Climate Action">SDG 13: Iklim</span>
              <span className="sdg-pill sdg-15" title="SDG 15: Life on Land">SDG 15: Ekosistem Darat</span>
              <span className="sdg-pill sdg-12" title="SDG 12: Responsible Consumption">SDG 12: Sirkularitas</span>
              <span className="sdg-pill sdg-7" title="SDG 7: Clean Energy">SDG 7: Energi Bersih</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigasi Riset</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => onNavigate('hero')}>Ikhtisar Biosfer</button></li>
              <li><button onClick={() => onNavigate('modules')}>6 Modul Silabus Riset</button></li>
              <li><button onClick={() => onNavigate('dendro')}>Dendro-Atlas & Strata Kanopi</button></li>
              <li><button onClick={() => onNavigate('calculator')}>Lab Allometri & Jejak Emisi</button></li>
              <li><button onClick={() => onNavigate('cases')}>4 Studi Kasus Lapangan</button></li>
              <li><button onClick={() => onNavigate('quiz')}>Uji Kompetensi & Sertifikat</button></li>
              <li><button onClick={() => onNavigate('glossary')}>Leksikon 30+ Istilah</button></li>
            </ul>
          </div>

          {/* Reference Standards */}
          <div className="footer-col">
            <h4 className="footer-heading">Landasan Metodologis</h4>
            <ul className="footer-refs-list">
              <li>IPCC Sixth Assessment Report (AR6 CMIP6)</li>
              <li>Chave et al. (2014) Pan-tropical Tree Allometry</li>
              <li>WRI / WBCSD GHG Protocol Corporate Standard</li>
              <li>ISO 14040/14044 Life Cycle Assessment</li>
              <li>UNFCCC Paris Agreement Article 6 Rulebook</li>
              <li>Taksonomi Hijau Indonesia & EU Taxonomy</li>
            </ul>
          </div>

          {/* Academic Ethos */}
          <div className="footer-col">
            <h4 className="footer-heading">Fokus Pelestarian</h4>
            <div className="footer-stat-card">
              <span className="footer-stat-highlight">1 Hektar Hutan Hujan Tropis</span>
              <p>Mampu menyerap hingga ~250-350 ton biomassa karbon dan meregulasi siklus hidrologis regional dengan mendinginkan temperatur mikro bumi.</p>
            </div>
            <button onClick={scrollToTop} className="btn-back-to-top">
              <ArrowUp size={15} />
              <span>Kembali ke Puncak</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-copy">
            © {new Date().getFullYear()} <strong>SylvaSphere Academic Portal</strong> — Didedikasikan untuk Pendidikan Ilmu Lingkungan & Keberlanjutan Indonesia.
          </div>
          <div className="footer-bottom-theme-badge">
            🌿 Bertema Hijau Daun & Biru Langit Tropis
          </div>
        </div>
      </div>
    </footer>
  );
}
