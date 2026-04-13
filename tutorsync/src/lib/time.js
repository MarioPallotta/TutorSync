// Convert a UTC Date object into EST/EDT (America/New_York)
export function toEST(date) {
  if (!date) return null;

  return new Date(
    date.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
  );
}

export function buildUTCDate(dateStr, timeStr) {
  const base = new Date(`${dateStr}T12:00:00`);
  const [hour, minute] = timeStr.split(":").map(Number);

  base.setHours(hour, minute, 0, 0);

  return new Date(base.toISOString());
}
