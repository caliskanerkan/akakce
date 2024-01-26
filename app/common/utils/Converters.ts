import { Currency } from "~/common/model/CurrencyType";
import { isNullOrUndefined } from "~/common/utils/TypeController";

export const convertToCurrency = (price: number) => {
  return price.toLocaleString("tr-TR", {
    style: "currency",
    currency: Currency.TRY,
  });
};

export const convertToPercentage = (rate: number) => {
  return `%${rate}`;
};

export const convertToFollowCountText = (count?: number) => {
  if (isNullOrUndefined(count)) {
    return count;
  }

  return `+${count} Fiyat`;
};
