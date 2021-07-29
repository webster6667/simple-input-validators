import {isLongerThanLimit} from '../src'

describe('isLongerThanLimit', () => {

    test('is function check when written string longer than limit', () => {
        const validatorSettings = {limit: 1}

        expect(isLongerThanLimit('ab',validatorSettings)).toBeTruthy()
    });

    test('is function return false when written string shorter than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLongerThanLimit('a',validatorSettings)).toBeFalsy()
    });

    test('is function check when written number longer than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLongerThanLimit(123,validatorSettings)).toBeTruthy()
    });

    test('is function return false when written number shorter than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLongerThanLimit(1,validatorSettings)).toBeFalsy()
    });

    test('is function check when array length longer than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLongerThanLimit([1,2,3],validatorSettings)).toBeTruthy()
    });

    test('is function return false when array length shorter than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLongerThanLimit([1],validatorSettings)).toBeFalsy()
    });

    test('is function return false when limit prop empty', () => {
        const validatorSettings = {}

        expect(isLongerThanLimit(123,validatorSettings)).toBeFalsy()
    });

    test('is function throw error when written value is not string or number', () => {
        const validatorSettings = {limit: 2}

        //@ts-ignore
        expect(() => isLongerThanLimit(null, validatorSettings)).toThrow('written value must be only string, number or array')

        //@ts-ignore
        expect(() => isLongerThanLimit(undefined, validatorSettings)).toThrow('written value must be only string, number or array')

        //@ts-ignore
        expect(() => isLongerThanLimit({}, validatorSettings)).toThrow('written value must be only string, number or array')

        //@ts-ignore
        expect(() => isLongerThanLimit(() => true, validatorSettings)).toThrow('written value must be only string, number or array')
    });

    test('is function throw error when limit value is not number or number on string', () => {

        //@ts-ignore
        expect(() => isLongerThanLimit(2, {limit: 'abc'})).toThrow("limit value must be only number or number in string like '1'")

        //@ts-ignore
        expect(() => isLongerThanLimit(2, {limit: []})).toThrow("limit value must be only number or number in string like '1'")

        //@ts-ignore
        expect(() => isLongerThanLimit(2, {limit: () => true})).toThrow("limit value must be only number or number in string like '1'")

    });

})


