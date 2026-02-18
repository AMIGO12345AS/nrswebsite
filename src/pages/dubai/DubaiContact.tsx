import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function DubaiContact() {
  return (
    <>
      <section className="bg-foreground pt-36 pb-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight tracking-[-0.02em]">
              Get in Touch
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border bg-card p-10"
            >
              <h3 className="font-heading font-semibold text-xl mb-8">Dubai Office</h3>
              <div className="space-y-6 text-[14px] text-muted-foreground">
                <a href="mailto:info@nrsfysner.com" className="flex items-center gap-4 hover:text-accent transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  info@nrsfysner.com
                </a>
                <a href="tel:+97143437233" className="flex items-center gap-4 hover:text-accent transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  +971 4343 72 33
                </a>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <p>NRS Chartered Accountants LLC,<br />303, Saeed Tower 2, Trade Center 1,<br />Dubai, UAE, P.O. Box 299303</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-border overflow-hidden bg-card min-h-[380px]"
            >
              <iframe
                title="NRS Fynser Dubai Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786!2d55.2828!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sTrade%20Centre%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                className="w-full h-full min-h-[380px]"
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
