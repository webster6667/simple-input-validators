import getArraySum from 'get-array-sum';
import {isLessThanLimit} from '../src'

describe('isLessThanLimit', () => {

    test('is function check when written string less than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLessThanLimit('1',validatorSettings)).toBeTruthy()
    });

    test('is function return false when written string greater than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLessThanLimit('3',validatorSettings)).toBeFalsy()
    });

    test('is function check when written number less than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLessThanLimit(1,validatorSettings)).toBeTruthy()
    });

    test('is function return false when written number greater than limit', () => {
        const validatorSettings = {limit: 2}

        expect(isLessThanLimit(3,validatorSettings)).toBeFalsy()
    });

    test('is function check when array sum is less than limit', () => {
        let isArraySumGreaterThanLimit = false

        const validatorSettings = {limit: 10},
              arraySum = getArraySum([1,2,3]),
              shouldValidateArray = !isNaN(arraySum)

        if (shouldValidateArray) {
            isArraySumGreaterThanLimit = isLessThanLimit(arraySum, validatorSettings)
        }

        expect(isArraySumGreaterThanLimit).toBeTruthy()
    });

    test('is function return false when array sum is greater than limit', () => {
        let isArraySumGreaterThanLimit = false

        const validatorSettings = {limit: 3},
            arraySum = getArraySum([1,2,3]),
            shouldValidateArray = !isNaN(arraySum)

        if (shouldValidateArray) {
            isArraySumGreaterThanLimit = isLessThanLimit(arraySum, validatorSettings)
        }

        expect(isArraySumGreaterThanLimit).toBeFalsy()
    });

    test('is function return false when limit prop empty', () => {
        const validatorSettings = {}

        expect(isLessThanLimit(123,validatorSettings)).toBeFalsy()
    });

    test('is function throw error when written value is not string or number', () => {
        const validatorSettings = {limit: 1}

        //@ts-ignore
        expect(() => isLessThanLimit(null, validatorSettings)).toThrow('written value can be only number')

        //@ts-ignore
        expect(() => isLessThanLimit(undefined, validatorSettings)).toThrow('written value can be only number')

        //@ts-ignore
        expect(() => isLessThanLimit({}, validatorSettings)).toThrow('written value can be only number')

        //@ts-ignore
        expect(() => isLessThanLimit(() => true, validatorSettings)).toThrow('written value can be only number')

        expect(() => isLessThanLimit('1a', validatorSettings)).toThrow('written value can be only number')
    });

    test('is function throw error when limit value is not number or number on string', () => {

        //@ts-ignore
        expect(() => isLessThanLimit(2, {limit: 'abc'})).toThrow("limit value must be only number or number in string like '1'")

        //@ts-ignore
        expect(() => isLessThanLimit(2, {limit: []})).toThrow("limit value must be only number or number in string like '1'")

        //@ts-ignore
        expect(() => isLessThanLimit(2, {limit: () => true})).toThrow("limit value must be only number or number in string like '1'")

    });

})


