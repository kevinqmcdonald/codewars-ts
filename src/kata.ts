export const pigIt = (a: string): string => {
    const words = a.split(' ');
    const pigLatinWords = words.map((word) => {
        let wordToTransform = word;
        let punctuation = undefined;
        if (/[\.\?!,]/.test(wordToTransform)) {
            punctuation = wordToTransform.charAt(wordToTransform.length - 1);
            wordToTransform = word.slice(0, -1);
        }
        if (/[a-zA-Z]/.test(wordToTransform)) {
            return (
                wordToTransform.slice(1) +
                wordToTransform[0] +
                'ay' +
                (punctuation ?? '')
            );
        }
        return word;
    });
    return pigLatinWords.join(' ');
};
