import { expect } from 'chai';
import * as kata from '../src/kata';

describe('Tests', () => {
    it('12 -> 21', () => {
        const result = kata.calculate(12);
        expect(result).to.equal(21);
    });

    it('513 -> 531', () => {
        const result = kata.calculate(513);
        expect(result).to.equal(531);
    });

    it('2017 -> 2071', () => {
        const result = kata.calculate(2017);
        expect(result).to.equal(2071);
    });

    it('20176 -> 20617', () => {
        const result = kata.calculate(20176);
        expect(result).to.equal(20617);
    });

    it('9 -> -1', () => {
        const result = kata.calculate(9);
        expect(result).to.equal(-1);
    });

    it('11 -> -1', () => {
        const result = kata.calculate(11);
        expect(result).to.equal(-1);
    });

    it('531 -> -1', () => {
        const result = kata.calculate(531);
        expect(result).to.equal(-1);
    });
});
