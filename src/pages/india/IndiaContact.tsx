import { Mail, MapPin } from "lucide-react";

export default function IndiaContact() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">Get in touch with our India office.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-lg mx-auto">
          <div className="rounded-lg border bg-background p-8">
            <h3 className="font-heading font-semibold mb-6">Office Details</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <a href="mailto:info@nrsfysner.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-5 w-5 text-accent" /> info@nrsfysner.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p>India Office<br />(Address & phone details coming soon)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
