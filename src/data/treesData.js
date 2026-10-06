// Database Dendrologi Pohon Tropis & Stratifikasi Kanopi Hutan

export const CANOPY_STRATA = [
  {
    id: "stratum-emergent",
    name: "Tajuk Muncul (Emergent Layer)",
    heightRange: "40 - 65 meter",
    lightLevel: "95% - 100% Sinar Matahari Penuh",
    vpd: "Tinggi (Defisit Tekanan Uap Ekstrem > 2.5 kPa)",
    characteristics: "Pohon raksasa menjulang melampaui kanopi utama. Daun berukuran relatif kecil, berlapisan kutikula lilin tebal, memiliki mekanisme penutupan stomata responsif untuk mencegah kavitasi xilem pada tegangan hidrolik ekstrem.",
    keySpecies: ["Shorea leprosula (Meranti)", "Koompassia excelsa (Tualang)", "Eusideroxylon zwageri (Ulin)"],
    carbonFraction: "Menyimpan ~35% dari total stok biomassa karbon tegakan tua."
  },
  {
    id: "stratum-upper",
    name: "Kanopi Utama (Upper Canopy)",
    heightRange: "20 - 40 meter",
    lightLevel: "60% - 90% Penetrasi Cahaya",
    vpd: "Sedang (1.2 - 2.0 kPa)",
    characteristics: "Lapisan vegetasi paling padat dan kontinu dengan Indeks Luas Daun (LAI) tertinggi (5-8 m²/m²). Pusat fotosintesis terestrial utama, interseptasi curah hujan (25-35% air hujan tertahan di daun), dan produksi uap air melalui transpirasi evapotranspirasi pendingin iklim mikro.",
    keySpecies: ["Samanea saman (Trembesi)", "Dipterocarpus spp.", "Ficus benjamina (Beringin)"],
    carbonFraction: "Menyumbang ~45% produktivitas primer kotor (GPP) ekosistem hutan."
  },
  {
    id: "stratum-understory",
    name: "Tajuk Bawah (Understory & Sapling)",
    heightRange: "5 - 20 meter",
    lightLevel: "10% - 25% Cahaya Tersaring",
    vpd: "Rendah (0.5 - 1.0 kPa, kelembaban tinggi)",
    characteristics: "Dihuni oleh pohon muda toleran naungan (shade-tolerant), palem, dan tumbuhan perdu. Daun umumnya lebar dan tipis dengan konsentrasi klorofil-b lebih tinggi untuk memaksimalkan tangkapan cahaya spektrum difus biru-merah.",
    keySpecies: ["Palma hutan (Areca)", "Diospyros celebica (Eboni Muda)", "Fagaceae"],
    carbonFraction: "Menjaga kelembaban iklim mikro lantai hutan dan regenerasi suksesi alami."
  },
  {
    id: "stratum-floor",
    name: "Lantai Hutan & Rizosfer (Forest Floor & Rhizosphere)",
    heightRange: "-10 meter (Akar) s/d 5 meter",
    lightLevel: "< 2% - 5% Cahaya Lantai",
    vpd: "Sangat Stabil (Kelembaban Relatif > 85-95%)",
    characteristics: "Pondasi mikrobiologis dan hidrologis hutan. Mengandung serasah organik tebal, jamur pengurai lignin, serta jejaring hifa mikoriza (Wood Wide Web) yang menghubungkan sistem perakaran antar-pohon untuk transfer nutrisi (N, P) dan sinyal biokimia.",
    keySpecies: ["Ektomikoriza (Basidiomycota)", "Mikoriza Arbuskular (Glomeromycota)", "Mikrobioma rizosfer"],
    carbonFraction: "Menyimpan stok karbon tanah (Soil Organic Carbon - SOC) hingga 200-300 ton C/ha di hutan tropis basah."
  }
];

export const TREE_SPECIES = [
  {
    id: "tree-meranti",
    localName: "Meranti Merah",
    scientificName: "Shorea leprosula Miq.",
    family: "Dipterocarpaceae",
    woodDensity: 0.52, // g/cm3
    maxHeight: 60, // meter
    typicalDbh: 80, // cm
    sequestrationRate: "Sangat Tinggi (35 - 55 kg CO₂/tahun pada fase dewasa)",
    habitat: "Hutan dataran rendah tropis basah Kalimantan & Sumatera",
    rootSystem: "Akar tunggang masif dengan banir (buttress roots) lebar penopang kestabilan angin",
    ecologicalRole: "Spesies klimaks pembentuk kanopi utama, habitat utama burung rangkong dan primata arboreal, penahan erosi lereng terjal.",
    imageDescription: "Pohon raksasa dengan banir megah dan tajuk menjulang anggun."
  },
  {
    id: "tree-trembesi",
    localName: "Trembesi / Hujan Kayu",
    scientificName: "Samanea saman (Jacq.) Merr.",
    family: "Fabaceae",
    woodDensity: 0.56,
    maxHeight: 25,
    typicalDbh: 120,
    sequestrationRate: "Superlativ (~28 ton CO₂/tahun untuk pohon dewasa dengan diameter mahkota 30m)",
    habitat: "Dataran rendah terbuka, riparian sungai, kanopi peneduh lanskap luas",
    rootSystem: "Akar lateral ekstensif dengan simbiosis bakteri penambat nitrogen (Rhizobium)",
    ecologicalRole: "Penyerap gas pencemar sulfur dioksida dan partikulat PM2.5 kota terbaik, penurun temperatur permukaan mikro hingga 3.5°C.",
    imageDescription: "Tajuk kubah payung lebar menyerupai kanopi hijau raksasa pelindung bumi."
  },
  {
    id: "tree-mangrove",
    localName: "Bakau Minyak / Mangrove",
    scientificName: "Rhizophora apiculata Blume",
    family: "Rhizophoraceae",
    woodDensity: 0.81,
    maxHeight: 30,
    typicalDbh: 40,
    sequestrationRate: "Spesialis Blue Carbon (4x - 10x lebih efisien mengunci karbon tanah dibanding hutan daratan)",
    habitat: "Zona pasang surut estuari, substrat lumpur anaerobik pesisir",
    rootSystem: "Akar tunjang stilt-root bercabang rapat dengan pneumatofor lentisel pernapasan",
    ecologicalRole: "Pencegah abrasi gelombang badai tsunami, perangkap sedimen organik, zona pemijahan ikan & udang laut.",
    imageDescription: "Sistem akar tunjang bercabang eksotis di atas perairan payau pesisir."
  },
  {
    id: "tree-ulin",
    localName: "Ulin / Kayu Besi Kalimantan",
    scientificName: "Eusideroxylon zwageri Teijsm. & Binn.",
    family: "Lauraceae",
    woodDensity: 1.04,
    maxHeight: 50,
    typicalDbh: 100,
    sequestrationRate: "Tinggi & Stabil Jangka Panjang (Kayu sangat tahan lapuk hingga >1000 tahun)",
    habitat: "Hutan primer tropis Kalimantan dan Sumatera bagian timur",
    rootSystem: "Akar dalam menembus lapisan lempung kuarsa miskin hara",
    ecologicalRole: "Menyimpan karbon rekalitran (tahan dekomposisi mikroba), indikator hutan tua alami tak terganggu (old-growth forest).",
    imageDescription: "Kayu sangat keras dan tahan air, batang silindris lurus menjulang dengan kulit beralur."
  },
  {
    id: "tree-jati",
    localName: "Jati Emas",
    scientificName: "Tectona grandis L.f.",
    family: "Lamiaceae",
    woodDensity: 0.67,
    maxHeight: 35,
    typicalDbh: 60,
    sequestrationRate: "Tinggi (20 - 30 kg CO₂/tahun)",
    habitat: "Hutan musim tropis meranggas (monsoon forest) Jawa dan Nusa Tenggara",
    rootSystem: "Akar tunggang dalam dengan toleransi kekeringan musiman tinggi",
    ecologicalRole: "Pengguguran daun saat kemarau mereduksi kehilangan air transpirasi; lingkaran tahun (tree rings) menjadi arsip dendroklimatologi historis.",
    imageDescription: "Tajuk berdaun lebar mengkilap dengan kualitas serat kayu berkekuatan tinggi."
  },
  {
    id: "tree-beringin",
    localName: "Beringin / Ara Pencekik",
    scientificName: "Ficus benjamina L.",
    family: "Moraceae",
    woodDensity: 0.48,
    maxHeight: 30,
    typicalDbh: 150,
    sequestrationRate: "Sangat Tinggi (Biomassa mahkota masif dengan ribuan akar gantung)",
    habitat: "Hutan hujan tropis basah hingga tepi mata air karst",
    rootSystem: "Akar gantung (aerial roots) yang mengeras menjadi pilar batang pendukung",
    ecologicalRole: "Spesies kunci (keystone species) penyedia buah ara sepanjang tahun bagi satwa liar; penahan mata air hidrologis krusial.",
    imageDescription: "Batang berpilin dramatis dengan tirai akar gantung eksotis menyentuh tanah."
  }
];
