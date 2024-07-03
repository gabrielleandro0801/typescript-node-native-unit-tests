import { divide, subtract, sum } from "@src/calculator";
import assert, { AssertPredicate } from "node:assert";
import { beforeEach, describe, test } from "node:test";

describe("[calculator]", () => {
    describe("[sum]", () => {
        let candidates: number[];

        beforeEach(() => {
            candidates = [1, 2, 3];
        });

        test("[sum] should add all the given numbers", () => {
            const expectedResult: number = 6;

            const result = sum(candidates);

            assert.equal(expectedResult, result);
        });

        test("[sum] should throw an exception when the given list is empty", () => {
            const expectedError: AssertPredicate = { message: "Reduce of empty array with no initial value" };
            candidates = [];

            assert.throws(() => sum(candidates), expectedError);
        });
    });

    describe("[subtract]", () => {
        let termOne: number;
        let termTwo: number;

        beforeEach(() => {
            termOne = 10;
            termTwo = 2;
        });

        test.skip("[subtract] should subtract the given numbers", () => {
            const expectedResult: number = 8;

            const result = subtract(termOne, termTwo);

            assert.equal(expectedResult, result);
        });
    });

    describe("[divide]", () => {
        let dividend: number;
        let quotient: number;

        beforeEach(() => {
            dividend = 10;
            quotient = 2;
        });

        test("[divide] should divide the given numbers", () => {
            const expectedResult: number = 5;

            const result = divide(dividend, quotient);

            assert.equal(expectedResult, result);
        });

        test("[divide] should throw an exception when the quotient is 0", () => {
            const expectedError: AssertPredicate = { message: "Quotient shall not be zero" };

            quotient = 0;

            assert.throws(() => divide(dividend, quotient), expectedError);
        });
    });

    describe("[multiply]", () => {
        let multiplicand: number;
        let multiplier: number;

        beforeEach(() => {
            multiplicand = 10;
            multiplier = 2;
        });

        test.todo("[multiply]", () => {});
    });
});
