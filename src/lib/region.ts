const GULF_TIMEZONES = [
  "Asia/Dubai",
  "Asia/Muscat",
  "Asia/Qatar",
  "Asia/Bahrain",
  "Asia/Kuwait",
  "Asia/Riyadh",
  "Asia/Aden",
];

export type Region = "india" | "dubai";

export function detectRegion(): Region {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (GULF_TIMEZONES.includes(tz)) return "dubai";
  } catch {}
  return "india";
}

export function getOtherRegion(region: Region): Region {
  return region === "india" ? "dubai" : "india";
}
