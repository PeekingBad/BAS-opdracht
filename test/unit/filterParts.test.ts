import { describe, expect, it } from "vitest";
import { filterParts, type PartFilters } from "../../app/utils/filterParts";
import type { Part } from "../../shared/types/part";

const parts: Part[] = [
  {
    id: "1",
    name: "DAF XF Sideskirt",
    oem: "ABC-123",
    brand: "DAF",
    condition: "used",
    price: 795,
    inStock: true,
    category: "Body",
    image: "",
  },
  {
    id: "2",
    name: "Volvo Wheel hub",
    oem: "XYZ-456",
    brand: "Volvo",
    condition: "new",
    price: 1150,
    inStock: true,
    category: "Wheels",
    image: "",
  },
  {
    id: "3",
    name: "MAN Wheel hub",
    oem: "QRS-789",
    brand: "MAN",
    condition: "used",
    price: 2000,
    inStock: false,
    category: "Wheels",
    image: "",
  },
];

const noFilters: PartFilters = {
  search: "",
  brands: [],
  condition: "all",
};

describe("filterParts", () => {
  it("returns all parts when no filters are set", () => {
    expect(filterParts(parts, noFilters)).toHaveLength(3);
  });

  it("finds parts by name", () => {
    const result = filterParts(parts, { ...noFilters, search: "wheel" });
    expect(result.map((part) => part.id)).toEqual(["2", "3"]);
  });

  it("shows only DAF parts when DAF is selected", () => {
    const result = filterParts(parts, { ...noFilters, brands: ["DAF"] });
    expect(result.map((part) => part.id)).toEqual(["1"]);
  });

  it("shows parts of multiple selected brands", () => {
    const result = filterParts(parts, { ...noFilters, brands: ["DAF", "MAN"] });
    expect(result.map((part) => part.id)).toEqual(["1", "3"]);
  });

  it("shows only used parts when used is selected", () => {
    const result = filterParts(parts, { ...noFilters, condition: "used" });
    expect(result.map((part) => part.id)).toEqual(["1", "3"]);
  });
});
