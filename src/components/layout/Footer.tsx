import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* CTA */}
      <div className="container py-24 border-b border-white/[0.06]">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-[56px] font-heading font-bold leading-[1.1] tracking-[-0.02em] mb-6">
            Let's build something<br /><span className="font-medium text-white/35">together.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 text-[15px] font-semibold text-accent transition-colors hover:text-accent/80">

            Start a conversation
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="container py-16">
        <div className="grid gap-10 md:gap-12 grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-1.5 mb-5">
              <span className="text-2xl font-heading font-bold text-white">NRS</span>
              <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase text-white/25">& Associates</span>
            </div>
            <p className="text-[14px] text-white/30 leading-[1.7] max-w-[280px]">
              Trusted financial advisory & business solutions across India since 2017.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              { ["About", "Services", "Team", "Insights", "Careers"].map((label) =>
              <Link
                key={label}
                to={`/${label.toLowerCase()}`}
                className="text-[14px] text-white/35 hover:text-white transition-colors w-fit">

                  {label}
                </Link>
              )}
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-6">Office</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-[14px] transition-colors w-fit text-accent">
                India
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-[14px] text-white/35">
              <a href="mailto:info@nrsassociates.in" className="hover:text-white transition-colors">info@nrsassociates.in</a>
              <a href="tel:+912212345678" className="hover:text-white transition-colors">+91 22 1234 5678</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container pb-8">
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="text-[12px] text-white/15 text-center sm:text-left">
            © {new Date().getFullYear()} NRS & Associates
          </p>
          <div className="flex items-center gap-8 text-[12px] text-white/15">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>);

}