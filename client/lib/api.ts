export function validateRepeatedCharacters(words: string[]): string[] {
  const checkWords = (word: string): boolean => {
    const counts: Record<string, number> = {};

    for (const char of word) {
      counts[char] = (counts[char] || 0) + 1;
    }
    return Object.values(counts).some((count) => count === 2);
  };
  return words.filter(checkWords);
}
