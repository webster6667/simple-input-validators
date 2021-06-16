import {isMailInvalid} from '../src'

describe('isMailInvalid', () => {

    test('is function check when written string has invalid mail', () => {
        expect(isMailInvalid('ab')).toBeTruthy()
    });

    test('is function check when written number has invalid mail', () => {
        expect(isMailInvalid(123)).toBeTruthy()
    });

    test('is mail invalid where written value empty', () => {
        expect(isMailInvalid('')).toBeTruthy()
    });

    test('is function return false when write valid email', () => {
        expect(isMailInvalid('my@mail.ru')).toBeFalsy()
    });

    test('is function throw error when written value is not string or number', () => {

        //@ts-ignore
        expect(() => isMailInvalid(null)).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isMailInvalid(undefined)).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isMailInvalid({})).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isMailInvalid(() => true)).toThrow('written value can be only string or number')
    });

})


