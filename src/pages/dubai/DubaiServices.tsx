import { Shield, Building2, FileCheck, Landmark, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "@/lib/animations";
import serviceTax from "@/assets/service-tax.jpg";
import serviceBusinessSetup from "@/assets/service-business-setup.jpg";
import serviceCompliance from "@/assets/service-compliance.jpg";
import serviceCapital from "@/assets/service-capital.jpg";

const services = [
  {
    icon: Shield, title: "Tax Advisory", num: "01",
    desc: "Navigate UAE's evolving tax landscape with precision and confidence.",
    items: ["UAE Corporate Tax advisory", "VAT registration & return filing", "Transfer Pricing (Local & Master File)", "Representation during tax audits"],
    image: serviceTax,
  },
  {
    icon: Building2, title: "Business Setup", num: "02",
    desc: "End-to-end incorporation support across mainland and free zones.",
    items: ["Mainland and Free Zone incorporation advisory", "Trade license issuance/renewal", "Corporate structuring"],
    image: serviceBusinessSetup,
  },
  {
    icon: FileCheck, title: "Compliance", num: "03",
    desc: "Stay ahead of regulatory requirements with robust compliance frameworks.",
    items: ["Anti-Money Laundering (AML/CFT) framework design", "UBO compliance", "Regulatory reporting"],
    image: serviceCompliance,
  },
  {
    icon: Landmark, title: "Capital & Finance", num: "04",
    desc: "Strategic financing solutions to fuel your business growth.",
    items: ["Bank finance arrangement", "Working capital structuring", "Term loan support"],
    image: serviceCapital,
  },
];

export default function DubaiServices() {
  return (
    <>
      {/* Hero header */}
      <section className="relative bg-foreground pt-32 md:pt-44 pb-16 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,hsl(var(--accent)/0.08),transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase">Services</span>
            </div>
            <h1 className="text-5xl md:text-[68px] font-heading font-bold text-white max-w-3xl leading-[1.05] tracking-[-0.02em] mb-6">
              Structured Advisory<br />for UAE Businesses
            </h1>
            <p className="text-[16px] text-white/40 max-w-lg leading-relaxed font-light">
              Comprehensive solutions designed to navigate the complexities of UAE's regulatory and business landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-12 md:py-28 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl overflow-hidden ${
                  i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                />

                {/* Dark overlay — lifts on hover to reveal image more */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-700" />

                {/* Accent tint overlay on hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-700 mix-blend-overlay" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-12 min-h-[300px] md:min-h-[380px]">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-accent/30 group-hover:border-accent/40 transition-all duration-500">
                      <s.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-[11px] font-mono text-white/40 tracking-[0.25em] font-medium">{s.num}</span>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3 className="text-2xl md:text-[30px] font-heading font-bold mb-3 text-white tracking-[-0.02em] leading-[1.2]">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-white/60 leading-[1.75] mb-6 max-w-sm font-light group-hover:text-white/80 transition-colors duration-500">{s.desc}</p>

                    <div className="pt-5 border-t border-white/[0.12] group-hover:border-white/20 transition-colors duration-500">
                      <ul className="space-y-2.5">
                        {s.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-[13px] text-white/50 group-hover:text-white/70 transition-colors duration-500">
                            <span className="h-1 w-1 rounded-full bg-accent mt-[6px] shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-10 right-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/0 border border-white/0 opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-24 bg-foreground relative overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,hsl(var(--accent)/0.04),transparent)]" />
        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent/60" />
                <span className="text-accent text-[11px] font-semibold tracking-[0.25em] uppercase">Start Today</span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-heading font-bold text-white leading-[1.1] tracking-[-0.02em]">
                Ready to get expert<br />advisory support?
              </h2>
            </div>
            <div className="shrink-0">
              <Link
                to="/dubai/contact"
                className="group inline-flex items-center gap-2.5 bg-accent text-white px-7 py-4 rounded-full text-[14px] font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
