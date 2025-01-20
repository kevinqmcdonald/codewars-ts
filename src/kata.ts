export function scramble(str1: string, str2: string): boolean {
    // Split each string by letter
    const str1Letters = str1.split('');
    const str2Letters = str2.split('');

    // Map each letter to the number of occurrences
    const str1LetterMap: Record<string, number> = {};
    for (const letter of str1Letters) {
        str1LetterMap[letter] = (str1LetterMap[letter] ?? 0) + 1;
    }

    const str2LetterMap: Record<string, number> = {};
    for (const letter of str2Letters) {
        str2LetterMap[letter] = (str2LetterMap[letter] ?? 0) + 1;
    }

    // Iterate over the letters in str2 and check if str1 contains all of them
    const containedLetters = Object.entries(str2LetterMap).filter((record) => {
        const letter = record[0];
        const count = record[1];
        return str1LetterMap[letter] && str1LetterMap[letter] >= count;
    });

    return containedLetters.length === Object.keys(str2LetterMap).length;
}
