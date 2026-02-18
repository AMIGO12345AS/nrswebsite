import { Link } from "react-router-dom";
import { Region } from "@/lib/region";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  region: Region;
}

export default function Footer({ region }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-3">
              NRS <span className="text-accent">Fynser</span>
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Trusted financial advisory & business solutions since 2017. Over 1,000 clients served globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-accent">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <Link to={`/${region}/about`} className="hover:text-accent transition-colors">About Us</Link>
              <Link to={`/${region}/services`} className="hover:text-accent transition-colors">Services</Link>
              <Link to={`/${region}/team`} className="hover:text-accent transition-colors">Our Team</Link>
              <Link to={`/${region}/contact`} className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-accent">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="mailto:info@nrsfysner.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> info@nrsfysner.com
              </a>
              {region === "dubai" && (
                <>
                  <a href="tel:+97143437233" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Phone className="h-4 w-4" /> +971 4343 72 33
                  </a>
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    303, Saeed Tower 2, Trade Center 1, Dubai, UAE
                  </p>
                </>
              )}
              {region === "india" && (
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  India Office (Details coming soon)
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} NRS Fynser. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
