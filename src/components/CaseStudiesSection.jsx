import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { 
  FileText, 
  MapPin, 
  HelpCircle, 
  TrendingUp, 
  AlertCircle, 
  ArrowRight,
  Compass,
  CheckCircle2,
  Share2
} from 'lucide-react';

export default function CaseStudiesSection() {
  const [selectedCaseId, setSelectedCaseId] = useState(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find(c => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="cases" className="section-container">
      {/* Header */}
      <div className="section-header-centered">
        <div className="badge-green">
          <FileText size={14} />
          <span>Analisis Kebijakan & Empiris Lapangan</span>
        </div>
        <h2 className="section-title">
          4 Studi Kasus Lapangan: <span className="highlight-green">Dilema Biogeokimia</span> & 
          <br className="desktop-break" />
          <span className="highlight-sky">Diplomasi Iklim Global</span>
        </h2>
        <p className="section-subtitle">
          Analisis kritis skenario nyata di Indonesia dan dunia, menguji pemahaman mahasiswa magister 
          terhadap trade-off biogeokimia tanah, keadilan iklim internasional, dan rekayasa ekologi teknosfer.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="cases-tab-grid">
        {CASE_STUDIES.map((c) => {
          const isSelected = c.id === selectedCaseId;
          return (
            <div
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`case-tab-card ${isSelected ? 'active-case-card' : ''}`}
              role="button"
              tabIndex={0}
            >
              <div className="case-card-meta">
                <span className="case-theme-pill">{c.theme}</span>
              </div>
              <h4 className="case-card-title">{c.title}</h4>
              <div className="case-card-loc">
                <MapPin size={13} />
                <span>{c.location.split(',')[0]}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Case Deep Dive Document */}
      <div className="case-detail-document glass-panel">
        <div className="case-detail-header">
          <div className="case-badges-row">
            <span className="badge-academic">Kajian Kasus Lapangan</span>
            <span className="badge-sky">{activeCase.theme}</span>
          </div>
          <h2 className="case-main-title">{activeCase.title}</h2>
          <div className="case-location-row">
            <MapPin size={16} className="text-leaf-dark" />
            <span>Lokasi Studi: <strong>{activeCase.location}</strong></span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="case-summary-box">
          <h4 className="summary-title">Ringkasan Eksekutif & Konteks Strategis:</h4>
          <p>{activeCase.executiveSummary}</p>
        </div>

        {/* Problem Statement */}
        <div className="case-problem-box">
          <div className="problem-icon-header">
            <AlertCircle size={18} className="text-amber" />
            <h4>Formulasi Masalah & Tantangan Biofisika / Ekonomi:</h4>
          </div>
          <p>{activeCase.problemStatement}</p>
        </div>

        {/* Metrics Grid */}
        <div className="case-metrics-grid">
          {activeCase.dataMetrics.map((dm, idx) => (
            <div key={idx} className="case-metric-card">
              <span className="case-metric-label">{dm.label}</span>
              <span className="case-metric-value green-text">{dm.value}</span>
              <span className="case-metric-context">{dm.context}</span>
            </div>
          ))}
        </div>

        {/* Analytical Points */}
        <div className="case-analysis-blocks">
          <h3 className="analysis-heading">Kajian Teoretis & Dinamika Sistem:</h3>
          <div className="analysis-cards-grid">
            {activeCase.analyticalPoints.map((ap, idx) => (
              <div key={idx} className="analysis-point-card">
                <div className="point-card-header">
                  <span className="point-number">{idx + 1}</span>
                  <h4>{ap.heading}</h4>
                </div>
                <p>{ap.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Discussion Prompt for Master's Students */}
        <div className="discussion-prompt-box">
          <div className="prompt-header">
            <HelpCircle size={20} className="text-sky" />
            <h4>Pertanyaan Diskursif Analisis:</h4>
          </div>
          <p className="prompt-content">{activeCase.discussionPrompt}</p>
          <div className="prompt-footer-hint">
            💡 Disarankan menyusun argumen berbasis referensi jurnal peer-reviewed terindeks bereputasi.
          </div>
        </div>
      </div>
    </section>
  );
}
