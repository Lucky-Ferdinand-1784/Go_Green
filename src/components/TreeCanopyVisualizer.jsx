import React, { useState } from 'react';
import { 
  CANOPY_STRATA, 
  TREE_SPECIES 
} from '../data/treesData';
import { 
  TreePine, 
  Layers, 
  Sun, 
  Droplets, 
  Wind, 
  Sprout, 
  Info, 
  CheckCircle2, 
  ArrowUpRight,
  Activity,
  Compass,
  FileCheck
} from 'lucide-react';

export default function TreeCanopyVisualizer() {
  const [selectedStratum, setSelectedStratum] = useState(CANOPY_STRATA[1]); // Default to Upper Canopy
  const [selectedSpecies, setSelectedSpecies] = useState(TREE_SPECIES[0]);
  const [activeTab, setActiveTab] = useState('strata'); // 'strata', 'species', 'anatomy'

  return (
    <section id="dendro" className="section-container">
      {/* Header with Badges */}
      <div className="section-header-centered">
        <div className="badge-green">
          <TreePine size={14} />
          <span>Dendro-Atlas & Fisiologi Pohon Tropis</span>
        </div>
        <h2 className="section-title">
          Stratifikasi Kanopi, <span className="highlight-green">Anatomi Pohon Tropis</span> & 
          <br className="desktop-break" />
          Dinamika <span className="highlight-sky">Jaringan Mikoriza Bawah Tanah</span>
        </h2>
        <p className="section-subtitle">
          Eksplorasi struktur vertikal hutan hujan tropis dari lapisan tajuk emergent setinggi 65 meter 
          hingga jejaring hifa miselium di kedalaman rizosfer. Didukung data kerapatan kayu (wood density) 
          dan adaptasi ekofisiologis.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="dendro-tab-controls">
        <button
          onClick={() => setActiveTab('strata')}
          className={`dendro-tab-btn ${activeTab === 'strata' ? 'active' : ''}`}
        >
          <Layers size={17} />
          <span>4 Strata Vertikal Kanopi Hutan</span>
        </button>
        <button
          onClick={() => setActiveTab('species')}
          className={`dendro-tab-btn ${activeTab === 'species' ? 'active' : ''}`}
        >
          <TreePine size={17} />
          <span>Katalog Dendrologi Spesies Tropis</span>
        </button>
        <button
          onClick={() => setActiveTab('anatomy')}
          className={`dendro-tab-btn ${activeTab === 'anatomy' ? 'active' : ''}`}
        >
          <Activity size={17} />
          <span>Diagram Anatomi & Xilem-Floem</span>
        </button>
      </div>

      {/* TAB 1: 4 Strata Vertikal Kanopi */}
      {activeTab === 'strata' && (
        <div className="strata-grid-layout">
          {/* Left Column: Interactive Strata Picker */}
          <div className="strata-picker-column">
            <div className="strata-picker-intro">
              <span className="picker-title">Pilih Strata Ketinggian Vegetasi:</span>
              <span className="picker-hint">Klik lapisan untuk telaah parameter mikroklimat</span>
            </div>

            <div className="strata-buttons-list">
              {CANOPY_STRATA.map((stratum, idx) => {
                const isSelected = selectedStratum.id === stratum.id;
                return (
                  <div
                    key={stratum.id}
                    onClick={() => setSelectedStratum(stratum)}
                    className={`stratum-card-selector ${isSelected ? 'active-stratum' : ''}`}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="stratum-selector-header">
                      <div className="stratum-number-badge">{4 - idx}</div>
                      <div className="stratum-selector-meta">
                        <h4 className="stratum-name">{stratum.name}</h4>
                        <span className="stratum-height-tag">{stratum.heightRange}</span>
                      </div>
                    </div>
                    <p className="stratum-selector-excerpt">{stratum.characteristics.slice(0, 110)}...</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep Ecological Detail Panel */}
          <div className="strata-detail-column glass-panel">
            <div className="strata-detail-header">
              <div className="strata-meta-tags">
                <span className="badge-sky">{selectedStratum.heightRange}</span>
                <span className="badge-green">{selectedStratum.carbonFraction}</span>
              </div>
              <h3 className="strata-detail-title">{selectedStratum.name}</h3>
            </div>

            {/* Physiological Meters */}
            <div className="physiological-meters-grid">
              <div className="physio-card">
                <div className="physio-icon-row">
                  <Sun size={18} className="text-amber" />
                  <span className="physio-title">Penetrasi Cahaya Foton</span>
                </div>
                <div className="physio-value">{selectedStratum.lightLevel}</div>
                <div className="physio-bar-bg">
                  <div 
                    className="physio-bar-fill bg-amber"
                    style={{ 
                      width: selectedStratum.id === 'stratum-emergent' ? '98%' :
                             selectedStratum.id === 'stratum-upper' ? '75%' :
                             selectedStratum.id === 'stratum-understory' ? '25%' : '5%' 
                    }}
                  ></div>
                </div>
              </div>

              <div className="physio-card">
                <div className="physio-icon-row">
                  <Droplets size={18} className="text-sky" />
                  <span className="physio-title">Defisit Tekanan Uap (VPD)</span>
                </div>
                <div className="physio-value">{selectedStratum.vpd}</div>
                <div className="physio-bar-bg">
                  <div 
                    className="physio-bar-fill bg-sky"
                    style={{ 
                      width: selectedStratum.id === 'stratum-emergent' ? '90%' :
                             selectedStratum.id === 'stratum-upper' ? '60%' :
                             selectedStratum.id === 'stratum-understory' ? '30%' : '15%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="strata-full-analysis">
              <h4 className="analysis-subhead">Karakteristik Biofisika & Dinamika Kanopi:</h4>
              <p className="analysis-text">{selectedStratum.characteristics}</p>

              <div className="analysis-box">
                <div className="analysis-box-title">
                  <Sprout size={16} />
                  <span>Spesies Tegakan Representatif:</span>
                </div>
                <div className="species-chips-row">
                  {selectedStratum.keySpecies.map((spec, i) => (
                    <span key={i} className="species-chip">{spec}</span>
                  ))}
                </div>
              </div>

              <div className="carbon-significance-box">
                <div className="carbon-sig-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div className="carbon-sig-content">
                  <strong>Signifikansi Stok Karbon Ekosistem:</strong>
                  <p>{selectedStratum.carbonFraction}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Katalog Dendrologi Spesies Tropis */}
      {activeTab === 'species' && (
        <div className="species-catalog-layout">
          {/* Horizontal Species Selector Tabs */}
          <div className="species-horizontal-nav">
            {TREE_SPECIES.map((species) => {
              const isSelected = selectedSpecies.id === species.id;
              return (
                <button
                  key={species.id}
                  onClick={() => setSelectedSpecies(species)}
                  className={`species-nav-card ${isSelected ? 'active-species-nav' : ''}`}
                >
                  <TreePine size={20} className={isSelected ? 'text-leaf-dark' : 'text-leaf-light'} />
                  <div className="species-nav-text">
                    <span className="species-nav-local">{species.localName}</span>
                    <span className="species-nav-latin">{species.scientificName}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Species Detail Card */}
          <div className="species-profile-card glass-panel">
            <div className="profile-header-grid">
              <div className="profile-titles">
                <div className="profile-badge-row">
                  <span className="badge-green">{selectedSpecies.family}</span>
                  <span className="badge-sky">Wood Density: {selectedSpecies.woodDensity} g/cm³</span>
                </div>
                <h3 className="profile-local-name">{selectedSpecies.localName}</h3>
                <h4 className="profile-latin-name"><em>{selectedSpecies.scientificName}</em></h4>
              </div>

              {/* Dendrometric Metrics */}
              <div className="profile-stats-grid">
                <div className="stat-box">
                  <span className="stat-label">Tinggi Maksimum</span>
                  <span className="stat-val">{selectedSpecies.maxHeight} m</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Diameter DBH Rerata</span>
                  <span className="stat-val">{selectedSpecies.typicalDbh} cm</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Kerapatan Kayu (ρ)</span>
                  <span className="stat-val">{selectedSpecies.woodDensity} g/cm³</span>
                </div>
              </div>
            </div>

            <div className="profile-details-grid">
              <div className="detail-panel-box">
                <div className="panel-box-header">
                  <Wind size={16} className="text-sky" />
                  <h5>Laju Sekuestrasi Karbon & Mitigasi Emisi</h5>
                </div>
                <p>{selectedSpecies.sequestrationRate}</p>
              </div>

              <div className="detail-panel-box">
                <div className="panel-box-header">
                  <Compass size={16} className="text-leaf-dark" />
                  <h5>Habitat Ekologis & Sebaran Alami</h5>
                </div>
                <p>{selectedSpecies.habitat}</p>
              </div>

              <div className="detail-panel-box">
                <div className="panel-box-header">
                  <Sprout size={16} className="text-leaf-dark" />
                  <h5>Sistem Perakaran & Rizosfer</h5>
                </div>
                <p>{selectedSpecies.rootSystem}</p>
              </div>

              <div className="detail-panel-box">
                <div className="panel-box-header">
                  <Info size={16} className="text-amber" />
                  <h5>Peran Kunci Jasa Ekosistem (Ecosystem Services)</h5>
                </div>
                <p>{selectedSpecies.ecologicalRole}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Diagram Anatomi Pohon & Jaringan Mikoriza */}
      {activeTab === 'anatomy' && (
        <div className="anatomy-diagram-layout glass-panel">
          <div className="anatomy-diagram-header">
            <div>
              <span className="badge-academic">Diagram Fisiologi Terpadu</span>
              <h3 className="anatomy-title">Penampang Anatomi Pohon Raksasa & Jaringan Mikoriza Bawah Tanah</h3>
            </div>
            <p className="anatomy-lead">
              Mengilustrasikan aliran air dan nutrisi dari rambut akar xilem ke daun, translokasi gula floem, 
              serta simbiosis ektomikoriza yang mengikat karbon stabil ke profil tanah mineral (MAOM).
            </p>
          </div>

          <div className="anatomy-visual-container">
            <img 
              src="/tree_botany.jpg" 
              alt="Diagram ilmiah anatomi pohon, xilem, kambium, cincin lingkaran tahun, dan jejaring ektomikoriza" 
              className="anatomy-image-display"
            />
          </div>

          <div className="anatomy-explanation-grid">
            <div className="anatomy-note-card">
              <h4>1. Fotolisis & Translokasi Fotosintat (Tajuk Daun)</h4>
              <p>
                Kloroplas pada sel mesofil daun menangkap foton cahaya matahari untuk mengonversi $CO_2$ dan $H_2O$ 
                menjadi glukosa. Gula ditranslokasikan melalui tabung ayak floem ke seluruh kambium dan rizosfer.
              </p>
            </div>

            <div className="anatomy-note-card">
              <h4>2. Teori Kohesi-Tegangan Xilem (Batang Utama)</h4>
              <p>
                Penguapan air dari stomata menciptakan tegangan negatif hingga -3.0 MPa. Ikatan hidrogen antar molekul air 
                menarik kolom getah naik melalui trakeid dan pembuluh xilem tanpa pengeluaran energi ATP mekanis.
              </p>
            </div>

            <div className="anatomy-note-card">
              <h4>3. Dendrokronologi & Kerapatan Kayu (Kambium)</h4>
              <p>
                Lingkaran tahun (growth rings) terbentuk dari variasi sel kayu awal (earlywood) yang lebar dan kayu akhir (latewood) yang rapat. 
                Ketebalan dan densitas selulosa menjadi proksi iklim masa lalu dan indeks sekuestrasi karbon stabil.
              </p>
            </div>

            <div className="anatomy-note-card">
              <h4>4. Wood Wide Web & Ektomikoriza (Rizosfer)</h4>
              <p>
                Hifa jamur mikoriza memperluas luas permukaan penyerapan akar hingga 1000× lipat, menukar fosfor dan nitrogen 
                dengan 20-40% karbon hasil fotosintesis pohon, membentuk cadangan karbon tanah organik (SOC) jangka panjang.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
