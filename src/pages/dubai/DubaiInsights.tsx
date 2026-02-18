import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import insightsFeatured from "@/assets/insights-featured.jpg";

const articles = [
  {
    title: "Understanding UAE Corporate Tax 2024",
    excerpt: "A comprehensive look at the new corporate tax landscape and what it means for businesses operating in the Emirates.",
    date: "January 2024",
    category: "Tax",
    reading: "8 min read",
    featured: true,
  },
  {
    title: "VAT Compliance Best Practices for SMEs",
    excerpt: "Practical strategies for small and medium enterprises to stay compliant while optimizing their tax position.",
    date: "December 2023",
    category: "Compliance",
    reading: "5 min read",
  },
  {
    title: "Free Zone vs Mainland: What's Right for You?",
    excerpt: "Breaking down the key considerations for business setup in the UAE — costs, licensing, and operational flexibility.",
    date: "November 2023",
    category: "Business Setup",
    reading: "6 min read",
  },
];

export default function DubaiInsights() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative bg-foreground pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.04] blur-[120px] rounded-full" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="text-accent text-[13px] font-medium tracking-[0.15em] uppercase mb-6 block">Perspectives</span>
            <h1 className="text-5xl md:text-[72px] font-heading font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-3xl">
              Insights &<br /><span className="font-medium text-white/50">Analysis</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={insightsFeatured} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-accent">{featured.category}</span>
                  <span className="text-border">—</span>
                  <span className="text-[12px] text-muted-foreground">{featured.reading}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold leading-[1.2] tracking-[-0.01em] mb-4">
                  {featured.title}
                </h2>
                <p className="text-[15px] text-muted-foreground leading-[1.7] mb-8">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-muted-foreground/60">{featured.date}</span>
                  <span className="group inline-flex items-center gap-2 text-[13px] font-semibold text-foreground hover:text-accent transition-colors cursor-pointer">
                    Read Article
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article List */}
      <section className="pb-28 bg-background">
        <div className="container max-w-6xl">
          <div className="border-t border-border">
            {rest.map((a, i) => (
              <motion.article
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group border-b border-border py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-accent/[0.02] px-4 -mx-4 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-accent">{a.category}</span>
                    <span className="text-border">—</span>
                    <span className="text-[12px] text-muted-foreground">{a.reading}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold group-hover:text-accent transition-colors tracking-[-0.01em]">
                    {a.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground mt-2 max-w-xl leading-relaxed hidden md:block">{a.excerpt}</p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-[13px] text-muted-foreground/50">{a.date}</span>
                  <ArrowUpRight className="h-5 w-5 text-border group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[14px] text-muted-foreground/40 mt-12 italic">
            More perspectives publishing soon.
          </motion.p>
        </div>
      </section>
    </>
  );
}
