import { Link } from "react-router-dom";
import { Award, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { teamMembers, businessInfo } from "@/data/siteContent";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-calm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-3">Über Uns</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Willkommen bei Anchaya Thai Massage
            </h1>
            <p className="text-muted-foreground text-lg">
              Erfahren Sie mehr über unsere Philosophie und das Team hinter 
              Anchaya Thai Massage in München.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="font-serif text-3xl font-medium text-center mb-8">
                Unsere Geschichte
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Der Name "Anchaya" kommt aus dem Thailändischen und bedeutet 
                "die Beständige" – ein Name, der unsere Philosophie perfekt 
                widerspiegelt: Beständig in der Qualität, beständig im Einsatz 
                für Ihr Wohlbefinden.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Seit über {businessInfo.yearsExperience} Jahren bringen wir die authentische Kunst der 
                thailändischen Massage nach München. Was in Thailand begann – 
                die tiefe Verbundenheit zur traditionellen Heilkunst – lebt in 
                jedem Handgriff weiter, den wir in unserem Studio praktizieren.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Wir glauben daran, dass wahre Entspannung mehr ist als nur 
                körperliche Erholung. Es geht darum, einen Moment der Ruhe zu 
                finden, den Alltag loszulassen und mit neuer Energie in den 
                Tag zurückzukehren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="font-serif text-3xl font-medium text-center mb-12">
            Unsere Werte
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Mit Herz & Hingabe
              </h3>
              <p className="text-muted-foreground text-sm">
                Jede Behandlung ist für uns mehr als nur Arbeit – 
                es ist unsere Berufung, Menschen Entspannung zu schenken.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Authentische Tradition
              </h3>
              <p className="text-muted-foreground text-sm">
                Wir praktizieren echte thailändische Massagetechniken, 
                erlernt und perfektioniert in Thailand selbst.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Individuelle Betreuung
              </h3>
              <p className="text-muted-foreground text-sm">
                Keine Massage gleicht der anderen – wir passen jede 
                Behandlung an Ihre persönlichen Bedürfnisse an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="font-serif text-3xl font-medium text-center mb-12">
            Unser Team
          </h2>

          <div className="max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl shadow-card overflow-hidden">
                <div className="grid md:grid-cols-3">
                  {/* Photo placeholder */}
                  <div className="bg-gradient-hero aspect-square md:aspect-auto flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-spa-cream/20 flex items-center justify-center">
                      <span className="font-serif text-5xl text-spa-cream">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-2 p-8">
                    <h3 className="font-serif text-2xl font-medium mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div>
                      <h4 className="font-medium mb-3">Qualifikationen</h4>
                      <ul className="space-y-2">
                        {member.certifications.map((cert, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award className="w-4 h-4 text-primary flex-shrink-0" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-medium mb-4">
            Bereit für Ihre Auszeit?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Erleben Sie selbst, warum unsere Gäste immer wieder zurückkommen.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/kontakt">Termin anfragen</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
