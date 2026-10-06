// Studi Kasus Kebijakan & Lapangan Pascasarjana (S2)

export const CASE_STUDIES = [
  {
    id: "case-peatland",
    title: "Restorasi Hidrologis Lahan Gambut Tropis Kalimantan Tengah: Penyekatan Kanal & Neraca GRK",
    location: "Kawasan Eks-Proyek Lahan Gambut (PLG) 1 Juta Hektar, Kalimantan Tengah, Indonesia",
    theme: "Biogeokimia Tanah & Kebijakan REDD+",
    executiveSummary: "Pengeringan kubah gambut tropis melalui kanalisasi masif memicu oksidasi aerobik bahan organik tebal dan kebakaran bawah permukaan berulang, melepaskan gigaton CO2. Analisis pascasarjana mengevaluasi efektivitas intervensi 3R (Rewetting, Revegetation, Revitalization) Badan Restorasi Gambut dan Mangrove (BRGM).",
    problemStatement: "Kanal drainase buatan menurunkan muka air tanah (MAT) hingga >100 cm di bawah permukaan saat kemarau. Hal ini menggeser kondisi tanah dari anaerobik metanogenik lambat menjadi oksidasi aerobik cepat: setiap 10 cm penurunan MAT meningkatkan emisi heterotrofik sebesar ~9.1 ton CO₂/ha/tahun.",
    dataMetrics: [
      { label: "Kedalaman Kubah Gambut", value: "3.5 - 10.0 meter", context: "Karbon tersimpan > 2,000 ton C/ha" },
      { label: "Pelepasan Emisi Kebakaran 2015", value: "1.75 Giga ton CO₂e", context: "Melampaui emisi harian ekonomi Jerman" },
      { label: "Target Ambang Muka Air (PP 57/2016)", value: "Maksimal -0.40 m", context: "Batas hidrologis aman pencegahan oksidasi" },
      { label: "Jumlah Sekat Kanal Terbangun", value: "> 18,500 unit", context: "Retensi air dan pemulihan vegetasi suksesi" }
    ],
    analyticalPoints: [
      {
        heading: "Trade-off Biogeokimia (CO₂ vs CH₄)",
        text: "Penaikan kembali muka air tanah (Rewetting) melalui bendung dan sekat kanal secara drastis menurunkan oksidasi aerobik CO2. Namun, genangan air anoksik memicu aktivitas mikroba arkhea metanogenik, meningkatkan fluks emisi gas Metana (CH4). Karena potensi pemanasan global GWP100 CH4 adalah 28x lipat CO2 (atau 84x pada GWP20), pemantauan laju pertukaran bersih memerlukan instrumen menara Eddy Covariance presisi tinggi."
      },
      {
        heading: "Paludikultur sebagai Solusi Sosio-Ekologis",
        text: "Revegetasi lahan basah tidak boleh mengulangi monokultur kelapa sawit yang menuntut drainase. Spesies pohon endemik seperti Jelutung Rawa (*Dyera polyphylla*), Tengkawang (*Shorea stenoptera*), dan Belangeran (*Shorea balangeran*) memungkinkan panen hasil hutan bukan kayu (HHBK) getah dan resin bernilai ekonomi tanpa menurunkan muka air gambut."
      }
    ],
    discussionPrompt: "Sebagai kandidat Master Ilmu Lingkungan, bagaimana Anda merancang mekanisme pembiayaan Article 6.2 ITMO berbasis hasil terverifikasi (Results-Based Payment) untuk memastikan pendanaan sekat kanal gambut berkelanjutan selama siklus 30 tahun?"
  },
  {
    id: "case-cbam",
    title: "EU Carbon Border Adjustment Mechanism (CBAM) & Asimetri Perdagangan Global",
    location: "Uni Eropa - Mitra Dagang Global (Indonesia, India, Brasil, Afrika Selatan)",
    theme: "Ekonomi Perdagangan Internasional & Karbon Batas",
    executiveSummary: "Penerapan regulasi CBAM oleh Parlemen Eropa bertujuan mencegah kebocoran karbon (carbon leakage) dengan membebankan sertifikat karbon pada barang impor padat emisi (semen, besi/baja, aluminium, pupuk, hidrogen, dan listrik). Kajian ini menganalisis kesesuaian dengan pasal GATT WTO dan beban keadilan iklim (CBDR-RC).",
    problemStatement: "Produsen di negara berkembang menghadapi tantangan ganda: ketergantungan historis pada jaringan listrik batubara fosil lokal dan ketidakmampuan memverifikasi data Scope 1 & Scope 2 sesuai standar akuntansi MRV (Monitoring, Reporting, Verification) Uni Eropa yang rigid.",
    dataMetrics: [
      { label: "Fase Transisi CBAM", value: "2023 - 2025", context: "Kewajiban pelaporan tanpa pungutan keuangan" },
      { label: "Fase Finansial Penuh", value: "Mulai 1 Januari 2026", context: "Pembelian sertifikat CBAM wajib mengikuti harga EU ETS" },
      { label: "Harga Karbon EU ETS Acuan", value: "~€65 - €90 / tCO₂e", context: "Jauh di atas pajak karbon domestik negara berkembang" },
      { label: "Komoditas Kunci Terkena Dampak", value: "Baja, Aluminium, Semen", context: "Ekspor manufaktur hilirisasi industri mineral" }
    ],
    analyticalPoints: [
      {
        heading: "Ketegangan Antara Prinsip CBDR-RC dan Non-Diskriminasi WTO",
        text: "Prinsip Common But Differentiated Responsibilities and Respective Capabilities (CBDR-RC) dalam traktat UNFCCC mengakui disparitas kapasitas finansial dan tanggung jawab historis negara selatan global. Namun, klausul WTO (GATT Article III - National Treatment) melarang diskriminasi berbasis asal negara. CBAM memaksakan standar teknis seragam yang berpotensi menjadi proteksionisme hijau (green protectionism)."
      },
      {
        heading: "Peluang Hilirisasi Rendah Karbon & Sertifikasi EPD",
        text: "Bagi industri pengolahan mineral nasional, CBAM memaksa percepatan dekarbonisasi: investasi smelter berbasis energi hidro terbarukan, dekarbonisasi bahan bakar hidrogen, dan penerbitan Environmental Product Declaration (EPD) berstandar ISO 14025 tipe III untuk mempertahankan akses pasar premium Eropa."
      }
    ],
    discussionPrompt: "Evaluasi apakah pendapatan dari sertifikat CBAM yang dipungut oleh Uni Eropa etis untuk dialokasikan kembali sebagai dana transfer teknologi bersih bagi industri di negara berkembang asal impor!"
  },
  {
    id: "case-amazon",
    title: "Ambang Batas Kritis (Tipping Point) Bioma Hutan Amazon & Dinamika 'Sungai Terbang'",
    location: "Cekungan Sungai Amazon, Amerika Selatan",
    theme: "Klimatologi Hutan & Dinamika Tipping Point",
    executiveSummary: "Kanopi Amazon bertindak sebagai pompa hidrologis biotis raksasa yang menghasilkan 'Sungai Terbang' (Ríos Voladores)—aliran uap air atmosferik masif yang mendistribusikan hujan ke seluruh benua. Deforestasi 20-25% diproyeksikan memicu peralihan ekosistem ireversibel menjadi sabana kering.",
    problemStatement: "Siklus daur ulang kelembaban atmosfer (moisture recycling) bergantung pada evapotranspirasi lebih dari 390 miliar pohon. Ketika tajuk terfragmentasi oleh ladang kedelai dan peternakan sapi, curah hujan regional menurun hingga ke titik di mana pohon hutan basah tidak mampu bertahan dalam periode kemarau berkepanjangan.",
    dataMetrics: [
      { label: "Total Deforestasi Kumulatif", value: "~17% dari Luas Asli", context: "Mendekati ambang batas kritis 20-25%" },
      { label: "Volume Air Sungai Terbang", value: "20 Miliar Ton Uap/Hari", context: "Melebihi debit harian seluruh Sungai Amazon ke Samudra" },
      { label: "Cadangan Karbon Tegakan", value: "150 - 200 Giga Ton C", context: "Ekuivalen dengan emisi bahan bakar fosil global 15-20 tahun" },
      { label: "Status Emisi Amazon Tenggara", value: "Beralih Menjadi Net Sumber Emisi", context: "Laju respirasi melebihi asimilasi fotosintesis" }
    ],
    analyticalPoints: [
      {
        heading: "Teori Pompa Biotis (Makarieva & Gorshkov)",
        text: "Kondensasi uap air di atas kanopi hutan yang lebat menghasilkan penurunan tekanan atmosfer lokal, yang secara dinamis menyedot udara lembab dari samudra Atlantik masuk ke pedalaman benua. Kehilangan tajuk pohon memutus gradien tekanan ini, melemahkan angin pasat pembawa hujan dan mengeringkan lumbung pangan di Amerika Selatan."
      },
      {
        heading: "Efek Umpan Balik Kebakaran dan Mortalitas Biomassa",
        text: "Pohon tropis hutan primer berkulit tipis tidak berevolusi untuk tahan api. Kebakaran hutan permukaan bersuhu rendah dapat mematikan hingga 40-50% pohon kanopi tua, membuka lantai hutan terhadap sinar matahari terik, menaikkan suhu permukaan hingga 5°C, dan mempercepat suksesi rumput pirofilik invasif."
      }
    ],
    discussionPrompt: "Rancang strategi pemantauan satelit berbasis AI (LiDAR GEDI & Sentinel-2) untuk mendeteksi tanda peringatan dini (early warning signals - critical slowing down) hilangnya resiliensi kanopi Amazon."
  },
  {
    id: "case-kalundborg",
    title: "Kalundborg Eco-Industrial Park: Integrasi Termodinamika & Simbiosis Industri Tertutup",
    location: "Kalundborg, Denmark",
    theme: "Ekologi Industri & Rekayasa Sirkular Teknosfer",
    executiveSummary: "Jejaring industri independen tertua dan tersukses di dunia yang mentransformasikan residu limbah satu perusahaan menjadi input bernilai tambah bagi perusahaan lain, membuktikan viabilitas ekonomi ekologi industri pascasarjana.",
    problemStatement: "Kawasan industri konvensional menghasilkan kerugian termal tinggi akibat pembuangan uap panas (waste heat) ke lingkungan dan ketergantungan berlebihan pada air tawar dan bahan mentah primer tak terbarukan.",
    dataMetrics: [
      { label: "Pengurangan Emisi CO₂", value: "635,000 Ton / Tahun", context: "Melalui efisiensi energi terpadu" },
      { label: "Penghematan Air Tanah", value: "3.6 Juta m³ / Tahun", context: "Pemanfaatan air pendingin sirkular dan air daur ulang" },
      { label: "Jumlah Aliran Material Bersama", value: "> 30 Aliran Sinergis", context: "Air, energi panas, gipsum, biomassa, bioetanol" },
      { label: "Keuntungan Ekonomi Kolektif", value: "> $24 Juta / Tahun", context: "Efisiensi pengadaan bahan baku dan pengolahan limbah" }
    ],
    analyticalPoints: [
      {
        heading: "Kaskade Termal & Optimasi Entropi",
        text: "Uap bertekanan tinggi dari fasilitas pembangkit energi dialirkan terlebih dahulu untuk proses fermentasi di pabrik enzim Novo Nordisk, sebelum uap kondensat bertekanan menengah dialirkan ke distrik pemanas perumahan warga lokal. Prinsip kaskade energi meminimalisir eksergi yang terbuang sia-sia ke atmosfer."
      },
      {
        heading: "Penutupan Daur Hara Biologis",
        text: "Lumpur residu fermentasi (NovoGro 30) yang kaya akan nitrogen dan fosfor diolah bebas patogen dan didistribusikan gratis ke ribuan hektar lahan pertanian sekitar sebagai pengganti pupuk kimia sintetis NPK yang padat energi Haber-Bosch."
      }
    ],
    discussionPrompt: "Identifikasi hambatan regulasi kelembagaan (regulatory barriers) dan tanggung jawab liabilitas pencemaran produk samping jika model Kalundborg direplikasi di kawasan industri Indonesia!"
  }
];
