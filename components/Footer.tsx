import { wedding } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-emerald-deep px-6 py-16 text-center text-ivory">
      <p className="font-serif text-4xl sm:text-5xl">
        {wedding.bride} <span className="gold-text italic">&amp;</span> {wedding.groom}
      </p>
      <p className="mt-4 text-sm tracking-wide text-champagne">{wedding.dateLabel}</p>
      <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
        With love and gratitude, we look forward to celebrating with you.
      </p>
    </footer>
  );
}
