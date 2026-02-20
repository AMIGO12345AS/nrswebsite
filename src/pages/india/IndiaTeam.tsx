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
        <div className="container max-w-6xl mx-auto">
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
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20"
          >
            {/* Image Side */}
            <div className="w-full md:w-5/12 relative group rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 z-10" />
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={teamNizar}
                  alt="CA Muhammed Nizar E"
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
            </div>

            {/* Typography Side */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-[12px] font-semibold tracking-[0.2em] uppercase">Partner</span>
              </div>
              <h3 className="text-4xl md:text-[56px] font-heading font-bold tracking-[-0.02em] leading-[1.1] text-foreground mb-6">
                CA Muhammed Nizar E
              </h3>

              <div className="space-y-6 text-[17px] leading-[1.8] text-muted-foreground font-light max-w-xl">
                <p className="text-[19px] leading-[1.8] text-foreground/80 font-light mb-8">
                  Co-Founder of NRS & Associates, overseeing the firm's Indian operations. He practices with expertise in cross-border financial transactions and plays a key role in strategic growth.
                </p>
                <p>
                  With a commitment to excellence and a deep understanding of complex regulatory environments across multiple jurisdictions, CA Muhammed Nizar E ensures that every client receives tailored, forward-thinking solutions that drive lasting value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
