import { Briefcase, Users, TrendingUp, ArrowUpRight } from "lucide-react";
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
      <section className="bg-foreground pt-36 pb-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Careers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight tracking-[-0.02em]">
              Join Our Team
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Why NRS & Associates</span>
              <div className="h-px w-10 bg-accent" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[42px] font-heading font-bold tracking-[-0.02em]">Build Your Career</motion.h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 mb-16">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-border bg-card p-8 text-center hover:shadow-lg hover:border-accent/20 transition-all duration-500"
              >
                <div className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-[15px] mb-2">{p.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-12 text-center"
          >
            <h3 className="font-heading font-semibold text-xl mb-3">Open Positions</h3>
            <p className="text-[14px] text-muted-foreground mb-8">We're always looking for talented professionals.</p>
            <a
              href="mailto:info@nrsfysner.com"
              className="group inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full text-[14px] font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Send Your CV
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
