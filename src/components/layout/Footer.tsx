import { Link } from "react-router-dom";
import { Region } from "@/lib/region";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

interface FooterProps {
  region: Region;
}

export default function Footer({ region }: FooterProps) {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                <div className="flex gap-[2px]">
                  <div className="w-[3px] h-5 bg-accent rounded-sm" />
                  <div className="w-[3px] h-7 bg-accent rounded-sm" />
                </div>
                <span className="text-2xl font-heading font-bold tracking-tight text-white ml-1">
                  N<span className="text-accent">R</span>S
                </span>
              </div>
              <span className="text-[10px] font-heading font-medium tracking-[0.2em] text-white/50 uppercase self-end mb-0.5">
                Fynser
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Trusted financial advisory & business solutions since 2017. Over 1,000 clients served globally.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", path: `/${region}/about` },
                { label: "Services", path: `/${region}/services` },
                { label: "Our Team", path: `/${region}/team` },
                { label: "Insights", path: `/${region}/insights` },
                { label: "Careers", path: `/${region}/careers` },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent mb-5">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              {region === "dubai" ? (
                <>
                  <span>Tax Advisory</span>
                  <span>Business Setup</span>
                  <span>Compliance</span>
                  <span>Capital & Finance</span>
                </>
              ) : (
                <>
                  <span>Audit & Assurance</span>
                  <span>CFO Services</span>
                  <span>Technology & ERP</span>
                  <span>Cross-Border Compliance</span>
                </>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-accent mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a href="mailto:info@nrsfysner.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-accent/70" /> info@nrsfysner.com
              </a>
              {region === "dubai" && (
                <>
                  <a href="tel:+97143437233" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="h-4 w-4 text-accent/70" /> +971 4343 72 33
                  </a>
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-accent/70 shrink-0 mt-0.5" />
                    303, Saeed Tower 2, Trade Center 1, Dubai, UAE
                  </p>
                </>
              )}
              {region === "india" && (
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-accent/70 shrink-0 mt-0.5" />
                  India Office (Details coming soon)
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} NRS Fynser. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
