"use client";
import { Flower2, GlassWater, House, Clock, MapPin } from "lucide-react";
import { events } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const icons = { poruwa: Flower2, reception: GlassWater, homecoming: House } as const;
const dirs = ["left", "rise", "right"] as const;

export default function Events() {
  return (
    <section id="events" className="px-5 py-24 sm:py-32">
      <SectionTitle title="The celebrations" subtitle="Three moments we would love to share with you." />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {events.map((e, i) => {
          const Icon = icons[e.icon as keyof typeof icons];
          return (
            <Reveal key={e.title} variant={dirs[i % 3]} delay={i * 0.1}>
              <TiltCard className="glass h-full p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-ivory text-gold">
                  <Icon size={28} strokeWidth={1.4} />
                </div>
                <h3 className="font-serif text-2xl text-emerald">{e.title}</h3>
                <p className="mt-3 text-sm text-emerald/70">{e.date}</p>
                <p className="mt-4 flex items-center justify-center gap-2 text-emerald">
                  <Clock size={16} className="text-gold" /> {e.time}
                </p>
                <p className="mt-2 flex items-start justify-center gap-2 text-sm text-emerald/80">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold" /> {e.place}
                </p>
                <p className="mt-5 text-sm italic leading-relaxed text-emerald/60">{e.note}</p>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
