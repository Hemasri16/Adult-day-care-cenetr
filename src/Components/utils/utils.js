// utils/utils.js
export function roundToQuarterHour(time) {
    const [hours, minutes] = time.split(":").map(Number);
    const quarterHours = Math.round(minutes / 15);
    return `${hours}:${quarterHours * 15}`;
  }
  