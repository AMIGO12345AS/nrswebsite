import nrsBuilding from "@/assets/nrs-building.png";
import { Link } from "react-router-dom";
import { Shield, Building2, FileCheck, Landmark, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const services = [
  { icon: Shield, title: "Tax Advisory", desc: "UAE Corporate Tax, VAT, Transfer Pricing & Tax Audit representation" },
  { icon: Building2, title: "Business Setup", desc: "Mainland & Free Zone incorporation, Trade license & Corporate structuring" },
  { icon: FileCheck, title: "Compliance", desc: "AML/CFT framework, UBO compliance & Regulatory reporting" },
  { icon: Landmark, title: "Capital & Finance", desc: "Bank finance, Working capital & Term loan support" },
];

export default function DubaiHome() {
  return (
    <>
      {/* Hero — Full viewport with building background */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={nrsBuilding}
          alt="NRS Fynser Building"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

        <div className="relative z-10 container pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">
              FTA-Approved Tax Agent
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-white mb-6">
              Your Trusted Tax & Business Advisor in Dubai
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
              We support businesses in meeting their statutory and regulatory obligations with confidence and precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/dubai/services"
                className="group inline-flex items-center gap-2 bg-accent px-7 py-3.5 rounded text-sm font-semibold text-white tracking-wide uppercase hover:bg-accent/90 transition-all"
              >
                Our Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/dubai/contact"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 rounded text-sm font-semibold text-white/80 tracking-wide uppercase hover:border-white/50 hover:text-white transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-3">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-heading font-bold">
              Comprehensive Advisory Services
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-xl bg-card p-8 border border-border hover:border-accent/40 hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative container">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {[
              { value: "1,000+", label: "Clients Served" },
              { value: "50+", label: "Expert Professionals" },
              { value: "2017", label: "Established" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <p className="text-5xl font-heading font-bold text-accent">{stat.value}</p>
                <p className="text-sm mt-2 text-white/50 tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let us help you navigate the complexities of UAE regulations with confidence.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/dubai/contact"
                className="group inline-flex items-center gap-2 bg-primary px-8 py-4 rounded text-sm font-semibold text-white tracking-wide uppercase hover:bg-secondary transition-all"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
