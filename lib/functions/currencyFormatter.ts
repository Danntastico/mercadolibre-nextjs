export default function currencyFormatter(value: number, currency = 'USD'): string {
  if (currency === 'ARS') {
    currency = 'USD'
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,

  }).format(value);
}
