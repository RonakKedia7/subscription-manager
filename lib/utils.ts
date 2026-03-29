import dayjs from "dayjs";

export const formatCurrency = (value: number, currency = "INR"): string => {
  try {
    const isINR = currency === "INR";
    const locale = isINR ? "en-IN" : "en-US";

    let minFraction = 2;
    let maxFraction = 2;

    if (isINR) {
      const decimalPart = value % 1;

      if (decimalPart === 0) {
        minFraction = 0;
        maxFraction = 0;
      } else if (Number(decimalPart.toFixed(1)) === decimalPart) {
        minFraction = 1;
        maxFraction = 1;
      } else {
        minFraction = 2;
        maxFraction = 2;
      }
    }

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: minFraction,
      maximumFractionDigits: maxFraction,
    }).format(value);
  } catch {
    return value.toFixed(currency === "INR" ? 1 : 2);
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid()
    ? parsedDate.format("MM/DD/YYYY")
    : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
