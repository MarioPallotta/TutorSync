// Convert a UTC Date object into EST/EDT (America/New_York)
export function toEST(date) {
  if (!date) return null;

  return new Date(
    date.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
  );
}

// Build a UTC datetime from a date string ("2026-04-27") and a time string ("14:00")
export function buildUTCDate(dateStr, timeStr) {
  // Anchor at noon to avoid timezone rollover
  const base = new Date(`${dateStr}T12:00:00`);

  const [hour, minute] = timeStr.split(":").map(Number);

  base.setHours(hour, minute, 0, 0);

  return new Date(base.toISOString()); // normalized UTC
}
