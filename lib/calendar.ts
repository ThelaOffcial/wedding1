import { wedding } from "./data";

export function downloadIcs() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nethmi & Kavindu//Wedding//EN",
    "BEGIN:VEVENT",
    "UID:nethmi-kavindu-20270214@wedding",
    "DTSTAMP:20260101T000000Z",
    "DTSTART:20270214T040000Z",
    "DTEND:20270214T080000Z",
    `SUMMARY:Wedding of ${wedding.bride} & ${wedding.groom}`,
    `LOCATION:${wedding.hall}\\, ${wedding.venue}\\, ${wedding.address}`,
    "DESCRIPTION:Poruwa Ceremony at 9:30 AM. Reception at 6:30 PM.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "nethmi-kavindu-wedding.ics";
  a.click();
  URL.revokeObjectURL(url);
}
