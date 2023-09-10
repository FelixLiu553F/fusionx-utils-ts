// tests/algorithms/kmp.test.ts
import { kmpSearch } from "../../src/algorithms/kmp";

describe("KMP Algorithm", () => {
  it("should find pattern in text", () => {
    const text = "ABABDABACDABABCABAB";
    const pattern = "ABABCABAB";
    const expectedIndices = [10];

    const result = kmpSearch(text, pattern);

    expect(result).toEqual(expectedIndices);
  });

  it("should handle empty pattern", () => {
    const text = "ABCABCABC";
    const pattern = "";
    const expectedIndices = [] as number[];

    const result = kmpSearch(text, pattern);

    expect(result).toEqual(expectedIndices);
  });

  it("should return empty array if pattern not found", () => {
    const text = "ABCABCABC";
    const pattern = "XYZ";
    const expectedIndices = [] as number[];

    const result = kmpSearch(text, pattern);

    expect(result).toEqual(expectedIndices);
  });
});
