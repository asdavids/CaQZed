export function formatKwacha(value: number): string {
  if (!Number.isFinite(value)) return "K0.00";
  return (
    "K" +
    value.toLocaleString("en-ZM", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export function formatPercent(value: number): string {
  return `${(value * 100).toLocaleString("en-ZM", { maximumFractionDigits: 2 })}%`;
}

export function formatNumber(value: number): string {
  return value.toLocaleString("en-ZM", { maximumFractionDigits: 2 });
}
