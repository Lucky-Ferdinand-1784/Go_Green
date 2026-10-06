// Glosarium Terminologi Sains Biosfer & Kebijakan Lingkungan Pascasarjana (S2)

export const GLOSSARY_DATA = [
  {
    term: "Allometric Equation (Persamaan Allometrik)",
    category: "Dendrologi & Biomassa",
    formula: "AGB = a · (Dᵇ · Hᶜ · ρᵈ)",
    definition: "Hubungan kuantitatif empiris non-linier antara dimensi morfometrik pohon yang mudah diukur (seperti diameter DBH dan tinggi) dengan massa total atau cadangan karbon internal tanpa perlu penebangan destruktif."
  },
  {
    term: "Aboveground Biomass (AGB)",
    category: "Dendrologi & Biomassa",
    formula: "Satuan: kg atau Ton Kering/ha",
    definition: "Seluruh biomassa hidup vegetasi yang berada di atas permukaan tanah, mencakup batang utama, kulit kayu, cabang, ranting, dedaunan, bunga, dan buah-buahan."
  },
  {
    term: "Belowground Biomass (BGB)",
    category: "Dendrologi & Biomassa",
    formula: "BGB ≈ 0.205 · (AGB)⁰·⁹² (Cairns et al., 1997)",
    definition: "Biomassa perakaran pohon hidup di bawah tanah, biasanya dihitung melalui rasio akar-pucuk (shoot-to-root ratio) atau sampling coring tanah."
  },
  {
    term: "Wood Density (Kerapatan Kayu, ρ)",
    category: "Dendrologi & Biomassa",
    formula: "Satuan: g/cm³ atau kg/m³",
    definition: "Massa kering oven per unit volume hijau kayu. Menjadi parameter penentu utama dalam allometri pan-tropis Chave karena mencerminkan strategi alokasi karbon dan stabilitas struktur mekanis pohon."
  },
  {
    term: "Leaf Area Index (LAI)",
    category: "Dendrologi & Biomassa",
    formula: "LAI = Luas Permukaan Daun / Luas Proyeksi Tanah (m²/m²)",
    definition: "Rasio luas total satu sisi daun hijau per unit luas permukaan tanah di bawahnya. Menentukan kapasitas interseptasi cahaya, laju fotosintesis, dan evapotranspirasi kanopi."
  },
  {
    term: "Stomatal Conductance (gs)",
    category: "Fisiologi Tumbuhan",
    formula: "Satuan: mmol H₂O · m⁻² · s⁻¹",
    definition: "Ukuran laju difusi uap air yang keluar atau gas CO2 yang masuk melalui pori-pori stomata daun. Dipengaruhi oleh intensitas cahaya foton, defisit tekanan uap (VPD), dan potensial air daun."
  },
  {
    term: "Xylem Cavitation & Embolism",
    category: "Fisiologi Tumbuhan",
    formula: "P₅₀: Potensial air pemicu 50% kehilangan konduktivitas hidrolik",
    definition: "Pembentukan gelembung udara dalam pembuluh xilem akibat tegangan air negatif yang terlalu ekstrem saat kekeringan hebat, memutus aliran air dari akar ke kanopi dan memicu kematian pohon (hydraulic failure)."
  },
  {
    term: "Ectomycorrhizal Network (ECM)",
    category: "Fisiologi Tumbuhan",
    formula: "Wood Wide Web simbion",
    definition: "Asosiasi mutualistik antara hifa jamur (terutama Basidiomycota dan Ascomycota) dengan akar pohon hutan (mis. Dipterocarpaceae dan Fagaceae), membentuk selubung Hartig net untuk pertukaran nitrogen/fosfor dengan gula karbon fotosintat."
  },
  {
    term: "Gross Primary Productivity (GPP)",
    category: "Dinamika Biosfer",
    formula: "GPP = NPP + R_a [g C · m⁻² · thn⁻¹]",
    definition: "Total laju fotosintesis asimilasi karbon kimia yang ditangkap oleh produsen primer dalam ekosistem per satuan luas dan waktu sebelum dikurangi respirasi autotrofik."
  },
  {
    term: "Net Ecosystem Exchange (NEE)",
    category: "Dinamika Biosfer",
    formula: "NEE = - (GPP - R_eco)",
    definition: "Pertukaran neto CO2 antara biosfer ekosistem dan atmosfer yang diukur langsung di lapangan menggunakan menara Eddy Covariance. Nilai negatif menandakan ekosistem bertindak sebagai penyerap karbon (carbon sink)."
  },
  {
    term: "Radiative Forcing (ΔF)",
    category: "Permodelan Iklim",
    formula: "ΔF = 5.35 · ln(C / C₀) [W/m²]",
    definition: "Perubahan neto fluks fluks radiasi energi matahari yang masuk dibanding energi inframerah bumi yang keluar di lapisan tropopause akibat gangguan faktor alami atau antropogenik."
  },
  {
    term: "Equilibrium Climate Sensitivity (ECS)",
    category: "Permodelan Iklim",
    formula: "ΔT_eq saat konsentrasi CO₂ atmosfer naik 2× lipat",
    definition: "Peningkatan temperatur rata-rata permukaan bumi pada kondisi ekuilibrium termodinamika jangka panjang setelah konsentrasi CO2 di atmosfer berlipat ganda dari baseline pra-industri (dari 280 ppm menjadi 560 ppm)."
  },
  {
    term: "Shared Socioeconomic Pathways (SSP)",
    category: "Permodelan Iklim",
    formula: "Matriks Skenario SSP1 s/d SSP5 (IPCC AR6)",
    definition: "Kerangka proyeksi perkembangan sosio-ekonomi global abad ke-21 (populasi, urbanisasi, teknologi, perdagangan) yang dikombinasikan dengan target forcing radiatif untuk menguji ketahanan masa depan iklim."
  },
  {
    term: "Planetary Boundaries (Batas Planet)",
    category: "Permodelan Iklim",
    formula: "9 Proses Regulasi Sistem Bumi (Rockström et al.)",
    definition: "Konsep ilmiah yang menetapkan batas aman operasi peradaban manusia pada sembilan subsistem bumi, meliputi perubahan iklim, integritas biosfer, fluks biogeokimia N & P, pemakaian air tawar, hingga entitas baru polusi."
  },
  {
    term: "Carbon Border Adjustment Mechanism (CBAM)",
    category: "Kebijakan & Ekonomi",
    formula: "Pungutan impor setara sertifikat emisi EU ETS",
    definition: "Instrumen regulasi Uni Eropa yang membebankan bea karbon atas produk impor padat emisi dari negara ketiga untuk menyetarakan biaya iklim dan mencegah kebocoran karbon (carbon leakage)."
  },
  {
    term: "Marginal Abatement Cost Curve (MACC)",
    category: "Kebijakan & Ekonomi",
    formula: "MAC = ΔBiaya Total / ΔTon Reduksi Emisi ($/tCO₂e)",
    definition: "Grafik kurva yang meranking berbagai opsi teknologi dekarbonisasi berdasarkan biaya marjinal per ton CO2e yang berhasil dihindari, diurutkan dari biaya termurah (atau bernilai ekonomi positif) hingga termahal."
  },
  {
    term: "Article 6.2 ITMO (Paris Agreement)",
    category: "Kebijakan & Ekonomi",
    formula: "Internationally Transferred Mitigation Outcomes",
    definition: "Mekanisme kooperatif bilateral antar negara peserta Traktat Paris untuk saling mentransfer unit reduksi karbon yang wajib disertai penyesuaian koresponden (corresponding adjustments) agar tidak terjadi double-counting."
  },
  {
    term: "Scope 1 GHG Emissions",
    category: "Akuntansi Karbon & LCA",
    formula: "Emisi Langsung On-Site",
    definition: "Gas rumah kaca yang dilepaskan secara langsung dari sumber-sumber yang dimiliki atau dikendalikan secara operasional oleh entitas pelapor (mis. pembakaran boiler bahan bakar fosil dan kendaraan dinas)."
  },
  {
    term: "Scope 2 GHG Emissions (Dual Reporting)",
    category: "Akuntansi Karbon & LCA",
    formula: "Location-based vs Market-based Method",
    definition: "Emisi tidak langsung akibat konsumsi energi listrik, uap, pemanas atau pendingin yang dibeli oleh organisasi dari jaringan listrik eksternal."
  },
  {
    term: "Scope 3 GHG Emissions (Value Chain)",
    category: "Akuntansi Karbon & LCA",
    formula: "15 Kategori Rantai Nilai Hulu dan Hilir",
    definition: "Seluruh emisi tidak langsung lainnya yang terjadi di sepanjang rantai nilai perusahaan, mencakup pengadaan bahan baku, logistik transportasi pihak ketiga, barang modal, hingga pengolahan limbah produk terjual."
  },
  {
    term: "Life Cycle Assessment (LCA) ISO 14040/44",
    category: "Akuntansi Karbon & LCA",
    formula: "Goal & Scope -> LCI -> LCIA -> Interpretation",
    definition: "Kompilasi dan evaluasi komprehensif masukan bahan baku, energi, dan pelepasan emisi potensial ke lingkungan sepanjang daur hidup siklus suatu produk atau sistem layanan."
  },
  {
    term: "Cradle-to-Grave vs Cradle-to-Cradle",
    category: "Akuntansi Karbon & LCA",
    formula: "Analisis Linier vs Sirkular Regeneratif",
    definition: "Cradle-to-Grave menganalisis produk dari ekstraksi bahan baku hingga tempat pembuangan akhir (landfill), sedangkan Cradle-to-Cradle mendesain daur hidup tertutup di mana limbah bertransformasi menjadi nutrisi daur ulang berkualitas tinggi."
  },
  {
    term: "Material Flow Analysis (MFA)",
    category: "Ekologi Industri",
    formula: "∑ Input = ∑ Output + ΔStok (Kekekalan Massa)",
    definition: "Metode kuantifikasi sistematis jalur aliran, stok, dan transformasi bahan materi fisik atau senyawa kimia tertentu di dalam batas ruang dan periode waktu biosfer/teknosfer."
  },
  {
    term: "Industrial Symbiosis (Simbiosis Industri)",
    category: "Ekologi Industri",
    formula: "Jejaring Limbah-Menjadi-Bahan-Baku Antar-Entitas",
    definition: "Kolaborasi fisik antar perusahaan di mana produk sampingan (by-products), panas buang (waste heat), atau air limbah dari suatu industri dimanfaatkan sebagai bahan baku pengganti oleh industri lain."
  },
  {
    term: "Levelized Cost of Electricity (LCOE)",
    category: "Transisi Energi & NETs",
    formula: "LCOE = Nilai Sekarang Biaya Siklus Hidup / Nilai Sekarang Total Energi Listrik ($/MWh)",
    definition: "Biaya rata-rata netto per megawatt-jam untuk membangun dan mengoperasikan pembangkit listrik sepanjang seluruh masa umur teknisnya."
  },
  {
    term: "Duck Curve & Ramp Rate",
    category: "Transisi Energi & NETs",
    formula: "Beban Bersih = Beban Total - Pembangkitan Surya/Angin",
    definition: "Profil beban jaringan listrik harian yang menyerupai kurva bebek, disebabkan oleh limpahan surplus pembangkit listrik surya di siang hari yang memicu kebutuhan tanjakan pasokan pembangkit fleksibel (rapid ramping) pada senja hari."
  },
  {
    term: "Battery Energy Storage System (BESS)",
    category: "Transisi Energi & NETs",
    formula: "Penyimpanan Elektrokimia (LFP / Sodium-ion / NMC)",
    definition: "Sistem penyimpanan baterai skala jaringan yang berfungsi sebagai peredam fluktuasi frekuensi, penggeser beban puncak (peak shaving), dan penyedia daya cadangan darurat (black start capability)."
  },
  {
    term: "Direct Air Carbon Capture and Storage (DACCS)",
    category: "Transisi Energi & NETs",
    formula: "Penangkapan CO₂ Kimiawi dari Udara Bebas (420 ppm)",
    definition: "Teknologi rekayasa penarikan CO2 langsung dari udara ambien menggunakan adsorben padat atau absorben cairan basa, diikuti dengan kompresi dan sekuestrasi mineral geologis permanen."
  },
  {
    term: "Bioenergy with Carbon Capture and Storage (BECCS)",
    category: "Transisi Energi & NETs",
    formula: "Konversi Biomassa + Penangkapan Karbon Flue Gas",
    definition: "Proses menghasilkan energi listrik atau biofuel dari biomassa tanaman fotosintetik yang dikombinasikan dengan penangkapan dan penyimpanan karbon geologis emisi pembakarannya, menghasilkan emisi netto negatif."
  },
  {
    term: "Blue Carbon (Karbon Biru)",
    category: "Dendrologi & Biomassa",
    formula: "Sekuestrasi Sedimen Pesisir Anoksik",
    definition: "Karbon organik yang diserap dan dikunci di ekosistem perairan pesisir dan laut, terutama oleh hutan bakau mangrove, padang lamun (seagrass), dan rawa pasang surut (salt marshes)."
  }
];
