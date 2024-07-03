export class QuotientShallNotBeZeroException extends Error {
    constructor() {
        super("Quotient shall not be zero");
    }
}

export function sum(candidates: number[]): number {
    return candidates.reduce((previous: number, current: number) => {
        return previous + current;
    });
}

export function divide(dividend: number, quotient: number): number {
    if (quotient === 0) {
        throw new QuotientShallNotBeZeroException();
    }

    return dividend / quotient;
}

export function multiply(multiplicand: number, multiplier: number): number {
    return multiplicand * multiplier;
}
