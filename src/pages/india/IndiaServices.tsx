import { ClipboardCheck, LineChart, Monitor, Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: ClipboardCheck, title: "Audit & Assurance",
    items: ["Statutory financial audits", "Internal audit", "Risk assessment"],
  },
  {
    icon: LineChart, title: "CFO Services",
    items: ["Virtual CFO support", "Budgeting and forecasting", "Financial analysis"],
  },
  {
    icon: Monitor, title: "Technology & ERP",
    items: ["Zoho ERP implementation", "Accounting module setup", "Workflow automation"],
  },
  {
    icon: Globe, title: "Cross-Border Compliance",
    items: ["Managing financial transactions between India and GCC", "Cross-border compliance management"],
  },
];

export default function IndiaServices() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight">
              Financial Expertise Meets Technology
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group rounded-xl border border-border bg-card p-8 hover:border-accent/40 hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-5">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
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
