import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Play } from "lucide-react";
import { testimonials } from "@/data/content";

export function VideoTestimonials() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="text-center">
        <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Hear it from them
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Video Testimonials</h2>
      </div>

      <div className="mt-10">
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-(--shadow-card)">
                  <div className="relative aspect-video gradient-navy">
                    <div className="absolute inset-0 grid place-items-center">
                      <button className="grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-(--shadow-glow) transition-transform group-hover:scale-110">
                        <Play className="h-6 w-6 fill-current" />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                      {t.photo ? (
                        <img src={t.photo} alt={`Photo of ${t.name}`} title={t.name} loading="lazy" className="h-9 w-9 rounded-full object-cover" />
                      ) : (
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                          {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{t.name}</div>
                        <div className="truncate text-[11px] text-white/70">{t.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <Quote className="h-5 w-5 text-accent" />
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
