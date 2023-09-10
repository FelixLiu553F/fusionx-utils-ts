import { binarySearch, kmpSearch } from "../../src/algorithms/searching";

describe("二分查找算法", () => {
  it("应该找到目标值", () => {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13];
    const target = 7;

    const result = binarySearch(sortedArray, target);

    // 断言结果应该等于目标值的索引
    expect(result).toBe(3);
  });

  it("应该处理边界条件", () => {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13];

    // 较小的目标值应该返回第一个元素的索引
    expect(binarySearch(sortedArray, 1)).toBe(0);

    // 较大的目标值应该返回最后一个元素的索引
    expect(binarySearch(sortedArray, 13)).toBe(6);

    // 不在数组中的目标值应该返回 -1
    expect(binarySearch(sortedArray, 8)).toBe(-1);
  });

  it("应该处理空数组", () => {
    const sortedArray: number[] = [];
    const target = 42;

    // 在空数组中查找目标值应该返回 -1
    expect(binarySearch(sortedArray, target)).toBe(-1);
  });
});

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
