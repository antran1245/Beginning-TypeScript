import { describe, expect, it } from "@jest/globals";
const {addTwoNumbers} = require('./problem_01')

describe("Problem 1: The Implicit 'Any' Type Error", () => {
    it("Should add the two numbers together", () => {
        expect(addTwoNumbers(2, 4)).toEqual(6);
        expect(addTwoNumbers(10, 10)).toEqual(20);
    });
})