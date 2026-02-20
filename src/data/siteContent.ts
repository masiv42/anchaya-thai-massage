// ============================================
// ANCHAYA THAI MASSAGE - SITE CONTENT
// ============================================
// Edit this file to update all website content
// No coding knowledge required - just update the text values
// ============================================

export const businessInfo = {
  name: "Anchaya Thai Massage",
  tagline: "Traditionelle Thai Massage in München",
  slogan: "Entspannung für Körper und Seele",
  owner: "Yupin Herrmann",
  
  // Contact Information
  phone: "089 12595098",
  phoneLink: "tel:+498912595098",
  whatsapp: "0176 64758297",
  whatsappLink: "https://wa.me/4917664758297",
  email: "info@anchaya-thai-massage.de",
  
  // Address
  street: "Karl-Köglsperger-Str. 11",
  city: "80939 München",
  fullAddress: "Karl-Köglsperger-Str. 11, 80939 München",
  
  // Map embed URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.8!2d11.58!3d48.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDExJzI0LjAiTiAxMcKwMzQnNDguMCJF!5e0!3m2!1sde!2sde!4v1234567890",
  
  // Public transport
  publicTransport: [
    "U6 Kieferngarten: 5 Min. Fußweg",
    "Bus 140, 170, 171: Haltestelle Paul-Hindemith-Allee"
  ],
  parking: "Kostenlose Parkplätze im Innenhof verfügbar. Unser Studio befindet sich im Innenhof.",
  
  // Opening Hours (1:1 von anchaya-thai-massage.de)
  openingHours: {
    weekdays: "10:00 – 19:00",
    saturday: "10:00 – 18:00",
    sunday: "Geschlossen",
    note: "Sonntag und Feiertag geschlossen"
  },
  
  // Years of experience
  yearsExperience: 15,
  
  // Google rating
  googleRating: 4.9,
  googleReviews: 87,
  
  // Social media
  social: {
    facebook: "#",
    instagram: "#",
  },
  
  // Bank details for vouchers
  bankDetails: {
    accountHolder: "Yupin Herrmann",
    bank: "Sparkasse",
    iban: "DE59 7015 0000 1003 4598 39"
  },
  shippingFee: 3
};

// Hinweis: 5 Massagen zahlen, 6. gratis (gilt für alle Massagen)
// Services 1:1 von anchaya-thai-massage.de
export const services = [
  {
    id: "thai-spa-oel",
    name: "Thai Spa mit Öl",
    shortDescription: "Wohltuende Spa-Massage mit hochwertigem Öl für tiefe Entspannung und verwöhnte Haut.",
    description: "Gönnen Sie sich diese verwöhnende Thai Spa Massage mit hochwertigem Öl. Die Kombination aus traditionellen Thai-Techniken und nährendem Öl sorgt für tiefe Entspannung und gepflegte Haut.",
    benefits: ["Tiefe Entspannung", "Hautpflege", "Stressabbau", "Neue Energie"],
    prices: [
      { duration: "60 Min.", price: 57 },
      { duration: "90 Min.", price: 77 },
      { duration: "120 Min.", price: 103 }
    ],
    popular: true,
    note: "5 Massagen zahlen – die 6. ist gratis!"
  },
  {
    id: "thai-massage",
    name: "Original Thaimassage",
    shortDescription: "Bringt Ihnen neue Kraft und Energie für den ganzen Tag.",
    description: "Die traditionelle Thai Massage ist eine uralte Heilkunst, die Akupressur, Dehnung und Energiearbeit kombiniert. Sie löst Verspannungen, verbessert die Beweglichkeit und fördert den Energiefluss im ganzen Körper.",
    benefits: ["Löst Verspannungen", "Verbessert Beweglichkeit", "Neue Kraft & Energie", "Reduziert Stress"],
    prices: [
      { duration: "60 Min.", price: 57 },
      { duration: "90 Min.", price: 77 },
      { duration: "120 Min.", price: 103 }
    ],
    popular: true
  },
  {
    id: "aroma-massage",
    name: "Aromaöl-Massage",
    shortDescription: "Aromatische Öle entspannen Ihre Haut und Ihren Geist.",
    description: "Das seelische und körperliche Wohlbefinden wird gesteigert. Eine sanfte, fließende Massage mit hochwertigen aromatischen Ölen wirkt besonders entspannend und pflegend für die Haut.",
    benefits: ["Tiefe Entspannung", "Hautpflege", "Aromatherapie", "Seelisches Wohlbefinden"],
    prices: [
      { duration: "60 Min.", price: 57 },
      { duration: "90 Min.", price: 77 },
      { duration: "120 Min.", price: 103 }
    ],
    popular: true
  },
  {
    id: "sport-oel-massage",
    name: "Sport-Öl-Massage",
    shortDescription: "Mit sanften und gleichmäßigen Massagebewegungen wird eine tiefe Entspannung erreicht.",
    description: "Die Sport-Öl-Massage kombiniert sanfte und gleichmäßige Massagebewegungen mit hochwertigem Öl und sorgt für tiefe Muskelentspannung. Ideal nach sportlicher Aktivität oder bei Muskelverspannungen.",
    benefits: ["Tiefe Muskelentspannung", "Fördert Durchblutung", "Regeneration", "Stressabbau"],
    prices: [
      { duration: "60 Min.", price: 57 },
      { duration: "90 Min.", price: 77 },
      { duration: "120 Min.", price: 103 }
    ],
    popular: false
  },
  {
    id: "kopf-nacken-ruecken",
    name: "Kopf/Nacken/Rücken-Massage",
    shortDescription: "Bei Kopfschmerzen, Migräne oder Problemen im Schulterbereich – diese Massage hilft.",
    description: "Haben Sie Kopfschmerzen, Migräne oder Probleme im Schulterbereich, oder können Sie den Kopf nicht richtig bewegen? Dann kann Ihnen diese gezielte Massage helfen. Perfekt für alle, die viel am Schreibtisch sitzen.",
    benefits: ["Lindert Kopfschmerzen", "Löst Nackenverspannungen", "Hilft bei Migräne", "Verbessert Beweglichkeit"],
    prices: [
      { duration: "30 Min.", price: 37 },
      { duration: "60 Min.", price: 57 }
    ],
    popular: false
  },
  {
    id: "fuss-massage",
    name: "Fußreflexzonen-Massage",
    shortDescription: "Stimulation der Reflexzonen an den Füßen für ganzheitliches Wohlbefinden.",
    description: "Durch gezielte Druckpunktmassage an den Füßen werden Organe und Körperzonen stimuliert. Eine wunderbar entspannende Behandlung mit ganzheitlicher Wirkung.",
    benefits: ["Ganzheitliche Wirkung", "Fördert Durchblutung", "Tiefe Entspannung", "Stärkt Immunsystem"],
    prices: [
      { duration: "30 Min.", price: 37 },
      { duration: "60 Min.", price: 57 }
    ],
    popular: false
  },
  {
    id: "kraeuterstempel",
    name: "Kräuterstempel-Massage",
    shortDescription: "Mit heißen Kräuterstempeln werden Verspannungen gelöst und das Wohlbefinden gesteigert.",
    description: "Die Kräuterstempel sind mit verschiedensten Kräutern gefüllte Leinensäckchen, welche in einem speziellen Dampfgargerät auf etwa 90 Grad erwärmt werden. Die Wärme und die Heilkräfte der Kräuter wirken tief in das Gewebe.",
    benefits: ["Wärmetherapie", "Heilkräuter-Wirkung", "Tiefe Entspannung", "Löst Verspannungen"],
    prices: [
      { duration: "90 Min.", price: 83 }
    ],
    popular: true
  }
];

// Bewertungen (Google-Profil Anchaya Thai Massage)
export const testimonials = [
  {
    name: "Constanze H.",
    rating: 5,
    text: "Absolute Empfehlung! Die Thai Massage war einfach wunderbar. Frau Herrmann ist sehr professionell und einfühlsam. Man fühlt sich sofort wohl und entspannt. Ich komme auf jeden Fall wieder!",
    date: "2024"
  },
  {
    name: "Michael S.",
    rating: 5,
    text: "Sehr angenehme Atmosphäre und eine tolle Massage. Die Öffnungszeiten sind super, man bekommt auch kurzfristig einen Termin. Preis-Leistungs-Verhältnis ist top!",
    date: "2024"
  },
  {
    name: "Andrea K.",
    rating: 5,
    text: "Ich war zum ersten Mal hier und war begeistert. Die Kräuterstempel-Massage war einfach himmlisch. Das Studio ist sehr sauber und ruhig. Absolut weiterzuempfehlen!",
    date: "2024"
  },
  {
    name: "Thomas B.",
    rating: 5,
    text: "Seit Jahren bin ich Stammkunde. Die Original Thaimassage ist authentisch und sehr wirksam bei meinen Rückenproblemen. Frau Herrmann weiß genau was sie tut!",
    date: "2024"
  },
  {
    name: "Sabine W.",
    rating: 5,
    text: "Wunderschönes Studio mit tollem Ambiente. Die Aromaöl-Massage war perfekt. Man merkt sofort die Erfahrung der Masseurin. Gerne komme ich wieder!",
    date: "2023"
  }
];

export const faqs = [
  {
    question: "Was soll ich zur Massage mitbringen?",
    answer: "Sie brauchen nichts mitzubringen. Bequeme Kleidung wird gestellt. Bitte kommen Sie etwa 5-10 Minuten vor Ihrem Termin."
  },
  {
    question: "Wie lange dauert eine Massage-Sitzung?",
    answer: "Die Dauer hängt von der gewählten Behandlung ab - von 30 Minuten für eine Teilmassage bis zu 120 Minuten für eine ausgiebige Ganzkörperbehandlung."
  },
  {
    question: "Kann ich kurzfristig einen Termin buchen?",
    answer: "Ja, rufen Sie uns einfach an oder schreiben Sie per WhatsApp. Bei Verfügbarkeit sind auch kurzfristige Termine möglich."
  },
  {
    question: "Ist die Thai Massage schmerzhaft?",
    answer: "Die Intensität wird individuell angepasst. Teilen Sie uns Ihre Wünsche mit - von sanft entspannend bis kräftig therapeutisch ist alles möglich."
  },
  {
    question: "Kann ich einen Gutschein kaufen?",
    answer: "Ja! Gutscheine sind als perfektes Geschenk erhältlich. Sie können per Telefon, WhatsApp oder E-Mail bestellt werden."
  },
  {
    question: "Gibt es Parkplätze?",
    answer: "Ja, kostenlose Parkplätze sind im Innenhof verfügbar. Alternativ ist das Studio mit der U6 (Kieferngarten, 5 Min. Fußweg) gut erreichbar."
  },
  {
    question: "Sind die Massagen auch für Männer geeignet?",
    answer: "Absolut! Unsere Massagen sind für alle geeignet. Die Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt."
  },
  {
    question: "Was sind die Kontraindikationen?",
    answer: "Bei akuten Entzündungen, Fieber, offenen Wunden oder Schwangerschaft im ersten Trimester sollte keine Massage erfolgen. Bei Unsicherheiten fragen Sie bitte Ihren Arzt."
  }
];

export const teamMembers = [
  {
    name: "Yupin Herrmann",
    role: "Inhaberin & Masseurin",
    bio: "Mit über 15 Jahren Erfahrung in traditioneller Thai Massage bringe ich die authentische Kunst der thailändischen Heilmassage nach München. Ausgebildet in Thailand, lege ich großen Wert auf individuelle Behandlung und echte Entspannung.",
    certifications: ["Zertifizierte Thai Massage Masseurin", "Ausbildung in Thailand", "Aromatherapie Zertifikat"]
  }
];

export const whyChooseUs = [
  {
    title: "Authentische Tradition",
    description: "Echte thailändische Massagetechniken, erlernt in Thailand",
    icon: "leaf"
  },
  {
    title: "Individuelle Behandlung",
    description: "Jede Massage wird auf Ihre Bedürfnisse abgestimmt",
    icon: "heart"
  },
  {
    title: "Ruhige Atmosphäre",
    description: "Ein Ort der Ruhe mitten in München",
    icon: "spa"
  },
  {
    title: "Faire Preise",
    description: "Hochwertige Behandlungen zu fairen Konditionen",
    icon: "star"
  }
];

export const seoMeta = {
  home: {
    title: "Anchaya Thai Massage München | Traditionelle Thai Massage",
    description: "Authentische Thai Massage in München. Entspannung für Körper und Seele mit traditionellen Techniken. Jetzt Termin vereinbaren! ☎ 089 12595098"
  },
  services: {
    title: "Unsere Massagen | Anchaya Thai Massage München",
    description: "Thai Massage, Aromaöl Massage, Kräuterstempel, Fußreflexzonen & mehr. Entdecken Sie unser Angebot an entspannenden Behandlungen in München."
  },
  prices: {
    title: "Preise | Anchaya Thai Massage München",
    description: "Faire Preise für hochwertige Thai Massagen in München. Ab 37€ für 30 Minuten. Alle Preise und Angebote auf einen Blick."
  },
  vouchers: {
    title: "Gutscheine | Anchaya Thai Massage München",
    description: "Verschenken Sie Entspannung! Thai Massage Gutscheine als perfektes Geschenk. Einfach online bestellen."
  },
  about: {
    title: "Über Uns | Anchaya Thai Massage München",
    description: "Lernen Sie Anchaya Thai Massage kennen. Über 15 Jahre Erfahrung in traditioneller thailändischer Massage in München."
  },
  contact: {
    title: "Kontakt | Anchaya Thai Massage München",
    description: "Termin vereinbaren bei Anchaya Thai Massage. ☎ 089 12595098 | Karl-Köglsperger-Str. 11, 80939 München"
  }
};
