import { Link } from "react-router-dom";
import { Phone, Calendar, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { services, businessInfo } from "@/data/siteContent";

export default function PricesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-calm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-3">Unsere Preise</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Faire Preise für Ihr Wohlbefinden
            </h1>
            <p className="text-muted-foreground text-lg">
              Übersicht aller Leistungen und Preise. Wir bieten hochwertige 
              Behandlungen zu fairen Konditionen.
            </p>
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card rounded-2xl shadow-card overflow-hidden"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between">
                    <h2 className="font-serif text-xl font-medium pr-2">
                      {service.name}
                    </h2>
                    {service.popular && (
                      <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full flex-shrink-0">
                        Beliebt
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {service.prices.map((price, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center"
                      >
                        <span className="text-muted-foreground text-sm">
                          {price.duration}
                        </span>
                        <span className="font-serif text-xl font-medium text-primary">
                          {price.price} €
                        </span>
                      </div>
                    ))}
                  </div>

                  {service.note && (
                    <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                      {service.note}
                    </p>
                  )}
                </div>

                <div className="px-6 pb-6">
                  <Button className="w-full" variant="outline" asChild>
                    <Link to={`/leistungen#${service.id}`}>Mehr erfahren</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-8">
              Gut zu wissen
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-medium mb-2">Bezahlung</h3>
                <p className="text-sm text-muted-foreground">
                  Barzahlung vor Ort. Alle Preise verstehen sich inkl. MwSt.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-medium mb-2">Paarmassage</h3>
                <p className="text-sm text-muted-foreground">
                  Bei Paarmassagen gilt der reguläre Preis pro Person. 
                  Buchung für 2 Personen erforderlich.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-medium mb-2">Stornierung</h3>
                <p className="text-sm text-muted-foreground">
                  Bitte sagen Sie Termine mindestens 24 Stunden vorher ab.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-medium mb-2">Gutscheine</h3>
                <p className="text-sm text-muted-foreground">
                  Gutscheine sind 3 Jahre gültig und für alle Leistungen einlösbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="font-serif text-2xl font-medium mb-3">
                Termin vereinbaren
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Buchen Sie jetzt Ihre wohltuende Massage.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/kontakt">Termin anfragen</Link>
              </Button>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-2xl font-medium mb-3">
                Gutschein verschenken
              </h3>
              <p className="text-muted-foreground mb-6">
                Das perfekte Geschenk für Ihre Liebsten.
              </p>
              <Button size="lg" asChild>
                <Link to="/gutscheine">Gutschein bestellen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
