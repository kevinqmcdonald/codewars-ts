import { assert } from 'chai';
import { dirReduc } from '../src/kata';

describe('Fixed Tests', function () {
    it('Basic tests', function () {
        assert.deepEqual(
            dirReduc([
                'NORTH',
                'SOUTH',
                'SOUTH',
                'EAST',
                'WEST',
                'NORTH',
                'WEST'
            ]),
            ['WEST']
        );
        assert.deepEqual(
            dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']),
            []
        );
    });
    it('Advanced tests', function () {
        assert.deepEqual(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), [
            'NORTH',
            'WEST',
            'SOUTH',
            'EAST'
        ]);
    });
});
