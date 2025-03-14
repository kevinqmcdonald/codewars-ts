import { assert, config } from 'chai';
import { makeLooper } from '../src/kata';
config.truncateThreshold = 0;

describe('Sample Tests', () => {
    const abc = makeLooper('abc');
    it('Should cycle through the given string', () => {
        assert.strictEqual(abc(), 'a', 'Step 1');
        assert.strictEqual(abc(), 'b', 'Step 2');
        assert.strictEqual(abc(), 'c', 'Step 3');
    });
    it('Should return to its initial cycle once it reaches the end', () => {
        assert.strictEqual(abc(), 'a', 'Step 4');
        assert.strictEqual(abc(), 'b', 'Step 5');
        assert.strictEqual(abc(), 'c', 'Step 6');
    });
});

describe('Longer tests', () => {
    const testLooper = makeLooper('abcdefghijklmnop');
    it('Should cycle through the given string', () => {
        assert.strictEqual(testLooper(), 'a');
        assert.strictEqual(testLooper(), 'b');
        assert.strictEqual(testLooper(), 'c');
        assert.strictEqual(testLooper(), 'd');
        assert.strictEqual(testLooper(), 'e');
        assert.strictEqual(testLooper(), 'f');
        assert.strictEqual(testLooper(), 'g');
        assert.strictEqual(testLooper(), 'h');
        assert.strictEqual(testLooper(), 'i');
        assert.strictEqual(testLooper(), 'j');
        assert.strictEqual(testLooper(), 'k');
        assert.strictEqual(testLooper(), 'l');
        assert.strictEqual(testLooper(), 'm');
        assert.strictEqual(testLooper(), 'n');
        assert.strictEqual(testLooper(), 'o');
        assert.strictEqual(testLooper(), 'p');
    });
    it('Should loop back after finishing', () => {
        assert.strictEqual(testLooper(), 'a');
    });
});

describe('Multiple loopers tests', () => {
    const ab = makeLooper('ab');
    const cd = makeLooper('cd');
    it('Should loop each cycle independently', () => {
        assert.strictEqual(ab(), 'a');
        assert.strictEqual(cd(), 'c');
        assert.strictEqual(ab(), 'b');
        assert.strictEqual(cd(), 'd');
        assert.strictEqual(ab(), 'a');
        assert.strictEqual(ab(), 'b');
        assert.strictEqual(cd(), 'c');
        assert.strictEqual(cd(), 'd');
    });
});
