import { Shield, Building2, FileCheck, Landmark, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Shield, title: "Tax Advisory", num: "01",
    desc: "Navigate UAE's evolving tax landscape with precision and confidence.",
    items: ["UAE Corporate Tax advisory", "VAT registration & return filing", "Transfer Pricing (Local & Master File)", "Representation during tax audits"],
  },
  {
    icon: Building2, title: "Business Setup", num: "02",
    desc: "End-to-end incorporation support across mainland and free zones.",
    items: ["Mainland and Free Zone incorporation advisory", "Trade license issuance/renewal", "Corporate structuring"],
  },
  {
    icon: FileCheck, title: "Compliance", num: "03",
    desc: "Stay ahead of regulatory requirements with robust compliance frameworks.",
    items: ["Anti-Money Laundering (AML/CFT) framework design", "UBO compliance", "Regulatory reporting"],
  },
  {
    icon: Landmark, title: "Capital & Finance", num: "04",
    desc: "Strategic financing solutions to fuel your business growth.",
    items: ["Bank finance arrangement", "Working capital structuring", "Term loan support"],
  },
];

export default function DubaiServices() {
  return (
    <>
      {/* Hero header */}
      <section className="relative bg-foreground pt-44 pb-32 overflow-hidden">
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
      <section className="relative py-28 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/40 to-transparent" />

        <div className="container relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl border border-white/[0.06] bg-foreground/50 backdrop-blur-xl p-10 md:p-12 hover:bg-foreground/70 hover:border-accent/20 transition-all duration-[700ms] overflow-hidden ${
                  i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                {/* Ghost number */}
                <div className="absolute -top-8 -right-2 md:-top-12 md:-right-4 text-[160px] md:text-[200px] font-heading font-black text-white/[0.025] group-hover:text-accent/[0.04] transform transition-all duration-[1000ms] ease-out pointer-events-none select-none z-0 tracking-tighter leading-none">
                  {s.num}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <div className="flex items-center justify-between mb-10">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/[0.08] border border-accent/15 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500">
                        <s.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-[11px] font-mono text-white/20 tracking-[0.25em] font-medium">{s.num}</span>
                    </div>

                    <h3 className="text-2xl md:text-[30px] font-heading font-bold mb-3 text-white group-hover:text-accent transition-colors duration-500 tracking-[-0.02em] leading-[1.2]">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-white/45 leading-[1.75] mb-8 max-w-sm font-light">{s.desc}</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/[0.06] group-hover:border-accent/15 transition-colors duration-500">
                    <ul className="space-y-3">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[13px] text-white/50 group-hover:text-white/70 transition-colors duration-500">
                          <span className="h-1 w-1 rounded-full bg-accent/50 mt-[7px] shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="h-4 w-4 text-accent" />
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
