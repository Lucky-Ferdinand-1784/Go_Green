// Modul Riset Tingkat Pascasarjana (S2) Ilmu Lingkungan & Dekarbonisasi

export const MODULES_DATA = [
  {
    id: "modul-1",
    code: "ENV-701",
    title: "Dinamika Iklim Global, Forcing Radiatif & Pemodelan Sistem Bumi (CMIP6)",
    field: "Atmosfer & Earth System Science",
    level: "Riset Lanjutan",
    readTime: "22 menit",
    doi: "10.1016/j.gloenvcha.2024.102847",
    citation: "IPCC (2023). Sixth Assessment Report: Earth System Dynamics and Coupled Model Intercomparison Project Phase 6 (CMIP6). Cambridge University Press.",
    abstract: "Modul ini mengkaji secara termodinamis dan komputasional mekanisme forcing radiatif antropogenik, umpan balik albedo es-kanopi, serta proyeksi trajektori SSP (Shared Socioeconomic Pathways) berdasarkan ansambel CMIP6 untuk mitigasi ambang batas 1.5°C.",
    sections: [
      {
        subtitle: "1. Termodinamika Forcing Radiatif dan Sensitivitas Iklim Ekuilibrium (ECS)",
        content: `Ketidakseimbangan energi bumi (Planetary Energy Imbalance - EEI) terjadi ketika fluks radiasi matahari gelombang pendek yang diserap biosfer melebihi fluks radiasi gelombang panjang inframerah yang dipancarkan kembali ke luar angkasa. Secara matematis, forcing radiatif akibat akumulasi konsentrasi gas rumah kaca ($CO_2$) dimodelkan melalui formulasi logaritmik Myhre et al. (1998) yang diadopsi oleh IPCC AR6:`,
        formula: {
          equation: "ΔF = α · ln(C / C₀)   [W/m²]",
          note: "Dimana α ≈ 5.35 W/m², C adalah konsentrasi atmosfer saat ini (~424 ppm per 2024), dan C₀ adalah garis dasar pra-industri (280 ppm)."
        },
        elaboration: `Peningkatan konsentrasi CO2 menjadi dua kali lipat (2xCO2 atau 560 ppm) menghasilkan forcing radiatif instan sekitar ΔF = 3.71 W/m². Respons temperatur global jangka panjang diatur oleh Equilibrium Climate Sensitivity (ECS), yang didefinisikan sebagai:
        
ECS = -ΔF₂ₓ / λ

Dimana λ merupakan parameter umpan balik iklim neto (W·m⁻²·K⁻¹). Berdasarkan laporan IPCC AR6 Working Group I, rentang nilai paling mungkin untuk ECS berada pada 2.5°C hingga 4.0°C dengan estimasi terbaik 3.0°C. Umpan balik positif terbesar berasal dari uap air (Clausius-Clapeyron relation ~7% peningkatan uap air per kenaikan 1°C) dan penurunan albedo kanopi hutan/krioster.`
      },
      {
        subtitle: "2. Matriks Skenario SSP (Shared Socioeconomic Pathways) & Tipping Elements",
        content: `Dalam pemodelan sistem iklim modern, skenario emisi tidak lagi menggunakan skenario linier SRES sederhana, melainkan matriks gabungan Shared Socioeconomic Pathways (SSP) dan Representative Concentration Pathways (RCP):`,
        table: {
          headers: ["Skenario", "Tingkat Forcing 2100", "Trajektori Suhu Global", "Karakteristik Sosio-Ekologis"],
          rows: [
            ["SSP1-1.9", "1.9 W/m²", "1.4°C (Stabilisasi Pasca-2050)", "Pembangunan hijau agresif, ekonomi sirkular global, reboisasi masif."],
            ["SSP1-2.6", "2.6 W/m²", "1.8°C (Penurunan moderat)", "Transisi energi terbarukan cepat, efisiensi sumber daya tinggi."],
            ["SSP2-4.5", "4.5 W/m²", "2.7°C (Jalur menengah)", "Tren saat ini (Middle of the Road), dekarbonisasi lambat."],
            ["SSP3-7.0", "7.0 W/m²", "3.6°C (Dunia terfragmentasi)", "Rivalitas regional, degradasi hutan berlanjut, ketahanan pangan rapuh."],
            ["SSP5-8.5", "8.5 W/m²", "4.4°C (Fossil-fueled Growth)", "Eksploitasi intensif bahan bakar fosil tanpa kendali kebijakan global."]
          ]
        },
        elaboration: `Analisis risiko pascasarjana berfokus pada Tipping Points (Lenton et al., 2019; Armstrong McKay et al., 2022). Jika pemanasan global melampaui 1.5°C, terjadi aktivasi komponen non-linier biosfer, meliputi:
1. Kolaps Sirkulasi Pembalikan Meridional Atlantik (AMOC).
2. Savanisasi Hutan Hujan Tropis Amazon akibat gangguan siklus transpirasi kanopi.
3. Pelepasan termokarst dari permafrost boreal (emisi metana sub-artik yang melipatgandakan forcing).`
      }
    ]
  },
  {
    id: "modul-2",
    code: "ENV-702",
    title: "Dendrologi Kuantitatif, Allometri Kanopi & Fluks Karbon Terestrial",
    field: "Biosfer, Botani Terapan & Ekologi Hutan",
    level: "Riset Lanjutan",
    readTime: "25 menit",
    doi: "10.1111/gcb.12629",
    citation: "Chave, J., et al. (2014). Improved allometric models to estimate the aboveground biomass in tropical forests. Global Change Biology, 20(10), 3177-3190.",
    abstract: "Kajian komprehensif struktur dendrologis tegakan pohon tropis, persamaan allometrik pan-tropis Chave, fluks pertukaran karbon netto (NEE), serta peran jaringan mikoriza (Wood Wide Web) dalam sekuestrasi karbon tanah jangka panjang.",
    sections: [
      {
        subtitle: "1. Model Allometrik Pan-Tropis Chave et al. (2014) untuk Estimasi AGB",
        content: `Penaksiran biomassa tegakan hutan tropis tanpa pemanenan destruktif memerlukan pemodelan allometrik berbasis mekanika fluida dan geometri pohon. Model pan-tropis Chave et al. (2014) mengintegrasikan diameter setinggi dada (DBH), tinggi total pohon (H), dan kerapatan berat jenis kayu (wood density, ρ):`,
        formula: {
          equation: "AGB = 0.0673 · (ρ · D² · H)⁰·⁹⁷⁶   [kg]",
          note: "Dimana ρ dalam g/cm³, D (DBH) dalam cm, dan H dalam meter. Galat estimasi model ini berkurang hingga <10% dibanding model 2-variabel."
        },
        elaboration: `Kerapatan kayu (ρ) merefleksikan adaptasi ekofisiologis pohon. Spesies pionir seperti Sengon (*Falcataria falcata*) memiliki ρ ~ 0.28-0.35 g/cm³, sementara spesies klimaks kanopi primer seperti Ulin (*Eusideroxylon zwageri*) mencapai ρ ~ 1.04 g/cm³.

Fraksi Karbon: Menurut pedoman IPCC (2006) Good Practice Guidance, biomassa kering pohon mengandung fraksi karbon (CF) sebesar 0.47 hingga 0.50 (rata-rata 47-50% massa kering adalah atom Karbon murni). Untuk mengkonversi biomassa karbon (C) menjadi ekuivalen karbon dioksida terikat ($CO_2$), digunakan rasio berat molekul stokiometri:
CO₂_eq = Carbon × (44 / 12) = Carbon × 3.667`
      },
      {
        subtitle: "2. Fisiologi Pertukaran Gas Daun & Model Farquhar (C3 Photosynthesis)",
        content: `Pertukaran gas pada tajuk pepohonan diatur oleh konduktansi stomata ($g_s$) dan efisiensi karboksilasi enzim Rubisco (Ribulose-1,5-bisphosphate carboxylase-oxygenase). Model Farquhar, von Caemmerer & Berry (1980) mendefinisikan asimilasi $CO_2$ daun ($A_n$) sebagai:`,
        formula: {
          equation: "Aₙ = min(W_c, W_j) - R_d",
          note: "W_c adalah laju karboksilasi terbatas-Rubisco, W_j adalah laju karboksilasi terbatas-RuBP (regenerasi elektron), dan R_d adalah respirasi mitokondria gelap."
        },
        elaboration: `Pohon kanopi tropis mengasimilasi karbon melalui tiga strata:
- **Tajuk Muncul (Emergent Layer, 40-60m):** Menerima radiasi matahari maksimum (~2000 μmol foton m⁻² s⁻¹), namun mengalami stres defisit tekanan uap (VPD). Stomata menutup parsial saat siang untuk mencegah kavitasi xilem.
- **Tajuk Utama (Upper Canopy, 25-40m):** Kontributor 65% asimilasi fotosintesis hutan dengan indeks luas daun (Leaf Area Index / LAI) berkisar 5 - 8.
- **Rizosfer & Jaringan Mikoriza:** Sekitar 20-40% karbon hasil fotosintesis kanopi ditranslokasikan ke bawah tanah sebagai eksudat akar untuk memberi makan miselium jamur mikoriza arbuskular (AMF) dan ektomikoriza (ECM), membentuk fraksi karbon tanah stabil (Mineral-Associated Organic Matter / MAOM) yang tahan dekomposisi selama berabad-abad.`
      }
    ]
  },
  {
    id: "modul-3",
    code: "ENV-703",
    title: "Metodologi Carbon Accounting & Analisis Daur Hidup (ISO 14040/44 LCA)",
    field: "Metrik Keberlanjutan & Inventarisasi Emisi",
    level: "Riset Lanjutan",
    readTime: "24 menit",
    doi: "10.1007/s11367-023-02195-x",
    citation: "WRI & WBCSD (2015). GHG Protocol Corporate Value Chain (Scope 3) Standard. World Resources Institute; ISO (2006). ISO 14044: Environmental management — Life cycle assessment.",
    abstract: "Kerangka komprehensif kuantifikasi gas rumah kaca korporasi dan rantai nilai (Scope 1, Scope 2, Scope 3), boundary system ISO 14040/44 LCA, serta model karakterisasi dampak midpoint-endpoint menggunakan metode ReCiPe 2016.",
    sections: [
      {
        subtitle: "1. Taksonomi GHG Protocol: Cakupan Scope 1, Scope 2 & 15 Kategori Scope 3",
        content: `Audit emisi institusional tingkat pascasarjana wajib mematuhi pemisahan batasan operasional GHG Protocol Corporate Standard:`,
        table: {
          headers: ["Cakupan", "Klasifikasi Sumber Emisi", "Metodologi Kuantifikasi", "Contoh Nyata Lapangan"],
          rows: [
            ["Scope 1", "Emisi Langsung (Direct GHG)", "Aktivitas pembakaran bahan bakar on-site & proses industri.", "Genset diesel, armada operasional, emisi fugitive refrigeran HFC."],
            ["Scope 2", "Emisi Tidak Langsung Energi", "Konsumsi listrik, uap, pemanas/pendingin yang dibeli dari grid.", "Listrik PLN (Grid Jawa-Madura-Bali EF ~0.78 kg CO₂e/kWh)."],
            ["Scope 3 (1-8)", "Upstream Value Chain", "Barang/jasa yang dibeli, barang modal, transportasi hulu.", "Pengadaan bahan baku kimia, limbah operasional, perjalanan dinas."],
            ["Scope 3 (9-15)", "Downstream Value Chain", "Distribusi hilir, penggunaan produk terjual, pengolahan akhir masa pakai.", "Emisi penggunaan kendaraan berbahan bakar oleh konsumen, daur ulang TPA."]
          ]
        },
        elaboration: `Dalam pelaporan Scope 2, terdapat metodologi dual-reporting:
1. **Location-based method:** Mencerminkan rata-rata intensitas emisi jaringan listrik lokal tempat konsumsi energi terjadi.
2. **Market-based method:** Memperhitungkan kontrak instrumen atribut energi terbarukan, seperti Renewable Energy Certificates (REC) atau Power Purchase Agreements (PPA).`
      },
      {
        subtitle: "2. Kerangka Kerja Life Cycle Assessment (LCA) ISO 14040 / 14044",
        content: `LCA adalah metodologi ilmiah terstandar untuk mengevaluasi profil lingkungan suatu produk/sistem dari ekstraksi bahan baku hingga pembuangan akhir. Tahapan formal LCA meliputi 4 fase iteratif:`,
        formula: {
          equation: "Dampak = ∑ (Data Aktivitas_i × Faktor Emisi_i × Karakterisasi_i)",
          note: "Metode ReCiPe 2016 mengonversi emisi inventaris (LCI) ke 18 indikator midpoint (mis. GWP100, Asidifikasi Terestrial, Eutrofikasi) dan 3 indikator endpoint (Kerusakan Kesehatan Manusia, Kualitas Ekosistem, Kelangkaan Sumber Daya)."
        },
        elaboration: `Konsep batasan sistem:
- **Cradle-to-Gate:** Mulai dari ekstraksi bahan mentah hingga gerbang pabrik.
- **Cradle-to-Grave:** Dari ekstraksi, manufaktur, distribusi, fase operasional, hingga dekomposisi di landfill.
- **Cradle-to-Cradle (C2C):** Paradigma sirkular di mana limbah akhir diformulasikan ulang menjadi nutrisi biologis atau teknis tanpa degradasi kualitas (upcycling).`
      }
    ]
  },
  {
    id: "modul-4",
    code: "ENV-704",
    title: "Ekonomi Lingkungan, Instrumen Berbasis Pasar & Regulasi Iklim Global",
    field: "Kebijakan Publik, Karbon Pasar & Green Finance",
    level: "Riset Lanjutan",
    readTime: "20 menit",
    doi: "10.1093/reep/reab012",
    citation: "Stiglitz, J. E., & Stern, N. (2017). Report of the High-Level Commission on Carbon Prices. Carbon Pricing Leadership Coalition; UNFCCC (2015). The Paris Agreement (Article 6).",
    abstract: "Telaah ekonomi neoklasik eksternalitas negatif lingkungan, kurva biaya reduksi marjinal (MACC), mekanisme perdagangan emisi (ETS) vs pajak karbon Pigouvian, serta arsitektur pasar karbon multilateral Artikel 6 Traktat Paris.",
    sections: [
      {
        subtitle: "1. Mekanisme Carbon Pricing: Cap-and-Trade (ETS) vs Pajak Karbon Pigouvian",
        content: `Eksternalitas emisi gas rumah kaca menyebabkan kegagalan pasar karena biaya marjinal privat (PMC) lebih rendah dibanding biaya marjinal sosial (SMC). Pendekatan harga karbon menginternalisasi selisih biaya ini (Marginal External Cost / MEC):`,
        formula: {
          equation: "SMC(Q) = PMC(Q) + MEC(Q)  =>  Pajak Optimal: t* = MEC(Q*)",
          note: "Dimana t* adalah tarif pajak Pigouvian ideal yang menyeimbangkan biaya reduksi marjinal (MAC) dengan kerusakan marjinal (MD)."
        },
        elaboration: `Komparasi instrumen kebijakan iklim:
- **Pajak Karbon (Price Certainty):** Menetapkan harga emisi pasti per ton $CO_2e$, namun kuantitas reduksi emisi berfluktuasi tergantung elastisitas biaya teknologi.
- **Emissions Trading System / ETS (Quantity Certainty):** Menetapkan batas atas emisi total (*cap*) yang menurun secara berkala. Izin emisi (*allowances*) diperdagangkan di bursa karbon (mis. EU ETS, IDXCarbon Indonesia). Harga berfluktuasi sesuai dinamika penawaran dan permintaan.`
      },
      {
        subtitle: "2. Artikel 6 Traktat Paris & Taksonomi Hijau Internasional",
        content: `Artikel 6 Traktat Paris memfasilitasi kerja sama sukarela antar-negara untuk mencapai target Nationally Determined Contributions (NDC):
- **Artikel 6.2 (ITMOs):** Internationally Transferred Mitigation Outcomes memungkinkan transfer bilateral hasil mitigasi dengan penyesuaian koresponden (*corresponding adjustments*) untuk mencegah penghitungan ganda (*double-counting*).
- **Artikel 6.4 (Mekanisme Tersentralisasi):** Pengganti Clean Development Mechanism (CDM) di bawah pengawasan badan otoritas PBB.
- **Taksonomi Hijau (Green Taxonomy):** Sistem klasifikasi teknis untuk menentukan apakah suatu kegiatan ekonomi memenuhi kriteria substansial mitigasi iklim tanpa menimbulkan dampak merugikan signifikan (*Do No Significant Harm - DNSH*). Contoh: EU Taxonomy for Sustainable Activities dan Taksonomi Keuangan Berkelanjutan Indonesia (TKBI).`
      }
    ]
  },
  {
    id: "modul-5",
    code: "ENV-705",
    title: "Ekologi Industri, Analisis Aliran Material (MFA) & Sirkularitas Regeneratif",
    field: "Metabolisme Perkotaan & Rekayasa Sirkular",
    level: "Riset Lanjutan",
    readTime: "21 menit",
    doi: "10.1111/jiec.13110",
    citation: "Brunner, P. H., & Rechberger, H. (2016). Handbook of Material Flow Analysis: For Environmental, Resource, and Waste Managers (2nd ed.). CRC Press.",
    abstract: "Analisis metabolisme sosio-ekologis perkotaan menggunakan Material Flow Analysis (MFA), termodinamika entropi dalam daur ulang, model simbiosis industri Kalundborg, dan prinsip biomimikri dalam rekayasa material.",
    sections: [
      {
        subtitle: "1. Analisis Aliran Material (MFA) dan Neraca Massa Sistem",
        content: `MFA berlandaskan pada Hukum Pertama Termodinamika (Kekekalan Massa). Dalam batas ruang dan waktu yang didefinisikan:`,
        formula: {
          equation: "∑ Masukan (Input) = ∑ Keluaran (Output) + Akumulasi Bersih (ΔStok)",
          note: "Setiap aliran material diklasifikasikan menjadi barang (goods) dan substansi (substances, mis. C, N, P, logam berat)."
        },
        elaboration: `Dalam perancangan sirkularitas, degradasi kualitas material diatur oleh Hukum Kedua Termodinamika (Entropi). Proses daur ulang sering kali mengalami downcycling mekanis akibat kontaminasi termal dan fisik. Pendekatan industrial ecology mentransformasikan aliran limbah linear (*take-make-dispose*) menjadi jejaring loop tertutup terintegrasi.`
      },
      {
        subtitle: "2. Simbiosis Industri & Prinsip Kalundborg Model",
        content: `Simbiosis industri adalah bentuk kolaborasi di mana produk sampingan (residu atau energi limbah) dari satu fasilitas industri menjadi bahan baku penting bagi entitas industri lain yang berdekatan:
- Panas buangan (steam) dari pembangkit listrik didistribusikan ke pabrik farmasi dan sistem pemanas distrik perkotaan.
- Lumpur organik fermentasi enzim diolah menjadi biogas terbarukan dan pupuk cair pertanian berhara tinggi.
- Desulfurisasi gas buang menghasilkan gipsum sintetis kalsium sulfat untuk pabrik papan gipsum, mengeliminasi penambangan gipsum alami.
Hasilnya: reduksi konsumsi air tanah hingga 3 juta m³/tahun dan penghematan emisi ribuan ton $CO_2e$.`
      }
    ]
  },
  {
    id: "modul-6",
    code: "ENV-706",
    title: "Transisi Energi Bersih, Dinamika Grid & Teknologi Negatif Emisi (NETs)",
    field: "Transisi Energi, Penyimpanan BESS & Geosekuestrasi",
    level: "Riset Lanjutan",
    readTime: "23 menit",
    doi: "10.1038/s41560-023-01258-4",
    citation: "IEA (2023). Net Zero Roadmap: A Global Pathway to Keep the 1.5 °C Goal in Reach. International Energy Agency; IPCC Special Report on CCS.",
    abstract: "Karakterisasi tekno-ekonomi energi baru terbarukan (LCOE), mitigasi 'Duck Curve' melalui Battery Energy Storage Systems (BESS), rantai nilai hidrogen hijau, serta peran teknologi emisi negatif Direct Air Capture (DAC) dan BECCS.",
    sections: [
      {
        subtitle: "1. Integrasi Grid Intermiten & Levelized Cost of Electricity (LCOE)",
        content: `Penetrasi fotovoltaik surya (Solar PV) dan turbin angin skala utilitas menghadapi tantangan intermitensi cuaca dan kurva beban 'Duck Curve' (penurunan tajam beban bersih siang hari diikuti lonjakan puncak petang hari):`,
        formula: {
          equation: "LCOE = [ ∑ (CAPEX_t + OPEX_t + Fuel_t) / (1+r)ᵗ ] / [ ∑ (Electricity_t) / (1+r)ᵗ ]",
          note: "Dimana r adalah tingkat diskonto (WACC), CAPEX adalah modal awal, OPEX adalah biaya operasi dan perawatan."
        },
        elaboration: `Mitigasi Duck Curve membutuhkan:
1. Penyimpanan Energi Baterai (BESS skala utilitas, mis. LFP dan Sodium-ion) dengan durasi pelepasan 4-8 jam.
2. Pembangkitan hidro terpompa (Pumped Hydro Storage) untuk fleksibilitas kapasitas besar.
3. Manajemen sisi kebutuhan cerdas (Demand-Side Response) dan kendaraan listrik Vehicle-to-Grid (V2G).`
      },
      {
        subtitle: "2. Teknologi Emisi Negatif (Carbon Dioxide Removal / CDR)",
        content: `Untuk mengimbangi emisi residu sektor industri berat yang sulit didekarbonisasi (hard-to-abate), jalur IPCC 1.5°C mengandalkan teknologi penarikan karbon aktif:
- **BECCS (Bioenergy with Carbon Capture and Storage):** Pemanfaatan biomassa berkelanjutan untuk energi dengan penangkapan emisi $CO_2$ dari gas cerobong cerobong dan injeksi ke formasi geologi dalam (saline aquifer).
- **DACCS (Direct Air Carbon Capture and Storage):** Penyerapan langsung $CO_2$ ambien (420 ppm) menggunakan kontaktor kimia berbasis amine padat atau larutan kalium hidroksida cair.
- **Enhanced Rock Weathering (ERW):** Penebaran debu batuan basal pada lahan pertanian untuk mempercepat reaksi pelapukan silikat alami yang mengikat $CO_2$ menjadi ion bikarbonat stabil di laut.`
      }
    ]
  }
];
