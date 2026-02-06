import { Layout } from "@/components/layout/Layout";
import { businessInfo } from "@/data/siteContent";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-medium mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              
              <h3 className="font-serif text-xl font-medium mt-6 mb-3">
                Allgemeine Hinweise
              </h3>
              
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit 
                Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich 
                identifiziert werden können.
              </p>

              <h3 className="font-serif text-xl font-medium mt-6 mb-3">
                Datenerfassung auf dieser Website
              </h3>
              
              <p className="text-muted-foreground">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <p className="text-muted-foreground">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              
              <p className="text-muted-foreground">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der 
                Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                2. Hosting
              </h2>
              
              <p className="text-muted-foreground">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). 
                Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden 
                auf den Servern des Hosters gespeichert.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-serif text-xl font-medium mt-6 mb-3">
                Datenschutz
              </h3>
              
              <p className="text-muted-foreground">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr 
                ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend 
                der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-serif text-xl font-medium mt-6 mb-3">
                Hinweis zur verantwortlichen Stelle
              </h3>
              
              <p className="text-muted-foreground">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              
              <p className="text-muted-foreground">
                {businessInfo.name}<br />
                {businessInfo.owner}<br />
                {businessInfo.street}<br />
                {businessInfo.city}<br /><br />
                Telefon: {businessInfo.phone}<br />
                E-Mail: {businessInfo.email}
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-serif text-xl font-medium mt-6 mb-3">
                Kontaktformular
              </h3>
              
              <p className="text-muted-foreground">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              
              <p className="text-muted-foreground">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b 
                DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder 
                zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>

              <h3 className="font-serif text-xl font-medium mt-6 mb-3">
                Anfrage per E-Mail, Telefon oder WhatsApp
              </h3>
              
              <p className="text-muted-foreground">
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage 
                inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) 
                zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                5. Google Maps
              </h2>
              
              <p className="text-muted-foreground">
                Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist 
                die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, 
                Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP 
                Adresse zu speichern.
              </p>
              
              <p className="text-muted-foreground">
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der 
                Datenschutzerklärung von Google: 
                <a href="https://policies.google.com/privacy" target="_blank" 
                rel="noopener noreferrer" className="text-primary hover:underline">
                https://policies.google.com/privacy</a>
              </p>

              <h2 className="font-serif text-2xl font-medium mt-8 mb-4">
                6. Ihre Rechte
              </h2>
              
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
                und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
                außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
              
              <p className="text-muted-foreground">
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie 
                diese Einwilligung jederzeit für die Zukunft widerrufen. Hierzu sowie zu 
                weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>

              <p className="text-muted-foreground mt-8 text-sm">
                <em>Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
