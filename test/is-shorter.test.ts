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

    test('is function check when array length shorter than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isShorterThanLimit([1],validatorSettings)).toBeTruthy()
    });

    test('is function return false when array length longer than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isShorterThanLimit([1, 2, 3],validatorSettings)).toBeFalsy()
    });

    test('is function return false when limit prop empty', () => {
        const validatorSettings = {}

        expect(isShorterThanLimit(123,validatorSettings)).toBeFalsy()
    });

    test('is function throw error when written value is not string or number', () => {
        const validatorSettings = {limit: 2}

        //@ts-ignore
        expect(() => isShorterThanLimit(null, validatorSettings)).toThrow('written value must be only string, number or array')

        //@ts-ignore
        expect(() => isShorterThanLimit(undefined, validatorSettings)).toThrow('written value must be only string, number or array')

        //@ts-ignore
        expect(() => isShorterThanLimit({}, validatorSettings)).toThrow('written value must be only string, number or array')

        //@ts-ignore
        expect(() => isShorterThanLimit(() => true, validatorSettings)).toThrow('written value must be only string, number or array')
    });

    test('is function throw error when limit value is not number or number on string', () => {

        //@ts-ignore
        expect(() => isShorterThanLimit(2, {limit: 'abc'})).toThrow("limit value must be only number or number in string like '1'")

        //@ts-ignore
        expect(() => isShorterThanLimit(2, {limit: []})).toThrow("limit value must be only number or number in string like '1'")

        //@ts-ignore
        expect(() => isShorterThanLimit(2, {limit: () => true})).toThrow("limit value must be only number or number in string like '1'")

    });

})


