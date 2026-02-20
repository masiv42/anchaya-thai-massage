import { Link } from "react-router-dom";
import { Phone, Calendar, Star, Shield, Clock, Award, Leaf, Heart, Sparkles, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { FAQSection } from "@/components/sections/FAQSection";
import { businessInfo, services, whyChooseUs } from "@/data/siteContent";
import heroImage from "@/assets/hero-studio.jpg";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  spa: <Sparkles className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
};

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Anchaya Thai Massage Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spa-charcoal/80 via-spa-charcoal/50 to-transparent" />
        </div>

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-2xl">
            {/* Thai greeting */}
            <p className="text-accent font-serif text-2xl mb-4 animate-fade-up">
              สวัสดีค่ะ
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-spa-cream leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Traditionelle Thai Massage in München
            </h1>

            <p className="text-spa-cream/80 text-lg md:text-xl leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Gönnen Sie sich eine Auszeit vom Alltag. Erleben Sie authentische 
              thailändische Massagekunst für tiefe Entspannung und neues Wohlbefinden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" asChild className="text-base">
                <Link to="/kontakt">
                  <Calendar className="w-5 h-5 mr-2" />
                  Termin anfragen
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-spa-cream/30 text-spa-cream hover:bg-spa-cream/10 hover:text-spa-cream">
                <a href={businessInfo.phoneLink}>
                  <Phone className="w-5 h-5 mr-2" />
                  {businessInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-spa-cream/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-spa-cream/50" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-primary-foreground">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 fill-accent text-accent" />
              <div>
                <span className="font-semibold">{businessInfo.googleRating}</span>
                <span className="text-primary-foreground/70 ml-1">
                  ({businessInfo.googleReviews} Bewertungen)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6" />
              <span>{businessInfo.yearsExperience}+ Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span>Zertifizierte Therapeutin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-gradient-calm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-medium mb-3">Unsere Leistungen</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Massagen für Ihr Wohlbefinden
            </h2>
            <p className="text-muted-foreground">
              Entdecken Sie unser Angebot an traditionellen Thai Massagen und 
              verwöhnenden Behandlungen für Körper und Seele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/leistungen">
                Alle Leistungen ansehen
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium mb-3">Warum Anchaya?</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Ihre Oase der Entspannung in München
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Bei Anchaya Thai Massage verbinden wir authentische thailändische 
                Massagekunst mit einem modernen, ruhigen Ambiente. Unsere Therapeutin 
                wurde in Thailand ausgebildet und bringt über {businessInfo.yearsExperience} Jahre 
                Erfahrung mit, um Ihnen die bestmögliche Behandlung zu bieten.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-secondary rounded-2xl p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                  <h3 className="font-serif text-2xl font-medium">Öffnungszeiten</h3>
                </div>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Montag – Freitag</dt>
                    <dd className="font-medium">{businessInfo.openingHours.weekdays}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Samstag</dt>
                    <dd className="font-medium">{businessInfo.openingHours.saturday}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Sonntag</dt>
                    <dd className="font-medium">{businessInfo.openingHours.sunday}</dd>
                  </div>
                </dl>
                <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                  {businessInfo.openingHours.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-medium mb-3">Kundenstimmen</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Das sagen unsere Gäste
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Gift Voucher CTA */}
      <section className="py-20 lg:py-28 bg-gradient-hero text-spa-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-3">Geschenkidee</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Verschenken Sie Entspannung
            </h2>
            <p className="text-spa-cream/80 leading-relaxed mb-8 max-w-xl mx-auto">
              Überraschen Sie Ihre Liebsten mit einem Gutschein für eine wohltuende 
              Thai Massage. Das perfekte Geschenk für jeden Anlass.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link to="/gutscheine">
                Gutschein bestellen
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-accent font-medium mb-3">Anfahrt</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Besuchen Sie uns
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      {businessInfo.street}<br />
                      {businessInfo.city}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <a href={businessInfo.phoneLink} className="text-muted-foreground hover:text-primary transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Öffentliche Verkehrsmittel</h3>
                  <ul className="text-muted-foreground space-y-1">
                    {businessInfo.publicTransport.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Parken</h3>
                  <p className="text-muted-foreground">{businessInfo.parking}</p>
                </div>
              </div>

              <Button size="lg" className="mt-8" asChild>
                <Link to="/kontakt">
                  <Calendar className="w-5 h-5 mr-2" />
                  Jetzt Termin anfragen
                </Link>
              </Button>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-auto">
              <iframe
                src={businessInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Anchaya Thai Massage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent font-medium mb-3">Häufige Fragen</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Haben Sie Fragen?
              </h2>
            </div>

            <FAQSection />

            <p className="text-center text-muted-foreground mt-10">
              Weitere Fragen? <Link to="/kontakt" className="text-primary hover:underline">Kontaktieren Sie uns</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
