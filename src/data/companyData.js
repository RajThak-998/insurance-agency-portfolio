// Company Data & Operational Details for Autocratic Management Services Private Limited

export const COMPANY_INFO = {
  name: "Autocratic Management Services Private Limited",
  shortName: "Autocratic Management Services",
  brandAcronym: "AMSPL",
  cin: "U74999UP2018PTC110338",
  roc: "ROC Kanpur",
  incorporationDate: "November 15, 2018",
  yearsInOperation: "7+",
  groupExperienceYears: "15+",
  sisterConcern: "ERE Management Services Private Limited (Est. 2010)",
  authorizedCapital: "₹10,00,000",
  paidUpCapital: "₹1,00,000",
  annualRevenueScale: "₹93.4 Lakh (FY 2024-25)",
  tagline: "Trusted Insurance Investigation, Claims Verification & Risk Management Across Uttar Pradesh",
  
  contact: {
    officialEmail: "radheyrspandey9@rediffmail.com",
    corporateEmail: "contact@autocraticmanagement.com", // Recommended custom domain placeholder
    helplinePhone: "+91 94150 XXXXX", // Placeholder for review
    deskPhone: "+91 522 XXXXXXX", // Placeholder for review
    workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM (IST)",
    sundayStatus: "Emergency Response & Catastrophe Team On-Call",
    
    operationalOffice: {
      title: "Operational Corporate Office",
      addressLine1: "3rd Floor, B, 1/60, Sector-P, Sector K",
      addressLine2: "Aliganj, Lucknow, Uttar Pradesh",
      pincode: "226024",
      landmark: "Near Aliganj Main Market Hub"
    },
    registeredOffice: {
      title: "Registered Office Address",
      addressLine1: "MMIG-15, Sitapur Road Yojana",
      addressLine2: "Aliganj, Lucknow, Uttar Pradesh",
      pincode: "226021"
    }
  },

  directors: [
    {
      name: "Radhey Shyam Pandey",
      role: "Managing Director & Co-Founder",
      din: "Director Identification Verified",
      experience: "15+ Years Industry Experience",
      bio: "Veteran risk strategist and field investigation leader with over 15 years in general insurance claims verification. Spearheaded extensive investigative networks across northern India, co-founding ERE Management Services Pvt Ltd in 2010 and establishing Autocratic Management Services in 2018 to deliver institutional-grade forensic investigation across Uttar Pradesh."
    },
    {
      name: "Shubhani Pandey",
      role: "Director & Co-Founder",
      din: "Director Identification Verified",
      experience: "Corporate Governance & Field Administration",
      bio: "Key executive driving operational governance, quality assurance, compliance auditing, and investigator liaison across 75 districts. Ensures rigorous evidence chain-of-custody and adherence to statutory insurance investigation protocols."
    }
  ]
};

export const SERVICES = [
  {
    id: "motor-claims",
    title: "Motor Claims Investigation",
    tagline: "Own Damage (OD), Third Party (TP) & MACT Verification",
    iconName: "Car",
    description: "In-depth forensic field scrutiny for private and commercial motor vehicle claims, designed to eliminate fabricated claims and protect insurer loss ratios.",
    deliverables: [
      "Motor Own Damage (OD) accident scene reconstruction",
      "Third Party (TP) liability legitimacy & vehicle mismatch check",
      "Motor Accident Claims Tribunal (MACT) court case evidentiary defense",
      "Garage estimate audits, parts replacement verification & salvage tracking",
      "Driver license & commercial permit verification with RTO records"
    ],
    highlight: "Average Turnaround: 24 - 48 Hours"
  },
  {
    id: "theft-fraud",
    title: "Theft & Anti-Fraud Control",
    tagline: "Staged Theft, Key Forensics & FIR Scrutiny",
    iconName: "ShieldAlert",
    description: "Multi-layered anti-fraud intelligence combining physical detective field work, digital footprint tracking, and official law enforcement liaison.",
    deliverables: [
      "Vehicle & commercial asset theft claim genuineness check",
      "Key forensic analysis, duplicate key verification & lock examination",
      "Police station FIR, NCR, and final untraced report (FR) physical verification",
      "CCTV footage retrieval, neighbour inquiries & witness credibility checks",
      "Detection of organized theft rackets and pre-planned abandonment"
    ],
    highlight: "Over ₹4.2+ Cr Fraud Prevented (Est.)"
  },
  {
    id: "non-motor",
    title: "Non-Motor & Commercial Surveys",
    tagline: "Fire, Burglary, Engineering & Marine Cargo",
    iconName: "Building2",
    description: "Comprehensive physical risk assessment and loss verification for corporate, commercial establishments, warehouses, and manufacturing plants.",
    deliverables: [
      "Commercial fire, water damage, and storm physical site inspection",
      "Inventory & stock register audits vs. claimed stock discrepancies",
      "Factory & plant machinery breakdown assessment",
      "Pre-insurance risk inspection and loss mitigation advisory",
      "Documentary corroboration with books of accounts and GST filings"
    ],
    highlight: "Rigorous Technical & Financial Audits"
  },
  {
    id: "health-livestock",
    title: "Health & Livestock Verification",
    tagline: "Hospital Audits, Mediclaim Scrutiny & Cattle Ear-Tag Checks",
    iconName: "HeartHandshake",
    description: "High-precision verification for health insurance reimbursements, cashless fraud checks, and rural livestock insurance schemes.",
    deliverables: [
      "Hospital indoor patient (IPD) register physical verification",
      "Treating doctor interview & pathology lab cross-verification",
      "Fake hospitalization & inflated pharmacy billing unmasking",
      "Livestock ear-tag physical audit, veterinary officer verification",
      "Post-mortem report scrutiny and rural farmer community social audits"
    ],
    highlight: "Sub-48h Hospital & Rural Field Triage"
  },
  {
    id: "field-coordination",
    title: "Vendor & Field Team Coordination",
    tagline: "Pan-UP Command Center & Chain-of-Custody Dossiers",
    iconName: "Network",
    description: "Statewide field orchestration connecting centralized operational management in Lucknow with grassroots investigators in all 75 UP districts.",
    deliverables: [
      "Centralized triage desk in Aliganj, Lucknow with dedicated claim coordinators",
      "Network of 120+ vetted field investigators covering rural & urban UP",
      "Geo-tagged, time-stamped digital photographic & video evidence collection",
      "Strict compliance with Insurer Standard Operating Procedures (SOPs)",
      "Standardized court-admissible investigation dossiers ready for underwriting"
    ],
    highlight: "100% Pan-UP Geographic Reach"
  }
];

export const UP_REGIONS = [
  {
    name: "Central UP (HQ Hub)",
    hub: "Lucknow & Kanpur",
    districts: ["Lucknow", "Kanpur Nagar", "Kanpur Dehat", "Sitapur", "Unnao", "Raebareli", "Hardoi", "Lakhimpur Kheri", "Barabanki"],
    tat: "12 - 24 Hours",
    officers: "30+ Field Executives"
  },
  {
    name: "Western UP",
    hub: "Noida, Meerut & Agra",
    districts: ["Meerut", "Agra", "Gautam Buddha Nagar (Noida)", "Ghaziabad", "Aligarh", "Mathura", "Bareilly", "Moradabad", "Saharanpur", "Muzaffarnagar", "Bulandshahr"],
    tat: "24 - 36 Hours",
    officers: "28+ Field Executives"
  },
  {
    name: "Eastern UP",
    hub: "Varanasi & Gorakhpur",
    districts: ["Varanasi", "Gorakhpur", "Prayagraj", "Ayodhya", "Basti", "Mirzapur", "Azamgarh", "Jaunpur", "Ghazipur", "Deoria", "Ballia"],
    tat: "24 - 48 Hours",
    officers: "26+ Field Executives"
  },
  {
    name: "Bundelkhand & Southern UP",
    hub: "Jhansi & Banda",
    districts: ["Jhansi", "Lalitpur", "Jalaun", "Hamirpur", "Banda", "Mahoba", "Chitrakoot"],
    tat: "24 - 48 Hours",
    officers: "16+ Field Executives"
  }
];

export const ALL_75_DISTRICTS = [
  "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich",
  "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr",
  "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar",
  "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur",
  "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri",
  "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad",
  "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar",
  "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
];

export const KEY_METRICS = [
  { value: "7+", label: "Years of Incorporation", sub: "Since November 2018" },
  { value: "15+", label: "Years Group Heritage", sub: "ERE Group Roots (2010)" },
  { value: "75", label: "UP Districts Covered", sub: "100% Statewide Network" },
  { value: "₹93.4L", label: "FY25 Annual Scale", sub: "Consistent YoY Growth" },
  { value: "24-48h", label: "Rapid Field Response", sub: "Fastest Ground TAT" },
  { value: "100%", label: "Court Defensible", sub: "Strict Chain-of-Custody" }
];

export const INVESTIGATION_PROCESS = [
  {
    step: "01",
    title: "Case Intake & Priority Triage",
    desc: "Receipt of investigation mandate from insurer portal or email. Immediate automated cross-check against historical fraud databases and local district assignment within 2-4 hours.",
    time: "0 - 4 Hours"
  },
  {
    step: "02",
    title: "Boots-on-the-Ground Field Audit",
    desc: "Deployment of local district field investigators for scene recreation, vehicle/hospital/property inspection, high-resolution geo-tagged photo capture, and physical party contact.",
    time: "24 Hours"
  },
  {
    step: "03",
    title: "Forensic & Institutional Corroboration",
    desc: "Verification with official records: police stations (FIR/NCR/FR check), RTO permits, medical hospital indoor registries, municipal records, and key telemetry tests.",
    time: "36 Hours"
  },
  {
    step: "04",
    title: "Multi-Tier Quality & Legal Review",
    desc: "Scrutiny by senior claims analysts in Lucknow HQ. Verifying consistency, establishing undeniable evidentiary chain-of-custody, and formulating definitive recommendations.",
    time: "48 Hours"
  },
  {
    step: "05",
    title: "Defensible Dossier Submission",
    desc: "Delivery of standardized, audit-ready investigation dossier formatted strictly according to corporate insurer guidelines, directly uploaded to client portal or emailed securely.",
    time: "Final Deliverable"
  }
];

export const SAMPLE_CASE_STUDIES = [
  {
    category: "Motor OD Claim",
    title: "Staged Highway Collision Detected",
    district: "Sitapur – Lucknow Highway",
    situation: "High-value luxury SUV reported sudden rollover after stray cattle encounter, claiming ₹14.8 Lakh total loss.",
    findings: "Physical road scrutiny showed no skid marks; roadside shop CCTV revealed previous tow-truck unloading. Duplicate key forensic audit indicated engine shut down miles away.",
    result: "Repudiation supported with full video evidence; 100% claim liability saved for insurer."
  },
  {
    category: "Theft Verification",
    title: "Commercial Truck Stolen with Single Key",
    district: "Kanpur Dehat",
    situation: "Commercial transport vehicle claimed stolen from parking bay overnight within 48 hours of policy renewal.",
    findings: "Investigator liaison with toll plaza FASTag logs proved vehicle passed tolls 3 days after claimed theft date with original owner's mobile active in tandem.",
    result: "Fraud syndicate busted; FIR revised and formal insurer claim closure without payout."
  },
  {
    category: "Health & Hospital Audit",
    title: "Ghost Hospitalization & Inflated ICU Billing",
    district: "Gorakhpur",
    situation: "Multiple reimbursement claims totaling ₹6.2 Lakh from a private nursing home for identical dengue treatments.",
    findings: "Surprise hospital audit revealed only 6 operational beds while records showed 18 admissions. Nursing shift logs and doctor prescription registers had identical handwriting and dates.",
    result: "Nursing home delisted by insurer panel and entire fraudulent claim portfolio withdrawn."
  }
];
