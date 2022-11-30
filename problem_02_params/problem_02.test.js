import { describe, expect, it } from "@jest/globals";
const { addTwoNumbers } = require('./problem_02')

describe('Working with Object Params', () => {
    it("Should add the two numbers together", () => {
        expect(
            addTwoNumbers({
            first: 2,
            second: 4,
            }),
        ).toEqual(6);
    
        expect(
            addTwoNumbers({
            first: 10,
            second: 20,
            }),
        ).toEqual(30);
    });
})