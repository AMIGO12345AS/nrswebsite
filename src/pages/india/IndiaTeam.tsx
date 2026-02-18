import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import teamHero from "@/assets/team-hero.jpg";
import teamNizar from "@/assets/team-nizar.jpg";

export default function IndiaTeam() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-foreground">
        <img src={teamHero} alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover object-center" />
        <motion.div style={{ opacity: cinematicOpacity }} className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 90%, hsl(var(--accent) / 0.12), transparent)" }} />
        <div className="relative z-10 container pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Leadership</span>
            </div>
            <h1 className="text-5xl md:text-[64px] font-heading font-bold text-white max-w-2xl leading-[1.1] tracking-[-0.02em]">
              The People Behind<br />NRS & Associates
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container max-w-lg mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">India Leadership</span>
              <div className="h-px w-10 bg-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-accent/20 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={teamNizar}
                alt="CA Muhammed Nizar E"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="font-heading font-semibold text-xl">{`CA Muhammed Nizar E`}</h3>
              <p className="text-[13px] text-accent font-medium mb-4">Partner</p>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                Co-Founder of NRS & Associates, overseeing the firm's Indian operations. He practices with expertise in cross-border financial transactions and plays a key role in strategic growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
