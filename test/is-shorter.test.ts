import {isShorterThanLimit} from '../src'

describe('isShorterThanLimit', () => {

    test('is function check when written string shorter than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isShorterThanLimit('a',validatorSettings)).toBeTruthy()
    });

    test('is function return false when written string longer than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isShorterThanLimit('abc',validatorSettings)).toBeFalsy()
    });

    test('is function check when written number shorter than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isShorterThanLimit(1,validatorSettings)).toBeTruthy()
    });

    test('is function return false when written number longer than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isShorterThanLimit(123,validatorSettings)).toBeFalsy()
    });

    test('is function return false when limit prop empty', () => {
        const validatorSettings = {}

        expect(isShorterThanLimit(123,validatorSettings)).toBeFalsy()
    });

    test('is function throw error when written value is not string or number', () => {
        const validatorSettings = {limit: 2}

        //@ts-ignore
        expect(() => isShorterThanLimit(null, validatorSettings)).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isShorterThanLimit(undefined, validatorSettings)).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isShorterThanLimit({}, validatorSettings)).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isShorterThanLimit(() => true, validatorSettings)).toThrow('written value can be only string or number')

    });

})


