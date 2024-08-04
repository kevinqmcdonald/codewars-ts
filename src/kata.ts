export function humanReadable(seconds: number): string {
    const hoursConversion = convert(seconds, 60 * 60);
    const minutesConversion = convert(hoursConversion[1], 60);
    return `${format(hoursConversion[0])}:${format(minutesConversion[0])}:${format(minutesConversion[1])}`;
}

function convert(seconds: number, factor: number): [number, number] {
    const converted = Math.floor(seconds * (1 / factor));
    return [converted, seconds - converted * factor];
}

function format(value: number): string {
    return value.toString().padStart(2, '0');
}
