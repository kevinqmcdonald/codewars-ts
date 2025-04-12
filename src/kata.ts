export const convertFrac = (lst: [number, number][]): string => {
  // Reduce all the fractions in the list first
  const reducedLst: [number, number][] = lst.map(([num, denom]) => {
    const localGcd = gcd(num, denom);
    return [num / localGcd, denom / localGcd];
  });

  // Calculate the LCM of all the denominators
  const denominators = reducedLst.map((val) => val[1]);
  const calculatedLcm = lcm(
    denominators[0],
    denominators[1],
    ...denominators.slice(2)
  );

  // Convert each fraction in the list to its equivalent value using the
  // LCM as the common denominator
  return reducedLst
    .map(
      ([num, denom]) => `(${num * (calculatedLcm / denom)},${calculatedLcm})`
    )
    .join('');
};

const lcm = (num1: number, num2: number, ...nums: number[]): number => {
  if (nums.length === 0) {
    // Use the GCD to calculate the LCM
    return (num1 * num2) / gcd(num1, num2);
  }

  // For more than 2 numbers, calculate the LCM recursively
  return lcm(num1, lcm(num2, nums[0], ...nums.slice(1)));
};

const gcd = (num1: number, num2: number, ...nums: number[]): number => {
  if (nums.length === 0) {
    // Binary GCD Algorithm
    let a = num1;
    let b = num2;
    let d = 0;
    if (a % 2 === 0 && b % 2 === 0) {
      while (a % 2 === 0 && b % 2 === 0) {
        a /= 2;
        b /= 2;
        d++;
      }
    }

    if (a % 2 === 0) {
      while (a % 2 === 0) {
        a /= 2;
      }
    }

    if (b % 2 === 0) {
      while (b % 2 === 0) {
        b /= 2;
      }
    }

    while (a !== b) {
      if (a > b) {
        a = a - b;
        while (a % 2 === 0) {
          a /= 2;
        }
      } else {
        b = b - a;
        while (b % 2 === 0) {
          b /= 2;
        }
      }
    }

    return 2 ** d * a;
  }

  // For more than 2 numbers, calculate the GCD recursively
  return gcd(num1, gcd(num2, nums[0], ...nums.slice(1)));
};
