export function normTexto(name = "") {
  return name
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/-/g, "_")
    .replace(/[^\w_]/g, "");
}
