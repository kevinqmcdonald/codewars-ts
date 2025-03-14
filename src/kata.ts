export function score(dice: number[]): number {
    // Count the number of rolls of each number
    const numberCount: Record<number, number> = {};
    for (const die of dice) {
        if (!Object.hasOwn(numberCount, die)) {
            numberCount[die] = 1;
        } else {
            numberCount[die]++;
        }
    }

    // Calculate the score based on the rolls
    let score = 0;
    for (const entry of Object.entries(numberCount)) {
      const num = Number.parseInt(entry[0]);
      const rolls = entry[1];
      if (rolls >= 3) {
        if (num == 1) {
          score += 1000 + 100 * (rolls - 3);
        } else if (num == 5) {
          score += 500 + 50 * (rolls - 3);
        } else {
          score += 100 * num;
        }
      } else if (num == 1) {
        score += 100 * rolls;
      } else if (num == 5) {
        score += 50 * rolls;
      }
    }

    return score;
}
