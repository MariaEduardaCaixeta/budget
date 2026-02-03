export function formatNumber(value: number, minFractionDigits = 2, maxFractionDigits = 2) {
  return new Intl.NumberFormat("pt-BR", { minimumFractionDigits: minFractionDigits, maximumFractionDigits: maxFractionDigits }).format(value);
}

export function formatCurrency(value: number, minFractionDigits = 2, maxFractionDigits = 2) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(value);
}