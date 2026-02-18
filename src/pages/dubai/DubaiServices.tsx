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

        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-[1px] bg-border/40 rounded-3xl overflow-hidden shadow-2xl shadow-black/[0.03]">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative bg-card p-10 md:p-14 hover:bg-accent/[0.02] transition-all duration-700 overflow-hidden"
              >
                {/* Animated top accent line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700" />

                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.07] border border-accent/10 group-hover:bg-accent/[0.12] transition-colors duration-500">
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground/30 tracking-[0.3em]">{s.num}</span>
                </div>

                <h3 className="text-xl md:text-[24px] font-heading font-semibold mb-3 group-hover:text-accent transition-colors duration-500 tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-[13px] text-muted-foreground/60 leading-relaxed mb-8">{s.desc}</p>

                <ul className="space-y-3 mb-8">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/50 mt-[7px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <ArrowUpRight className="h-5 w-5 text-border group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
