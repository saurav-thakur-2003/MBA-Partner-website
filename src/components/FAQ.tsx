import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="container-px mx-auto max-w-3xl py-20">
      <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
      <p className="mt-2 text-muted-foreground">Everything you need to know before enrolling.</p>
      <Accordion type="single" collapsible className="mt-8">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`q-${i}`} className="rounded-lg border-b">
            <AccordionTrigger className="text-left font-display text-base font-semibold text-primary">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
