export const COMPANY_INFO = {
  name: "SLS - Innovation for life",
  tagline: "Innovation for life",
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
    { label: "Formulations Available", value: "250+", suffix: "" },
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

// Import Product Images from assets
import imgAmoxysheild from '../assest/images/product-10.jpeg';
import imgPainexa from '../assest/images/product-2.jpeg';
import imgGastroD from '../assest/images/product-5.jpeg';
import imgEzoD from '../assest/images/product-3.jpeg';
import imgVitaAll from '../assest/images/product-7.jpeg';
import imgOstoviva from '../assest/images/product-8.jpeg';
import imgMCol from '../assest/images/product-4.jpeg';
import imgElcarva from '../assest/images/product-1.jpeg';
import imgTavlo from '../assest/images/product-6.jpeg';
import imgSyrup from '../assest/images/product-9.jpeg';

export const CATEGORIES = [
  {
    id: "antibiotics",
    name: "Antibiotics & Anti-Infectives",
    slug: "antibiotics",
    count: 24,
    description: "Broad-spectrum antibacterial, antifungal, and antiviral formulations designed for targeted infection eradication.",
    icon: "ShieldAlert",
    image: imgAmoxysheild,
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
    image: imgPainexa,
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
    image: imgGastroD,
    color: "from-indigo-500 to-purple-600",
    bgLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    id: "nutraceuticals",
    name: "Multivitamins & Nutraceuticals",
    slug: "nutraceuticals",
    count: 22,
    description: "Antioxidants, immunity boosters, organic minerals, omega fatty acids, and essential vitamin complexes.",
    icon: "Sparkles",
    image: imgVitaAll,
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
    image: imgElcarva,
    color: "from-rose-500 to-red-600",
    bgLight: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export const DOSAGE_FORMS = [
  "All Forms",
  "Tablets",
  "Capsules",
  "Syrup / Liquid",
  "Dry Syrup",
  "Softgel Capsules"
];

export const PHARMA_PRODUCTS = [
  {
    id: "nx-001",
    slug: "amoxysheild-625-tablets",
    brandName: "Amoxysheild™ 625",
    genericName: "Amoxicillin (500 mg) + Potassium Clavulanate (125 mg) Tablets IP",
    category: "Antibiotics & Anti-Infectives",
    categorySlug: "antibiotics",
    dosageForm: "Tablets",
    badge: "Bestseller",
    mrp: "₹ 185.00",
    packPrice: "10 Tablets / Strip",
    isFeatured: true,
    isNew: false,
    image: imgAmoxysheild,
    images: [imgAmoxysheild],
    packaging: "10 x 1 x 10 Alu-Alu Blister Pack with Moisture Barrier",
    packType: "Alu-Alu Strip",
    shortDesc: "Potent broad-spectrum bactericidal antibiotic pairing Amoxicillin with Clavulanic Acid to combat beta-lactamase producing pathogens with trusted combination and better treatment outcomes.",
    composition: [
      { ingredient: "Amoxicillin Trihydrate IP eq. to Amoxicillin", amount: "500 mg" },
      { ingredient: "Potassium Clavulanate Diluted IP eq. to Clavulanic Acid", amount: "125 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Penicillinase-resistant Beta-lactam Antibiotic",
    indications: [
      "Effective Bacterial Coverage",
      "Lower Respiratory Tract Infections (Pneumonia, Bronchitis)",
      "Acute Bacterial Sinusitis and Otitis Media",
      "Urinary Tract Infections (UTI, Pyelonephritis)",
      "Skin, Soft Tissue, and Dental Abscesses"
    ],
    dosageAdministration: "As directed by the Physician. Standard adult dose: 1 tablet twice daily with meals.",
    storage: "Store in a cool, dry place below 25°C. Protect from moisture and direct sunlight.",
    warnings: "Contraindicated in patients with a history of penicillin allergy.",
    certifications: ["WHO-GMP", "ISO 9001:2015", "DCGI Approved"],
    highlights: ["Microbial Purity 99.98%", "Rapid Dissolution Rate", "Alu-Alu Moisture Protected", "Export Quality Standard"]
  },
  {
    id: "nx-002",
    slug: "painexa-sp-tablets",
    brandName: "Painexa-SP™",
    genericName: "Aceclofenac (100 mg) + Paracetamol (325 mg) + Serratiopeptidase (15 mg) Tablets",
    category: "Pain Relief & Anti-Inflammatory",
    categorySlug: "analgesics",
    dosageForm: "Tablets",
    badge: "Fast Relief",
    mrp: "₹ 110.00",
    packPrice: "10 Tablets / Strip",
    isFeatured: true,
    isNew: false,
    image: imgPainexa,
    images: [imgPainexa],
    packaging: "10 x 10 Blister Pack in High Finish Metallic Box",
    packType: "Blister Pack",
    shortDesc: "Triple-action synergistic formulation of NSAID, analgesic-antipyretic, and proteolytic enzyme for swift pain relief, inflammation reduction, and swelling control.",
    composition: [
      { ingredient: "Aceclofenac IP", amount: "100 mg" },
      { ingredient: "Paracetamol IP", amount: "325 mg" },
      { ingredient: "Serratiopeptidase IP (30,000 units)", amount: "15 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Non-Steroidal Anti-Inflammatory Drug (NSAID)",
    indications: [
      "Relieves Acute & Chronic Pain",
      "Reduces Joint & Muscle Inflammation",
      "Decreases Post-traumatic Swelling & Edema",
      "Osteoarthritis, Rheumatoid Arthritis & Spondylitis",
      "Dental Pain & Post-Surgical Recovery"
    ],
    dosageAdministration: "One tablet twice daily after meals or as prescribed by physician.",
    storage: "Store protected from light and moisture below 30°C.",
    warnings: "Take with food. Not recommended during late pregnancy.",
    certifications: ["WHO-GMP", "ISO 9001:2015", "DCGI Approved"],
    highlights: ["Serratiopeptidase Enhanced Absorption", "Rapid Onset of Action", "Gastric Gentle Matrix"]
  },
  {
    id: "nx-003",
    slug: "gastro-d-capsules",
    brandName: "GASTRO-D",
    genericName: "Pantoprazole 40 mg + Domperidone 30 mg Capsules",
    category: "Gastrointestinal & Antacids",
    categorySlug: "gastrointestinal",
    dosageForm: "Capsules",
    badge: "High Demand",
    mrp: "₹ 145.00",
    packPrice: "15 Capsules / Strip (10 x 15 Capsules)",
    isFeatured: true,
    isNew: false,
    image: imgGastroD,
    images: [imgGastroD],
    packaging: "10 Strips of 15 Capsules (10 x 15 Alu-Alu Pack)",
    packType: "Alu-Alu Strip",
    shortDesc: "Dual-action enteric coated PPI combined with sustained-release prokinetic for rapid relief in GERD, acidity, heartburn, and dyspepsia.",
    composition: [
      { ingredient: "Pantoprazole Sodium IP eq. to Pantoprazole", amount: "40 mg" },
      { ingredient: "Domperidone IP (as Sustained Release Pellets)", amount: "30 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Proton Pump Inhibitor (PPI) + Prokinetic",
    indications: [
      "Gastroesophageal Reflux Disease (GERD)",
      "Hyperacidity, Heartburn & Acid Regurgitation",
      "Non-Ulcer Dyspepsia & Gastric Fullness",
      "NSAID-Induced Gastritis Prevention"
    ],
    dosageAdministration: "1 capsule once daily in the morning, taken 30-60 minutes before breakfast.",
    storage: "Store below 25°C in a dry place. Protect from heat and moisture.",
    warnings: "Swallow whole; do not chew or crush the capsules or pellets inside.",
    certifications: ["WHO-GMP", "DCGI Approved"],
    highlights: ["Targeted Intestinal Release", "24-Hour Acid Control", "Triple-Coated Pellets", "Zero Nausea Formulation"]
  },
  {
    id: "nx-004",
    slug: "ezo-d-capsules",
    brandName: "EZO-D",
    genericName: "Esomeprazole 40 mg + Domperidone 30 mg Capsules",
    category: "Gastrointestinal & Antacids",
    categorySlug: "gastrointestinal",
    dosageForm: "Capsules",
    badge: "Fast Acting",
    mrp: "₹ 165.00",
    packPrice: "15 Capsules / Strip (10 x 15 Capsules)",
    isFeatured: true,
    isNew: true,
    image: imgEzoD,
    images: [imgEzoD],
    packaging: "10 Strips of 15 Capsules (10 x 15 Alu-Alu Pack)",
    packType: "Alu-Alu Strip",
    shortDesc: "Next-generation S-isomer proton pump inhibitor Esomeprazole with sustained-release Domperidone for severe reflux and erosive esophagitis.",
    composition: [
      { ingredient: "Esomeprazole Magnesium Trihydrate eq. to Esomeprazole", amount: "40 mg" },
      { ingredient: "Domperidone IP (as Sustained Release Pellets)", amount: "30 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Advanced PPI + Prokinetic Agent",
    indications: [
      "Erosive Reflux Esophagitis & Severe GERD",
      "Zollinger-Ellison Syndrome & Acid Overproduction",
      "Refractory Heartburn & Gastric Regurgitation",
      "Post-meal Nausea and Bloating"
    ],
    dosageAdministration: "1 capsule daily before breakfast.",
    storage: "Store below 25°C in a dry place protected from light.",
    warnings: "Swallow whole with a glass of water.",
    certifications: ["WHO-GMP", "ISO 9001:2015", "DCGI Approved"],
    highlights: ["Advanced S-Isomer Purity", "Higher Acid Suppression Ratio", "Superior Bioavailability"]
  },
  {
    id: "nx-006",
    slug: "vita-all-multivitamin-capsules",
    brandName: "Vita-All™",
    genericName: "Multivitamin & Multimineral Capsules (23 Essential Vitamins & Minerals)",
    category: "Multivitamins & Nutraceuticals",
    categorySlug: "nutraceuticals",
    dosageForm: "Capsules",
    badge: "Complete Nutrition",
    mrp: "₹ 175.00",
    packPrice: "15 Capsules / Strip",
    isFeatured: true,
    isNew: true,
    image: imgVitaAll,
    images: [imgVitaAll],
    packaging: "15 Capsules per Blister Strip in Premium Box",
    packType: "Capsule Blister",
    shortDesc: "Complete daily nutrition powerhouse featuring 23 essential vitamins & minerals (Vitamin A, C, B12, D3, Zinc) for immunity, energy, mental focus, heart health, and bone strength.",
    composition: [
      { ingredient: "23 Essential Vitamins & Minerals Complex", amount: "RDA Formulated" },
      { ingredient: "Vitamin A, Vitamin C, Vitamin D3, Vitamin E", amount: "Balanced" },
      { ingredient: "Vitamin B12, Folic Acid, Biotin", amount: "Therapeutic" },
      { ingredient: "Zinc, Iron, Magnesium, Selenium, Chromium", amount: "Optimal" }
    ],
    therapeuticClass: "Complete Daily Multivitamin & Mineral Complex",
    indications: [
      "Immunity Support & Defense",
      "Daily Energy Boost & Fatigue Relief",
      "Mental Focus & Cognitive Alertness",
      "Heart Health & Vascular Support",
      "Bone & Joint Strength"
    ],
    dosageAdministration: "1 capsule daily after breakfast or meal.",
    storage: "Store in a cool, dry place below 25°C away from direct sunlight.",
    warnings: "Nutritional food supplement. Keep out of reach of children.",
    certifications: ["FSSAI Licensed", "WHO-GMP", "ISO 9001:2015"],
    highlights: ["23 Active Micronutrients", "High-Absorption Matrix", "Essential Nutrients for Everyday Wellness"]
  },
  {
    id: "nx-007",
    slug: "ostoviva-calcium-d3-tablets",
    brandName: "Ostoviva",
    genericName: "Elemental Calcium 500 mg + Vitamin D3 (Cholecalciferol IP) 250 I.U. Tablets",
    category: "Multivitamins & Nutraceuticals",
    categorySlug: "nutraceuticals",
    dosageForm: "Tablets",
    badge: "Bone & Joint",
    mrp: "₹ 130.00",
    packPrice: "15 Tablets / Strip (10 x 15 Tablets)",
    isFeatured: true,
    isNew: false,
    image: imgOstoviva,
    images: [imgOstoviva],
    packaging: "10 x 15 Tablets Blister Pack (150 Tablets per Box)",
    packType: "Blister Pack",
    shortDesc: "High-absorption calcium formulation fortified with Cholecalciferol (Vitamin D3) to support strong bones, healthy teeth, calcium absorption, and muscle function.",
    composition: [
      { ingredient: "Elemental Calcium (from Calcium Carbonate IP)", amount: "500 mg" },
      { ingredient: "Vitamin D3 (Cholecalciferol IP)", amount: "250 I.U." },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Calcium & Vitamin D3 Supplement",
    indications: [
      "Supports Strong Bones & Teeth",
      "Supports Optimal Calcium Absorption",
      "Helps in Smooth Muscle & Nerve Function",
      "Prevention & Treatment of Osteoporosis",
      "Post-Menopausal & Geriatric Bone Care"
    ],
    dosageAdministration: "1 to 2 tablets daily after meals or as directed by physician.",
    storage: "Store protected from light and moisture at a temperature not exceeding 30°C.",
    warnings: "Do not exceed the recommended daily dose.",
    certifications: ["WHO-GMP", "DCGI Approved", "ISO 9001:2015"],
    highlights: ["High-Efficacy Elemental Calcium", "Vitamin D3 Absorption Booster", "Patient Friendly Tablet Size"]
  },
  {
    id: "nx-008",
    slug: "m-col-1500-tablets",
    brandName: "M-Col 1500",
    genericName: "Methylcobalamin Tablets 1500 mcg",
    category: "Multivitamins & Nutraceuticals",
    categorySlug: "nutraceuticals",
    dosageForm: "Tablets",
    badge: "Nerve Health",
    mrp: "₹ 155.00",
    packPrice: "10 Tablets / Strip",
    isFeatured: true,
    isNew: false,
    image: imgMCol,
    images: [imgMCol],
    packaging: "1 x 10 Red Blister Strip in Premium UV Carton",
    packType: "Blister Pack",
    shortDesc: "High-potency bioactive Vitamin B12 formulation delivering 1500 mcg Methylcobalamin to support nerve health, RBC formation, and cellular energy metabolism.",
    composition: [
      { ingredient: "Methylcobalamin IP (Bioactive Vitamin B12)", amount: "1500 mcg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Bioactive Vitamin B12 / Neurotropic Agent",
    indications: [
      "Supports Peripheral Nerve Health & Regeneration",
      "Supports Healthy Red Blood Cell (RBC) Formation",
      "Supports Cellular Energy Metabolism & Vitality",
      "Diabetic Neuropathy & Burning Feet Syndrome",
      "Megaloblastic Anemia Recovery"
    ],
    dosageAdministration: "1 tablet daily after meal or as prescribed by doctor.",
    storage: "Store in a cool, dry place protected from light and moisture.",
    warnings: "Nutraceutical for adult use.",
    certifications: ["WHO-GMP", "ISO 9001:2015", "FSSAI Licensed"],
    highlights: ["1500 mcg Pure Bioactive B12", "Rapid Sublingual / Oral Absorption", "Red Blister Foil Protection"]
  },
  {
    id: "nx-009",
    slug: "elcarva-vitamin-e-levocarnitine-tablets",
    brandName: "ELcarva",
    genericName: "Vitamin E Acetate and Levocarnitine Tablets",
    category: "Cardiovascular & Diabetic Care",
    categorySlug: "cardiovascular",
    dosageForm: "Tablets",
    badge: "Heart & Energy",
    mrp: "₹ 190.00",
    packPrice: "10 Tablets / Strip",
    isFeatured: true,
    isNew: true,
    image: imgElcarva,
    images: [imgElcarva],
    packaging: "10 Tablets Triangular Blister Strip with Moisture Barrier",
    packType: "Blister Pack",
    shortDesc: "Synergistic cardio-protective and metabolic formula combining Vitamin E Acetate with Levocarnitine for heart strength, cellular energy, antioxidant support, and everyday vitality.",
    composition: [
      { ingredient: "Vitamin E Acetate IP (eq. to Vitamin E)", amount: "200 mg (200 IU)" },
      { ingredient: "Levocarnitine IP", amount: "500 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Cardiovascular Support / Cellular Energy Optimizer",
    indications: [
      "Supports Heart Health & Myocardial Strength",
      "Promotes Cellular Energy & Physical Stamina",
      "Potent Antioxidant Cellular Protection",
      "Muscle Fatigue & Cramps Relief in Active Individuals",
      "Cardiometabolic & Vascular Well-being"
    ],
    dosageAdministration: "1 tablet once or twice daily after meals as directed by physician.",
    storage: "Store below 25°C in a dry place. Protect from direct heat and light.",
    warnings: "Use under medical supervision in chronic cardiac conditions.",
    certifications: ["WHO-GMP", "ISO 9001:2015", "DCGI Approved"],
    highlights: ["Unique Triangular Tablet Geometry", "500 mg High Potency Levocarnitine", "Pure Vitamin E 200 IU"]
  },
  {
    id: "nx-010",
    slug: "tavlo-paracetamol-650-tablets",
    brandName: "Tavlo™",
    genericName: "Paracetamol Tablets IP 650 mg",
    category: "Pain Relief & Anti-Inflammatory",
    categorySlug: "analgesics",
    dosageForm: "Tablets",
    badge: "Fever & Pain",
    mrp: "₹ 35.00",
    packPrice: "15 Tablets / Strip (5 x 3)",
    isFeatured: true,
    isNew: false,
    image: imgTavlo,
    images: [imgTavlo],
    packaging: "15 Tablets (5 x 3) Blister Pack",
    packType: "Blister Pack",
    shortDesc: "Fast-acting antipyretic and analgesic Paracetamol 650 mg formulation engineered for effective relief from fever, headache, body ache, and joint pain.",
    composition: [
      { ingredient: "Paracetamol IP", amount: "650 mg" },
      { ingredient: "Excipients", amount: "q.s." }
    ],
    therapeuticClass: "Antipyretic & Analgesic (Non-Opioid)",
    indications: [
      "Reduces High Body Fever & Temperature",
      "Relieves Severe Headache & Migraine Aches",
      "Eases Generalized Body Pain & Muscle Aches",
      "Post-Vaccination & Viral Flu Discomfort Relief"
    ],
    dosageAdministration: "1 tablet every 4 to 6 hours as needed (maximum 4 tablets in 24 hours) or as advised by doctor.",
    storage: "Store protected from moisture and direct sunlight below 30°C.",
    warnings: "Overdose may cause serious liver damage. Do not consume alcohol during therapy.",
    certifications: ["WHO-GMP", "DCGI Approved", "ISO 9001:2015"],
    highlights: ["Rapid Dissolution in < 2 Minutes", "Gastric Friendly Formula", "Quality IP Standard"]
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
