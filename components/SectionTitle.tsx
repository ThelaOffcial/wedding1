import Reveal from "./Reveal";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-xl text-center">
      <h2 className="font-serif text-4xl text-emerald sm:text-5xl">{title}</h2>
      <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      {subtitle && <p className="text-base leading-relaxed text-emerald/70">{subtitle}</p>}
    </Reveal>
  );
}
