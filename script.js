// Data Science & Statistics Portfolio - Wawan Saputra
// Senior Front-End, UX, and Technical Portfolio Implementation
// Bilingual Support (ID / EN), Accessible Theme Toggle, Project Filter, Project Modal, Clipboard Fallback

// --- 1. TRANSLATION DICTIONARY (ID & EN) ---
const translations = {
  id: {
    // Navigation
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.experience": "Pengalaman",
    "nav.projects": "Proyek",
    "nav.publications": "Publikasi",
    "nav.awards": "Prestasi",
    "nav.contact": "Kontak",
    "nav.print_cv": "Cetak CV",
    "nav.contact_btn": "Hubungi",
    "nav.mobile_lang": "Ganti ke English (EN)",

    // Hero Section
    "hero.badge": "Tersedia untuk Kolaborasi Sains Data, Riset Terapan & Konsultasi",
    "hero.identity": "Statistician & Data Scientist",
    "hero.subheadline": "Statistical Modeling • Machine Learning • NLP • Applied Research",
    "hero.pitch": "Profesional berlatar belakang statistika dengan pengalaman dalam pemodelan statistik, machine learning, natural language processing, official statistics, riset terapan, dan analitik interaktif. Berpengalaman menerjemahkan data kompleks menjadi bukti yang dapat diinterpretasikan, insight analitik, dan rekomendasi praktis untuk mendukung pengambilan keputusan berbasis data.",
    "hero.chip_loc": "Bogor & Palu, Indonesia",
    "hero.chip_edu": "Statistika & Sains Data IPB University",
    "hero.chip_award": "Top 15 Finalist SAS Curiosity Cup 2025",
    "hero.cta_projects": "Eksplorasi Proyek",
    "hero.cta_cv": "Lihat CV",
    "hero.cta_wa": "WhatsApp",
    "hero.cta_contact": "Hubungi Saya",
    "hero.direct_links": "Tautan Langsung:",
    "hero.term_comment": "# Ringkasan Profil & Rekam Jejak",
    "hero.metric1_label": "Project",
    "hero.metric1_val": "9+",
    "hero.metric1_desc": "Data Science & Applied Research",
    "hero.metric2_label": "Publikasi Ilmiah",
    "hero.metric2_desc": "Jurnal & Konferensi Bereputasi",
    "hero.metric3_label": "Prestasi Kompetisi",
    "hero.metric3_desc": "Juara Nasional & Best Paper",
    "hero.metric4_label": "Prestasi Akademik",
    "hero.metric4_val": "3.61",
    "hero.metric4_desc": "S1: 3.69 • S2: 3.61",
    "hero.cert_badge": "Certified Associate Data Science (BNSP/LSP)",
    "hero.ukbi_badge": "UKBI Unggul",

    // About Section
    "about.tag": "Tentang & Latar Belakang Akademik",
    "about.title": "Fondasi Statistika Kuat & Pendekatan Berbasis Bukti",
    "about.subtitle": "Menghubungkan ketelitian metodologi inferensi statistika dengan komputasi sains data modern untuk menghasilkan solusi berbasis bukti (<em>evidence-based decision-making</em>).",
    "about.profile_title": "Profil Profesional",
    "about.profile_p1": "Profesional berlatar belakang statistika dengan pendidikan pascasarjana di bidang Statistika dan Sains Data di IPB University, dengan pengalaman dalam pemodelan statistik, sains data, machine learning, natural language processing, riset kuantitatif, official statistics, visualisasi data, dan pengajaran universitas.",
    "about.profile_p2": "Terbiasa bekerja terutama dengan R dan Python, didukung pengalaman menggunakan SAS, Microsoft Excel, SQL/PostgreSQL, Git/GitHub, serta teknologi basis data dalam proyek akademik, riset, pelatihan, dan terapan.",
    "about.profile_p3": "Fokus kerja saya adalah mentransformasikan data kompleks menjadi bukti empiris yang terukur, insight analitik, dashboard, laporan, presentasi, dan rekomendasi praktis untuk mendukung pengambilan keputusan berbasis data.",
    "about.profile_p4": "Minat riset dan terapan saya mencakup pemodelan statistik, machine learning, analitik teks bahasa Indonesia, kesehatan masyarakat, ketahanan pangan, statistika spasial, analisis multivariat, dan alur pemrosesan data yang andal.",
    "about.focus_label": "Fokus & Minat Terapan:",
    "about.supporting_label": "Kapabilitas Teknis Pendukung:",
    "about.edu_title": "Riwayat Pendidikan Formal",
    "about.master_tag": "2024 - Sekarang",
    "about.master_inst": "IPB UNIVERSITY • BOGOR",
    "about.master_degree": "Program Magister Statistika dan Sains Data",
    "about.master_gpa": "IPK: 3.61 / 4.00",
    "about.master_focus": "<strong>Fokus:</strong> Analisis data statistik, komputasi sains data, machine learning, dan pemodelan topik teks.",
    "about.master_thesis": "<strong>Tesis:</strong> <em>\"Performance Evaluation of BERTopic for Multidomain Topic Modeling of Indonesian News Texts.\"</em>",
    "about.bachelor_tag": "2019 - 2023",
    "about.bachelor_inst": "UNIVERSITAS TADULAKO • PALU",
    "about.bachelor_degree": "Sarjana Statistika (S.Stat.)",
    "about.bachelor_gpa": "IPK: 3.69 / 4.00 (Cum Laude)",
    "about.bachelor_focus": "<strong>Fokus:</strong> Statistika terapan, regresi, multivariat, deret waktu, dan komputasi statistika.",
    "about.bachelor_thesis": "<strong>Skripsi:</strong> <em>\"Fuzzy Gustafson-Kessel dan Possibilistic Fuzzy C-Means untuk Klastering Wilayah Berdasarkan Indikator Stunting.\"</em>",
    "about.lang_id_label": "Kemampuan Bahasa Indonesia",
    "about.lang_id_level": "Kemahiran Sangat Tinggi / Mahir",
    "about.lang_en_label": "Kemampuan Bahasa Inggris",
    "about.lang_en_level": "Intermediate / Riset Saintifik",

    // Skills Section
    "skills.tag": "Peta Kompetensi",
    "skills.title": "Spesialisasi Inti & Toolkit Analitik",
    "skills.subtitle": "Pengalaman teknis dalam metodologi analitik kuantitatif, pemodelan statistik, komputasi sains data, dan pengelolaan alur kerja data.",
    "skills.c1_title": "Statistical Modeling & Inference",
    "skills.c1_desc": "Analisis data eksploratif, pemodelan regresi, inferensi statistik, analisis multivariat (PCA, MANOVA), dan perancangan percobaan.",
    "skills.c2_title": "Machine Learning & NLP",
    "skills.c2_desc": "Klastering data terstruktur (K-Means, Fuzzy GK, PFCM), text analytics bahasa Indonesia, dan benchmarking model topik (BERTopic).",
    "skills.c3_title": "Applied Domains & Spatial",
    "skills.c3_desc": "Aplikasi analitik pada kesehatan publik, ketahanan pangan (SDG 2), autokorelasi spasial (Indeks Moran), dan pemodelan risiko aktuaria.",
    "skills.c4_title": "Tools, Databases & Dashboards",
    "skills.c4_desc": "Komputasi dengan R dan Python, pengolahan data dengan SAS dan Excel, pemodelan relasional SQL/PostgreSQL, NoSQL MongoDB, dan R Shiny.",

    // Experience Section
    "exp.tag": "Jejak Karir & Pengalaman",
    "exp.title": "Pengalaman Industri & Pengajaran Akademik",
    "exp.tab_prof": "Industri & Riset Terapan",
    "exp.tab_teach": "Pengajaran / Asisten Praktikum",
    "exp.j1_inst": "STATISTIKAWAN • PALU",
    "exp.j1_role": "Statistician / Data Analyst",
    "exp.j1_time": "Jul 2023 - Sekarang",
    "exp.j1_b1": "Memberikan dukungan statistika dan analisis data untuk proyek akademik dan bisnis, meliputi pra-pemrosesan data, EDA, pemodelan statistik, machine learning, analisis multivariat, dan interpretasi analitik.",
    "exp.j1_b2": "Menggunakan R, Python, dan Microsoft Excel untuk mengidentifikasi pola hubungan data terstruktur serta merumuskan laporan analitik berbasis bukti bagi klien.",
    "exp.j2_inst": "PT. INDONESIA CENTRAL ASIA EXPORT IMPORT TRADING • PALU",
    "exp.j2_role": "Financial Accounting Assistant",
    "exp.j2_time": "Nov 2023 - Jul 2024",
    "exp.j2_b1": "Mengelola dan menganalisis data transaksi keuangan, arus kas, pembayaran, dan pencatatan akuntansi untuk mendukung ketepatan pelaporan keuangan.",
    "exp.j2_b2": "Mendukung administrasi penganggaran operasional, petty cash, billing, dan pelaporan perpajakan ekspor-impor.",
    "exp.j3_inst": "BADAN PUSAT STATISTIK (BPS) PROVINSI SULAWESI TENGAH",
    "exp.j3_role": "Student Intern (Official Statistics)",
    "exp.j3_time": "Jul 2022 - Agu 2022",
    "exp.j3_b1": "Mendukung pengolahan data sensus dan survei resmi, pemrosesan dokumen pendataan awal REGSOSEK 2022, validasi data, serta pemeriksaan konsistensi Long Form SP2020.",
    "exp.j3_b2": "Mendukung diseminasi statistik melalui pembuatan infografis publikasi dan alur kerja jaminan kualitas data statistik resmi.",
    "exp.j4_inst": "PT. GREATEDU MAHARDIKA LOKAL • MSIB KEMENDIKBUD",
    "exp.j4_role": "Data Analyst Student - MSIB Studi Independen Bersertifikat",
    "exp.j4_time": "Agu 2022 - Des 2022",
    "exp.j4_b1": "Melakukan data wrangling dan visualisasi menggunakan Microsoft Excel dan Python (NumPy, Pandas, Matplotlib), dengan paparan pelatihan PostgreSQL dan Cognos Analytics.",
    "exp.j4_b2": "Menyelesaikan proyek akhir yang menerjemahkan hasil analisis data menjadi recommendation deck dan presentasi strategis.",

    // Teaching Experience
    "exp.t1_role": "Asisten Praktikum - Manajemen Data & EDA (Python/Pandas)",
    "exp.t1_time": "Agu 2026 - Sekarang",
    "exp.t1_desc": "Mendampingi mahasiswa dalam berbagai mata kuliah statistika dan sains data, khususnya struktur data, pembersihan data, transformasi, agregasi, dan alur kerja analisis data reproduktif menggunakan Python dan Pandas.",
    "exp.t2_role": "Asisten Praktikum - Statistika untuk Teknik",
    "exp.t2_time": "Agu 2026 - Sekarang",
    "exp.t2_desc": "Mendukung pengajaran statistika deskriptif, distribusi probabilitas dan sampling, estimasi parameter, uji hipotesis, perancangan percobaan, dan regresi linier untuk aplikasi keteknikan.",
    "exp.t3_role": "Asisten Praktikum - EDA & Visualisasi Bioinformatika",
    "exp.t3_time": "Mar 2026 - Jul 2026",
    "exp.t3_desc": "Mendampingi sesi praktikum eksplorasi data bioinformatika, deteksi outlier, imputasi missing values, korelasi kanonikal (CCA), PCA, dan klastering statistik.",
    "exp.t4_role": "Asisten Dosen - Analisis Multivariat (Multivariate Analysis)",
    "exp.t4_time": "2023 & 2025",
    "exp.t4_desc": "Membimbing mahasiswa dalam praktikum metode multivariat menggunakan bahasa R: MANOVA, analisis profil, PCA, analisis faktor, biplot, correspondence analysis, klastering, dan analisis diskriminan.",

    // Projects Section
    "proj.tag": "Portofolio Proyek Terpilih",
    "proj.title": "Proyek Sains Data, Pemodelan & Riset Terapan",
    "proj.subtitle": "Koleksi proyek mencakup pemodelan topik NLP, pemodelan aktuaria, analisis spasial regional, sistem basis data, dan dashboard interaktif.",
    "proj.filter_all": "Semua Proyek",
    "proj.filter_ml": "Machine Learning & NLP",
    "proj.filter_risk": "Statistical & Risk Modeling",
    "proj.filter_spatial": "Spatial Analytics",
    "proj.filter_db": "Database & Data Engineering",
    "proj.filter_dashboard": "Dashboards",
    "proj.btn_detail": "Detail Proyek",

    // Publications Section
    "pub.tag": "Publikasi Ilmiah & Luaran Riset",
    "pub.title": "Karya Ilmiah di Jurnal & Prosiding Nasional/Internasional",
    "pub.subtitle": "Kontribusi empiris pada literatur sains data, pemodelan topik teks, ketahanan pangan, dan epidemiologi spasial.",

    // Awards Section
    "awards.tag": "Pengakuan & Kredensial",
    "awards.title": "Prestasi Kompetisi & Sertifikasi Profesi",
    "awards.subtitle": "Bukti dedikasi dan pencapaian analitik yang diakui dalam kompetisi global, konferensi saintifik, dan sertifikasi standar kompetensi kerja.",
    "awards.cert_title": "Sertifikasi Kompetensi Resmi (SKKNI & BNSP)",

    // Contact Section
    "contact.tag": "Mari Berkolaborasi",
    "contact.title": "Hubungi Saya untuk Riset & Proyek Data",
    "contact.subtitle": "Terbuka untuk peluang karir Data Scientist / Statistician / Data Analyst, kolaborasi riset kuantitatif, konsultasi statistik, maupun pengembangan dashboard analitik.",
    "contact.email_label": "Email Pribadi",
    "contact.copy_btn": "Salin",
    "contact.phone_label": "Telepon & WhatsApp",
    "contact.wa_btn": "Chat WhatsApp",
    "contact.loc_label": "Domisili & Ketersediaan",
    "contact.loc_val": "Bogor & Palu, Indonesia",
    "contact.loc_sub": "Tersedia untuk peluang On-site (Jabodetabek) maupun Remote",
    "contact.form_title": "Kirim Pesan",
    "contact.form_subtitle": "Formulir ini akan merangkai draf pesan terstruktur ke klien email resmi Anda.",
    "contact.form_name": "Nama Lengkap",
    "contact.form_name_ph": "Nama Anda atau Institusi/Perusahaan",
    "contact.form_email": "Alamat Email Anda",
    "contact.form_subject": "Subjek / Topik",
    "contact.form_subject_ph": "Contoh: Peluang Karir Data Science / Kolaborasi Riset",
    "contact.form_msg": "Pesan atau Kebutuhan Kolaborasi",
    "contact.form_msg_ph": "Tuliskan ringkasan kebutuhan analisis data atau kolaborasi yang ingin dibahas...",
    "contact.form_btn": "Kirim Pesan via Email",
    "contact.toast": "Email w2nspt@gmail.com berhasil disalin!",

    // Project modal labels
    "project.github": "Repositori GitHub",
    "project.demo": "Live Demo / Pratinjau",
    "project.overview": "Ringkasan & Tujuan Proyek:",
    "project.methodology": "Metodologi & Capaian Kunci:",
    "project.tools": "Teknologi & Toolkit:",

    // Footer
    "footer.rights": "Semua Hak Cipta Dilindungi.",
    "footer.back_to_top": "Kembali ke Atas ↑",
    "footer.print_cv": "Cetak CV"
  },

  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.awards": "Honors & Awards",
    "nav.contact": "Contact",
    "nav.print_cv": "Print CV",
    "nav.contact_btn": "Get in Touch",
    "nav.mobile_lang": "Ganti ke Bahasa Indonesia (ID)",

    // Hero Section
    "hero.badge": "Available for Data Science, Applied Research & Consulting",
    "hero.identity": "Statistician & Data Scientist",
    "hero.subheadline": "Statistical Modeling • Machine Learning • NLP • Applied Research",
    "hero.pitch": "Statistics-trained professional with experience in statistical modeling, machine learning, natural language processing, official statistics, applied research, and interactive analytics. Experienced in transforming complex data into interpretable evidence, actionable insights, and practical recommendations for data-driven decision-making.",
    "hero.chip_loc": "Bogor & Palu, Indonesia",
    "hero.chip_edu": "Statistics & Data Science, IPB University",
    "hero.chip_award": "Top 15 Finalist SAS Curiosity Cup 2025",
    "hero.cta_projects": "Explore Projects",
    "hero.cta_cv": "View CV",
    "hero.cta_wa": "WhatsApp",
    "hero.cta_contact": "Contact Me",
    "hero.direct_links": "Direct Links:",
    "hero.term_comment": "# Summary of Profile & Track Record",
    "hero.metric1_label": "Project",
    "hero.metric1_val": "9+",
    "hero.metric1_desc": "Data Science & Applied Research",
    "hero.metric2_label": "Scientific Publications",
    "hero.metric2_desc": "Peer-Reviewed Journals & Conf.",
    "hero.metric3_label": "Competition Achievements",
    "hero.metric3_desc": "National Awards & Best Paper",
    "hero.metric4_label": "Academic Performance",
    "hero.metric4_val": "3.61",
    "hero.metric4_desc": "S1: 3.69 • S2: 3.61",
    "hero.cert_badge": "Certified Associate Data Science (BNSP/LSP)",
    "hero.ukbi_badge": "UKBI Superior",

    // About Section
    "about.tag": "About & Academic Background",
    "about.title": "Strong Statistical Foundation & Evidence-Based Approach",
    "about.subtitle": "Bridging the rigor of statistical inference with modern data science computing to deliver interpretable, evidence-based solutions.",
    "about.profile_title": "Professional Profile",
    "about.profile_p1": "Statistics-trained professional with postgraduate training in Statistics and Data Science at IPB University, with experience in statistical modeling, data science, machine learning, natural language processing, quantitative research, official statistics, data visualization, and university teaching.",
    "about.profile_p2": "I work primarily with R and Python, with additional experience using SAS, Microsoft Excel, SQL/PostgreSQL, Git/GitHub, and database technologies across academic, research, training, and applied projects.",
    "about.profile_p3": "My work focuses on transforming complex data into interpretable evidence, analytical insights, dashboards, reports, presentations, and practical recommendations that support data-driven decision-making.",
    "about.profile_p4": "My research and applied interests include statistical modeling, machine learning, Indonesian text analytics, public health, food security, spatial statistics, multivariate analysis, and reliable data-processing workflows.",
    "about.focus_label": "Core Research & Applied Interests:",
    "about.supporting_label": "Supporting Technical Capabilities:",
    "about.edu_title": "Formal Academic Background",
    "about.master_tag": "2024 - Present",
    "about.master_inst": "IPB UNIVERSITY • BOGOR",
    "about.master_degree": "Master's Program in Statistics and Data Science",
    "about.master_gpa": "GPA: 3.61 / 4.00",
    "about.master_focus": "<strong>Focus:</strong> Statistical data analysis, data science and computing, machine learning, and text analytics.",
    "about.master_thesis": "<strong>Thesis:</strong> <em>\"Performance Evaluation of BERTopic for Multidomain Topic Modeling of Indonesian News Texts.\"</em>",
    "about.bachelor_tag": "2019 - 2023",
    "about.bachelor_inst": "TADULAKO UNIVERSITY • PALU",
    "about.bachelor_degree": "Bachelor's Degree in Statistics (S.Stat.)",
    "about.bachelor_gpa": "GPA: 3.69 / 4.00 (Cum Laude)",
    "about.bachelor_focus": "<strong>Focus:</strong> Applied statistics, regression and multivariate analysis, time series, and statistical computing.",
    "about.bachelor_thesis": "<strong>Undergraduate Thesis:</strong> <em>\"Fuzzy Gustafson-Kessel and Possibilistic Fuzzy C-Means for clustering regencies/cities in Central Sulawesi based on stunting indicators.\"</em>",
    "about.lang_id_label": "Indonesian Language Proficiency",
    "about.lang_id_level": "UKBI 639 ('Unggul' / Superior / Native)",
    "about.lang_en_label": "English Language Proficiency",
    "about.lang_en_level": "Intermediate / Scientific Research",

    // Skills Section
    "skills.tag": "Competency Matrix",
    "skills.title": "Core Specializations & Technical Toolkit",
    "skills.subtitle": "Technical experience across quantitative modeling methodologies, statistical inference, scientific computing, and data management workflows.",
    "skills.c1_title": "Statistical Modeling & Inference",
    "skills.c1_desc": "Exploratory data analysis, regression modeling, statistical inference, multivariate analysis (PCA, MANOVA), and experimental design.",
    "skills.c2_title": "Machine Learning & NLP",
    "skills.c2_desc": "Clustering methods (K-Means, Fuzzy GK, PFCM), Indonesian text analytics, and benchmarking topic models (BERTopic).",
    "skills.c3_title": "Applied Domains & Spatial",
    "skills.c3_desc": "Quantitative applications in public health, regional food security (SDG 2), spatial autocorrelation (Moran's Index), and actuarial risk modeling.",
    "skills.c4_title": "Tools, Databases & Dashboards",
    "skills.c4_desc": "Scientific computing with R and Python, data analysis in SAS and Excel, relational modeling with SQL/PostgreSQL, NoSQL MongoDB, and R Shiny.",

    // Experience Section
    "exp.tag": "Career & Academic Experience",
    "exp.title": "Industry Roles & Academic Teaching",
    "exp.tab_prof": "Industry & Applied Analytics",
    "exp.tab_teach": "University Teaching Assistant",
    "exp.j1_inst": "STATISTIKAWAN • PALU",
    "exp.j1_role": "Statistician / Data Analyst",
    "exp.j1_time": "Jul 2023 - Present",
    "exp.j1_b1": "Provide statistical and data-analysis support for academic and business projects, including preprocessing, exploratory analysis, statistical modeling, machine learning, multivariate analysis, interpretation, and analytical reporting.",
    "exp.j1_b2": "Use R, Python, and Microsoft Excel to identify patterns and relationships and translate results into actionable, evidence-based insights.",
    "exp.j2_inst": "PT. INDONESIA CENTRAL ASIA EXPORT IMPORT TRADING • PALU",
    "exp.j2_role": "Financial Accounting Assistant",
    "exp.j2_time": "Nov 2023 - Jul 2024",
    "exp.j2_b1": "Managed and analyzed financial transactions, cash flow, payments, and accounting records to support accurate monthly reporting.",
    "exp.j2_b2": "Supported budgeting, petty cash, billing, financial administration, and taxation-related reporting for export-import operations.",
    "exp.j3_inst": "STATISTICS INDONESIA (BPS), CENTRAL SULAWESI PROVINCE",
    "exp.j3_role": "Student Intern (Official Statistics)",
    "exp.j3_time": "Jul 2022 - Aug 2022",
    "exp.j3_b1": "Supported census/survey data processing, REGSOSEK 2022 document processing, staging and validation, document-ID correction, and LFSP2020 consistency checking.",
    "exp.j3_b2": "Supported statistical dissemination through publication infographics and data-quality workflows.",
    "exp.j4_inst": "PT. GREATEDU MAHARDIKA LOKAL • MSIB INDEPENDENT STUDY",
    "exp.j4_role": "Data Analyst Student - Certified Independent Study",
    "exp.j4_time": "Aug 2022 - Dec 2022",
    "exp.j4_b1": "Performed data wrangling and visualization using Microsoft Excel and Python (NumPy, Pandas, Matplotlib), with training exposure to PostgreSQL and Cognos Analytics.",
    "exp.j4_b2": "Completed a final project translating analysis results into a recommendation deck and executive presentation.",

    // Teaching Experience
    "exp.t1_role": "Teaching Assistant - Data Management & EDA (Python/Pandas)",
    "exp.t1_time": "Aug 2026 - Present",
    "exp.t1_desc": "Supporting students across multiple quantitative and data science courses, focusing on data structures, input, inspection, cleaning, transformation, aggregation, and reproducible data-wrangling workflows using Python and Pandas.",
    "exp.t2_role": "Teaching Assistant - Statistics for Engineering",
    "exp.t2_time": "Aug 2026 - Present",
    "exp.t2_desc": "Support instruction in descriptive and exploratory statistics, sampling distributions, statistical inference, experimental design, linear regression, and introductory machine learning.",
    "exp.t3_role": "Teaching Assistant - EDA & Bioinformatics Visualization",
    "exp.t3_time": "Mar 2026 - Jul 2026",
    "exp.t3_desc": "Supported practical sessions on distributions, outliers, missing values, transformations, CCA, PCA, clustering, and statistical interpretation.",
    "exp.t4_role": "Teaching Assistant - Multivariate Analysis",
    "exp.t4_time": "2023 & 2025",
    "exp.t4_desc": "Guided students in multivariate methods using R, including MANOVA, PCA, factor analysis, biplot, clustering, correspondence analysis, and discriminant analysis.",

    // Projects Section
    "proj.tag": "Selected Project Portfolio",
    "proj.title": "Data Science, Modeling & Applied Research Projects",
    "proj.subtitle": "Curated selection of natural language processing research, actuarial risk models, spatial analytics, database architectures, and interactive dashboards.",
    "proj.filter_all": "All Projects",
    "proj.filter_ml": "Machine Learning & NLP",
    "proj.filter_risk": "Statistical & Risk Modeling",
    "proj.filter_spatial": "Spatial Analytics",
    "proj.filter_db": "Database & Data Engineering",
    "proj.filter_dashboard": "Dashboards",
    "proj.btn_detail": "Project Details",

    // Publications Section
    "pub.tag": "Scientific Publications & Research Outputs",
    "pub.title": "Peer-Reviewed Journals & Conference Proceedings",
    "pub.subtitle": "Empirical contributions to data science, natural language processing, regional food security, and spatial epidemiology.",

    // Awards Section
    "awards.tag": "Honors & Credentials",
    "awards.title": "Competition Achievements & Professional Certifications",
    "awards.subtitle": "Recognized performance in global analytics competitions, official statistics conferences, and government-certified competency standards.",
    "awards.cert_title": "Official Competency Certifications (SKKNI & BNSP)",

    // Contact Section
    "contact.tag": "Let's Connect",
    "contact.title": "Get in Touch for Projects & Collaboration",
    "contact.subtitle": "Open for Data Scientist / Statistician / Data Analyst opportunities, quantitative research partnerships, statistical consulting, and interactive dashboard development.",
    "contact.email_label": "Personal Email",
    "contact.copy_btn": "Copy",
    "contact.phone_label": "Phone & WhatsApp",
    "contact.wa_btn": "Chat on WhatsApp",
    "contact.loc_label": "Location & Availability",
    "contact.loc_val": "Bogor & Palu, Indonesia",
    "contact.loc_sub": "Available for On-site (Greater Jakarta) or Remote Roles",
    "contact.form_title": "Send a Message",
    "contact.form_subtitle": "This form will compose an organized email draft in your default email client.",
    "contact.form_name": "Full Name",
    "contact.form_name_ph": "Your Name or Organization",
    "contact.form_email": "Your Email Address",
    "contact.form_subject": "Subject / Topic",
    "contact.form_subject_ph": "e.g. Data Science Collaboration / Consulting Inquiry",
    "contact.form_msg": "Message / Project Scope",
    "contact.form_msg_ph": "Briefly describe your project requirements or research questions...",
    "contact.form_btn": "Send Message via Email",
    "contact.toast": "Email w2nspt@gmail.com copied to clipboard!",

    // Project modal labels
    "project.github": "GitHub Repository",
    "project.demo": "Live Demo / Preview",
    "project.overview": "Project Overview:",
    "project.methodology": "Key Methodology & Highlights:",
    "project.tools": "Technologies & Tools:",

    // Footer
    "footer.rights": "All Rights Reserved.",
    "footer.back_to_top": "Back to Top ↑",
    "footer.print_cv": "Print CV"
  }
};

// Current active language (default: 'id' or retrieved from localStorage)
let currentLang = localStorage.getItem('lang') || 'id';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update navbar indicator
  const langIndicator = document.getElementById('current-lang-text');
  if (langIndicator) {
    langIndicator.textContent = lang === 'id' ? 'ID' : 'EN';
  }

  const mobileLangIndicator = document.getElementById('current-lang-mobile-text');
  if (mobileLangIndicator) {
    mobileLangIndicator.textContent = lang === 'id' ? 'Ganti ke English (EN)' : 'Ganti ke Bahasa Indonesia (ID)';
  }

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Re-render project cards text (titles, snippets, badges)
  updateProjectCardsLang();

  // If modal is currently open, refresh its content
  const modal = document.getElementById('project-modal');
  if (modal && !modal.classList.contains('hidden')) {
    const currentProjectId = modal.getAttribute('data-current-project');
    if (currentProjectId) openProjectModal(currentProjectId);
  }
}

// Toggle language button
const langToggleBtn = document.getElementById('lang-toggle');
const langToggleMobileBtn = document.getElementById('lang-toggle-mobile');

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    setLanguage(nextLang);
  });
}

if (langToggleMobileBtn) {
  langToggleMobileBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    setLanguage(nextLang);
  });
}

// --- 2. ACCESSIBLE THEME LOGIC (Dark/Light mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcons(false);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
  const sunIcons = document.querySelectorAll('.sun-icon');
  const moonIcons = document.querySelectorAll('.moon-icon');
  
  sunIcons.forEach(icon => {
    icon.style.display = isDark ? 'block' : 'none';
  });
  moonIcons.forEach(icon => {
    icon.style.display = isDark ? 'none' : 'block';
  });
}

if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

// --- 3. MOBILE MENU ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// --- 4. BILINGUAL PROJECT DATA (5 CATEGORIES, FACTUAL CLAIMS) ---
// Categories:
// 'ml': Machine Learning & NLP
// 'risk': Statistical & Risk Modeling
// 'spatial': Spatial Analytics
// 'database': Database & Data Engineering
// 'dashboard': Dashboards
const projectData = {
  'bertopic': {
    category: 'ml',
    tags: ['Python', 'BERTopic', 'IndoBERT', 'IndoSBERT', 'mBERT', 'mMPNet', 'UMAP', 'HDBSCAN'],
    demoUrl: null,
    githubUrl: null,
    id: {
      title: 'Multidomain Topic Modeling of Indonesian News Texts',
      subtitle: 'Tesis Magister — Statistika dan Sains Data, IPB University',
      badge: 'Tesis Magister / NLP',
      overview: 'Evaluasi kinerja BERTopic untuk pemodelan topik multidomain pada berita berbahasa Indonesia. Penelitian membandingkan IndoBERT, IndoSBERT, multilingual BERT, dan multilingual MPNet melalui berbagai konfigurasi UMAP, clustering, dan topic representation.',
      keyPoints: [
        'Evaluasi menggunakan Topic Coherence, Topic Diversity, Topic Quality, dan outlier ratio',
        'Eksperimen pada 2,880 konfigurasi BERTopic di domain CNN Indonesia, Kompas, Detik, dan multidomain',
        'Analisis pengaruh embedding, dimensionality reduction, clustering, dan topic representation terhadap kualitas topik'
      ],
      demoLabel: null
    },
    en: {
      title: 'Multidomain Topic Modeling of Indonesian News Texts',
      subtitle: 'Master\'s Thesis — Statistics and Data Science, IPB University',
      badge: 'Master\'s Thesis / NLP',
      overview: 'Evaluated BERTopic performance for multidomain topic modeling of Indonesian online news by comparing IndoBERT, IndoSBERT, multilingual BERT, and multilingual MPNet across multiple UMAP, clustering, and topic-representation configurations.',
      keyPoints: [
        'Evaluated models using Topic Coherence, Topic Diversity, Topic Quality, and outlier ratio',
        'Benchmarked 2,880 BERTopic configurations across CNN Indonesia, Kompas, Detik, and multidomain corpora',
        'Analyzed the effects of embedding models, dimensionality reduction, clustering, and topic representation on topic quality'
      ],
      demoLabel: null
    }
  },
  'food-insecurity': {
    category: 'ml',
    tags: ['Machine Learning', 'Clustering', 'Official Statistics', 'SDG 2', 'R / Python'],
    demoUrl: null,
    githubUrl: null,
    id: {
      title: 'Regional Food Insecurity Clustering (SDG 2: Zero Hunger)',
      subtitle: 'Best Paper Official Statistics — ICDSO 2025 BPS Indonesia',
      badge: 'Best Paper Award',
      overview: 'Penerapan pendekatan machine learning clustering untuk memetakan disparitas ketahanan pangan daerah pada Konferensi Internasional Sains Data & Official Statistics (ICDSO 2025).',
      keyPoints: [
        'Penggunaan algoritma klastering machine learning dengan mitigasi multikolinearitas indikator pangan',
        'Karakterisasi profil klaster untuk mendukung penargetan intervensi logistik dan bantuan pangan daerah',
        'Dipresentasikan dalam prosiding konferensi internasional sains data BPS'
      ],
      demoLabel: null
    },
    en: {
      title: 'Regional Food Insecurity Clustering (SDG 2: Zero Hunger)',
      subtitle: 'Best Paper Award in Official Statistics — ICDSO 2025 (BPS Indonesia)',
      badge: 'Best Paper Award',
      overview: 'Applied machine learning clustering approaches to group Indonesian regions based on multidimensional food insecurity indicators to support the attainment of SDG 2: Zero Hunger; awarded Best Paper in the Official Statistics track.',
      keyPoints: [
        'Machine learning clustering algorithms handling collinear socio-agricultural food indicators',
        'Cluster characterization to optimize regional targeted social assistance and agricultural interventions',
        'Presented as an official international conference proceedings publication'
      ],
      demoLabel: null
    }
  },
  'stunting-clustering': {
    category: 'ml',
    tags: ['Fuzzy Clustering', 'Gustafson-Kessel', 'PFCM', 'Public Health', 'R'],
    demoUrl: null,
    githubUrl: null,
    id: {
      title: 'Fuzzy Gustafson-Kessel & PFCM for Stunting Profiling',
      subtitle: 'Skripsi Sarjana Statistika & Juara 1 Jambore Statistika XII Mulawarman',
      badge: 'Juara 1 Nasional & Skripsi',
      overview: 'Komparasi algoritma klastering Fuzzy Gustafson-Kessel (FGK) yang mampu mendeteksi klaster dengan matriks kovarians elipsoid dan Possibilistic Fuzzy C-Means (PFCM) untuk segmentasi wilayah stunting di Sulawesi Tengah.',
      keyPoints: [
        'Formulasi matematis algoritma optimasi partisi fuzzy dalam bahasa R',
        'Meraih Juara 1 Lomba Analisis Statistika Nasional di Universitas Mulawarman',
        'Memberikan wawasan kuantitatif untuk prioritas intervensi determinan gizi daerah'
      ],
      demoLabel: null
    },
    en: {
      title: 'Fuzzy Gustafson-Kessel & PFCM for Stunting Profiling',
      subtitle: 'Undergraduate Thesis & 1st Place Winner at Jambore Statistika XII Mulawarman',
      badge: '1st Place Winner & Thesis',
      overview: 'Compared Fuzzy Gustafson-Kessel (FGK) clustering—capable of detecting ellipsoidal clusters with varying covariance orientations—and Possibilistic Fuzzy C-Means (PFCM) for Central Sulawesi regency/city stunting profiling.',
      keyPoints: [
        'Custom algorithmic implementation of fuzzy objective function optimization in R',
        'Awarded 1st Place in the National Statistics Analysis Competition at Mulawarman University',
        'Delivered quantitative insights on targeted public health nutrition interventions'
      ],
      demoLabel: null
    }
  },
  'bpjs-actuarial': {
    category: 'risk',
    tags: ['Actuarial Science', 'Collective Risk Model', 'R', 'Healthcare Analytics', 'BPJS Kesehatan'],
    demoUrl: null,
    githubUrl: null,
    id: {
      title: 'Adverse Selection & Beban Klaim JKN Berbasis Aktuaria Risiko Kolektif',
      subtitle: 'Juara 3 Nasional — BPJS Health Actuarial Modeling Competition 2025',
      badge: 'Juara 3 Nasional',
      overview: 'Karya pemodelan aktuaria untuk mengidentifikasi fenomena adverse selection dan memproyeksikan beban klaim Jaminan Kesehatan Nasional (JKN) berdasarkan faktor-faktor sosiodemografi peserta.',
      keyPoints: [
        'Penerapan model risiko kolektif (Compound Poisson / Negative Binomial) pada distribusi frekuensi dan severitas klaim',
        'Pengujian empiris dampak adverse selection segmen peserta mandiri',
        'Merumuskan rekomendasi kebijakan tarif premi dan strategi retensi kepesertaan aktif'
      ],
      demoLabel: null
    },
    en: {
      title: 'Adverse Selection and JKN Claim Burden Actuarial Modeling',
      subtitle: '3rd Place National Award — BPJS Health Actuarial Modeling Competition 2025',
      badge: '3rd Place National Award',
      overview: 'Applied a collective risk actuarial modeling approach to analyze socio-demographic factors, adverse selection phenomena, and their empirical impact on claim burdens in the Indonesian National Health Insurance (JKN).',
      keyPoints: [
        'Compound collective risk modeling evaluating both claim frequency and claim severity distributions',
        'Empirical validation of adverse selection patterns among non-salaried voluntary participants',
        'Formulated policy recommendations on contribution rate structures and active participant retention'
      ],
      demoLabel: null
    }
  },
  'sas-earthquake': {
    category: 'spatial',
    tags: ['SAS', 'K-Means', 'Spatial Analysis', 'BMKG Data', 'BPS Statistics'],
    demoUrl: null,
    githubUrl: null,
    id: {
      title: 'Clustering of Earthquake Areas on Sulawesi Island',
      subtitle: 'SAS Curiosity Cup 2025 — Global Finalist (Top 15 Dunia)',
      badge: 'Global Finalist (Top 15)',
      overview: 'Studi pemetaan dan pengelompokan wilayah kerentanan gempa bumi di Pulau Sulawesi menggunakan integrasi data seismisitas BMKG dan data sosial-kependudukan BPS. Terpilih sebagai Top 15 karya terbaik dunia di kompetisi global SAS Curiosity Cup 2025.',
      keyPoints: [
        'Analisis klaster K-Means pada koordinat gempa, magnitudo, kedalaman, dan kepadatan populasi wilayah',
        'Identifikasi zona risiko kritis untuk rekomendasi mitigasi bencana pemerintah daerah',
        'Pengolahan dan dokumentasi analitik komprehensif menggunakan ekosistem software SAS'
      ],
      demoLabel: null
    },
    en: {
      title: 'Clustering of Earthquake Areas on Sulawesi Island',
      subtitle: 'SAS Curiosity Cup 2025 — Global Finalist (Top 15 Papers in the World)',
      badge: 'Global Finalist (Top 15)',
      overview: 'Applied K-Means clustering to seismic and regional socioeconomic data from BMKG and BPS to identify spatial earthquake vulnerability patterns across Sulawesi Island. Selected among the Top 15 student research papers globally by SAS Institute.',
      keyPoints: [
        'K-Means clustering on earthquake epicenters, depth, magnitude, and regional population density',
        'Identification of high-risk priority clusters to guide regional disaster preparedness policies',
        'End-to-end data preparation, analysis, and visualization conducted within the SAS ecosystem'
      ],
      demoLabel: null
    }
  },
  'schistosomiasis-gis': {
    category: 'spatial',
    tags: ['Spatial Statistics', 'Moran\'s Index', 'GIS', 'Public Health', 'Web Dashboard'],
    demoUrl: null,
    githubUrl: null,
    id: {
      title: 'Spatial Analysis of Schistosomiasis & Web Dashboard',
      subtitle: 'Hibah Riset Kemendikbudristek PKM-RE & Prototipe Web Dashboard',
      badge: 'Hibah PKM-RE & Jurnal',
      overview: 'Riset spasial epidemiologi didanai Kemendikbudristek (PKM-RE) yang menganalisis autokorelasi spasial persebaran penyakit endemis Schistosomiasis di Danau Lindu & Lembah Napu menggunakan Indeks Moran, dilengkapi sistem dashboard visualisasi interaktif.',
      keyPoints: [
        'Perhitungan autokorelasi spasial global dan lokal (LISA / Moran Scatterplot) untuk mendeteksi hotspot penularan',
        'Pengembangan prototipe web dashboard informasi spasial untuk kebutuhan monitoring kesehatan daerah',
        'Diterbitkan di Jambura Journal of Probability and Statistics (2022)'
      ],
      demoLabel: null
    },
    en: {
      title: 'Spatial Analysis of Schistosomiasis & Web Dashboard',
      subtitle: 'PKM-RE Research Grant Recipient & Interactive Web Dashboard Component',
      badge: 'Grant Winner & Journal Paper',
      overview: 'Awarded national research funding (PKM-RE) for spatial epidemiological modeling using Moran\'s Index to trace endemic Schistosomiasis transmissions in Central Sulawesi, integrated with an interactive web dashboard component.',
      keyPoints: [
        'Global and local spatial autocorrelation analysis (LISA) identifying geographical infection hotspots',
        'Engineered an interactive health information dashboard component for disease monitoring',
        'Published in the peer-reviewed Jambura Journal of Probability and Statistics (2022)'
      ],
      demoLabel: null
    }
  },
  'supermarket-db': {
    category: 'database',
    tags: ['SQL', 'PostgreSQL', 'ERD Design', 'Data Modeling', 'Business Intelligence'],
    demoUrl: null,
    githubUrl: null,
    id: {
      title: 'Supermarket Relational Database & Analytics System',
      subtitle: 'Perancangan Basis Data Relasional, ETL, dan Analitik Penjualan',
      badge: 'Database & Analytics',
      overview: 'Membangun arsitektur basis data relasional untuk data ritel supermarket, mencakup entitas transaksi pelanggan, produk, cabang kasir, dan inventaris. Dilengkapi alur ETL data cleaning dan query analitik performa cabang.',
      keyPoints: [
        'Desain skema database relasional dengan normalisasi, integritas foreign key, dan indeks performa',
        'Pipeline pembersihan data transaksi dan agregasi analitik branch performance',
        'Pembuatan view analitik untuk memonitor margin penjualan, tren waktu transaksi, dan segmentasi pelanggan'
      ],
      demoLabel: null
    },
    en: {
      title: 'Supermarket Relational Database & Analytics System',
      subtitle: 'End-to-End Relational Data Modeling, ETL, and Sales Analytics',
      badge: 'Database & Analytics',
      overview: 'Worked with an end-to-end relational retail data model covering customers, products, branches, invoices, and transactions; executed ETL workflows, data cleaning, integrity verification, and SQL-driven business intelligence views.',
      keyPoints: [
        'Entity Relationship Diagram (ERD) design with primary/foreign-key enforcement and query indexing',
        'Data cleaning and staging pipelines ensuring cross-table referential consistency',
        'Developed analytical views and dashboard queries for branch, product, and sales performance tracking'
      ],
      demoLabel: null
    }
  },
  'mongodb-r': {
    category: 'database',
    tags: ['MongoDB', 'R / mongolite', 'NoSQL', 'Aggregation Framework', 'RPubs'],
    demoUrl: 'https://rpubs.com/wawansaputra2105_/1316904',
    githubUrl: null,
    id: {
      title: 'MongoDB Aggregation Pipeline with R',
      subtitle: 'Dokumentasi Eksekusi Query Agregasi NoSQL di Bahasa R',
      badge: 'NoSQL & Data Pipelines',
      overview: 'Dokumentasi terstruktur mengenai pemanfaatan R bersama basis data NoSQL MongoDB untuk eksekusi aggregation pipeline multi-stage, data restructuring, dan analisis data berformat dokumen semi-terstruktur.',
      keyPoints: [
        'Implementasi stage pipeline ($match, $group, $project, $unwind) langsung dari sesi R',
        'Penyusunan alur agregasi data pada level basis data sebelum analisis statistik lanjutan',
        'Dipublikasikan secara terbuka untuk komunitas di platform RPubs'
      ],
      demoLabel: 'Buka di RPubs'
    },
    en: {
      title: 'MongoDB Aggregation Pipeline with R',
      subtitle: 'Documented NoSQL Aggregation and Analytical Query Workflows',
      badge: 'NoSQL & Data Pipelines',
      overview: 'Documented an R-based project showcasing multi-stage aggregation pipeline construction with NoSQL MongoDB databases, enabling structured restructuring and analysis of semi-structured document datasets.',
      keyPoints: [
        'Constructed multi-stage aggregation pipelines ($match, $group, $project, $unwind) from R sessions',
        'Leveraged database-level transformations to prepare analysis-ready data pipelines',
        'Open-source knowledge documentation published on the RPubs technical platform'
      ],
      demoLabel: 'Open on RPubs'
    }
  },
  'fsva': {
    category: 'dashboard',
    tags: ['R Shiny', 'Leaflet', 'Data Visualization', 'Official Statistics', 'Public Policy'],
    demoUrl: 'https://6oai34-fani-fahira.shinyapps.io/fsva_dashboard_indonesia/',
    githubUrl: null,
    id: {
      title: 'Food Security Vulnerability Atlas (FSVA) Indonesia',
      subtitle: 'Interactive R Shiny Dashboard for Regional Food Security Analysis',
      badge: 'Live Dashboard & Analytics',
      overview: 'Berkontribusi dalam analisis dan visualisasi indikator ketahanan pangan regional melalui pengembangan produk data interaktif berbasis R Shiny dan Leaflet.',
      keyPoints: [
        'Visualisasi spasial interaktif berbasis peta choropleth tingkat kabupaten/kota di Indonesia',
        'Eksplorasi indikator ketersediaan, aksesibilitas, dan pemanfaatan pangan regional',
        'Desain antarmuka responsif menggunakan Shiny Dashboard untuk kebutuhan diseminasi data'
      ],
      demoLabel: 'Buka Live Dashboard'
    },
    en: {
      title: 'Food Security Vulnerability Atlas (FSVA) Indonesia',
      subtitle: 'Interactive R Shiny Dashboard for Regional Food Security Analysis',
      badge: 'Live Dashboard & Analytics',
      overview: 'Contributed to the analysis and visualization of food-security-related regional indicators through an interactive R Shiny and Leaflet data product.',
      keyPoints: [
        'Interactive spatial choropleth mapping across Indonesian regencies and cities',
        'Multi-dimensional exploration of food availability, accessibility, and utilization',
        'Responsive user experience built with R Shiny and Leaflet for public dissemination'
      ],
      demoLabel: 'Open Live Dashboard'
    }
  }
};

// Update Project Cards on Language Change
function updateProjectCardsLang() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const projectId = card.getAttribute('data-project-id');
    const data = projectData[projectId];
    if (!data) return;

    const langData = data[currentLang] || data['id'];

    const badgeEl = card.querySelector('.project-badge');
    const titleEl = card.querySelector('.project-title');
    const descEl = card.querySelector('.project-desc');
    const detailBtnEl = card.querySelector('.project-detail-btn-text');

    if (badgeEl) badgeEl.textContent = langData.badge;
    if (titleEl) titleEl.textContent = langData.title;
    if (descEl) descEl.textContent = langData.overview;
    if (detailBtnEl) detailBtnEl.textContent = translations[currentLang]['proj.btn_detail'];
  });
}

// Open Project Modal
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const langData = data[currentLang] || data['id'];
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  // Track current project in modal
  modal.setAttribute('data-current-project', projectId);

  // Fill in content
  document.getElementById('modal-badge').textContent = langData.badge;
  document.getElementById('modal-title').textContent = langData.title;
  document.getElementById('modal-subtitle').textContent = langData.subtitle;
  document.getElementById('modal-overview').textContent = langData.overview;

  // Overview label
  const overviewLabel = document.getElementById('modal-overview-label');
  if (overviewLabel) {
    overviewLabel.textContent = translations[currentLang]['project.overview'];
  }

  // Key highlights label
  const methodLabel = document.getElementById('modal-methodology-label');
  if (methodLabel) {
    methodLabel.textContent = translations[currentLang]['project.methodology'];
  }

  // Tools label
  const toolsLabel = document.getElementById('modal-tools-label');
  if (toolsLabel) {
    toolsLabel.textContent = translations[currentLang]['project.tools'];
  }

  // Tags
  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  data.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'px-2.5 py-1 text-xs font-medium rounded-md bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60';
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  // Key points
  const pointsContainer = document.getElementById('modal-points');
  pointsContainer.innerHTML = '';
  langData.keyPoints.forEach(point => {
    const li = document.createElement('li');
    li.className = 'flex items-start text-sm text-slate-600 dark:text-slate-300';
    li.innerHTML = `
      <svg class="w-4 h-4 mr-2.5 mt-0.5 text-teal-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>${point}</span>
    `;
    pointsContainer.appendChild(li);
  });

  // Action links: only render valid URLs, no generic profile masquerading as repository
  const linksContainer = document.getElementById('modal-links');
  linksContainer.innerHTML = '';
  
  if (data.demoUrl) {
    const demoBtn = document.createElement('a');
    demoBtn.href = data.demoUrl;
    demoBtn.target = '_blank';
    demoBtn.rel = 'noopener noreferrer';
    demoBtn.className = 'inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition-colors';
    demoBtn.innerHTML = `
      <span>${langData.demoLabel || translations[currentLang]['project.demo']}</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    `;
    linksContainer.appendChild(demoBtn);
  }

  // Only display GitHub button if specific repository URL exists
  if (data.githubUrl && typeof data.githubUrl === 'string' && data.githubUrl.trim() !== '') {
    const ghBtn = document.createElement('a');
    ghBtn.href = data.githubUrl;
    ghBtn.target = '_blank';
    ghBtn.rel = 'noopener noreferrer';
    ghBtn.className = 'inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors';
    ghBtn.innerHTML = `
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
      <span>${translations[currentLang]['project.github']}</span>
    `;
    linksContainer.appendChild(ghBtn);
  }

  // Show modal
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  setTimeout(() => {
    modalContent.classList.remove('opacity-0', 'scale-95');
    modalContent.classList.add('opacity-100', 'scale-100');
  }, 10);
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal) return;

  modalContent.classList.remove('opacity-100', 'scale-100');
  modalContent.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }, 150);
}

// Modal event listeners
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBackdrop = document.getElementById('modal-backdrop');

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// --- 5. PROJECT CATEGORY FILTER (5 CATEGORIES) ---
const filterButtons = document.querySelectorAll('.project-filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active button state
    filterButtons.forEach(b => {
      b.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
      b.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
    });
    btn.classList.add('bg-teal-600', 'text-white', 'shadow-sm');
    btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// --- 6. TIMELINE TAB TOGGLE (Professional vs Teaching) ---
const tabProfessional = document.getElementById('tab-professional');
const tabTeaching = document.getElementById('tab-teaching');
const timelineProfessional = document.getElementById('timeline-professional');
const timelineTeaching = document.getElementById('timeline-teaching');

if (tabProfessional && tabTeaching && timelineProfessional && timelineTeaching) {
  tabProfessional.addEventListener('click', () => {
    tabProfessional.classList.add('border-teal-500', 'text-teal-600', 'dark:text-teal-400');
    tabProfessional.classList.remove('border-transparent', 'text-slate-500', 'dark:text-slate-400');
    tabTeaching.classList.remove('border-teal-500', 'text-teal-600', 'dark:text-teal-400');
    tabTeaching.classList.add('border-transparent', 'text-slate-500', 'dark:text-slate-400');

    timelineProfessional.classList.remove('hidden');
    timelineTeaching.classList.add('hidden');
  });

  tabTeaching.addEventListener('click', () => {
    tabTeaching.classList.add('border-teal-500', 'text-teal-600', 'dark:text-teal-400');
    tabTeaching.classList.remove('border-transparent', 'text-slate-500', 'dark:text-slate-400');
    tabProfessional.classList.remove('border-teal-500', 'text-teal-600', 'dark:text-teal-400');
    tabProfessional.classList.add('border-transparent', 'text-slate-500', 'dark:text-slate-400');

    timelineTeaching.classList.remove('hidden');
    timelineProfessional.classList.add('hidden');
  });
}

// --- 7. COPY EMAIL WITH ROBUST FALLBACK ---
function showCopyToast() {
  const toast = document.getElementById('copy-toast');
  if (toast) {
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 2500);
  }
}

function copyEmailToClipboard() {
  const email = 'w2nspt@gmail.com';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email)
      .then(() => {
        showCopyToast();
      })
      .catch(() => {
        // Fallback directly to mailto
        window.location.href = `mailto:${email}`;
      });
  } else {
    // Fallback if clipboard API is not available
    window.location.href = `mailto:${email}`;
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setLanguage(currentLang);
});
