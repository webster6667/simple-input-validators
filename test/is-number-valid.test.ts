import {isNumberValid} from '../src'


describe('input number validator test', () => {

    test('number is valid', () => {
        expect(isNumberValid(1)).toBeTruthy()
    });

    test('negative number is valid', () => {
        expect(isNumberValid(-1)).toBeTruthy()
    });

    test('float number is valid', () => {
        expect(isNumberValid(1.5)).toBeTruthy()
    });

    test('number in string valid', () => {
        expect(isNumberValid('1.5')).toBeTruthy()
    });

    test('string is invalid', () => {
        expect(isNumberValid('string')).toBeFalsy()
    });

    test('lock float number', () => {
        expect(isNumberValid(1.5, {shouldLockFloatNumber: true})).toBeFalsy()
    });

    test('lock negative number', () => {
        expect(isNumberValid(-1, {shouldLockNegativeNumber: true})).toBeFalsy()
    });

    test('lock negative and float number', () => {
        expect(isNumberValid(-1.5, {shouldLockNegativeNumber: true, shouldLockFloatNumber: true})).toBeFalsy()
    });

    test('lock invalid number many dash', () => {
        expect(isNumberValid('15-45-25')).toBeFalsy()
    });

    test('lock invalid number many dots', () => {
        expect(isNumberValid('15.45.25')).toBeFalsy()
    });

    test('lock invalid number only dash after submit', () => {
        expect(isNumberValid('-')).toBeFalsy()
    });

    test('not lock only dash when enable liveValidator', () => {
        expect(isNumberValid('-', {isLiveValidator: true})).toBeTruthy()
    });

    test('lock invalid number only dots', () => {
        expect(isNumberValid('.')).toBeFalsy()
    });

    test('lock invalid number only dash dot', () => {
        expect(isNumberValid('-.')).toBeFalsy()
    });

    test('lock invalid number only dot dash', () => {
        expect(isNumberValid('.-')).toBeFalsy()
    });

    test('not lock allowed symbol', () => {
        expect(isNumberValid('12a', {allowableSymbols: ['a']})).toBeTruthy()
    });

    test('lock not allowed symbol', () => {
        expect(isNumberValid('12b', {allowableSymbols: ['a']})).toBeFalsy()
    });

    test('work dash escaping', () => {
        expect(isNumberValid('12-13-14', {allowableSymbols: ['-']})).toBeTruthy()
    });

    test('allowed symbols stronger that flags', () => {
        expect(isNumberValid('-1.5', {shouldLockFloatNumber: true, shouldLockNegativeNumber: true, allowableSymbols: ['-','.']})).toBeTruthy()
    });

    test('custom regExp work', () => {
        expect(isNumberValid('ac', {customRegExp: /[a-z]+/})).toBeTruthy()
    });

    test('is function throw error when written value is not string or number', () => {

        //@ts-ignore
        expect(() => isNumberValid(null)).toThrow('written value can be only number or string')

        //@ts-ignore
        expect(() => isNumberValid(undefined)).toThrow('written value can be only number or string')

        //@ts-ignore
        expect(() => isNumberValid({})).toThrow('written value can be only number or string')

        //@ts-ignore
        expect(() => isNumberValid(() => true)).toThrow('written value can be only number or string')

    });

})
