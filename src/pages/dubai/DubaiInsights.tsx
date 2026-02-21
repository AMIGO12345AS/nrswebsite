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
            <div className="group flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="w-full md:w-[55%] aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl relative">
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 z-10 pointer-events-none" />
                <img src={insightsFeatured} alt={featured.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
              <div className="w-full md:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">{featured.category}</span>
                  <div className="h-px w-8 bg-border" />
                  <span className="text-[12px] text-muted-foreground tracking-widest uppercase">{featured.reading}</span>
                </div>
                <h2 className="text-3xl md:text-[40px] font-heading font-bold leading-[1.15] tracking-[-0.02em] mb-6 group-hover:text-accent transition-colors duration-500">
                  {featured.title}
                </h2>
                <p className="text-[16px] text-muted-foreground leading-[1.8] mb-10 font-light">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-border/50 pt-6">
                  <span className="text-[13px] text-muted-foreground/60 font-mono tracking-widest uppercase">{featured.date}</span>
                  <span className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors cursor-pointer group-hover:tracking-[0.25em] duration-500">
                    Read Article
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article List */}
      <section className="pb-32 bg-background">
        <div className="container max-w-5xl">
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent hidden md:block" />
            {rest.map((a, i) => (
              <motion.article
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative border-b border-border/50 py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 cursor-pointer hover:bg-accent/[0.02] -mx-4 px-4 md:-mx-8 md:px-8 transition-all duration-700"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top opacity-50 pointer-events-none" />

                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">{a.category}</span>
                    <div className="h-px w-6 bg-border" />
                    <span className="text-[11px] text-muted-foreground tracking-widest uppercase">{a.reading}</span>
                  </div>
                  <h3 className="text-2xl md:text-[28px] font-heading font-bold group-hover:text-accent transition-colors duration-500 tracking-[-0.02em] leading-[1.2]">
                    {a.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground mt-4 max-w-2xl leading-[1.8] font-light hidden md:block">
                    {a.excerpt}
                  </p>
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 shrink-0 relative z-10">
                  <span className="text-[12px] font-mono tracking-widest uppercase text-muted-foreground/40">{a.date}</span>
                  <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mt-2">
                    <ArrowUpRight className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[13px] tracking-widest uppercase text-muted-foreground/30 mt-16 text-center">
            More perspectives publishing soon
          </motion.p>
        </div>
      </section>
    </>
  );
}
