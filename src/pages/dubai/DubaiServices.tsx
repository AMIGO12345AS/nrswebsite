import { Shield, Building2, FileCheck, Landmark, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Shield, title: "Tax Advisory",
    items: ["UAE Corporate Tax advisory", "VAT registration & return filing", "Transfer Pricing (Local & Master File)", "Representation during tax audits"],
  },
  {
    icon: Building2, title: "Business Setup",
    items: ["Mainland and Free Zone incorporation advisory", "Trade license issuance/renewal", "Corporate structuring"],
  },
  {
    icon: FileCheck, title: "Compliance",
    items: ["Anti-Money Laundering (AML/CFT) framework design", "UBO compliance", "Regulatory reporting"],
  },
  {
    icon: Landmark, title: "Capital & Finance",
    items: ["Bank finance arrangement", "Working capital structuring", "Term loan support"],
  },
];

export default function DubaiServices() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight">
              Structured Advisory for UAE Businesses
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
