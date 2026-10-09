"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, Plus, Heart } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const field =
  "w-full rounded-2xl border border-gold/30 bg-white/60 px-5 py-4 text-emerald outline-none transition placeholder:text-emerald/40 focus:border-gold focus:bg-white focus:ring-4 focus:ring-champagne/30";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (attending === null) return;
    setState("sending");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, guests: attending ? guests : 0, attending }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="rsvp" className="px-5 py-24 sm:py-32">
      <SectionTitle title="Will you join us?" subtitle="Kindly reply by 31st January 2027." />
      <Reveal className="glass mx-auto max-w-xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {state === "done" ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.15 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald text-champagne"
              >
                {attending ? <Check size={36} /> : <Heart size={32} />}
              </motion.div>
              <h3 className="font-serif text-3xl text-emerald">
                {attending ? "We can't wait to see you" : "You will be missed"}
              </h3>
              <p className="mt-3 text-emerald/70">
                {attending ? `Thank you, ${name}. Your reply has been received.` : `Thank you for letting us know, ${name}.`}
              </p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={submit} className="space-y-5" exit={{ opacity: 0 }}>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                autoComplete="name"
                className={field}
              />
              <input
                required
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                autoComplete="tel"
                className={field}
              />

              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: true, l: "Attending" },
                  { v: false, l: "Not attending" },
                ].map((o) => (
                  <button
                    type="button"
                    key={o.l}
                    onClick={() => setAttending(o.v)}
                    aria-pressed={attending === o.v}
                    className={`rounded-2xl border px-4 py-4 text-sm transition duration-300 active:scale-[0.97] ${
                      attending === o.v
                        ? "border-emerald bg-emerald text-ivory shadow-lg"
                        : "border-gold/30 bg-white/60 text-emerald hover:border-gold"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {attending && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center justify-between rounded-2xl border border-gold/30 bg-white/60 px-5 py-3">
                      <span className="text-emerald/80">Number of guests</span>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          aria-label="Fewer guests"
                          onClick={() => setGuests((g) => Math.max(1, g - 1))}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-emerald transition hover:bg-champagne/30 active:scale-90"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-6 text-center font-serif text-xl">{guests}</span>
                        <button
                          type="button"
                          aria-label="More guests"
                          onClick={() => setGuests((g) => Math.min(10, g + 1))}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-emerald transition hover:bg-champagne/30 active:scale-90"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={attending === null || state === "sending"}
                className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state === "sending" ? "Sending your reply" : "Send reply"}
              </button>
              {state === "error" && (
                <p className="text-center text-sm text-red-800">Your reply could not be sent. Please try again.</p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
}
