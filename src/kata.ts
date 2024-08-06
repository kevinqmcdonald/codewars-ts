export function perimeter(n: number): number {
    // Calculate the sum of the first n+1 Fibonacci numbers
    // sum = fib(n + 2) - 1; n = n + 1
    // sum = fib(n + 3) - 1
    const sum = fibonacci(n + 3) - 1;

    // Multiply the sum by 4
    return 4 * sum;
};

function fibonacci(n: number): number {
    // Generate Fibonacci sequence using dynamic programming to avoid
    // performance hits due to recursion
    const sequence: number[] = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 2] + sequence[i - 1]);
        }
    }

    return sequence[n];
}
