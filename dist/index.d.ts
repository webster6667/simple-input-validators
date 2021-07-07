import { Validator, SimpleValidator, NumberValidator, ErrorDataHandler } from './types';
/**
 * @description
 * function that check is write value shorted than limit
 *
 * @param {number | string} writtenValue
 * @param {ValidatorSettingsProps} validatorSettings
 * @returns {boolean}
 *
 * @example
 * isShorterThanLimit('abcd',{limit: 5})
 * // => true
 */
declare const isShorterThanLimit: Validator;
/**
 * @description
 * function that check is write value longer than limit
 *
 * @param {number | string} writtenValue
 * @param {ValidatorSettingsProps} validatorSettings
 * @returns {boolean}
 *
 * @example
 * isLongerThanLimit('abcd',{limit: 3})
 * // => true
 */
declare const isLongerThanLimit: Validator;
/**
 * @description
 * function that check is write value greater than limit
 *
 * @param {number | string} writtenValue
 * @param {ValidatorSettingsProps} validatorSettings
 * @returns {boolean}
 *
 * @example
 * isGreaterThanLimit(5,{limit: 3})
 * // => true
 */
declare const isGreaterThanLimit: Validator;
/**
 * @description
 * function that check is write value less than limit
 *
 * @param {number | string} writtenValue
 * @param {ValidatorSettingsProps} validatorSettings
 * @returns {boolean}
 *
 * @example
 * isLessThanLimit(2,{limit: 3})
 * // => true
 */
declare const isLessThanLimit: Validator;
/**
 * @description
 * function that check is write value empty
 *
 * @param {number | string} writtenValue
 * @returns {boolean}
 *
 * @example
 * isWrittenValueEmpty('')
 * // => true
 */
declare const isWrittenValueEmpty: SimpleValidator;
/**
 * @description
 * function that check is write mail invalid
 *
 * @param {number | string | null} writtenValue
 * @returns {boolean}
 *
 * @example
 * isMailInvalid('ab')
 * // => true
 *
 * isMailInvalid('ab@mail.ru')
 * // => false
 */
declare const isMailInvalid: SimpleValidator;
/**
 * @description
 * Validate number by rules
 * 1. negative values
 * 2. dots
 * 3. allowableSymbols
 *
 * @param {string | number} writtenValue - data
 * @param {NumberValidatorRulesProps} numberRules - paramDesc
 *
 * @returns {boolean}
 *
 * @example
 * isNumberValid(1) // => true
 * isNumberValid('1') // => true
 *
 * isNumberValid(1.5) // => true
 * isNumberValid(1.5, {shouldLockFloatNumber: true} // => false
 *
 * isNumberValid(-1) // => true
 * isNumberValid(-1, {shouldLockNegativeNumber: true} // => false
 *
 * isNumberValid('12a') // => false
 * isNumberValid('12a', {allowableSymbols: ['a']}) // => true
 *
 * isNumberValid('1ab') // => false
 * isNumberValid('1ab', {customRegExp: /[1-9][a-z]+/}) // => true
 */
declare const isNumberValid: NumberValidator;
/**
 * @description
 * function update commonErrorData values to new input props
 *
 * @param {} commonErrorData - object that have all error state for single input
 * @param {} propsToUpdate - new props that must be update in commonErrorData
 *
 * @example
 * const commonErrorData = {
 *          hasError: false,
 *          message: ''
 *       },
 *       validatorRules = {
 *          message: 'errorMessage'
 *       }
 *
 * errorDataHandler(commonErrorData, {...validatorRules, hasError: true}) // => void
 *
 * console.log(commonErrorData) // => {
 *          hasError: true,
 *          message: 'errorMessage'
 * }
 */
declare const errorDataHandler: ErrorDataHandler;
export { isShorterThanLimit, isLongerThanLimit, isGreaterThanLimit, isLessThanLimit, isWrittenValueEmpty, isMailInvalid, isNumberValid, errorDataHandler };
