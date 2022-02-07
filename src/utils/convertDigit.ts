export const padCentsDigits = (price: number): string => {
  if (!price.toString().includes('.')) return `${price.toString()}.00`;

  return price.toString().split('.')[1].length === 1 ? `${price}0` : `${price}`;
};
