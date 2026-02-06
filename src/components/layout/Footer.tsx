import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { businessInfo } from "@/data/siteContent";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spa-charcoal text-spa-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl">A</span>
              </div>
              <div>
                <span className="font-serif text-xl font-medium">Anchaya</span>
                <span className="block text-xs tracking-wider uppercase text-spa-cream/60">
                  Thai Massage
                </span>
              </div>
            </div>
            <p className="text-spa-cream/70 text-sm leading-relaxed mb-6">
              Traditionelle Thai Massage in München. Entspannung für Körper und Seele 
              mit authentischen thailändischen Techniken.
            </p>
            <div className="flex gap-4">
              <a
                href={businessInfo.social.facebook}
                className="w-10 h-10 rounded-full bg-spa-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.social.instagram}
                className="w-10 h-10 rounded-full bg-spa-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/preise", label: "Preise" },
                { href: "/gutscheine", label: "Gutscheine" },
                { href: "/ueber-uns", label: "Über Uns" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-spa-cream/70 hover:text-spa-cream transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={businessInfo.phoneLink}
                  className="flex items-start gap-3 text-spa-cream/70 hover:text-spa-cream transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{businessInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-start gap-3 text-spa-cream/70 hover:text-spa-cream transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{businessInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-spa-cream/70 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  {businessInfo.street}
                  <br />
                  {businessInfo.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Öffnungszeiten</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-spa-cream/70 text-sm">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-spa-cream">Mo – Fr</p>
                  <p>{businessInfo.openingHours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-spa-cream/70 text-sm">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-0" />
                <div>
                  <p className="font-medium text-spa-cream">Samstag</p>
                  <p>{businessInfo.openingHours.saturday}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-spa-cream/70 text-sm">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-0" />
                <div>
                  <p className="font-medium text-spa-cream">Sonntag</p>
                  <p>{businessInfo.openingHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-spa-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-spa-cream/60">
            <p>© {currentYear} {businessInfo.name}. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link to="/impressum" className="hover:text-spa-cream transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-spa-cream transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
