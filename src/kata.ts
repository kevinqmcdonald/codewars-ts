export function calculate(num: number): number {
    // Split the number into each of its digits
    const digits = splitIntoDigits(num);
    if (digits.length === 1) {
        return -1;
    }

    // Iterate through the digits, starting at the end, and push them onto
    // the head of a list
    let result = [digits[digits.length - 1]];
    let done = false;
    for (let i = digits.length - 2; i >= 0; i--) {
        // Once we've done a swap, push the remaining digits to the head
        if (done) {
            result = pushToHead(digits[i], result);
            continue;
        }

        // If the next number is smaller than the current head of the list,
        // pop the smallest number in the list, then push the next number,
        // then push the popped number back onto the head
        const head = result[0];
        if (digits[i] < head) {
            const minDigit = Math.min(...result);
            const indexToPop = result.findIndex((digit) => digit === minDigit);
            result.splice(indexToPop, 1);
            result = pushToHead(digits[i], result);
            result = pushToHead(minDigit, result);
            done = true;
        }

        // Push the digits one at a time to the head of the list
        result = pushToHead(digits[i], result);
    }

    if (!done) {
        return -1;
    }

    return Number.parseInt(result.join(''));
}

function splitIntoDigits(num: number): number[] {
    return num
        .toString()
        .split('')
        .map((digit) => Number.parseInt(digit));
}

function pushToHead(numToPush: number, list: number[]): number[] {
    return [numToPush, ...list];
}
