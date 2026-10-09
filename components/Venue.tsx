"use client";
import { CalendarPlus, Navigation } from "lucide-react";
import { wedding } from "@/lib/data";
import { downloadIcs } from "@/lib/calendar";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Venue() {
  const q = encodeURIComponent(wedding.mapQuery);
  return (
    <section id="venue" className="px-5 py-24 sm:py-32">
      <SectionTitle title="Where to find us" subtitle={`${wedding.hall}, ${wedding.venue}`} />
      <Reveal className="glass mx-auto max-w-5xl overflow-hidden p-3 sm:p-4">
        <iframe
          title="Venue map"
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          className="h-[340px] w-full rounded-2xl border-0 sm:h-[440px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="flex flex-col items-center justify-between gap-4 px-3 py-5 sm:flex-row sm:px-5">
          <p className="text-center text-sm text-emerald/80 sm:text-left">{wedding.address}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <Navigation size={18} /> Get directions
            </a>
            <button onClick={downloadIcs} className="btn-ghost">
              <CalendarPlus size={18} /> Add to calendar
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
