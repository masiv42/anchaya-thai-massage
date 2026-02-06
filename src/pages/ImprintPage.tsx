import { Layout } from "@/components/layout/Layout";
import { businessInfo } from "@/data/siteContent";

export default function ImprintPage() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-medium mb-8">Impressum</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              
              <p className="text-muted-foreground">
                {businessInfo.name}<br />
                {businessInfo.owner}<br />
                {businessInfo.street}<br />
                {businessInfo.city}
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Kontakt
              </h2>
              
              <p className="text-muted-foreground">
                Telefon: {businessInfo.phone}<br />
                E-Mail: {businessInfo.email}
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Umsatzsteuer-ID
              </h2>
              
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr. hier eintragen]
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              
              <p className="text-muted-foreground">
                Berufsbezeichnung: Massage-Therapeutin<br />
                Zuständige Kammer: [Kammer eintragen falls zutreffend]<br />
                Verliehen in: Thailand / Deutschland
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Streitschlichtung
              </h2>
              
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung 
                (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" 
                rel="noopener noreferrer" className="text-primary hover:underline">
                https://ec.europa.eu/consumers/odr/</a>
              </p>
              
              <p className="text-muted-foreground">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Haftung für Inhalte
              </h2>
              
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf 
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 
                TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder 
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
                die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <p className="text-muted-foreground">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen 
                nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche 
                Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten 
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
                werden wir diese Inhalte umgehend entfernen.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Haftung für Links
              </h2>
              
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte 
                wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
                keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                Urheberrecht
              </h2>
              
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
