/**
 * 二分查找算法，用于在有序数组中查找目标值。
 * @param sortedArray 有序数组
 * @param target 目标值
 * @returns 如果找到目标值，则返回其索引；否则返回 -1。
 */
export function binarySearch(sortedArray: number[], target: number): number {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === target) {
      return mid;
    }

    if (sortedArray[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

/**
 * KMP算法，用于在文本中查找子串。
 * @param text 文本
 * @param pattern 子串
 * @returns 如果找到子串，返回其起始索引；否则返回 -1。
 */
export function kmpSearch(text: string, pattern: string): number[] {
  if (pattern.length === 0) return [];

  const result: number[] = [];
  const prefixTable = buildPrefixTable(pattern);
  let j = 0; // Index for pattern

  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = prefixTable[j - 1];
    }
    if (text[i] === pattern[j]) {
      j++;
    }
    if (j === pattern.length) {
      result.push(i - j + 1);
      j = prefixTable[j - 1];
    }
  }

  return result;
}

function buildPrefixTable(pattern: string): number[] {
  const prefixTable: number[] = [0];
  let length = 0; // Length of the previous longest prefix suffix

  for (let i = 1; i < pattern.length; i++) {
    while (length > 0 && pattern[i] !== pattern[length]) {
      length = prefixTable[length - 1];
    }
    if (pattern[i] === pattern[length]) {
      length++;
    }
    prefixTable.push(length);
  }

  return prefixTable;
}
