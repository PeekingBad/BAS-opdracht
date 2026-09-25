import { describe, expect, it } from "vitest";
import { formatPrice } from "../../app/utils/formatPrice";

describe("formatPrice", () => {
  it("formats a price in euros with Dutch notation", () => {
    expect(formatPrice(1150)).toBe("€\u00A01.150,00");
  });

  it("formats a price below one thousand", () => {
    expect(formatPrice(795)).toBe("€\u00A0795,00");
  });

  it("formats a price with cents", () => {
    expect(formatPrice(89.5)).toBe("€\u00A089,50");
  });
});
