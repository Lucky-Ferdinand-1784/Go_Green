import React, { useState, useMemo } from 'react';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { 
  BookMarked, 
  Search, 
  Filter, 
  Tag, 
  Sigma, 
  X,
  FileText
} from 'lucide-react';

export default function GlossarySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Kategori unik
  const categories = useMemo(() => {
    const cats = new Set(GLOSSARY_DATA.map(item => item.category));
    return ['Semua', ...Array.from(cats)];
  }, []);

  // Filter hasil pencarian dan kategori
  const filteredTerms = useMemo(() => {
    return GLOSSARY_DATA.filter(item => {
      const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (item.formula && item.formula.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="glossary" className="section-container">
      {/* Header */}
      <div className="section-header-centered">
        <div className="badge-sky">
          <BookMarked size={14} />
          <span>Leksikon & Terminologi Biosfer</span>
        </div>
        <h2 className="section-title">
          Glosarium Sains Biosfer, <span className="highlight-green">Dendrologi</span> & 
          <br className="desktop-break" />
          <span className="highlight-sky">Ekonomi Dekarbonisasi</span>
        </h2>
        <p className="section-subtitle">
          Kamus terminologi teknis berstandar IPCC, WRI GHG Protocol, dan ISO 14040/44. 
          Memuat formulasi matematis, satuan SI, dan batas ontologis sistem lingkungan.
        </p>
      </div>

      <div className="glossary-main-card glass-panel">
        {/* Search & Filter Bar */}
        <div className="glossary-controls-bar">
          <div className="glossary-search-input-wrapper">
            <Search size={18} className="search-icon-inside" />
            <input
              type="text"
              placeholder="Cari istilah, rumus matematis, atau definisi (mis. Chave, GWP, Stomatal, Scope 3)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glossary-search-input"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills-row">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-filter-btn ${isActive ? 'active-filter' : ''}`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter Info */}
        <div className="glossary-results-info">
          <span>Menampilkan <strong>{filteredTerms.length}</strong> dari {GLOSSARY_DATA.length} istilah terverifikasi</span>
          {searchTerm && (
            <span className="filtered-keyword-note">Kata kunci: "{searchTerm}"</span>
          )}
        </div>

        {/* Terms Cards Grid */}
        <div className="glossary-cards-grid">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => (
              <div key={idx} className="glossary-item-card">
                <div className="glossary-item-top">
                  <span className="badge-green">{item.category}</span>
                  {item.formula && (
                    <span className="glossary-formula-badge">
                      <Sigma size={12} />
                      <span>{item.formula}</span>
                    </span>
                  )}
                </div>

                <h3 className="glossary-term-title">{item.term}</h3>

                <p className="glossary-term-def">{item.definition}</p>
              </div>
            ))
          ) : (
            <div className="glossary-empty-state">
              <FileText size={36} className="text-muted" />
              <h4>Tidak ada istilah yang cocok dengan "{searchTerm}"</h4>
              <p>Coba gunakan kata kunci lain atau pilih kategori "Semua".</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('Semua'); }}
                className="btn-reset-filters"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
