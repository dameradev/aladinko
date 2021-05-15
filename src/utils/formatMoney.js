export default function formatMoney(cents) {
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  });
  return formatter.format(cents);
}
