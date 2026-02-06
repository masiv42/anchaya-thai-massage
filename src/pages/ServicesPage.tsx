import { Link } from "react-router-dom";
import { Check, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { services, businessInfo } from "@/data/siteContent";

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-calm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-3">Unsere Leistungen</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Massagen für Ihr Wohlbefinden
            </h1>
            <p className="text-muted-foreground text-lg">
              Entdecken Sie unser vielfältiges Angebot an traditionellen Thai Massagen 
              und verwöhnenden Behandlungen. Jede Massage wird individuell auf Ihre 
              Bedürfnisse abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="font-serif text-2xl md:text-3xl font-medium">
                        {service.name}
                      </h2>
                      {service.popular && (
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          Beliebt
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="font-medium mb-3">Vorteile</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.note && (
                      <p className="text-sm text-muted-foreground italic mb-6">
                        {service.note}
                      </p>
                    )}

                    <Button asChild>
                      <Link to="/kontakt">
                        <Calendar className="w-4 h-4 mr-2" />
                        Termin anfragen
                      </Link>
                    </Button>
                  </div>

                  {/* Price Card */}
                  <div className={`bg-card rounded-2xl shadow-card p-6 lg:p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <h3 className="font-serif text-xl font-medium mb-6">Preise</h3>
                    <div className="space-y-4">
                      {service.prices.map((price, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-3 border-b border-border last:border-0"
                        >
                          <span className="text-muted-foreground">{price.duration}</span>
                          <span className="font-serif text-2xl font-medium text-primary">
                            {price.price} €
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Alle Preise inkl. MwSt. Barzahlung vor Ort.
                      </p>
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                Bereit für Ihre Auszeit?
              </h2>
              <p className="text-primary-foreground/80">
                Vereinbaren Sie jetzt Ihren Termin für eine wohltuende Massage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/kontakt">Termin anfragen</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10">
                <a href={businessInfo.phoneLink}>
                  <Phone className="w-4 h-4 mr-2" />
                  Anrufen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
