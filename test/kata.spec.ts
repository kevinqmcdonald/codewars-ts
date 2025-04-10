// See https://www.chaijs.com for how to use Chai.
import { assert } from 'chai';

import { pigIt } from '../src/kata';

describe('Tests', () => {
    it('should transform phrases without punctuation', () => {
        assert.strictEqual(
            pigIt('Pig latin is cool'),
            'igPay atinlay siay oolcay'
        );
        assert.strictEqual(
            pigIt('This is my string'),
            'hisTay siay ymay tringsay'
        );
    });

    it('should transform phrases with punctuation', () => {
        assert.strictEqual(
            pigIt('Pig latin is cool!'),
            'igPay atinlay siay oolcay!'
        );
        assert.strictEqual(
            pigIt('Hello, world !'),
            'elloHay, orldway !'
        );
    });

    it('should transform words with punctuation inside them', () => {
        assert.strictEqual(
            pigIt("I'm half-awake"),
            "'mIay alf-awakehay"
        );
    })
});
