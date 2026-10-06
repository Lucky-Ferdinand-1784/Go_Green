import React, { useState } from 'react';
import { MODULES_DATA } from '../data/modulesData';
import { 
  BookOpen, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  Layers, 
  Sigma, 
  Table as TableIcon,
  Sparkles,
  ChevronRight,
  Share2
} from 'lucide-react';

export default function ModulesReader() {
  const [selectedModuleId, setSelectedModuleId] = useState(MODULES_DATA[0].id);
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [bookmarkedModules, setBookmarkedModules] = useState({});

  const currentModule = MODULES_DATA.find(m => m.id === selectedModuleId) || MODULES_DATA[0];

  const handleCopyCitation = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2400);
  };

  const toggleBookmark = (id) => {
    setBookmarkedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="modules" className="section-container">
      {/* Section Header */}
      <div className="section-header-centered">
        <div className="badge-academic">
          <BookOpen size={14} />
          <span>Silabus Riset & Studi Komprehensif</span>
        </div>
        <h2 className="section-title">
          6 Modul Komprehensif <span className="highlight-green">Sains Lingkungan</span> & 
          <br className="desktop-break" />
          <span className="highlight-sky">Rekayasa Keberlanjutan</span>
        </h2>
        <p className="section-subtitle">
          Disusun dengan rigor akademik berstandar internasional, mengintegrasikan formulasi matematika, 
          laporan IPCC AR6, metodologi ISO 14040/44 LCA, dan instrumen dekarbonisasi teknologis.
        </p>
      </div>

      <div className="modules-layout-grid">
        {/* Left Column: Module Selection List Sidebar */}
        <aside className="modules-sidebar">
          <div className="modules-sidebar-header">
            <span className="sidebar-label">Daftar Modul Riset:</span>
            <span className="sidebar-count">{MODULES_DATA.length} Modul Terakreditasi</span>
          </div>

          <div className="modules-nav-list">
            {MODULES_DATA.map((mod) => {
              const isSelected = mod.id === selectedModuleId;
              const isBookmarked = !!bookmarkedModules[mod.id];
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`module-nav-card ${isSelected ? 'active-module-card' : ''}`}
                  role="button"
                  tabIndex={0}
                >
                  <div className="module-card-top">
                    <span className="module-code-pill">{mod.code}</span>
                    <span className="module-time-pill">{mod.readTime}</span>
                    {isBookmarked && (
                      <BookmarkCheck size={14} className="bookmarked-star" />
                    )}
                  </div>
                  <h4 className="module-nav-title">{mod.title}</h4>
                  <div className="module-nav-footer">
                    <span className="module-field-tag">{mod.field}</span>
                    <ChevronRight size={14} className="nav-arrow" />
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Full Academic Reader Document */}
        <main className="module-reader-main glass-panel">
          {/* Paper Header / Metadata Card */}
          <div className="paper-header-box">
            <div className="paper-meta-row">
              <span className="paper-badge-level">{currentModule.level}</span>
              <span className="paper-code-tag">{currentModule.code}</span>
              <span className="paper-field-name">{currentModule.field}</span>
              <span className="paper-read-time">Waktu Baca: {currentModule.readTime}</span>
            </div>

            <h1 className="paper-main-title">{currentModule.title}</h1>

            <div className="paper-doi-row">
              <span className="doi-tag">
                DOI: <code>{currentModule.doi}</code>
              </span>
              <div className="paper-action-btns">
                <button
                  onClick={() => toggleBookmark(currentModule.id)}
                  className={`paper-btn-icon ${bookmarkedModules[currentModule.id] ? 'btn-bookmarked' : ''}`}
                  title="Simpan Modul ini"
                >
                  {bookmarkedModules[currentModule.id] ? (
                    <>
                      <BookmarkCheck size={15} />
                      <span>Tersimpan</span>
                    </>
                  ) : (
                    <>
                      <Bookmark size={15} />
                      <span>Tandai</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleCopyCitation(currentModule.citation)}
                  className="paper-btn-icon"
                  title="Salin Sitasi Format APA 7th"
                >
                  {copiedCitation ? (
                    <>
                      <Check size={15} className="text-leaf-dark" />
                      <span className="text-leaf-dark">Sitasi Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Salin Sitasi APA</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Abstract Callout */}
            <div className="paper-abstract-box">
              <div className="abstract-title">
                <Sparkles size={16} />
                <span>Abstrak Kajian Pascasarjana:</span>
              </div>
              <p className="abstract-text">{currentModule.abstract}</p>
            </div>
          </div>

          {/* Paper Body Sections */}
          <div className="paper-body-content">
            {currentModule.sections.map((section, idx) => (
              <article key={idx} className="paper-section-block">
                <h3 className="section-block-title">{section.subtitle}</h3>
                
                <p className="section-block-intro">{section.content}</p>

                {/* Mathematical Formula Render Block */}
                {section.formula && (
                  <div className="formula-block">
                    <span className="formula-label">
                      <Sigma size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                      Formulasi Matematis Terverifikasi:
                    </span>
                    <div className="formula-equation">{section.formula.equation}</div>
                    <div className="formula-annotation">{section.formula.note}</div>
                  </div>
                )}

                {/* Academic Comparative Table Render */}
                {section.table && (
                  <div className="academic-table-wrapper">
                    <div className="table-caption">
                      <TableIcon size={14} />
                      <span>Tabel Evaluasi Komparatif Matriks Sistem</span>
                    </div>
                    <table className="academic-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((th, hIdx) => (
                            <th key={hIdx}>{th}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>
                                {cIdx === 0 ? <strong>{cell}</strong> : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Deep Scientific Elaboration */}
                {section.elaboration && (
                  <div className="section-elaboration-text">
                    {section.elaboration.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Academic Footer Citation Box */}
          <div className="paper-citation-footer">
            <div className="citation-footer-label">Standar Rujukan Akademik (APA 7th Edition):</div>
            <div className="citation-footer-box">
              <p className="citation-text-string">{currentModule.citation}</p>
              <button 
                onClick={() => handleCopyCitation(currentModule.citation)}
                className="btn-copy-citation-small"
              >
                {copiedCitation ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedCitation ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
