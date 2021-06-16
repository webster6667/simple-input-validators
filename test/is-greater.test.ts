import {isGreaterThanLimit} from '../src'

describe('isGreaterThanLimit', () => {

    test('is function check when written string greater than limit', () => {
        const validatorSettings = {limit: 1}

        expect(isGreaterThanLimit('2',validatorSettings)).toBeTruthy()
    });

    test('is function return false when written string less than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isGreaterThanLimit('1',validatorSettings)).toBeFalsy()
    });

    test('is function check when written number greater than limit', () => {
        const validatorSettings = {limit: 1}

        expect(isGreaterThanLimit(2,validatorSettings)).toBeTruthy()
    });

    test('is function return false when written number less than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isGreaterThanLimit(1,validatorSettings)).toBeFalsy()
    });

    test('is function return false when limit prop empty', () => {
        const validatorSettings = {}

        expect(isGreaterThanLimit(123,validatorSettings)).toBeFalsy()
    });

    test('is function throw error when written value is not string or number', () => {
        const validatorSettings = {limit: 1}

        //@ts-ignore
        expect(() => isGreaterThanLimit(null, validatorSettings)).toThrow('written value can be only number')

        //@ts-ignore
        expect(() => isGreaterThanLimit(undefined, validatorSettings)).toThrow('written value can be only number')

        //@ts-ignore
        expect(() => isGreaterThanLimit({}, validatorSettings)).toThrow('written value can be only number')

        //@ts-ignore
        expect(() => isGreaterThanLimit(() => true, validatorSettings)).toThrow('written value can be only number')

        expect(() => isGreaterThanLimit('1a', validatorSettings)).toThrow('written value can be only number')
    });

})


