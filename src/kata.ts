const pairs: [string, string][] = [
    ['NORTH', 'SOUTH'],
    ['SOUTH', 'NORTH'],
    ['EAST', 'WEST'],
    ['WEST', 'EAST']
];

export function dirReduc(directions: string[]): string[] {
    let result = [];
    for (const direction of directions) {
        result.push(direction);
        result = reduce(result);
    }

    return result;
}

function reduce(directions: string[]): string[] {
    const result = [...directions];
    for (let i = 0; i < directions.length - 1; i++) {
        if (
            pairs.find(
                (pair) =>
                    pair[0] === directions[i] && pair[1] === directions[i + 1]
            )
        ) {
            result.splice(i, 2);
            return reduce(result);
        }
    }

    return result;
}
