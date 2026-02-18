import { Calendar } from "lucide-react";

const articles = [
  { title: "Cross-Border Compliance: India-GCC Best Practices", date: "Jan 2024", category: "Compliance" },
  { title: "Why Every SME Needs a Virtual CFO", date: "Dec 2023", category: "CFO Services" },
  { title: "Zoho ERP: Transforming Business Operations", date: "Nov 2023", category: "Technology" },
];

export default function IndiaInsights() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Insights</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">Stay updated with the latest in audit, finance, and technology.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <div key={i} className="rounded-lg border bg-background p-6 hover:shadow-lg hover:border-accent transition-all cursor-pointer">
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3">{a.category}</span>
              <h3 className="font-heading font-semibold mb-3">{a.title}</h3>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {a.date}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">More insights coming soon.</p>
      </section>
    </>
  );
}
