import { Link } from "react-router-dom";
import { Region } from "@/lib/region";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

interface FooterProps {
  region: Region;
}

export default function Footer({ region }: FooterProps) {
  const other = region === "india" ? "dubai" : "india";

  return (
    <footer className="bg-foreground text-white/80">
      {/* Top CTA strip */}
      <div className="border-b border-white/[0.06]">
        <div className="container py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2">
              Let's work together
            </h3>
            <p className="text-white/40 text-sm">Ready to navigate your next challenge? We'd love to hear from you.</p>
          </div>
          <Link
            to={`/${region}/contact`}
            className="group inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-xl font-heading font-bold text-white">NRS</span>
              <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase text-white/30">& Associates</span>
            </div>
            <p className="text-[13px] text-white/35 leading-relaxed max-w-[240px]">
              Trusted financial advisory & business solutions since 2017.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25 mb-5">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About", path: `/${region}/about` },
                { label: "Services", path: `/${region}/services` },
                { label: "Team", path: `/${region}/team` },
                { label: "Insights", path: `/${region}/insights` },
                { label: "Careers", path: `/${region}/careers` },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-1 text-[13px] text-white/40 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Region */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25 mb-5">Offices</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/india" className={`text-[13px] transition-colors w-fit ${region === 'india' ? 'text-accent' : 'text-white/40 hover:text-white'}`}>
                🇮🇳 India
              </Link>
              <Link to="/dubai" className={`text-[13px] transition-colors w-fit ${region === 'dubai' ? 'text-accent' : 'text-white/40 hover:text-white'}`}>
                🇦🇪 Dubai
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/25 mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-[13px] text-white/40">
              <a href="mailto:info@nrsfysner.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5" /> info@nrsfysner.com
              </a>
              {region === "dubai" && (
                <>
                  <a href="tel:+97143437233" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="h-3.5 w-3.5" /> +971 4343 72 33
                  </a>
                  <p className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                    Dubai, UAE
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} NRS & Associates. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] text-white/20">
            <span className="hover:text-white/40 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white/40 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
