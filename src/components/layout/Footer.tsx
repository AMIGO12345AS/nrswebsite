import { Link } from "react-router-dom";
import { Region } from "@/lib/region";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  region: Region;
}

export default function Footer({ region }: FooterProps) {
  return (
    <footer className="bg-foreground text-white">
      {/* CTA */}
      <div className="container py-24 border-b border-white/[0.06]">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-[56px] font-heading font-bold leading-[1.1] tracking-[-0.02em] mb-6">
            Let's build something<br /><span className="font-medium text-white/35">together.</span>
          </h2>
          <Link
            to={`/${region}/contact`}
            className="group inline-flex items-center gap-2.5 text-[15px] font-semibold transition-colors text-[#49b64c]">

            Start a conversation
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-5">
              <span className="text-2xl font-heading font-bold text-white">NRS</span>
              <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase text-white/25">& Associates</span>
            </div>
            <p className="text-[14px] text-white/30 leading-[1.7] max-w-[280px]">
              Trusted financial advisory & business solutions across India and the UAE since 2017.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Team", "Insights", "Careers"].map((label) =>
              <Link
                key={label}
                to={`/${region}/${label.toLowerCase()}`}
                className="text-[14px] text-white/35 hover:text-white transition-colors w-fit">

                  {label}
                </Link>
              )}
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-6">Offices</h4>
            <div className="flex flex-col gap-3">
              <Link to="/india" className={`text-[14px] transition-colors w-fit ${region === 'india' ? 'text-accent' : 'text-white/35 hover:text-white'}`}>
                India
              </Link>
              <Link to="/dubai" className={`text-[14px] transition-colors w-fit ${region === 'dubai' ? 'text-accent' : 'text-white/35 hover:text-white'}`}>
                Dubai, UAE
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-[14px] text-white/35">
              <a href="mailto:info@nrsfysner.com" className="hover:text-white transition-colors">info@nrsfysner.com</a>
              {region === "dubai" &&
              <a href="tel:+97143437233" className="hover:text-white transition-colors">+971 4343 72 33</a>
              }
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container pb-8">
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/15">
            © {new Date().getFullYear()} NRS & Associates
          </p>
          <div className="flex gap-8 text-[12px] text-white/15">
            <span className="hover:text-white/30 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white/30 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>);

}