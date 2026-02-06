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
  
  // Map embed URL (replace with actual Google Maps embed)
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.8!2d11.58!3d48.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDExJzI0LjAiTiAxMcKwMzQnNDguMCJF!5e0!3m2!1sde!2sde!4v1234567890",
  
  // Public transport
  publicTransport: [
    "U6 Kieferngarten: 5 Min. Fußweg",
    "Bus 140, 170, 171: Haltestelle Paul-Hindemith-Allee"
  ],
  parking: "Kostenlose Parkplätze im Innenhof verfügbar",
  
  // Opening Hours
  openingHours: {
    weekdays: "10:00 – 20:00",
    saturday: "10:00 – 18:00",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung auch außerhalb der Öffnungszeiten möglich"
  },
  
  // Years of experience
  yearsExperience: 15,
  
  // Google rating (placeholder)
  googleRating: 4.9,
  googleReviews: 87,
  
  // Social media (placeholders)
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

export const services = [
  {
    id: "thai-massage",
    name: "Traditionelle Thai Massage",
    shortDescription: "Die klassische Ganzkörpermassage mit Dehnung und Akupressur für tiefe Entspannung.",
    description: "Die traditionelle Thai Massage ist eine uralte Heilkunst, die Akupressur, Dehnung und Energiearbeit kombiniert. Sie löst Verspannungen, verbessert die Beweglichkeit und fördert den Energiefluss im ganzen Körper.",
    benefits: ["Löst Verspannungen", "Verbessert Beweglichkeit", "Steigert Energie", "Reduziert Stress"],
    prices: [
      { duration: "30 Min.", price: 35 },
      { duration: "60 Min.", price: 55 },
      { duration: "90 Min.", price: 80 },
      { duration: "120 Min.", price: 100 }
    ],
    popular: true
  },
  {
    id: "aroma-massage",
    name: "Aromaöl Massage",
    shortDescription: "Entspannende Ölmassage mit duftenden ätherischen Ölen für Körper und Geist.",
    description: "Eine sanfte, fließende Massage mit hochwertigen ätherischen Ölen. Die Kombination aus Massage und Aromatherapie wirkt besonders entspannend und pflegend für die Haut.",
    benefits: ["Tiefe Entspannung", "Hautpflege", "Aromatherapie", "Stressabbau"],
    prices: [
      { duration: "60 Min.", price: 60 },
      { duration: "90 Min.", price: 85 },
      { duration: "120 Min.", price: 110 }
    ],
    popular: true
  },
  {
    id: "ruecken-nacken",
    name: "Rücken & Nacken Massage",
    shortDescription: "Gezielte Behandlung für den oberen Rücken, Nacken und Schulterbereich.",
    description: "Perfekt für alle, die viel am Schreibtisch sitzen. Diese fokussierte Massage löst Verspannungen im Nacken- und Schulterbereich und lindert Kopfschmerzen.",
    benefits: ["Löst Nackenverspannungen", "Lindert Kopfschmerzen", "Verbessert Haltung", "Schnelle Entspannung"],
    prices: [
      { duration: "30 Min.", price: 35 },
      { duration: "45 Min.", price: 45 },
      { duration: "60 Min.", price: 55 }
    ],
    popular: false
  },
  {
    id: "fuss-massage",
    name: "Fußreflexzonen Massage",
    shortDescription: "Stimulation der Reflexzonen an den Füßen für ganzheitliches Wohlbefinden.",
    description: "Durch gezielte Druckpunktmassage an den Füßen werden Organe und Körperzonen stimuliert. Eine wunderbar entspannende Behandlung mit ganzheitlicher Wirkung.",
    benefits: ["Ganzheitliche Wirkung", "Fördert Durchblutung", "Tiefe Entspannung", "Stärkt Immunsystem"],
    prices: [
      { duration: "30 Min.", price: 35 },
      { duration: "45 Min.", price: 45 },
      { duration: "60 Min.", price: 55 }
    ],
    popular: false
  },
  {
    id: "hot-stone",
    name: "Hot Stone Massage",
    shortDescription: "Wärmende Massage mit heißen Basaltsteinen für tiefe Muskelentspannung.",
    description: "Heiße Vulkansteine werden auf den Körper gelegt und für die Massage verwendet. Die Wärme dringt tief ins Gewebe ein und löst selbst hartnäckige Verspannungen.",
    benefits: ["Tiefe Muskelentspannung", "Wärmetherapie", "Verbessert Durchblutung", "Luxuriöses Erlebnis"],
    prices: [
      { duration: "60 Min.", price: 70 },
      { duration: "90 Min.", price: 95 },
      { duration: "120 Min.", price: 120 }
    ],
    popular: true
  },
  {
    id: "paar-massage",
    name: "Paarmassage",
    shortDescription: "Genießen Sie eine entspannende Massage zu zweit in romantischer Atmosphäre.",
    description: "Erleben Sie gemeinsam mit Ihrem Partner eine entspannende Massage. Perfekt als besonderes Geschenk oder für einen romantischen Anlass.",
    benefits: ["Gemeinsames Erlebnis", "Romantische Atmosphäre", "Wählbare Massageart", "Ideal als Geschenk"],
    prices: [
      { duration: "60 Min. (pro Person)", price: 55 },
      { duration: "90 Min. (pro Person)", price: 80 }
    ],
    popular: false,
    note: "Preis pro Person. Buchung für 2 Personen erforderlich."
  }
];

export const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Die beste Thai Massage in München! Frau Herrmann hat goldene Hände. Ich komme seit Jahren regelmäßig und bin immer begeistert.",
    date: "2024"
  },
  {
    name: "Thomas K.",
    rating: 5,
    text: "Nach langer Suche endlich eine authentische Thai Massage gefunden. Professionell, entspannt und sehr effektiv bei meinen Rückenproblemen.",
    date: "2024"
  },
  {
    name: "Julia B.",
    rating: 5,
    text: "Wunderbare Atmosphäre, sehr freundlich und die Massage war einfach himmlisch. Perfekt zum Abschalten vom Alltag!",
    date: "2024"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Habe einen Gutschein verschenkt - kam super an! Die Aromaöl-Massage ist besonders empfehlenswert.",
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
    answer: "Ja, kostenlose Parkplätze sind im Innenhof verfügbar. Alternativ ist das Studio mit der U6 (Kieferngarten) gut erreichbar."
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
    role: "Inhaberin & Therapeutin",
    bio: "Mit über 15 Jahren Erfahrung in traditioneller Thai Massage bringe ich die authentische Kunst der thailändischen Heilmassage nach München. Ausgebildet in Thailand, lege ich großen Wert auf individuelle Behandlung und echte Entspannung.",
    certifications: ["Zertifizierte Thai Massage Therapeutin", "Ausbildung in Thailand", "Aromatherapie Zertifikat"]
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
    description: "Thai Massage, Aromaöl Massage, Hot Stone, Fußreflexzonen & mehr. Entdecken Sie unser Angebot an entspannenden Behandlungen in München."
  },
  prices: {
    title: "Preise | Anchaya Thai Massage München",
    description: "Faire Preise für hochwertige Thai Massagen in München. Ab 35€ für 30 Minuten. Alle Preise und Angebote auf einen Blick."
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
