import { Briefcase, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const perks = [
  { icon: Users, title: "Collaborative Culture", desc: "Work with 50+ professionals in a supportive, growth-oriented environment." },
  { icon: TrendingUp, title: "Career Growth", desc: "Continuous learning opportunities and clear advancement pathways." },
  { icon: Briefcase, title: "Impactful Work", desc: "Serve 1,000+ clients and make real business impact every day." },
];

export default function DubaiCareers() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">Careers</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight">
              Join Our Team
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.p variants={fadeUp} custom={0} className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-3">Why NRS Fynser</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-heading font-bold">Build Your Career With Us</motion.h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-xl border border-border bg-card p-8 text-center hover:border-accent/40 transition-all"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <p.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-10 text-center"
          >
            <h3 className="font-heading font-semibold text-xl mb-3">Open Positions</h3>
            <p className="text-sm text-muted-foreground mb-6">We're always looking for talented professionals. Check back soon for new openings.</p>
            <a
              href="mailto:info@nrsfysner.com"
              className="inline-flex items-center gap-2 bg-accent px-7 py-3 rounded text-sm font-semibold text-white tracking-wide uppercase hover:bg-accent/90 transition-colors"
            >
              Send Your CV
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
