import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import contactHero from "@/assets/contact-hero.jpg";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@nrsfysner.com", href: "mailto:info@nrsfysner.com" },
  { icon: Phone, label: "Phone", value: "+971 4343 72 33", href: "tel:+97143437233" },
];

export default function DubaiContact() {
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
        <div className="container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Details */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="rounded-3xl border border-border bg-card p-10"
            >
              <h3 className="font-heading font-semibold text-xl mb-8">Dubai Office</h3>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} className="group flex items-center gap-4 text-[14px] text-muted-foreground hover:text-accent transition-colors">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300 shrink-0">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-[11px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
                <div className="flex items-start gap-4 text-[14px] text-muted-foreground">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 shrink-0">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground/60 uppercase tracking-wider mb-0.5">Address</div>
                    <p className="font-medium">NRS Chartered Accountants LLC,<br />303, Saeed Tower 2, Trade Center 1,<br />Dubai, UAE, P.O. Box 299303</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-3xl border border-border overflow-hidden bg-card min-h-[420px]"
            >
              <iframe
                title="NRS & Associates Dubai Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786!2d55.2828!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sTrade%20Centre%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                className="w-full h-full min-h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
