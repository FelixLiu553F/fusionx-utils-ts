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
