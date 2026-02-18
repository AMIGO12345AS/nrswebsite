import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import contactHero from "@/assets/contact-hero.jpg";

export default function IndiaContact() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-foreground">
        <img src={contactHero} alt="Office reception" className="absolute inset-0 w-full h-full object-cover object-center" />
        <motion.div style={{ opacity: cinematicOpacity }} className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 90%, hsl(var(--accent) / 0.12), transparent)" }} />
        <div className="relative z-10 container pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Contact</span>
            </div>
            <h1 className="text-5xl md:text-[64px] font-heading font-bold text-white max-w-2xl leading-[1.1] tracking-[-0.02em]">
              Let's Start a<br />Conversation
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container max-w-lg mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="rounded-3xl border border-border bg-card p-10"
          >
            <h3 className="font-heading font-semibold text-xl mb-8">India Office</h3>
            <div className="space-y-6">
              <a href="mailto:info@nrsfysner.com" className="group flex items-center gap-4 text-[14px] text-muted-foreground hover:text-accent transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300 shrink-0">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="font-medium">info@nrsfysner.com</div>
                </div>
                <ArrowUpRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-start gap-4 text-[14px] text-muted-foreground">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 shrink-0">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Address</div>
                  <p className="font-medium">India Office<br />(Address & phone details coming soon)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
