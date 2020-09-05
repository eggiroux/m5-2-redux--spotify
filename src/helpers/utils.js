export function shortNumber(number) {
  const numString = String(number);
  let suffix = "";

  if (numString.length >= 7) {
    suffix = "M";
  } else if (numString.length >= 4) {
    suffix = "K";
  }

  switch (suffix) {
    case "M":
      return `${Math.floor(number / 1000000)}${suffix}`;
    case "K":
      return `${Math.floor(number / 1000)}${suffix}`;
    default:
      return number;
  }
}
