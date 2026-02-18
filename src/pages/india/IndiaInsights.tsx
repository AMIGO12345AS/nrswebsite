import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const articles = [
  { title: "Cross-Border Compliance: India-GCC Best Practices", date: "Jan 2024", category: "Compliance" },
  { title: "Why Every SME Needs a Virtual CFO", date: "Dec 2023", category: "CFO Services" },
  { title: "Zoho ERP: Transforming Business Operations", date: "Nov 2023", category: "Technology" },
];

export default function IndiaInsights() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">Insights</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight">
              Latest Thinking
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group rounded-xl border border-border bg-card p-8 hover:border-accent/40 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4">{a.category}</span>
              <h3 className="font-heading font-semibold text-lg mb-4 group-hover:text-accent transition-colors">{a.title}</h3>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {a.date}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-12">More insights coming soon.</p>
      </section>
    </>
  );
}
