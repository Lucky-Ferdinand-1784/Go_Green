import React, { useState } from 'react';
import { 
  Calculator, 
  TreePine, 
  Leaf, 
  Sigma, 
  Building2, 
  TrendingDown, 
  RotateCcw, 
  Share2, 
  Check, 
  FileSpreadsheet,
  HelpCircle,
  Car,
  Plane
} from 'lucide-react';
import { TREE_SPECIES } from '../data/treesData';

export default function CarbonCalculator() {
  const [activeTab, setActiveTab] = useState('allometry'); // 'allometry' or 'ghg'

  // TOOL A: Allometri Pohon
  const [selectedSpeciesId, setSelectedSpeciesId] = useState(TREE_SPECIES[0].id);
  const [dbh, setDbh] = useState(65); // cm
  const [height, setHeight] = useState(38); // meter
  const [woodDensity, setWoodDensity] = useState(0.52); // g/cm3

  // TOOL B: GHG Protocol Scope 1-3
  const [dieselLiters, setDieselLiters] = useState(12000); // L
  const [petrolLiters, setPetrolLiters] = useState(8500); // L
  const [electricityMwh, setElectricityMwh] = useState(180); // MWh
  const [businessFlightsKm, setBusinessFlightsKm] = useState(45000); // km passenger
  const [supplyChainTons, setSupplyChainTons] = useState(120); // ton barang hulu

  // Hitung Tool A (Chave et al. 2014 & Cairns et al. 1997)
  const calculateAllometry = () => {
    const D = Math.max(1, Number(dbh));
    const H = Math.max(1, Number(height));
    const rho = Math.max(0.1, Number(woodDensity));

    // AGB = 0.0673 * (rho * D^2 * H)^0.976  (dalam kg)
    const innerTerm = rho * Math.pow(D, 2) * H;
    const agbKg = 0.0673 * Math.pow(innerTerm, 0.976);
    
    // BGB = 0.205 * (AGB)^0.92  (Cairns et al. 1997 shoot-to-root)
    const bgbKg = 0.205 * Math.pow(agbKg, 0.92);

    const totalBiomassKg = agbKg + bgbKg;
    const totalBiomassTon = totalBiomassKg / 1000;

    // Karbon murni (IPCC standard 0.47)
    const carbonStockKg = totalBiomassKg * 0.47;
    const carbonStockTon = carbonStockKg / 1000;

    // CO2 Equivalent (rasio stokiometri 44/12 = 3.6667)
    const co2EqKg = carbonStockKg * (44 / 12);
    const co2EqTon = co2EqKg / 1000;

    // Ekuivalen jarak tempuh mobil bensin (asumsi 192 g CO2/km)
    const carKmEquivalent = Math.round(co2EqKg / 0.192);

    return {
      agbKg: agbKg.toFixed(1),
      agbTon: (agbKg / 1000).toFixed(2),
      bgbKg: bgbKg.toFixed(1),
      totalBiomassTon: totalBiomassTon.toFixed(2),
      carbonStockTon: carbonStockTon.toFixed(2),
      co2EqTon: co2EqTon.toFixed(2),
      carKmEquivalent: carKmEquivalent.toLocaleString('id-ID'),
      innerTerm: innerTerm.toFixed(1)
    };
  };

  const handleSpeciesChange = (speciesId) => {
    setSelectedSpeciesId(speciesId);
    const sp = TREE_SPECIES.find(s => s.id === speciesId);
    if (sp) {
      setWoodDensity(sp.woodDensity);
      setDbh(sp.typicalDbh);
      setHeight(sp.maxHeight * 0.75); // estimasi tinggi proporsional
    }
  };

  // Hitung Tool B: GHG Protocol Corporate Standard
  const calculateGhg = () => {
    // Scope 1: Diesel EF ~ 2.68 kg CO2e/L, Bensin EF ~ 2.31 kg CO2e/L
    const s1Diesel = (Number(dieselLiters) * 2.68) / 1000; // tCO2e
    const s1Petrol = (Number(petrolLiters) * 2.31) / 1000; // tCO2e
    const scope1Total = s1Diesel + s1Petrol;

    // Scope 2: Grid PLN Jawa-Bali / Indonesia rerata EF ~ 0.78 tCO2e/MWh
    const scope2Total = Number(electricityMwh) * 0.78;

    // Scope 3: Penerbangan EF ~ 0.15 kg CO2e/km-pnp, Pengadaan bahan baku ~ 0.85 tCO2e/t
    const s3Flights = (Number(businessFlightsKm) * 0.15) / 1000;
    const s3Supply = Number(supplyChainTons) * 0.85;
    const scope3Total = s3Flights + s3Supply;

    const grandTotal = scope1Total + scope2Total + scope3Total;

    // Target SBTi 1.5C (reduksi 4.2% per tahun)
    const annualTargetReduction = grandTotal * 0.042;

    // Berapa pohon Trembesi dewasa dibutuhkan untuk meng-offset emisi tahunan ini (asumsi 1 ton CO2/thn per pohon dewasa)
    const treesNeeded = Math.ceil(grandTotal / 1.0);

    return {
      scope1: scope1Total.toFixed(2),
      scope2: scope2Total.toFixed(2),
      scope3: scope3Total.toFixed(2),
      grandTotal: grandTotal.toFixed(2),
      targetReduksi: annualTargetReduction.toFixed(2),
      treesNeeded: treesNeeded.toLocaleString('id-ID'),
      s1Pct: grandTotal > 0 ? ((scope1Total / grandTotal) * 100).toFixed(1) : 0,
      s2Pct: grandTotal > 0 ? ((scope2Total / grandTotal) * 100).toFixed(1) : 0,
      s3Pct: grandTotal > 0 ? ((scope3Total / grandTotal) * 100).toFixed(1) : 0
    };
  };

  const allometryRes = calculateAllometry();
  const ghgRes = calculateGhg();

  return (
    <section id="calculator" className="section-container">
      {/* Header */}
      <div className="section-header-centered">
        <div className="badge-sky">
          <Calculator size={14} />
          <span>Lab Komputasi Bio-Kuantitatif & Akuntansi Emisi</span>
        </div>
        <h2 className="section-title">
          Simulator Allometri Biomassa Pohon & 
          <br className="desktop-break" />
          <span className="highlight-green">Protokol GRK Scope 1-3 Standar WRI</span>
        </h2>
        <p className="section-subtitle">
          Instrumen kalkulasi saintifik berbasis persamaan allometrik pan-tropis 
          <strong> Chave et al. (2014)</strong> dan standar inventarisasi korporasi 
          <strong> GHG Protocol / ISO 14064</strong>.
        </p>
      </div>

      {/* Switch Tab: Allometri vs GHG */}
      <div className="calc-tab-controls">
        <button
          onClick={() => setActiveTab('allometry')}
          className={`calc-tab-btn ${activeTab === 'allometry' ? 'active' : ''}`}
        >
          <TreePine size={17} />
          <span>Kalkulator Allometri & Stok Karbon Pohon (Chave 2014)</span>
        </button>
        <button
          onClick={() => setActiveTab('ghg')}
          className={`calc-tab-btn ${activeTab === 'ghg' ? 'active' : ''}`}
        >
          <Building2 size={17} />
          <span>Audit Jejak Emisi GHG Protocol (Scope 1, 2, 3)</span>
        </button>
      </div>

      {/* TOOL 1: Allometri Pohon */}
      {activeTab === 'allometry' && (
        <div className="calc-workspace-grid">
          {/* Input Panel */}
          <div className="calc-input-panel glass-panel">
            <div className="panel-top-title">
              <TreePine size={18} className="text-leaf-dark" />
              <h3>Parameter Dendrometrik Spesies Pohon</h3>
            </div>

            {/* Species Preset */}
            <div className="form-group">
              <label className="form-label">Pilih Spesies Pohon Tropis:</label>
              <select
                value={selectedSpeciesId}
                onChange={(e) => handleSpeciesChange(e.target.value)}
                className="form-select"
              >
                {TREE_SPECIES.map((sp) => (
                  <option key={sp.id} value={sp.id}>
                    {sp.localName} ({sp.scientificName}) - ρ = {sp.woodDensity} g/cm³
                  </option>
                ))}
              </select>
            </div>

            {/* DBH Slider & Input */}
            <div className="form-group">
              <div className="form-label-row">
                <label className="form-label">Diameter Setinggi Dada (DBH):</label>
                <span className="input-value-badge">{dbh} cm</span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="1"
                value={dbh}
                onChange={(e) => setDbh(Number(e.target.value))}
                className="form-slider"
              />
              <div className="slider-limits">
                <span>10 cm (Tiang)</span>
                <span>250 cm (Pohon Raksasa Tua)</span>
              </div>
            </div>

            {/* Height Slider & Input */}
            <div className="form-group">
              <div className="form-label-row">
                <label className="form-label">Tinggi Total Pohon (H):</label>
                <span className="input-value-badge">{height} meter</span>
              </div>
              <input
                type="range"
                min="5"
                max="75"
                step="1"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="form-slider"
              />
              <div className="slider-limits">
                <span>5 meter</span>
                <span>75 meter (Tajuk Emergent)</span>
              </div>
            </div>

            {/* Wood Density Input */}
            <div className="form-group">
              <div className="form-label-row">
                <label className="form-label">Kerapatan Kayu Spesifik (Wood Density, ρ):</label>
                <span className="input-value-badge">{woodDensity} g/cm³</span>
              </div>
              <input
                type="number"
                step="0.01"
                min="0.1"
                max="1.4"
                value={woodDensity}
                onChange={(e) => setWoodDensity(Number(e.target.value))}
                className="form-number-input"
              />
              <span className="form-hint">Rentang tropis tipikal: 0.25 (pionir) s/d 1.10 (kayu besi).</span>
            </div>

            {/* Formula Reference Box */}
            <div className="calc-formula-mini-box">
              <span className="mini-box-title">Formulasi Komputasi:</span>
              <code>AGB = 0.0673 × (ρ × D² × H)⁰·⁹⁷⁶</code>
              <p>Stokiometri: CO₂e = Karbon (0.47 Biomassa Kering) × 3.667</p>
            </div>
          </div>

          {/* Results Output Panel */}
          <div className="calc-output-panel glass-panel">
            <div className="output-panel-header">
              <span className="badge-academic">Hasil Estimasi Biometrik</span>
              <h3 className="output-panel-title">Cadangan Karbon & Sekuestrasi Terikat</h3>
            </div>

            <div className="primary-metric-hero">
              <div className="metric-super-label">Total Sekuestrasi Ekuivalen Karbon Dioksida:</div>
              <div className="metric-super-val green-text">
                {allometryRes.co2EqTon} <span className="super-unit">Ton CO₂e</span>
              </div>
              <p className="metric-super-desc">
                Jumlah emisi gas rumah kaca yang terkunci permanen dalam struktur selulosa, hemiselulosa, dan lignin pohon ini.
              </p>
            </div>

            <div className="metrics-subgrid">
              <div className="submetric-card">
                <span className="submetric-label">Biomassa Atas (AGB)</span>
                <span className="submetric-val">{allometryRes.agbTon} Ton</span>
                <span className="submetric-sub">{allometryRes.agbKg} kg</span>
              </div>

              <div className="submetric-card">
                <span className="submetric-label">Biomassa Bawah (BGB)</span>
                <span className="submetric-val">{allometryRes.bgbKg} kg</span>
                <span className="submetric-sub">Rasio akar Cairns 1997</span>
              </div>

              <div className="submetric-card">
                <span className="submetric-label">Total Biomassa Kering</span>
                <span className="submetric-val">{allometryRes.totalBiomassTon} Ton</span>
                <span className="submetric-sub">Kadar air 0% (Oven dry)</span>
              </div>

              <div className="submetric-card">
                <span className="submetric-label">Stok Karbon Murni (C)</span>
                <span className="submetric-val green-text">{allometryRes.carbonStockTon} Ton C</span>
                <span className="submetric-sub">Fraksi IPCC 47%</span>
              </div>
            </div>

            {/* Real World Ecological Equivalence */}
            <div className="carbon-offset-equivalence-card">
              <div className="equiv-icon-circle">
                <Car size={22} className="text-leaf-dark" />
              </div>
              <div className="equiv-text-content">
                <strong>Ekuivalensi Kompensasi Emisi Riil:</strong>
                <p>
                  Karbon terikat pada satu pohon ini setara dengan mengimbangi perjalanan mobil penumpang berbahan bakar bensin sejauh{' '}
                  <strong className="text-green-dark">{allometryRes.carKmEquivalent} km</strong>, atau setara membatalkan keliling bumi sebanyak ~{Math.round(parseInt(allometryRes.carKmEquivalent.replace(/\./g, '')) / 40075)} kali!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 2: GHG Protocol Scope 1, 2, 3 */}
      {activeTab === 'ghg' && (
        <div className="calc-workspace-grid">
          {/* Input Panel */}
          <div className="calc-input-panel glass-panel">
            <div className="panel-top-title">
              <Building2 size={18} className="text-sky" />
              <h3>Data Aktivitas Emisi Organisasi (Tahunan)</h3>
            </div>

            {/* Scope 1: Diesel & Petrol */}
            <div className="scope-group-box">
              <span className="scope-title-badge bg-leaf-soft">Scope 1: Emisi Pembakaran Langsung</span>
              
              <div className="form-group-compact">
                <label className="form-label-compact">Bahan Bakar Solar (Genset / Alat Berat):</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    value={dieselLiters}
                    onChange={(e) => setDieselLiters(Math.max(0, Number(e.target.value)))}
                    className="form-compact-input"
                  />
                  <span className="unit-label">Liter/thn</span>
                </div>
              </div>

              <div className="form-group-compact">
                <label className="form-label-compact">Bensin Armada Kendaraan Operasional:</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    value={petrolLiters}
                    onChange={(e) => setPetrolLiters(Math.max(0, Number(e.target.value)))}
                    className="form-compact-input"
                  />
                  <span className="unit-label">Liter/thn</span>
                </div>
              </div>
            </div>

            {/* Scope 2: Grid Electricity */}
            <div className="scope-group-box">
              <span className="scope-title-badge bg-sky-soft">Scope 2: Konsumsi Listrik Grid</span>
              <div className="form-group-compact">
                <label className="form-label-compact">Konsumsi Listrik Jaringan PLN:</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    value={electricityMwh}
                    onChange={(e) => setElectricityMwh(Math.max(0, Number(e.target.value)))}
                    className="form-compact-input"
                  />
                  <span className="unit-label">MWh/thn</span>
                </div>
                <span className="form-hint">Faktor Emisi Grid: 0.78 tCO₂e/MWh (Location-based).</span>
              </div>
            </div>

            {/* Scope 3: Travel & Value Chain */}
            <div className="scope-group-box">
              <span className="scope-title-badge bg-amber-soft">Scope 3: Rantai Nilai Rantai Pasok</span>
              <div className="form-group-compact">
                <label className="form-label-compact">Penerbangan Perjalanan Bisnis Karyawan:</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    value={businessFlightsKm}
                    onChange={(e) => setBusinessFlightsKm(Math.max(0, Number(e.target.value)))}
                    className="form-compact-input"
                  />
                  <span className="unit-label">km-orang</span>
                </div>
              </div>

              <div className="form-group-compact">
                <label className="form-label-compact">Pengadaan Material & Logistik Hulu:</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    value={supplyChainTons}
                    onChange={(e) => setSupplyChainTons(Math.max(0, Number(e.target.value)))}
                    className="form-compact-input"
                  />
                  <span className="unit-label">Ton/thn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="calc-output-panel glass-panel">
            <div className="output-panel-header">
              <span className="badge-academic">Neraca Emisi GHG Protocol</span>
              <h3 className="output-panel-title">Inventarisasi Total Gas Rumah Kaca</h3>
            </div>

            <div className="primary-metric-hero">
              <div className="metric-super-label">Total Jejak Emisi Karbon Organisasi:</div>
              <div className="metric-super-val sky-text">
                {ghgRes.grandTotal} <span className="super-unit">Ton CO₂e/Tahun</span>
              </div>
              <p className="metric-super-desc">
                Agregasi emisi gas rumah kaca berbasis CO₂-ekuivalen mengikuti standar audit ISO 14064-1.
              </p>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="ghg-breakdown-container">
              <div className="breakdown-label-row">
                <span>Proporsi Kontribusi Cakupan:</span>
                <span>100% Emisi Terverifikasi</span>
              </div>
              <div className="ghg-stacked-bar">
                <div 
                  className="bar-slice bg-leaf" 
                  style={{ width: `${ghgRes.s1Pct}%` }}
                  title={`Scope 1: ${ghgRes.s1Pct}%`}
                ></div>
                <div 
                  className="bar-slice bg-sky" 
                  style={{ width: `${ghgRes.s2Pct}%` }}
                  title={`Scope 2: ${ghgRes.s2Pct}%`}
                ></div>
                <div 
                  className="bar-slice bg-amber" 
                  style={{ width: `${ghgRes.s3Pct}%` }}
                  title={`Scope 3: ${ghgRes.s3Pct}%`}
                ></div>
              </div>

              <div className="ghg-legend-grid">
                <div className="legend-item">
                  <span className="legend-dot bg-leaf"></span>
                  <div className="legend-desc">
                    <strong>Scope 1: {ghgRes.scope1} tCO₂e</strong>
                    <span>({ghgRes.s1Pct}% - Pembakaran Langsung)</span>
                  </div>
                </div>

                <div className="legend-item">
                  <span className="legend-dot bg-sky"></span>
                  <div className="legend-desc">
                    <strong>Scope 2: {ghgRes.scope2} tCO₂e</strong>
                    <span>({ghgRes.s2Pct}% - Listrik Jaringan)</span>
                  </div>
                </div>

                <div className="legend-item">
                  <span className="legend-dot bg-amber"></span>
                  <div className="legend-desc">
                    <strong>Scope 3: {ghgRes.scope3} tCO₂e</strong>
                    <span>({ghgRes.s3Pct}% - Rantai Pasok & Perjalanan)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Targets Card */}
            <div className="sbti-target-box">
              <div className="sbti-header">
                <TrendingDown size={18} className="text-leaf-dark" />
                <strong>Rekomendasi Jalur Dekarbonisasi (SBTi 1.5°C):</strong>
              </div>
              <p>
                Untuk menyelaraskan dengan target batas pemanasan global 1.5°C, organisasi wajib mereduksi minimal{' '}
                <strong>{ghgRes.targetReduksi} Ton CO₂e</strong> di tahun pertama (-4.2% per tahun).
              </p>
              <div className="offset-trees-pill">
                <TreePine size={16} />
                <span>Atau membutuhkan konservasi sekitar <strong>{ghgRes.treesNeeded} pohon kanopi dewasa</strong> untuk netralitas karbon tahunan.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
