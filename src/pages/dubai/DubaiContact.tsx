import { Mail, Phone, MapPin } from "lucide-react";

export default function DubaiContact() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">Get in touch with our Dubai office.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="font-heading font-semibold mb-4">Office Details</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <a href="mailto:info@nrsfysner.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Mail className="h-5 w-5 text-accent" /> info@nrsfysner.com
                  </a>
                  <a href="tel:+97143437233" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Phone className="h-5 w-5 text-accent" /> +971 4343 72 33
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <p>NRS Chartered Accountants LLC,<br />303, Saeed Tower 2, Trade Center 1,<br />Dubai, UAE, P.O. Box 299303</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border overflow-hidden bg-background min-h-[300px]">
              <iframe
                title="NRS Fynser Dubai Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786!2d55.2828!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sTrade%20Centre%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                className="w-full h-full min-h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
