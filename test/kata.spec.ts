import { perimeter } from '../src/kata';
import { assert } from 'chai';

function testing(n: number, expected: number) {
    assert.strictEqual(perimeter(n), expected);
}

describe('Fixed Tests', function () {
    it('Basic tests perimeter', function () {
        testing(5, 80);
        testing(7, 216);
        testing(20, 114624);
        testing(30, 14098308);
    });
});
