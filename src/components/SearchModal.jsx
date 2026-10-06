import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, TreePine, FileText, BookMarked, ArrowRight } from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import { TREE_SPECIES, CANOPY_STRATA } from '../data/treesData';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { GLOSSARY_DATA } from '../data/glossaryData';

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut Esc & Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search in modules
  const matchedModules = q ? MODULES_DATA.filter(m => 
    m.title.toLowerCase().includes(q) || 
    m.code.toLowerCase().includes(q) ||
    m.abstract.toLowerCase().includes(q)
  ) : [];

  // Search in trees
  const matchedTrees = q ? TREE_SPECIES.filter(t => 
    t.localName.toLowerCase().includes(q) || 
    t.scientificName.toLowerCase().includes(q) ||
    t.family.toLowerCase().includes(q)
  ) : [];

  // Search in cases
  const matchedCases = q ? CASE_STUDIES.filter(c => 
    c.title.toLowerCase().includes(q) || 
    c.theme.toLowerCase().includes(q) ||
    c.location.toLowerCase().includes(q)
  ) : [];

  // Search in glossary
  const matchedGlossary = q ? GLOSSARY_DATA.filter(g => 
    g.term.toLowerCase().includes(q) || 
    g.definition.toLowerCase().includes(q)
  ) : [];

  const totalResults = matchedModules.length + matchedTrees.length + matchedCases.length + matchedGlossary.length;

  const handleSelectResult = (targetSection) => {
    onNavigate(targetSection);
    onClose();
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-box glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-search-header">
          <Search size={20} className="modal-search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Ketik topik riset, formula Chave, emisi Scope 3, atau nama pohon..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="modal-search-input"
          />
          <button onClick={onClose} className="modal-close-btn" aria-label="Tutup pencarian">
            <X size={18} />
          </button>
        </div>

        <div className="modal-search-body">
          {!query && (
            <div className="modal-search-suggestions">
              <span className="sugg-label">Saran Topik Pencarian Populer:</span>
              <div className="sugg-pills">
                {['Chave 2014', 'Scope 3', 'CBAM', 'Mikoriza', 'Gambut Kalteng', 'Duck Curve', 'LCA ISO 14044', 'Forcing Radiatif'].map((item, i) => (
                  <button key={i} onClick={() => setQuery(item)} className="sugg-pill-btn">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="modal-search-empty">
              <p>Tidak ditemukan hasil pencarian untuk "{query}". Coba periksa ejaan istilah ilmiah.</p>
            </div>
          )}

          {query && totalResults > 0 && (
            <div className="modal-results-list">
              {/* Modules Results */}
              {matchedModules.length > 0 && (
                <div className="results-group">
                  <div className="group-title">
                    <BookOpen size={14} />
                    <span>Modul Riset ({matchedModules.length})</span>
                  </div>
                  {matchedModules.map(m => (
                    <div 
                      key={m.id} 
                      onClick={() => handleSelectResult('modules')} 
                      className="result-row"
                    >
                      <span className="result-code">{m.code}</span>
                      <span className="result-name">{m.title}</span>
                      <ArrowRight size={14} className="result-arrow" />
                    </div>
                  ))}
                </div>
              )}

              {/* Trees Results */}
              {matchedTrees.length > 0 && (
                <div className="results-group">
                  <div className="group-title">
                    <TreePine size={14} />
                    <span>Dendrologi Spesies ({matchedTrees.length})</span>
                  </div>
                  {matchedTrees.map(t => (
                    <div 
                      key={t.id} 
                      onClick={() => handleSelectResult('dendro')} 
                      className="result-row"
                    >
                      <span className="result-name">
                        {t.localName} (<em>{t.scientificName}</em>)
                      </span>
                      <span className="result-badge-sub">ρ = {t.woodDensity} g/cm³</span>
                      <ArrowRight size={14} className="result-arrow" />
                    </div>
                  ))}
                </div>
              )}

              {/* Case Studies Results */}
              {matchedCases.length > 0 && (
                <div className="results-group">
                  <div className="group-title">
                    <FileText size={14} />
                    <span>Studi Kasus Lapangan ({matchedCases.length})</span>
                  </div>
                  {matchedCases.map(c => (
                    <div 
                      key={c.id} 
                      onClick={() => handleSelectResult('cases')} 
                      className="result-row"
                    >
                      <span className="result-name">{c.title}</span>
                      <ArrowRight size={14} className="result-arrow" />
                    </div>
                  ))}
                </div>
              )}

              {/* Glossary Results */}
              {matchedGlossary.length > 0 && (
                <div className="results-group">
                  <div className="group-title">
                    <BookMarked size={14} />
                    <span>Glosarium Terminologi ({matchedGlossary.length})</span>
                  </div>
                  {matchedGlossary.map((g, i) => (
                    <div 
                      key={i} 
                      onClick={() => handleSelectResult('glossary')} 
                      className="result-row"
                    >
                      <span className="result-name">{g.term}</span>
                      <span className="result-cat">{g.category}</span>
                      <ArrowRight size={14} className="result-arrow" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-search-footer">
          <span>Navigasi instan dengan keyboard: Gunakan <kbd>ESC</kbd> untuk menutup</span>
        </div>
      </div>
    </div>
  );
}
