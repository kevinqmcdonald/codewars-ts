type Looper = {
    function: () => string;
    count: number;
};
const LOOPER_MAP = new Map<string, Looper>();

export function makeLooper(str: string): () => string {
    const looperFunction = (): string => {
        const looperMapEntry = LOOPER_MAP.get(str);
        const currentCount = looperMapEntry!.count;
        const indexToReturn = currentCount % str.length;
        LOOPER_MAP.set(str, {
            function: looperMapEntry!.function,
            count: currentCount + 1
        });
        return str.charAt(indexToReturn);
    };

    LOOPER_MAP.set(str, { function: looperFunction, count: 0 });

    return looperFunction;
}
