// Bank Soal Komprehensif Uji Pemahaman Pascasarjana (S2) Ilmu Lingkungan & Dekarbonisasi

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "Dendrologi & Allometri Biomassa",
    level: "Analisis Kritis (C4)",
    question: "Dalam model allometrik pan-tropis Chave et al. (2014) untuk tegakan hutan tropis basah, parameter apa yang memiliki sensitivitas non-linier paling dominan dalam menentukan Aboveground Biomass (AGB), dan mengapa wood density (ρ) tidak dapat diabaikan?",
    options: [
      {
        text: "Tinggi pohon (H) berpangkat kubik; kerapatan kayu hanya faktor koreksi minor (<2%).",
        isCorrect: false,
        feedback: "Salah. Dalam formulasi Chave, Diameter berpangkat kuadrat (D²) di dalam formula berpangkat 0.976, menjadikannya faktor geometri paling sensitif."
      },
      {
        text: "Diameter setinggi dada (D²) mendominasi volume silinder; wood density (ρ) merefleksikan variasi massa jenis selulosa-lignin antar taksa yang dapat memicu deviasi massa hingga >200%.",
        isCorrect: true,
        feedback: "Tepat! Variasi kerapatan kayu tropis membentang dari 0.25 g/cm³ (spesies pionir) hingga >1.0 g/cm³ (spesies klimaks kanopi seperti Eusideroxylon). Mengabaikan ρ akan menghasilkan galat sistematis masif pada penaksiran stok karbon regional."
      },
      {
        text: "Luas kanopi tajuk (crown area); karena luas kanopi berbanding lurus dengan stomatal conductance.",
        isCorrect: false,
        feedback: "Salah. Model pan-tropis standar Chave (2014) mengandalkan D, H, dan ρ. Luas tajuk jarang digunakan sebagai kovariat primer pada inventarisasi terestrial non-LiDAR."
      },
      {
        text: "Rasio shoot-to-root; karena separuh biomassa kayu selalu berada di bawah tanah tanpa dipengaruhi taksonomi.",
        isCorrect: false,
        feedback: "Salah. Rasio shoot-to-root digunakan untuk menaksir Belowground Biomass (BGB), bukan model AGB di atas permukaan."
      }
    ]
  },
  {
    id: 2,
    category: "Termodinamika Iklim Global",
    level: "Evaluasi Teoretis (C5)",
    question: "Jika konsentrasi CO2 atmosfer berlipat ganda dari 280 ppm menjadi 560 ppm, mengapa kenaikan suhu kesetimbangan jangka panjang (ECS) diproyeksikan mencapai 2.5°C - 4.0°C, padahal forcing radiatif langsung murni CO2 hanya setara sekitar 1.2°C pemanasan?",
    options: [
      {
        text: "Karena pergeseran orbit rotasi bumi Milankovitch siklus 100.000 tahun bertepatan dengan kenaikan CO2.",
        isCorrect: false,
        feedback: "Salah. Siklus Milankovitch bekerja pada skala puluhan ribu tahun, bukan dinamika forcing antropogenik dekadal."
      },
      {
        text: "Karena adanya loop umpan balik positif biogeofisik (climate feedbacks), terutama peningkatan kelembaban spesifik uap air atmosfer (Clausius-Clapeyron) dan penurunan albedo es/kanopi.",
        isCorrect: true,
        feedback: "Tepat! Forcing langsung CO2 (~1.2°C) dilipatgandakan oleh umpan balik uap air (~7% per kenaikan 1°C yang juga merupakan gas rumah kaca kuat), efek albedo pencairan krioster, dan penurunan tutupan awan rendah."
      },
      {
        text: "Karena laju respirasi mikroba tanah secara instan melipatgandakan radiasi gelombang pendek ultraviolet.",
        isCorrect: false,
        feedback: "Salah. Radiasi matahari yang masuk bergelombang pendek, sedangkan gas rumah kaca berinteraksi dengan radiasi gelombang panjang termal inframerah."
      },
      {
        text: "Karena penipisan lapisan ozon stratosfer di atas kutub mempercepat laju konduksi panas mantel bumi.",
        isCorrect: false,
        feedback: "Salah. Penipisan ozon stratosfer adalah mekanisme kimiawi berbeda dan panas geotermal mantel bumi memiliki fraksi fluks amat kecil dibanding radiasi matahari."
      }
    ]
  },
  {
    id: 3,
    category: "Akuntansi Emisi & GHG Protocol",
    level: "Aplikasi Standar (C3/C4)",
    question: "Sebuah perusahaan multinasional membeli listrik dari jaringan PLN Jawa-Bali (faktor emisi lokal 0.78 kg CO2e/kWh), namun pada saat bersamaan membeli instrumen Renewable Energy Certificate (REC) berstatus unbundled dari PLTP geotermal. Menurut GHG Protocol Scope 2 Guidance, bagaimana pelaporan emisi yang benar?",
    options: [
      {
        text: "Perusahaan hanya wajib melaporkan emisi nol (0 tCO2e) karena telah memiliki sertifikat hijau yang sah secara hukum pasar.",
        isCorrect: false,
        feedback: "Salah. Standar GHG Protocol mewajibkan pelaporan ganda (dual reporting) dan tidak mengizinkan pengabaian metode berbasis lokasi."
      },
      {
        text: "Perusahaan wajib menerapkan Dual Reporting: melaporkan emisi riil fisik via Location-based method (faktor emisi grid lokal) dan emisi kontraktual via Market-based method (memperhitungkan REC nol emisi).",
        isCorrect: true,
        feedback: "Tepat! GHG Protocol Scope 2 Guidance mewajibkan kedua angka tersebut disajikan berdampingan dalam laporan keberlanjutan untuk menjamin transparansi fisik dan integritas pasar energi terbarukan."
      },
      {
        text: "REC otomatis mengonversi seluruh emisi Scope 1 (genset solar on-site) menjadi netral karbon.",
        isCorrect: false,
        feedback: "Salah. Instrumen REC secara yuridis dan teknis hanya berlaku untuk atribut konsumsi listrik tidak langsung (Scope 2), bukan pembakaran langsung Scope 1."
      },
      {
        text: "Sertifikat REC dialihkan ke pelaporan Scope 3 Kategori 6 (Perjalanan Dinas).",
        isCorrect: false,
        feedback: "Salah. Scope 3 Kategori 6 mengatur emisi moda transportasi perjalanan dinas pegawai, bukan listrik grid gedung kantor."
      }
    ]
  },
  {
    id: 4,
    category: "Restorasi Ekosistem Gambut",
    level: "Analisis Kebijakan & Biogeokimia (C4)",
    question: "Ketika Badan Restorasi Gambut melakukan intervensi 'Rewetting' dengan membangun sekat kanal (canal blocking) di Kalimantan Tengah, dilema biogeokimia apakah yang wajib dimonitor oleh peneliti lingkungan pascasarjana?",
    options: [
      {
        text: "Peningkatan salinitas air tawar yang memicu kepunahan alga klorofita.",
        isCorrect: false,
        feedback: "Salah. Kanal gambut pedalaman Kalimantan Tengah merupakan sistem air tawar oligotrofik ber-pH rendah, bukan intrusi salin laut."
      },
      {
        text: "Rewetting menekan laju emisi CO2 aerobik secara drastis, tetapi kondisi anoksik jenuh air memicu lonjakan emisi gas Metana (CH4) oleh mikroba metanogenik yang memiliki GWP jauh lebih tinggi.",
        isCorrect: true,
        feedback: "Tepat! Meskipun rewetting krusial untuk mencegah subsiden dan kebakaran gambut, kondisi reduktif jenuh air merangsang aktivitas Archaea metanogenik. Karena CH4 memiliki GWP100 = 28 (dan GWP20 = 84), trade-off neraca karbon ekuivalen neto harus dimonitor secara saksama."
      },
      {
        text: "Penutupan kanopi oleh pohon pioneer menyebabkan kavitasi xilem pada vegetasi rawa.",
        isCorrect: false,
        feedback: "Salah. Kavitasi xilem terjadi saat cekaman defisit air kering, bukan saat kondisi muka air tanah meninggi."
      },
      {
        text: "Pembentukan lapisan permafrost organik yang menghambat drainase air permukaan.",
        isCorrect: false,
        feedback: "Salah. Gambut tropis bersuhu hangat dan tidak memiliki fenomena permafrost kutub."
      }
    ]
  },
  {
    id: 5,
    category: "Ekonomi Lingkungan & Pasar Karbon",
    level: "Evaluasi Ekonomi (C5)",
    question: "Berdasarkan teori ekonomi kesejahteraan lingkungan, dalam kondisi ketidakpastian kurva Marginal Abatement Cost (MAC) yang curam sementara kurva Marginal Damage (MD) relatif landai (kasus emisi gas rumah kaca akumulatif jangka panjang), instrumen kebijakan manakah yang secara teoretis lebih superior menurut Weitzman (1974)?",
    options: [
      {
        text: "Instrumen Kuantitas (Cap-and-Trade / ETS), karena kuantitas target tahunan harus selalu pasti tanpa toleransi selisih harga.",
        isCorrect: false,
        feedback: "Salah. Jika kurva MD landai (akumulasi polutan lambat) dan kurva MAC curam, instrumen kuantitas berisiko memicu lonjakan volatilitas harga ekstrem yang membebani efisiensi ekonomi."
      },
      {
        text: "Instrumen Harga (Pajak Karbon Pigouvian), karena memberikan kepastian harga batas atas dan menghindari volatilitas beban biaya ekonomi yang ekstrem jika biaya reduksi ternyata lebih mahal dari perkiraan.",
        isCorrect: true,
        feedback: "Tepat! Menurut teorema Weitzman (1974) 'Prices vs. Quantities', ketika kerusakan marjinal suatu polutan akumulatif bersifat landai dalam jangka pendek sedangkan biaya marjinal reduksi berfluktuasi curam, instrumen harga (pajak karbon) meminimalkan ekspektasi kerugian kesejahteraan masyarakat (deadweight loss)."
      },
      {
        text: "Subsidi tak terbatas bagi bahan bakar fosil rendah belerang.",
        isCorrect: false,
        feedback: "Salah. Subsidi fosil memperparah eksternalitas negatif dan memperlebar distorsi pasar."
      },
      {
        text: "Moratorium perdagangan internasional tanpa instrumen fiskal pendukung.",
        isCorrect: false,
        feedback: "Salah. Moratorium murni tanpa instrumen insentif ekonomi tidak menginternalisasi eksternalitas secara efisien Pareto."
      }
    ]
  },
  {
    id: 6,
    category: "Life Cycle Assessment (LCA)",
    level: "Metodologi Riset (C4)",
    question: "Dalam metodologi LCA ISO 14044 yang menggunakan pendekatan ReCiPe 2016, apa perbedaan epistemologis mendasar antara indikator dampak 'Midpoint' dan 'Endpoint'?",
    options: [
      {
        text: "Midpoint hanya mengukur biaya finansial CAPEX, sedangkan Endpoint mengukur biaya operasional OPEX.",
        isCorrect: false,
        feedback: "Salah. LCA mengukur beban pertukaran biogeokimia dan lingkungan fisik, bukan akuntansi keuangan arus kas korporasi."
      },
      {
        text: "Midpoint mengukur mekanisme lingkungan spesifik di tengah rantai kausalitas (mis. Potensi Pemanasan Global dlm kg CO2e), sedangkan Endpoint mengagregasi dampak hingga ke area perlindungan akhir (Areas of Protection: Kesehatan Manusia, Kualitas Ekosistem, Kelangkaan Sumber Daya) dengan ketidakpastian model lebih tinggi.",
        isCorrect: true,
        feedback: "Tepat! Midpoint memiliki ketidakpastian ilmiah lebih rendah karena berhenti pada parameter fisik terukur, sedangkan Endpoint memproyeksikan rantai kausalitas penuh hingga konsekuensi biologis/sosial (mis. DALY - Disability-Adjusted Life Years atau hilangnya spesies) yang lebih mudah dipahami pengambil kebijakan namun memiliki derajat ketidakpastian pemodelan lebih besar."
      },
      {
        text: "Midpoint ditujukan untuk produk daur ulang, sedangkan Endpoint khusus untuk ekstraksi tambang primer.",
        isCorrect: false,
        feedback: "Salah. Kedua kategori indikator berlaku untuk semua siklus daur hidup produk sistem tanpa terkecuali."
      },
      {
        text: "Midpoint dihitung secara manual, sedangkan Endpoint hanya diizinkan dihitung menggunakan AI generatif.",
        isCorrect: false,
        feedback: "Salah. Keduanya dihitung menggunakan matriks aljabar linier dalam perangkat lunak LCI/LCIA terstandar (seperti OpenLCA, SimaPro, GaBi)."
      }
    ]
  },
  {
    id: 7,
    category: "Fisiologi Kanopi & Hidrodinamika Pohon",
    level: "Analisis Biofisika (C4)",
    question: "Pada pohon kanopi raksasa di hutan hujan tropis (*emergent tree*, misal Shorea setinggi 55 meter), bagaimana air tanah dapat diangkut ke daun di puncak tajuk melawan gravitasi tanpa membutuhkan pompa mekanis aktif?",
    options: [
      {
        text: "Melalui tekanan turgor floem yang didorong oleh aliran osmosis sitoplasma sel tapis.",
        isCorrect: false,
        feedback: "Salah. Floem mengangkut asimilat fotosintat (gula) ke arah bawah/sink melalui mekanisme aliran massa Münch, bukan air transpirasi ke puncak kanopi."
      },
      {
        text: "Melalui Teori Kohesi-Tegangan (Cohesion-Tension Theory): evaporasi air dari rongga substomata daun membangkitkan potensial air negatif sangat besar (tarikan transpirasi), ditransmisikan ke pembuluh xilem melalui gaya tarik kohesi antar molekul air yang berikatan hidrogen.",
        isCorrect: true,
        feedback: "Tepat! Tarikan transpirasi pada meniskus dinding sel mesofil menghasilkan tekanan negatif mencapai -2.0 hingga -3.0 MPa di puncak kanopi. Berkat ikatan hidrogen yang kuat antar-molekul air (kohesi) dan dengan dinding xilem (adhesi), kolom air ditarik terus-menerus ke atas tanpa terputus."
      },
      {
        text: "Melalui aksi penyerapan fotosintesis aktif oleh stomata daun di malam hari.",
        isCorrect: false,
        feedback: "Salah. Stomata tumbuhan C3 menutup pada malam hari dan fotosintesis membutuhkan cahaya matahari aktif."
      },
      {
        text: "Melalui desakan gas oksigen respirasi akar yang mendorong kolom getah secara pneumatik.",
        isCorrect: false,
        feedback: "Salah. Tekanan akar (root pressure) hanya berkontribusi kecil (<0.1 MPa) pada malam hari dan tidak sanggup mengangkat air ke tajuk pohon setinggi puluhan meter."
      }
    ]
  },
  {
    id: 8,
    category: "Ekologi Industri & Simbiosis Kalundborg",
    level: "Sintesis Sistem (C5)",
    question: "Dalam desain jaringan Simbiosis Industri Kalundborg, pertukaran energi termal dilakukan melalui prinsip kaskade uap (steam cascading). Mengapa prinsip termodinamika ini dipandang jauh lebih ramah lingkungan daripada masing-masing pabrik memasang boiler gas mandiri?",
    options: [
      {
        text: "Karena kaskade energi membatalkan berlakunya Hukum Kedua Termodinamika di dalam batasan batas pabrik.",
        isCorrect: false,
        feedback: "Salah. Hukum termodinamika adalah hukum fisika universal yang tidak dapat dibatalkan oleh desain rekayasa apapun."
      },
      {
        text: "Karena kaskade memanfaatkan degradasi eksergi termal bertahap dari entalpi tinggi (turbin tenaga) ke temperatur menengah (proses industri) hingga temperatur rendah (pemanas distrik perumahan), meminimalkan kehilangan eksergi yang terbuang sia-sia ke lingkungan per unit bahan bakar primer.",
        isCorrect: true,
        feedback: "Tepat! Kaskade energi mengoptimalkan efisiensi Hukum Kedua Termodinamika (Second-law efficiency) dengan mencocokkan temperatur sumber panas buangan dengan temperatur yang benar-benar dibutuhkan oleh proses hilir."
      },
      {
        text: "Karena uap bertekanan rendah mengandung atom hidrogen bebas yang menyerap karbon dioksida di cerobong.",
        isCorrect: false,
        feedback: "Salah. Uap air murni (H2O) tidak memiliki reaksi spontan untuk menyerap CO2 menjadi hidrokarbon tanpa pasokan energi masif."
      },
      {
        text: "Karena semua pabrik diwajibkan menghentikan operasional manufaktur pada jam beban puncak grid.",
        isCorrect: false,
        feedback: "Salah. Simbiosis Kalundborg beroperasi secara kontinu sepanjang tahun 24/7."
      }
    ]
  },
  {
    id: 9,
    category: "Regulasi Iklim & Pasar Karbon Global",
    level: "Analisis Kebijakan (C4)",
    question: "Apakah fungsi utama dari ketentuan 'Corresponding Adjustments' (Penyesuaian Koresponden) dalam mekanisme transfer hasil mitigasi internasional (ITMO) di bawah Pasal 6.2 Traktat Paris?",
    options: [
      {
        text: "Menjamin bahwa tarif pajak karbon di negara berkembang dinaikkan sama persis dengan negara Uni Eropa.",
        isCorrect: false,
        feedback: "Salah. Pasal 6.2 tidak menetapkan tarif pajak seragam, melainkan mengatur mekanisme perdagangan kredit emisi bilateral."
      },
      {
        text: "Mencegah penghitungan ganda (double counting), di mana negara penjual wajib mengurangkan volume kredit yang dialihkan dari pembukuan NDC nasionalnya ketika negara pembeli mengklaim kredit tersebut untuk memenuhi target NDC-nya.",
        isCorrect: true,
        feedback: "Tepat! Tanpa penyesuaian koresponden, satu ton penurunan CO2 yang sama dapat diklaim dua kali (oleh negara penerbit dan negara pembeli), mendistorsi neraca integritas lingkungan global UNFCCC."
      },
      {
        text: "Membebaskan semua eksportir baja dan semen dari audit emisi Scope 3.",
        isCorrect: false,
        feedback: "Salah. Penyesuaian koresponden tidak berkaitan dengan pembebasan audit Scope 3 korporasi."
      },
      {
        text: "Menjamin hak veto bagi dewan PBB atas setiap transaksi kehutanan di wilayah tropis.",
        isCorrect: false,
        feedback: "Salah. Pasal 6.2 beroperasi secara bilateral antar negara pihak berdaulat tanpa keterlibatan persetujuan veto dewan keamanan PBB."
      }
    ]
  },
  {
    id: 10,
    category: "Transisi Energi & Dekarbonisasi Grid",
    level: "Evaluasi Tekno-Ekonomi (C5)",
    question: "Pada sistem kelistrikan dengan penetrasi fotovoltaik surya (Solar PV) yang melampaui 40% dari kapasitas puncak, fenomena 'Duck Curve' muncul. Apa implikasi operasional paling kritis terhadap keandalan pembangkit listrik beban dasar (baseload) konvensional?",
    options: [
      {
        text: "Pembangkit baseload harus mempertahankan frekuensi grid pada 100 Hz secara kontinu.",
        isCorrect: false,
        feedback: "Salah. Standar frekuensi jaringan listrik Indonesia/Eropa adalah 50 Hz (atau 60 Hz di AS), bukan 100 Hz."
      },
      {
        text: "Pembangkit baseload (seperti PLTU batubara) dipaksa beroperasi di bawah batas efisiensi minimum teknisnya pada siang hari (cycling) dan dituntut memiliki laju tanjakan daya (ramp rate) sangat cepat saat matahari terbenam, yang memicu keausan termal mekanis ekstrem dan biaya pemeliharaan tinggi.",
        isCorrect: true,
        feedback: "Tepat! Pembangkit termal baseload didesain untuk operasi konstan tunak (steady-state). Fluktuasi tajam akibat penetrasi surya siang hari memaksa ramp down drastis, diikuti ramp up curam dalam hitungan menit saat beban puncak malam tiba, mengancam kestabilan mekanik dan menaikkan emisi per kWh akibat inefisiensi pembakaran parsial."
      },
      {
        text: "Konsumsi energi listrik di sektor residensial secara otomatis turun menjadi nol kilowatt-hour.",
        isCorrect: false,
        feedback: "Salah. Permintaan listrik residensial justru mencapai puncak (peak demand) pada malam hari saat penghuni menyalakan penerangan, AC, dan peralatan elektronik."
      },
      {
        text: "Terjadinya pembalikan medan magnet bumi akibat arus searah (DC) dari modul surya.",
        isCorrect: false,
        feedback: "Salah. Arus searah panel surya diubah menjadi AC oleh inverter tersinkronisasi grid dan tidak memiliki pengaruh terhadap geomagnet bumi."
      }
    ]
  }
];
