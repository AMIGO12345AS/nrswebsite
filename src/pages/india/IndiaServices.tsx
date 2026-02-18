import { ClipboardCheck, LineChart, Monitor, Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: ClipboardCheck, title: "Audit & Assurance", num: "01",
    items: ["Statutory financial audits", "Internal audit", "Risk assessment"],
  },
  {
    icon: LineChart, title: "CFO Services", num: "02",
    items: ["Virtual CFO support", "Budgeting and forecasting", "Financial analysis"],
  },
  {
    icon: Monitor, title: "Technology & ERP", num: "03",
    items: ["Zoho ERP implementation", "Accounting module setup", "Workflow automation"],
  },
  {
    icon: Globe, title: "Cross-Border Compliance", num: "04",
    items: ["Managing financial transactions between India and GCC", "Cross-border compliance management"],
  },
];

export default function IndiaServices() {
  return (
    <>
      <section className="bg-foreground pt-36 pb-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight tracking-[-0.02em]">
              Financial Expertise Meets Technology
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-border bg-card p-10 hover:shadow-lg hover:border-accent/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-[12px] font-mono text-muted-foreground/40">{s.num}</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-5">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                    <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
