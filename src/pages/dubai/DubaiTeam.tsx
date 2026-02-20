import { Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import teamHero from "@/assets/team-hero.jpg";
import teamSaleel from "@/assets/team-saleel.jpg";
import teamRashid from "@/assets/team-rashid.jpg";
import teamImran from "@/assets/team-imran.jpg";

const team = [
  {
    name: "CA Saleel Eranchikkal",
    role: "Managing Partner",
    bio: "FTA-Registered Tax Agent with deep expertise in UAE VAT, Corporate Tax, and Transfer Pricing. A founding force behind NRS & Associates, driving the firm's tax practice with precision and regulatory authority.",
    image: teamSaleel,
    linkedin: "#",
  },
  {
    name: "CA Rashid M. Basheer",
    role: "Managing Partner",
    bio: "Former General Manager at Lulu Retail PLC with a distinguished career spanning Financial Governance, Internal Audit, and IPO advisory. Brings institutional-grade rigor to every engagement.",
    image: teamRashid,
    linkedin: "#",
  },
  {
    name: "Imran Rashid",
    role: "Director — Corporate Services",
    bio: "16+ years in private banking and wealth management, advising high-net-worth individuals and corporates. Leads client relationships and corporate structuring with a client-first philosophy.",
    image: teamImran,
    linkedin: "#",
  },
];

export default function DubaiTeam() {
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
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Our Team</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[42px] font-heading font-bold tracking-[-0.02em] leading-[1.15]">
              Led by Experience,<br />Driven by Purpose
            </motion.h2>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {team.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  className={`flex flex-col md:items-center gap-10 md:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-5/12 relative group rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 z-10" />
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                      />
                    </div>
                  </div>

                  {/* Typography Side */}
                  <div className="w-full md:w-7/12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-mono text-accent/60 tracking-[0.2em]">0{i + 1}</span>
                      <div className="h-px w-8 bg-accent/40" />
                    </div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-accent text-[12px] font-semibold tracking-[0.2em] uppercase">{m.role}</span>
                    </div>
                    <h3 className="text-4xl md:text-[52px] font-heading font-bold tracking-[-0.02em] leading-[1.1] text-foreground mb-6">
                      {m.name}
                    </h3>

                    <p className="text-[17px] leading-[1.85] text-muted-foreground font-light max-w-xl mb-8">
                      {m.bio}
                    </p>

                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-muted-foreground hover:text-accent transition-colors duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-full border border-border group-hover:border-accent/40 group-hover:bg-accent/5 flex items-center justify-center transition-all duration-300">
                        <Linkedin className="h-3.5 w-3.5" />
                      </div>
                      LinkedIn Profile
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
