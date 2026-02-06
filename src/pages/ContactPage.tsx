import { Phone, Mail, MapPin, Clock, MessageCircle, Car, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/sections/ContactForm";
import { businessInfo } from "@/data/siteContent";

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-calm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-3">Kontakt</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Termin vereinbaren
            </h1>
            <p className="text-muted-foreground text-lg">
              Wir freuen uns auf Ihre Nachricht. Füllen Sie das Formular aus 
              oder kontaktieren Sie uns direkt – wir melden uns schnellstmöglich.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-card p-8 sticky top-32">
                <h2 className="font-serif text-2xl font-medium mb-6">
                  Kontaktdaten
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Telefon
                    </h3>
                    <a
                      href={businessInfo.phoneLink}
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      WhatsApp
                    </h3>
                    <a
                      href={businessInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {businessInfo.whatsapp}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <Mail className="w-5 h-5 text-primary" />
                      E-Mail
                    </h3>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors block break-all"
                    >
                      {businessInfo.email}
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Adresse
                    </h3>
                    <address className="text-muted-foreground not-italic">
                      {businessInfo.street}
                      <br />
                      {businessInfo.city}
                    </address>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Öffnungszeiten
                    </h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Mo – Fr: {businessInfo.openingHours.weekdays}</p>
                      <p>Sa: {businessInfo.openingHours.saturday}</p>
                      <p>So: {businessInfo.openingHours.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button className="w-full" variant="outline" asChild>
                    <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp öffnen
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h2 className="font-serif text-2xl font-medium mb-2">
                  Nachricht senden
                </h2>
                <p className="text-muted-foreground mb-8">
                  Teilen Sie uns Ihren Wunschtermin und die gewünschte Massage mit. 
                  Wir bestätigen Ihren Termin schnellstmöglich.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="font-serif text-3xl font-medium text-center mb-12">
            So finden Sie uns
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
              <iframe
                src={businessInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Anchaya Thai Massage"
              />
            </div>

            {/* Directions */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-medium flex items-center gap-2 mb-4">
                  <Train className="w-5 h-5 text-primary" />
                  Mit öffentlichen Verkehrsmitteln
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {businessInfo.publicTransport.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-medium flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-primary" />
                  Mit dem Auto
                </h3>
                <p className="text-muted-foreground">
                  {businessInfo.parking}
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-medium mb-4">Hinweis</h3>
                <p className="text-muted-foreground text-sm">
                  Unser Studio befindet sich im Innenhof. Bitte klingeln Sie 
                  bei "Herrmann" oder rufen Sie kurz vorher an, falls Sie 
                  den Eingang nicht finden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
