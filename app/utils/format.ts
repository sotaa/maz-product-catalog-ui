export function toPersianNumber(value: number | string): string {
  return Number(value).toLocaleString('fa-IR')
}

export function formatPrice(value: number): string {
  return `${toPersianNumber(value)} تومان`
}
