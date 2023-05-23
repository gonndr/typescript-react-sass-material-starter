export const formatPriceValue = (value: number) =>
  value.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
