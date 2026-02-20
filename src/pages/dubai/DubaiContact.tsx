import { Mail, Phone, MapPin, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeUp } from "@/lib/animations";
import contactHero from "@/assets/contact-hero.jpg";

export default function DubaiContact() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-foreground">
        <img src={contactHero} alt="Office reception" className="absolute inset-0 w-full h-full object-cover object-center" />
        <motion.div style={{ opacity: cinematicOpacity }} className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 90%, hsl(var(--accent) / 0.12), transparent)" }} />
        <div className="relative z-10 container pb-10 md:pb-20">
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

      <section className="py-16 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

            {/* Contact Information */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col justify-center">
              <span className="text-accent text-[13px] font-medium tracking-[0.15em] uppercase mb-6 block">Get in Touch</span>
              <h2 className="text-4xl md:text-[52px] font-heading font-bold tracking-[-0.02em] leading-[1.1] mb-8">
                Global Expertise,<br />Local Presence.
              </h2>
              <p className="text-[17px] text-muted-foreground leading-[1.8] font-light mb-8 md:mb-12 max-w-md">
                Whether you're looking to expand operations, ensure compliance, or seek strategic advisory, our team is ready to assist you.
              </p>

              <div className="space-y-8 border-l border-border pl-5 md:pl-8">
                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.05] border border-accent/10 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500 shrink-0 shadow-sm">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-2">Dubai Office</div>
                    <p className="text-[16px] text-foreground leading-[1.7] font-medium">
                      NRS Chartered Accountants LLC,<br />
                      303, Saeed Tower 2, Trade Center 1,<br />
                      Dubai, UAE, P.O. Box 299303
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.05] border border-accent/10 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500 shrink-0 shadow-sm">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-2">Phone</div>
                    <a href="tel:+97143437233" className="text-[16px] text-foreground leading-[1.7] font-medium hover:text-accent transition-colors">
                      +971 4343 72 33
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.05] border border-accent/10 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500 shrink-0 shadow-sm">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-2">Email</div>
                    <a href="mailto:info@nrsfysner.com" className="group/link inline-flex items-center gap-2 text-[16px] text-foreground leading-[1.7] font-medium hover:text-accent transition-colors">
                      info@nrsfysner.com
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-border/50 to-transparent rounded-3xl -m-px" />
              <div className="bg-card rounded-3xl p-7 md:p-14 relative z-10 shadow-xl border border-border/50">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center text-center py-16 gap-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl mb-2">Message received</h3>
                        <p className="text-[15px] text-muted-foreground leading-relaxed">We'll get back to you within 24 hours.</p>
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-[13px] font-semibold text-accent hover:text-accent/70 transition-colors tracking-wide"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <h3 className="font-heading font-bold text-2xl mb-2">Send a message</h3>
                      <p className="text-[14px] text-muted-foreground mb-8">We'll respond within one business day.</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/80 pl-1">Full Name</label>
                          <input required type="text" id="name" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} className="w-full bg-background border border-border hover:border-muted-foreground/30 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-muted-foreground/30" placeholder="John Doe" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label htmlFor="email" className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/80 pl-1">Email</label>
                            <input required type="email" id="email" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} className="w-full bg-background border border-border hover:border-muted-foreground/30 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-muted-foreground/30" placeholder="john@company.com" />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="phone" className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/80 pl-1">Phone</label>
                            <input type="tel" id="phone" value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} className="w-full bg-background border border-border hover:border-muted-foreground/30 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-muted-foreground/30" placeholder="+971 50 123 4567" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="message" className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/80 pl-1">Message</label>
                          <textarea required id="message" rows={4} value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} className="w-full bg-background border border-border hover:border-muted-foreground/30 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all placeholder:text-muted-foreground/30 resize-none" placeholder="How can we help you?" />
                        </div>

                        <button disabled={isSubmitting} type="submit" className="w-full group inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl text-[14px] font-semibold hover:bg-accent/90 transition-all duration-300 disabled:opacity-70 shadow-lg shadow-accent/15 mt-2">
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <>
                              Submit Inquiry
                              <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl border border-border overflow-hidden bg-card min-h-[420px] shadow-xl relative z-10">
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
      </section>
    </>
  );
}
