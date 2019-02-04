export function FORMAT_DATE(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = (d.getMonth() + 1).toLocaleString();
  const day = d.getDate().toLocaleString();

  return (
    y +
    "-" +
    (m.length > 1 ? m : "0" + m) +
    "-" +
    (day.length > 1 ? day : "0" + day)
  );
}
