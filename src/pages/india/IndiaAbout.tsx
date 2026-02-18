import { Eye, Target, Heart, Star, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const principles = [
  { icon: Heart, title: "Integrity", desc: "Operating transparently and ethically to build lasting trust." },
  { icon: Star, title: "Excellence", desc: "Delivering high-quality services through attention to detail." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing modern tools and technology for smarter solutions." },
  { icon: Users, title: "Client-Centricity", desc: "Striving to exceed client expectations at every step." },
];

export default function IndiaAbout() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight">
              Building Trust Through Excellence
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Established in 2017, NRS Fynser is a professionally driven accounting and advisory firm offering comprehensive services in accounting, bookkeeping, internal audit, tax advisory, and ERP implementation. With the trust of over 1,000 clients and a 50+ member expert team, we deliver solutions that are reliable, timely, and practical.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { icon: Eye, title: "Vision", text: "To be the trusted partner for businesses across the globe, helping them navigate challenges, seize opportunities, and grow with confidence." },
              { icon: Target, title: "Mission", text: "To empower businesses globally by providing trusted financial, advisory, and technology solutions while building a team of skilled professionals who contribute lasting value." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-xl border border-border bg-background p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} custom={0} className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-3">Our Foundation</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold">Core Principles</motion.h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <p.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
