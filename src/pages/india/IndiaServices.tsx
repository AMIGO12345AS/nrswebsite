import { ClipboardCheck, LineChart, Monitor, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck, title: "Audit & Assurance", num: "01",
    desc: "Independent assurance services that strengthen stakeholder confidence.",
    items: ["Statutory financial audits", "Internal audit", "Risk assessment"],
  },
  {
    icon: LineChart, title: "CFO Services", num: "02",
    desc: "Strategic financial leadership without the full-time overhead.",
    items: ["Virtual CFO support", "Budgeting and forecasting", "Financial analysis"],
  },
  {
    icon: Monitor, title: "Technology & ERP", num: "03",
    desc: "Modernize operations with intelligent automation and ERP systems.",
    items: ["Zoho ERP implementation", "Accounting module setup", "Workflow automation"],
  },
  {
    icon: Globe, title: "Cross-Border Compliance", num: "04",
    desc: "Seamless financial management across India and GCC jurisdictions.",
    items: ["Managing financial transactions between India and GCC", "Cross-border compliance management"],
  },
];

export default function IndiaServices() {
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
              Financial Expertise Meets Technology
            </h1>
            <p className="text-[15px] text-white/40 max-w-lg leading-relaxed font-light">
              Integrating deep domain knowledge with modern tools to deliver precise, technology-enabled financial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/40 to-transparent" />

        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-3xl border border-white/[0.05] bg-card/40 backdrop-blur-xl p-10 md:p-14 hover:bg-white/[0.02] hover:border-white/[0.1] transition-all duration-[800ms] overflow-hidden ${i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
                  }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.07] border border-accent/10 group-hover:bg-accent/[0.12] transition-colors duration-500">
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground/30 tracking-[0.3em]">{s.num}</span>
                </div>

                <h3 className="text-xl md:text-[24px] font-heading font-semibold mb-3 group-hover:text-accent group-hover:tracking-wide transition-all duration-700 tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-[13px] text-muted-foreground/60 leading-relaxed mb-8 max-w-sm">{s.desc}</p>

                <ul className="space-y-3 mb-4">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/50 mt-[7px] shrink-0 transform group-hover:scale-125 transition-transform duration-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <ArrowUpRight className="absolute bottom-10 right-10 h-6 w-6 text-border opacity-0 group-hover:opacity-100 group-hover:text-accent transform translate-y-4 -translate-x-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
