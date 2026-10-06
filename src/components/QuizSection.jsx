import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  GraduationCap, 
  Printer, 
  Sparkles,
  ShieldCheck,
  FileBadge
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [candidateName, setCandidateName] = useState('Kandidat Magister Ilmu Lingkungan');

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOptionIdx(idx);
    setIsAnswered(true);

    const isCorrect = currentQ.options[idx].isCorrect;
    if (isCorrect) {
      setUserScore(prev => prev + 10);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOptionIdx(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      // Trigger festive celebration if high score!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOptionIdx(null);
    setIsAnswered(false);
    setUserScore(0);
    setQuizFinished(false);
  };

  const getPredicate = (score) => {
    if (score >= 90) return { title: 'Summa Cum Laude', desc: 'Pemahaman Epistemologi & Analisis Biosfer Paripurna (Level Peneliti Utama)' };
    if (score >= 80) return { title: 'Magna Cum Laude', desc: 'Penguasaan Metodologis & Analitik Sangat Tinggi' };
    if (score >= 70) return { title: 'Cum Laude', desc: 'Lulus Kualifikasi Kompetensi Magister Sains Lingkungan' };
    return { title: 'Lulus Bersyarat', desc: 'Direkomendasikan Memperdalam Telaah Pustaka & Formulasi Matematis' };
  };

  const predicate = getPredicate(userScore);

  return (
    <section id="quiz" className="section-container">
      {/* Header */}
      <div className="section-header-centered">
        <div className="badge-academic">
          <Award size={14} />
          <span>Uji Kompetensi Akademik</span>
        </div>
        <h2 className="section-title">
          Evaluasi Rigor: <span className="highlight-green">Analisis Biosfer</span> & 
          <br className="desktop-break" />
          <span className="highlight-sky">Pemodelan Iklim Terapan</span>
        </h2>
        <p className="section-subtitle">
          Instrumen pengujian berbasis taksonomi Bloom C4 (Analisis) hingga C5 (Evaluasi). 
          Dilengkapi umpan balik akademik komprehensif pada setiap opsi jawaban.
        </p>
      </div>

      {!quizFinished ? (
        <div className="quiz-card-wrapper glass-panel">
          {/* Progress Bar & Indicators */}
          <div className="quiz-header-bar">
            <div className="quiz-progress-meta">
              <span className="badge-sky">Soal {currentIdx + 1} dari {QUIZ_QUESTIONS.length}</span>
              <span className="badge-green">{currentQ.category}</span>
              <span className="badge-academic">{currentQ.level}</span>
            </div>
            <div className="quiz-score-live">
              Skor Akumulatif: <strong>{userScore} / 100</strong>
            </div>
          </div>

          <div className="quiz-progress-track">
            <div 
              className="quiz-progress-bar-fill"
              style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Prompt */}
          <div className="quiz-question-body">
            <h3 className="quiz-question-text">{currentQ.question}</h3>
          </div>

          {/* Options List */}
          <div className="quiz-options-grid">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOptionIdx === idx;
              let optionClass = 'quiz-option-btn';

              if (isAnswered) {
                if (option.isCorrect) {
                  optionClass += ' option-correct';
                } else if (isSelected) {
                  optionClass += ' option-incorrect';
                } else {
                  optionClass += ' option-dimmed';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={optionClass}
                >
                  <div className="option-letter-badge">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <div className="option-content-text">
                    <p>{option.text}</p>
                    {isAnswered && (option.isCorrect || isSelected) && (
                      <div className="option-feedback-note">
                        <strong>Ulasan Akademik:</strong> {option.feedback}
                      </div>
                    )}
                  </div>
                  {isAnswered && option.isCorrect && (
                    <CheckCircle2 size={20} className="option-status-icon text-leaf-dark" />
                  )}
                  {isAnswered && isSelected && !option.isCorrect && (
                    <XCircle size={20} className="option-status-icon text-red" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="quiz-footer-actions">
            {isAnswered && (
              <button onClick={handleNext} className="btn-next-question">
                <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Lanjut ke Soal Berikutnya' : 'Lihat Hasil & Terbitkan Sertifikat'}</span>
                <ArrowRight size={17} />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Certificate & Final Result Card */
        <div className="quiz-result-wrapper glass-panel">
          <div className="result-header-row">
            <div className="result-icon-celebrate">
              <GraduationCap size={40} className="text-leaf-dark" />
            </div>
            <div>
              <span className="badge-academic">Evaluasi Pascasarjana Selesai</span>
              <h3 className="result-title">Hasil Uji Pemahaman Kompetensi Magister</h3>
            </div>
          </div>

          {/* Score & Honors Hero */}
          <div className="result-score-hero">
            <div className="score-big-circle">
              <span className="score-num">{userScore}</span>
              <span className="score-denom">/ 100</span>
            </div>
            <div className="score-summary-details">
              <h4 className="predicate-title">{predicate.title}</h4>
              <p className="predicate-desc">{predicate.desc}</p>
              <div className="result-stats-row">
                <span className="stat-pill-result">Total Soal: 10 Soal Analisis</span>
                <span className="stat-pill-result">Akurasi: {userScore}%</span>
                <span className="stat-pill-result">Status: Terverifikasi</span>
              </div>
            </div>
          </div>

          {/* Name Editor for Certificate */}
          <div className="certificate-name-box">
            <label className="cert-label">Nama Lengkap Pemegang Sertifikat (dapat diedit):</label>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="cert-name-input"
              placeholder="Masukkan nama lengkap & gelar akademik..."
            />
          </div>

          {/* Printable Digital Certificate */}
          <div className="digital-certificate-card" id="certificate-print-area">
            <div className="cert-watermark">SYLVASPHERE</div>
            <div className="cert-border-outer">
              <div className="cert-border-inner">
                <div className="cert-header">
                  <div className="cert-logo-row">
                    <FileBadge size={32} className="text-leaf-dark" />
                    <span>SYLVASPHERE ACADEMIC BOARD OF SUSTAINABILITY</span>
                  </div>
                  <h2 className="cert-title">SERTIFIKAT KOMPETENSI ILMU LINGKUNGAN</h2>
                  <p className="cert-subtitle">Certificate of Advanced Environmental & Biosphere Informatics</p>
                </div>

                <div className="cert-body">
                  <p className="cert-declare">Dengan ini menyatakan bahwa:</p>
                  <h3 className="cert-recipient-name">{candidateName || 'Kandidat Magister Sains'}</h3>
                  <p className="cert-reason">
                    Telah berhasil menyelesaikan rangkaian evaluasi kritis komprehensif mencakup 
                    <strong> Dinamika Iklim CMIP6, Allometri Biomassa Chave 2014, GHG Protocol Scope 1-3, ISO 14040/44 LCA, dan Ekonomi Karbon Paris Agreement</strong> dengan predikat:
                  </p>
                  <div className="cert-predicate-tag">
                    {predicate.title} — Nilai: {userScore} / 100
                  </div>
                </div>

                <div className="cert-footer-grid">
                  <div className="cert-sign-col">
                    <div className="cert-sign-line"></div>
                    <span className="cert-sign-name">Prof. Dr. Ir. Sylva Arboreta, M.Sc.</span>
                    <span className="cert-sign-role">Ketua Komite Sains Biosfer</span>
                  </div>
                  <div className="cert-meta-col">
                    <span>No. Registrasi: SYL-{Math.floor(100000 + Math.random() * 900000)}</span>
                    <span>Tanggal: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="cert-seal">TERVERIFIKASI RESMI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Actions */}
          <div className="cert-action-row">
            <button 
              onClick={() => window.print()} 
              className="btn-print-cert"
            >
              <Printer size={16} />
              <span>Cetak / Simpan PDF Sertifikat</span>
            </button>

            <button 
              onClick={handleRestart} 
              className="btn-retry-quiz"
            >
              <RotateCcw size={16} />
              <span>Ulangi Ujian</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
