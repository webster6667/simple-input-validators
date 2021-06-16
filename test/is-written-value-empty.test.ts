import {isWrittenValueEmpty} from '../src'

describe('isWrittenValueEmpty', () => {

    test('is function check when written string is empty', () => {
        expect(isWrittenValueEmpty('')).toBeTruthy()
    });

    test('is function return false when written string', () => {
        expect(isWrittenValueEmpty('a')).toBeFalsy()
    });

    test('is function return false when written number', () => {
        expect(isWrittenValueEmpty(1)).toBeFalsy()
    });

    test('is function throw error when written value is not string or number', () => {

        //@ts-ignore
        expect(() => isWrittenValueEmpty(null)).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isWrittenValueEmpty(undefined)).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isWrittenValueEmpty({})).toThrow('written value can be only string or number')

        //@ts-ignore
        expect(() => isWrittenValueEmpty(() => true)).toThrow('written value can be only string or number')
    });

})


