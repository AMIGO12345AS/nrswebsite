import { User } from "lucide-react";

export default function IndiaTeam() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Leadership</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">Meet the professional leading NRS Fynser India.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-md mx-auto">
          <div className="rounded-lg border bg-background p-8 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <User className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg">CA Muhammed Nizar E</h3>
            <p className="text-sm text-accent font-medium mb-3">Partner</p>
            <p className="text-sm text-muted-foreground">
              Co-Founder of NRS Fynser, overseeing the firm's Indian operations. He practices with expertise in cross-border financial transactions and plays a key role in strategic growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
