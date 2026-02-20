import { Shield, Building2, FileCheck, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      <section className="relative bg-foreground pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,hsl(var(--accent)/0.08),transparent_70%)]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-[11px] font-semibold tracking-[0.3em] uppercase">Services</span>
            </div>
            <h1 className="text-4xl md:text-[56px] font-heading font-bold text-white max-w-2xl leading-[1.1] tracking-[-0.02em] mb-5">
              Structured Advisory for UAE Businesses
            </h1>
            <p className="text-[15px] text-white/40 max-w-lg leading-relaxed font-light">
              Comprehensive solutions designed to navigate the complexities of UAE's regulatory and business landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/40 to-transparent" />

        <div className="container relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-[2.5rem] border border-white/[0.04] bg-foreground/40 backdrop-blur-2xl p-10 md:p-14 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-[800ms] overflow-hidden ${i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
                  }`}
              >
                {/* Massive Structural Numbering */}
                <div className="absolute -top-10 -right-4 md:-top-16 md:-right-8 text-[180px] md:text-[240px] font-heading font-black text-white/[0.02] group-hover:text-accent/[0.04] transform group-hover:scale-105 transition-all duration-[1000ms] ease-out pointer-events-none select-none z-0 tracking-tighter leading-none">
                  {s.num}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-12">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/[0.05] border border-accent/10 group-hover:bg-accent/20 transition-colors duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                        <s.icon className="h-6 w-6 text-accent transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-[12px] font-mono text-muted-foreground/40 tracking-[0.2em] font-medium block md:hidden">{s.num}</span>
                    </div>

                    <h3 className="text-2xl md:text-[32px] font-heading font-semibold mb-4 text-white group-hover:text-accent group-hover:tracking-wide transition-all duration-[800ms] tracking-[-0.01em] leading-[1.2]">
                      {s.title}
                    </h3>
                    <p className="text-[15px] text-white/50 leading-[1.8] mb-10 max-w-sm font-light">{s.desc}</p>
                  </div>

                  <div className="relative mt-auto">
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0 scale-y-0 group-hover:scale-y-100 transition-transform duration-[800ms] origin-top ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    <ul className="space-y-4 pl-5">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-4 text-[14px] text-white/60 group-hover:text-white/80 transition-colors duration-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent/40 mt-[7px] shrink-0 transform group-hover:scale-150 transition-transform duration-500" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 overflow-hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <ArrowUpRight className="h-5 w-5 text-accent transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
