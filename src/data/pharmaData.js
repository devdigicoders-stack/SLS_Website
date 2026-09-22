export const COMPANY_INFO = {
  name: "SLS Pharma",
  tagline: "Pioneering Formulations, Enhancing Global Health",
  description: "A premier WHO-GMP and ISO 9001:2015 certified pharmaceutical manufacturing powerhouse delivering high-efficacy formulations, ethical pharmaceutical marketing, and PCD franchise opportunities across 25+ global territories.",
  established: "2014",
  experience: "10+ Years",
  phone: "+91 91409 67607",
  email: "contact@slspharma.com",
  salesEmail: "sales@slspharma.com",
  address: "SLS Corporate Towers, 2nd Floor, Near Polytechnic Chauraha, Lucknow, UP - 226016, India",
  manufacturingUnit: "Plot No. 48-52, Industrial Pharma Biotech Park, Phase-II, Lucknow, India",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  socials: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  },
  stats: [
    { label: "Market Formulations", value: "350+", suffix: "" },
    { label: "Global Clients & Partners", value: "750+", suffix: "" },
    { label: "Manufacturing Capacity", value: "10M+", suffix: "Units/Mo" },
    { label: "WHO-GMP Quality Score", value: "99.9%", suffix: "" },
    { label: "Distribution Network", value: "28+", suffix: "States" },
  ]
};

export const CERTIFICATIONS = [
  { name: "WHO-GMP Certified", desc: "World Health Organization Good Manufacturing Practices", badge: "WHO-GMP", icon: "award" },
  { name: "ISO 9001:2015", desc: "International Standard for Quality Management Systems", badge: "ISO Certified", icon: "shield" },
  { name: "GLP Compliant", desc: "Good Laboratory Practices certified analytical testing", badge: "GLP Quality", icon: "flask" },
  { name: "DCGI Approved", desc: "Drug Controller General of India approved formulations", badge: "DCGI Approved", icon: "check" },
  { name: "FSSAI Licensed", desc: "Food Safety and Standards Authority of India certified nutraceuticals", badge: "FSSAI Grade", icon: "heart" },
];

export const CATEGORIES = [
  {
    id: "antibiotics",
    name: "Antibiotics & Anti-Infectives",
    slug: "antibiotics",
    count: 24,
    description: "Broad-spectrum antibacterial, antifungal, and antiviral formulations designed for targeted infection eradication.",
    icon: "ShieldAlert",
    color: "from-teal-500 to-emerald-600",
    bgLight: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    id: "analgesics",
    name: "Pain Relief & Anti-Inflammatory",
    slug: "analgesics",
    count: 18,
    description: "NSAIDs, antipyretics, spasmolytics, and advanced muscle relaxant combinations for fast pain relief.",
    icon: "Zap",
    color: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    id: "gastro",
    name: "Gastrointestinal & Antacids",
    slug: "gastrointestinal",
    count: 16,
    description: "Proton pump inhibitors, prokinetics, antacids, and digestive enzymes for optimal gut health.",
    icon: "Activity",
    color: "from-indigo-500 to-purple-600",
    bgLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    id: "respiratory",
    name: "Respiratory & Anti-Allergic",
    slug: "respiratory",
    count: 14,
    description: "Expectorants, bronchodilators, anti-histamines, and mucolytics for cough, cold, and asthma care.",
    icon: "Wind",
    color: "from-cyan-500 to-teal-600",
    bgLight: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "nutraceuticals",
    name: "Multivitamins & Nutraceuticals",
    slug: "nutraceuticals",
    count: 22,
    description: "Antioxidants, immunity boosters, organic minerals, omega fatty acids, and essential vitamin complexes.",
    icon: "Sparkles",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "cardio-diabetic",
    name: "Cardiovascular & Diabetic Care",
    slug: "cardiovascular",
    count: 15,
    description: "Anti-hypertensives, lipid-lowering statins, and oral hypoglycemic agents for metabolic equilibrium.",
    icon: "HeartPulse",
    color: "from-rose-500 to-red-600",
    bgLight: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    id: "injectables",
    name: "Injectables & Critical Care",
    slug: "injectables",
    count: 12,
    description: "Sterile lyophilized and liquid injectable formulations for emergency medicine and hospital care.",
    icon: "Syringe",
    color: "from-emerald-500 to-teal-700",
    bgLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "dermatology",
    name: "Dermatology & Topicals",
    slug: "dermatology",
    count: 10,
    description: "Topical antifungal, antibacterial, and anti-inflammatory ointments, gels, and lotions.",
    icon: "Layers",
    color: "from-pink-500 to-rose-600",
    bgLight: "bg-pink-50 text-pink-700 border-pink-200",
  },
];

export const DOSAGE_FORMS = [
  "All Forms",
  "Tablets",
  "Capsules",
  "Syrup / Liquid",
  "Injectable",
  "Dry Syrup",
  "Softgel Capsules",
  "Ointment / Gel",
  "Protein Powder"
];

export const PHARMA_PRODUCTS = [
  {
    id: "nx-001",
    slug: "clavanex-625-tablets",
    brandName: "CLAVANEX-625",
    genericName: "Amoxicillin & Potassium Clavulanate Tablets IP 625mg",
    category: "Antibiotics & Anti-Infectives",
    categorySlug: "antibiotics",
    dosageForm: "Tablets",
    badge: "Bestseller",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 1 x 10 Alu-Alu Blister Pack with Moisture Barrier",
    packType: "Alu-Alu Strip",
    shortDesc: "Potent broad-spectrum bactericidal antibiotic pairing Amoxicillin with Clavulanic Acid to combat beta-lactamase producing pathogens.",
    composition: [
      { ingredient: "Amoxicillin Trihydrate IP eq. to Amoxicillin (Anhydrous)", amount: "500 mg" },
      { ingredient: "Potassium Clavulanate Diluted IP eq. to Clavulanic Acid", amount: "125 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Penicillinase-resistant Beta-lactam Antibiotic",
    indications: [
      "Lower Respiratory Tract Infections (Pneumonia, Bronchitis)",
      "Acute Bacterial Sinusitis and Otitis Media",
      "Urinary Tract Infections (UTI, Pyelonephritis)",
      "Skin, Soft Tissue, and Post-Surgical Infections",
      "Dental & Maxillofacial Abscesses"
    ],
    dosageAdministration: "As directed by the Physician. Standard adult dose: 1 tablet every 12 hours with meals to minimize gastrointestinal discomfort.",
    storage: "Store in a cool, dry place below 25°C. Protect from moisture and direct sunlight.",
    warnings: "Contraindicated in patients with a history of penicillin allergy or cholestatic jaundice/hepatic dysfunction associated with amoxicillin/clavulanate.",
    certifications: ["WHO-GMP", "ISO 9001:2015", "DCGI Approved"],
    highlights: ["Microbial Purity 99.98%", "Rapid Dissolution Rate", "Alu-Alu Moisture Protected", "Export Quality Standard"]
  },
  {
    id: "nx-002",
    slug: "pancon-dsr-capsules",
    brandName: "PANCON-DSR",
    genericName: "Pantoprazole Gastro-Resistant & Domperidone Prolonged-Release Capsules IP",
    category: "Gastrointestinal & Antacids",
    categorySlug: "gastrointestinal",
    dosageForm: "Capsules",
    badge: "High Demand",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 10 Alu-Alu Strips in Outer Carton",
    packType: "Alu-Alu Pellets",
    shortDesc: "Dual-action enteric coated PPI combined with sustained-release prokinetic for rapid relief in GERD, acidity, and dyspepsia.",
    composition: [
      { ingredient: "Pantoprazole Sodium IP eq. to Pantoprazole (as Enteric Coated Pellets)", amount: "40 mg" },
      { ingredient: "Domperidone IP (as Sustained Release Pellets)", amount: "30 mg" },
      { ingredient: "Approved Colour used in empty capsule shells", amount: "q.s." }
    ],
    therapeuticClass: "Proton Pump Inhibitor (PPI) + Antiemetic / Prokinetic",
    indications: [
      "Gastroesophageal Reflux Disease (GERD)",
      "Hyperacidity, Heartburn & Acid Regurgitation",
      "Non-Ulcer Dyspepsia & Gastric Fullness",
      "NSAID-Induced Gastritis Prevention",
      "Zollinger-Ellison Syndrome"
    ],
    dosageAdministration: "1 capsule once daily in the morning, taken 30-60 minutes before breakfast with a glass of water.",
    storage: "Store below 25°C in a dry place. Protect from heat and moisture.",
    warnings: "Swallow whole; do not chew or crush the capsules or pellets inside.",
    certifications: ["WHO-GMP", "DCGI Approved"],
    highlights: ["Targeted Intestinal Release", "24-Hour Acid Control", "Triple-Coated Pellets", "Zero Nausea Formulation"]
  },
  {
    id: "nx-003",
    slug: "acemol-sp-tablets",
    brandName: "ACEMOL-SP",
    genericName: "Aceclofenac, Paracetamol & Serratiopeptidase Tablets",
    category: "Pain Relief & Anti-Inflammatory",
    categorySlug: "analgesics",
    dosageForm: "Tablets",
    badge: "Fast Relief",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 10 Blister Pack in High Finish Metallic Box",
    packType: "Blister Pack",
    shortDesc: "Triple-action synergistic formulation of NSAID, analgesic-antipyretic, and proteolytic enzyme for swift pain and edema reduction.",
    composition: [
      { ingredient: "Aceclofenac IP", amount: "100 mg" },
      { ingredient: "Paracetamol IP", amount: "325 mg" },
      { ingredient: "Serratiopeptidase IP (eq. to 30,000 enzymatic units)", amount: "15 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Non-Steroidal Anti-Inflammatory Drug (NSAID) + Proteolytic Enzyme",
    indications: [
      "Post-Operative Inflammation and Pain",
      "Osteoarthritis, Rheumatoid Arthritis & Ankylosing Spondylitis",
      "Traumatic Injury, Sprains, Fractures & Sports Injuries",
      "Dental Pain & Maxillary Inflammation",
      "ENT Infections with Inflammatory Swelling"
    ],
    dosageAdministration: "One tablet twice daily after meals or as prescribed by the orthopedic/physician.",
    storage: "Store protected from light and moisture at a temperature not exceeding 30°C.",
    warnings: "Take with food. Not recommended during late pregnancy or in severe active peptic ulcer.",
    certifications: ["WHO-GMP", "ISO 9001:2015"],
    highlights: ["Serratiopeptidase Enhanced Absorption", "Rapid Onset of Action", "Gastric Gentle Matrix", "Clinically Proven Efficacy"]
  },
  {
    id: "nx-004",
    slug: "cefix-o-200-tablets",
    brandName: "CEFIX-O 200",
    genericName: "Cefixime & Ofloxacin Tablets IP",
    category: "Antibiotics & Anti-Infectives",
    categorySlug: "antibiotics",
    dosageForm: "Tablets",
    badge: "Dual Defense",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 10 Alu-Alu Pack with Hologram Security",
    packType: "Alu-Alu Strip",
    shortDesc: "3rd generation cephalosporin combined with fluoroquinolone for severe and complicated bacterial and enteric infections.",
    composition: [
      { ingredient: "Cefixime Trihydrate IP eq. to Anhydrous Cefixime", amount: "200 mg" },
      { ingredient: "Ofloxacin IP", amount: "200 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "3rd Gen Cephalosporin + Fluoroquinolone",
    indications: [
      "Typhoid (Enteric) Fever & Multidrug-Resistant Salmonellosis",
      "Complicated Urinary Tract Infections",
      "Community-Acquired Pneumonia & Chronic Bronchitis Exacerbation",
      "Intra-Abdominal & Pelvic Infections"
    ],
    dosageAdministration: "1 tablet twice daily for 5 to 14 days depending on infection severity and clinical evaluation.",
    storage: "Store in a cool dry place below 25°C. Keep out of reach of children.",
    warnings: "Maintain adequate patient hydration to prevent crystalluria.",
    certifications: ["WHO-GMP", "DCGI Approved"],
    highlights: ["99.4% Enteric Eradication", "Synergistic Dual Action", "Alu-Alu Protected", "Premium Grade Raw Material"]
  },
  {
    id: "nx-005",
    slug: "vitalife-9g-softgels",
    brandName: "VITALIFE-9G",
    genericName: "Ginseng, Green Tea, Grape Seed, Ginkgo Biloba, Garlic, Guggul, Ginger, Green Coffee, Glycyrrhiza with Multivitamins & Minerals Softgel",
    category: "Multivitamins & Nutraceuticals",
    categorySlug: "nutraceuticals",
    dosageForm: "Softgel Capsules",
    badge: "Premium Nutraceutical",
    isFeatured: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 1 x 10 Blister in Premium Velvet-Touch UV Box",
    packType: "Softgel Blister",
    shortDesc: "Comprehensive 9G herbal extract matrix fortified with 24 essential micronutrients, antioxidants, and trace minerals for vitality and cellular defense.",
    composition: [
      { ingredient: "Ginseng Extract (3% Ginsenosides)", amount: "42.5 mg" },
      { ingredient: "Green Tea Extract (eq. to 50% Polyphenols)", amount: "10 mg" },
      { ingredient: "Grape Seed Extract (95% Proanthocyanidins)", amount: "15 mg" },
      { ingredient: "Ginkgo Biloba Extract", amount: "10 mg" },
      { ingredient: "Garlic Oil, Guggul, Green Coffee & Ginger Extract", amount: "q.s." },
      { ingredient: "Omega-3 Fatty Acids (EPA 90mg + DHA 60mg)", amount: "150 mg" },
      { ingredient: "Essential Vitamins A, B-Complex, C, D3, E & Zinc, Selenium", amount: "RDA Balanced" }
    ],
    therapeuticClass: "Nutraceutical / Antioxidant / Vitality Restorative",
    indications: [
      "General Debility, Chronic Fatigue & Physical Exhaustion",
      "Cardiovascular & Neuroprotective Support",
      "Immune System Reinforcement & Post-Illness Convalescence",
      "Metabolic Energy Optimization & Anti-Aging Cellular Protection"
    ],
    dosageAdministration: "1 softgel capsule daily after main meal, preferably with breakfast or lunch.",
    storage: "Store below 25°C in a dry place. Protect from direct heat, light, and freezing.",
    warnings: "Nutraceutical supplement; not for medicinal use to diagnose or cure diseases.",
    certifications: ["FSSAI Licensed", "ISO 22000", "WHO-GMP"],
    highlights: ["9 Super Herbal Extracts", "Pure Omega-3 EPA/DHA", "100% Bioavailable Minerals", "No Fishy Aftertaste"]
  },
  {
    id: "nx-006",
    slug: "azikoff-500-tablets",
    brandName: "AZIKOFF-500",
    genericName: "Azithromycin Tablets IP 500 mg",
    category: "Antibiotics & Anti-Infectives",
    categorySlug: "antibiotics",
    dosageForm: "Tablets",
    badge: "High Purity",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 3 Tablets in Blister Pack / 10 x 10 Alu-Alu",
    packType: "Blister Pack",
    shortDesc: "Macrolide antibiotic with long tissue half-life for convenient 3-day or 5-day respiratory, genital, and skin infection courses.",
    composition: [
      { ingredient: "Azithromycin Dihydrate IP eq. to Azithromycin (Anhydrous)", amount: "500 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Macrolide Antibiotic",
    indications: [
      "Upper & Lower Respiratory Tract Infections (Pharyngitis, Tonsillitis, Bronchitis)",
      "Uncomplicated Skin and Skin Structure Infections",
      "Sexually Transmitted Genital Ulcer & Chlamydial Infections",
      "Community-Acquired Pneumonia"
    ],
    dosageAdministration: "500 mg once daily for 3 consecutive days, taken 1 hour before or 2 hours after meals.",
    storage: "Store at room temperature not exceeding 30°C. Protect from moisture.",
    warnings: "Use with caution in patients with hepatic impairment or cardiac arrhythmia risks.",
    certifications: ["WHO-GMP", "ISO 9001:2015"],
    highlights: ["Single-Dose Daily Regimen", "Superior Tissue Penetration", "Film-Coated Moisture Seal", "Export Standard"]
  },
  {
    id: "nx-007",
    slug: "respi-dx-cough-syrup",
    brandName: "RESPI-DX",
    genericName: "Dextromethorphan HBr, Phenylephrine HCl & Chlorpheniramine Maleate Syrup",
    category: "Respiratory & Anti-Allergic",
    categorySlug: "respiratory",
    dosageForm: "Syrup / Liquid",
    badge: "Non-Drowsy Formula",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "100 ml Amber PET Bottle with Calibrated Measuring Cup",
    packType: "PET Bottle",
    shortDesc: "Triple-action soothing cough relief syrup targeting dry irritant cough, nasal congestion, runny nose, and throat tickle.",
    composition: [
      { ingredient: "Dextromethorphan Hydrobromide IP", amount: "10 mg / 5ml" },
      { ingredient: "Phenylephrine Hydrochloride IP", amount: "5 mg / 5ml" },
      { ingredient: "Chlorpheniramine Maleate IP", amount: "2 mg / 5ml" },
      { ingredient: "Flavoured Syrupy Base (Delicious Raspberry Flavour)", amount: "q.s." }
    ],
    therapeuticClass: "Antitussive + Decongestant + Antihistaminic",
    indications: [
      "Dry, hacking, non-productive cough associated with common cold or allergies",
      "Nasal and sinus congestion",
      "Allergic rhinitis, sneezing, and watery eyes",
      "Throat irritation and pharyngeal tickling"
    ],
    dosageAdministration: "Adults: 5-10 ml 3-4 times daily. Children (6-12 yrs): 2.5-5 ml 3 times daily using the measuring cap.",
    storage: "Store below 25°C. Do not freeze. Shake well before use.",
    warnings: "Avoid driving or operating heavy machinery if drowsiness occurs.",
    certifications: ["WHO-GMP", "GLP Quality"],
    highlights: ["Pleasant Raspberry Taste", "Sugar-Free Base Option", "Rapid Bronchial Calming", "Child-Safe Cap"]
  },
  {
    id: "nx-008",
    slug: "telmax-40-am-tablets",
    brandName: "TELMAX-40 AM",
    genericName: "Telmisartan & Amlodipine Tablets IP",
    category: "Cardiovascular & Diabetic Care",
    categorySlug: "cardiovascular",
    dosageForm: "Tablets",
    badge: "Cardio Safe",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 10 Alu-Alu Pack",
    packType: "Alu-Alu Strip",
    shortDesc: "Dual antihypertensive combination of Angiotensin Receptor Blocker and Calcium Channel Blocker for comprehensive 24h blood pressure management.",
    composition: [
      { ingredient: "Telmisartan IP", amount: "40 mg" },
      { ingredient: "Amlodipine Besylate IP eq. to Amlodipine", amount: "5 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Angiotensin II Receptor Blocker (ARB) + Calcium Channel Blocker (CCB)",
    indications: [
      "Essential Hypertension (High Blood Pressure)",
      "Cardiovascular Risk Reduction in Hypertensive Patients",
      "Target organ protection in diabetic hypertensive patients"
    ],
    dosageAdministration: "1 tablet once daily with or without food, at the same time every day.",
    storage: "Store in original container protected from moisture below 30°C.",
    warnings: "Do not use during pregnancy as it can cause serious fetal injury or death.",
    certifications: ["WHO-GMP", "DCGI Approved"],
    highlights: ["Smooth 24-Hour BP Control", "Target Organ Protection", "Alu-Alu Protected", "Low Edema Incidence"]
  },
  {
    id: "nx-009",
    slug: "ceftrix-1g-injection",
    brandName: "CEFTRIX-1G INJ",
    genericName: "Ceftriaxone for Injection IP 1000 mg with Sterile Water for Injections",
    category: "Injectables & Critical Care",
    categorySlug: "injectables",
    dosageForm: "Injectable",
    badge: "Critical Care",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "1 Vial + 10 ml Sterile Water for Injections (WFI) + Tray Pack",
    packType: "Glass Vial with WFI",
    shortDesc: "Ultra-pure sterile lyophilized 3rd generation cephalosporin for IV/IM administration in severe systemic bacterial infections.",
    composition: [
      { ingredient: "Sterile Ceftriaxone Sodium IP eq. to Anhydrous Ceftriaxone", amount: "1000 mg (1 g)" },
      { ingredient: "Sterile Water for Injection IP (Co-pack)", amount: "10 ml ampoule" }
    ],
    therapeuticClass: "3rd Generation Cephalosporin Antibiotic (Injectable)",
    indications: [
      "Bacterial Meningitis & Septicemia",
      "Surgical Prophylaxis (Pre-operative & Post-operative)",
      "Severe Nosocomial Pneumonia",
      "Complicated Intra-Abdominal & Bone/Joint Infections",
      "Acute Pyelonephritis"
    ],
    dosageAdministration: "For IV or IM use only as directed by hospital physician or anaesthetist. Reconstitute immediately prior to administration.",
    storage: "Store below 25°C protected from light. Reconstituted solution must be used promptly.",
    warnings: "Do not mix with Calcium-containing IV solutions (e.g., Ringer's or Hartmann's).",
    certifications: ["WHO-GMP Sterile Facility", "ISO 9001:2015"],
    highlights: ["100% Sterile Lyophilized", "Ultra-Low Endotoxin Count", "Supplied with Premium WFI", "Immediate Dissolution"]
  },
  {
    id: "nx-010",
    slug: "dermashield-plus-cream",
    brandName: "DERMASHIELD-PLUS",
    genericName: "Ofloxacin, Ornidazole, Itraconazole & Clobetasol Propionate Cream",
    category: "Dermatology & Topicals",
    categorySlug: "dermatology",
    dosageForm: "Ointment / Gel",
    badge: "4-in-1 Action",
    isFeatured: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "15g Lami Tube in Attractive Gloss Monocarton",
    packType: "Laminated Tube",
    shortDesc: "Comprehensive quad-combination dermatological cream addressing mixed bacterial, fungal, protozoal, and inflammatory skin conditions.",
    composition: [
      { ingredient: "Ofloxacin IP", amount: "0.75% w/w" },
      { ingredient: "Ornidazole IP", amount: "2.0% w/w" },
      { ingredient: "Itraconazole IP", amount: "1.0% w/w" },
      { ingredient: "Clobetasol Propionate IP", amount: "0.05% w/w" },
      { ingredient: "Cream Base", amount: "q.s." }
    ],
    therapeuticClass: "Antibacterial + Antifungal + Antiprotozoal + Corticosteroid",
    indications: [
      "Mixed skin infections (bacterial + fungal dermatomycoses)",
      "Tinea Cruris, Tinea Corporis, Tinea Pedis (Athlete's Foot)",
      "Eczematous dermatitis with secondary bacterial infection",
      "Pruritus, skin rashes, and severe dermal inflammation"
    ],
    dosageAdministration: "Apply a thin layer gently over the affected area 1 to 2 times daily after cleansing and drying the skin.",
    storage: "Store below 25°C. Do not freeze. Keep tube tightly closed after every use.",
    warnings: "For external topical use only. Avoid contact with eyes, open wounds, or mucus membranes.",
    certifications: ["WHO-GMP", "GLP Quality"],
    highlights: ["Non-Greasy Rapid Absorption", "Broad-Spectrum Microbicidal", "Fast Itch Relief", "Tamper Evident Seal"]
  },
  {
    id: "nx-011",
    slug: "neurocob-cd3-tablets",
    brandName: "NEUROCOB-CD3",
    genericName: "Methylcobalamin, Calcitriol, Calcium Carbonate, Folic Acid & Vitamin B6 Tablets",
    category: "Multivitamins & Nutraceuticals",
    categorySlug: "nutraceuticals",
    dosageForm: "Tablets",
    badge: "Bone & Nerve Health",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 10 Blister Pack in High Gloss Outer Box",
    packType: "Blister Pack",
    shortDesc: "Complete neurotrophic and bone-strengthening formulation designed for diabetic neuropathy, osteoporosis, and chronic nerve rejuvenation.",
    composition: [
      { ingredient: "Methylcobalamin (Bioactive Vitamin B12)", amount: "1500 mcg" },
      { ingredient: "Calcitriol (Active Vitamin D3)", amount: "0.25 mcg" },
      { ingredient: "Calcium Carbonate IP eq. to Elemental Calcium", amount: "500 mg" },
      { ingredient: "Folic Acid IP", amount: "1.5 mg" },
      { ingredient: "Pyridoxine Hydrochloride (Vitamin B6) IP", amount: "3 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Neurotropic Vitamins + Bioactive Calcium & Calcitriol",
    indications: [
      "Diabetic & Peripheral Neuropathy (Numbness, Tingling, Burning Sensation)",
      "Osteoporosis, Osteomalacia & Post-Menopausal Bone Loss",
      "Sciatica & Lumbago Neuralgia",
      "Hyperhomocysteinemia & Cardiovascular Risk Support"
    ],
    dosageAdministration: "1 tablet daily after food or as directed by the neurologist/endocrinologist.",
    storage: "Store in a cool, dry place below 25°C. Protect from moisture and light.",
    warnings: "Monitor calcium levels in patients with severe renal impairment.",
    certifications: ["WHO-GMP", "ISO 9001:2015"],
    highlights: ["1500 mcg Active Methylcobalamin", "Calcitriol for Maximum Calcium Absorption", "Targeted Nerve Rejuvenation", "Blister Moisture Shield"]
  },
  {
    id: "nx-012",
    slug: "montex-lc-tablets",
    brandName: "MONTEX-LC",
    genericName: "Montelukast Sodium & Levocetirizine Dihydrochloride Tablets IP",
    category: "Respiratory & Anti-Allergic",
    categorySlug: "respiratory",
    dosageForm: "Tablets",
    badge: "24Hr Allergy Shield",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80"
    ],
    packaging: "10 x 10 Alu-Alu Strip Pack",
    packType: "Alu-Alu Strip",
    shortDesc: "Dual leukotriene receptor antagonist and potent H1-antihistaminic combination for perennial allergic rhinitis and chronic asthma control.",
    composition: [
      { ingredient: "Montelukast Sodium IP eq. to Montelukast", amount: "10 mg" },
      { ingredient: "Levocetirizine Dihydrochloride IP", amount: "5 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Leukotriene Receptor Antagonist (LTRA) + 2nd Gen Antihistamine",
    indications: [
      "Allergic Rhinitis (Seasonal & Perennial)",
      "Allergic Bronchial Asthma Prophylaxis",
      "Chronic Idiopathic Urticaria & Skin Itching",
      "Exercise-Induced Bronchoconstriction"
    ],
    dosageAdministration: "1 tablet once daily in the evening with water, or as directed by the pulmonologist/allergist.",
    storage: "Store below 25°C in a dry place. Protect from light.",
    warnings: "Do not use for immediate reversal of acute asthmatic attack.",
    certifications: ["WHO-GMP", "DCGI Approved"],
    highlights: ["Non-Sedating 2nd Gen Formula", "24-Hour Continuous Protection", "Rapid Nasal Decongestion", "Alu-Alu Foil Pack"]
  }
];

export const MANUFACTURING_CAPABILITIES = [
  {
    title: "Solid Orals (Tablets)",
    capacity: "45 Million Tablets / Month",
    equipment: "High-Speed 45-Station Rotary Tablet Press, Auto-Coaters, Alu-Alu Blister Lines",
    standards: "Class 100,000 Cleanroom with HEPA Filtration & Temperature/Humidity Control",
    icon: "Pill"
  },
  {
    title: "Liquid Orals & Syrups",
    capacity: "2.5 Million Bottles / Month",
    equipment: "Fully Automated SS-316 Liquid Manufacturing Plant, Rotary Bottle Washers, Volumetric Fillers",
    standards: "Clean-In-Place (CIP) & Sterilize-In-Place (SIP) System Standards",
    icon: "FlaskConical"
  },
  {
    title: "Hard & Soft Gelatin Capsules",
    capacity: "30 Million Capsules / Month",
    equipment: "Automatic Capsule Filling Machines, Encapsulation Units, Polishing & Sorting Sorters",
    standards: "Strict Relative Humidity (RH < 35%) & Temperature Monitored Zones",
    icon: "Sparkles"
  },
  {
    title: "Sterile Injectables & Lyophilized",
    capacity: "1.2 Million Vials & Ampoules / Month",
    equipment: "Class A Laminar Airflow Stations, Automatic Washing & Depyrogenation Tunnels, Lyophilizers",
    standards: "Class 100 (Grade A) Aseptic Filling Environment with Endotoxin Testing",
    icon: "Syringe"
  },
  {
    title: "Ointments, Creams & Gels",
    capacity: "1.8 Million Tubes / Month",
    equipment: "Planetary Mixers, Vacuum Homogenizers, High-Precision Automatic Lami-Tube Fillers",
    standards: "Microbiologically Controlled Sterile Formulation Suites",
    icon: "Layers"
  },
  {
    title: "Nutraceuticals & Dietary Powders",
    capacity: "200 Metric Tons / Month",
    equipment: "Ribbon Blenders, Fluid Bed Dryers (FBD), Automated Multi-Track Sachet Packing",
    standards: "FSSAI Grade High-Purity Certified Mixing Suites",
    icon: "ShieldCheck"
  },
];

export const QUALITY_PILLARS = [
  {
    number: "01",
    title: "Raw Material Validation",
    desc: "100% chromatographic HPLC testing, active potency verification, and microbiological screening before production."
  },
  {
    number: "02",
    title: "In-Process Quality Control (IPQC)",
    desc: "Continuous parameter monitoring across weight variation, hardness, friability, disintegration, and uniformity."
  },
  {
    number: "03",
    title: "Stability & Shelf-Life Testing",
    desc: "ICH compliant accelerated and real-time stability chambers monitoring degradation, potency retention, and physical integrity."
  },
  {
    number: "04",
    title: "Automated Packaging & Track-Trace",
    desc: "Ultra-barrier Alu-Alu packaging, QR-code serialization, tamper-evident holographic sealing for anti-counterfeit protection."
  }
];

export const FAQS = [
  {
    question: "Are all formulations manufactured in WHO-GMP certified facilities?",
    answer: "Yes, 100% of our products are produced in state-of-the-art WHO-GMP and ISO 9001:2015 certified facilities following stringent current Good Manufacturing Practice (cGMP) regulations with automated quality checks."
  },
  {
    question: "Do you offer PCD Pharma Franchise and Monopoly rights?",
    answer: "Yes! SLS Pharma offers district-wise PCD Pharma Franchise opportunities with exclusive monopoly marketing rights, promotional inputs (Visual Aids, MR Bags, Reminder Cards, Samples, Product Glossaries), and high profit margins."
  },
  {
    question: "What is the turnaround time for Third-Party Manufacturing orders?",
    answer: "For existing formulations and approved designs, our standard batch manufacturing turnaround time is 20 to 30 working days from approval of artworks and purchase order."
  },
  {
    question: "How do you ensure drug composition accuracy and safety?",
    answer: "Every single batch undergoes rigorous HPLC/GC analytical validation, dissolution profiling, microbial testing, and stability assessment in our GLP-accredited QC laboratories before release with a comprehensive Certificate of Analysis (COA)."
  },
  {
    question: "Can customized packaging or formulations be requested for exports?",
    answer: "Absolutely. We manufacture custom export-compliant blister, Alu-Alu, and bottle packagings with multilingual labeling (English, French, Arabic, Spanish) meeting international pharmacopeia standards (IP, BP, USP)."
  }
];
