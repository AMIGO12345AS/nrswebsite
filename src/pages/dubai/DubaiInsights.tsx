import { Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const articles = [
  { title: "Understanding UAE Corporate Tax 2024", date: "Jan 2024", category: "Tax" },
  { title: "VAT Compliance Best Practices for SMEs", date: "Dec 2023", category: "Compliance" },
  { title: "Free Zone vs Mainland: What's Right for You?", date: "Nov 2023", category: "Business Setup" },
];

export default function DubaiInsights() {
  return (
    <>
      <section className="bg-foreground pt-36 pb-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight tracking-[-0.02em]">
              Latest Thinking
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 cursor-pointer"
            >
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent mb-5">{a.category}</span>
              <h3 className="font-heading font-semibold text-[17px] mb-4 group-hover:text-accent transition-colors leading-snug">{a.title}</h3>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {a.date}
                </p>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-accent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[13px] text-muted-foreground mt-14">More insights coming soon.</p>
      </section>
    </>
  );
}
