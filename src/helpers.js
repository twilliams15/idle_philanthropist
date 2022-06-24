import numeral from "numeral";

export const format = (value) => {
  if (value > 999) return numeral(value).format("$ 0.00a");
  if (value > 99) return numeral(value).format("$ 0a");
  else return numeral(value).format("$ 0.00a");
};
