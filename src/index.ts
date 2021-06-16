import {
    Validator,
    ValidatorSettingsProps,
    SimpleValidator,
    NumberValidator,
    NumberValidatorRulesProps
} from './types'

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
const isShorterThanLimit: Validator = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
          limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
          isWrittenValueHasInvalidType = !['string', 'number'].includes(typeof writtenValue),
          writtenValueLength = String(writtenValue).length,
          isWrittenValueShorterThanLimit = typeof limit === 'number' && writtenValueLength < limit

    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value can be only string or number`)

    return isWrittenValueShorterThanLimit
}

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
const isLongerThanLimit: Validator = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
        limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
        isWrittenValueHasInvalidType = !['string', 'number'].includes(typeof writtenValue),
        writtenValueLength = String(writtenValue).length,
        isWrittenValueLongerThanLimit = typeof limit === 'number' && writtenValueLength > limit
    
    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value can be only string or number`)

    return isWrittenValueLongerThanLimit
}

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
const isGreaterThanLimit: Validator = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
        limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
        isWrittenValueHasInvalidType = isNaN(Number(writtenValue)) || writtenValue === null,
        isWrittenValueGreaterThanLimit = typeof limit === 'number' && Number(writtenValue) > limit

    
    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value can be only number`)

    return isWrittenValueGreaterThanLimit
}

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
const isLessThanLimit: Validator = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
        limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
        isWrittenValueHasInvalidType = isNaN(Number(writtenValue)) || writtenValue === null,
        isWrittenValueLessThanLimit = typeof limit === 'number' && Number(writtenValue) < limit


    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value can be only number`)

    return isWrittenValueLessThanLimit
}

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
const isWrittenValueEmpty: SimpleValidator = (writtenValue) => {
    const isWrittenValueHasInvalidType = ['object', 'function', 'undefined'].includes(typeof writtenValue),
          writtenValueLength = String(writtenValue).length,
          isWrittenValueEmpty = writtenValueLength === 0

    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value can be only string or number`)

    return isWrittenValueEmpty
}

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
const isMailInvalid: SimpleValidator = (writtenValue) => {
    const isWrittenValueHasInvalidType = ['object', 'function','undefined'].includes(typeof writtenValue),
          isMailInvalid = !/.+@.+\..+/i.test(String(writtenValue))

    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value can be only string or number`)

    return isMailInvalid
}

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
const isNumberValid: NumberValidator = (writtenValue, numberRules = {}) => {
    const isWrittenValueHasInvalidType = ['object', 'function', 'undefined'].includes(typeof writtenValue) || writtenValue === null
    writtenValue = String(writtenValue)

    /**
     * default regExp allow:
     * 1.number
     * 2.negative number
     * 3.single dot
     */
    let {
            shouldLockNegativeNumber = false,
            shouldLockFloatNumber = false,
            allowableSymbols = [],
            customRegExp = null,
            isLiveValidator = false
        } = numberRules || {},
        /**
         * Экранирование тире
         */
        allowableValidateSymbols = allowableSymbols.includes('-') ? allowableSymbols.join('').replace(/-/g, '\\-') : allowableSymbols.join(''),
        /**
         * Допустимые символы
         */
        allowableSymbolsRegExpString = `${allowableValidateSymbols}1-9`,
        defaultRegExp = new RegExp(`^[-]?([${allowableSymbolsRegExpString}]+)?[.]?([${allowableSymbolsRegExpString}]+)?$`),
        invalidPatternList = isLiveValidator ? ['-.', '.', '.-'] : ['-.', '.', '.-', '-'],
        hasWriteValueInvalidPattern = invalidPatternList.includes(writtenValue),
        isNumberValid: boolean = true

    if (writtenValue) {

        let regExp = defaultRegExp

        if (shouldLockNegativeNumber) {
            regExp = shouldLockFloatNumber ? new RegExp(`^[${allowableSymbolsRegExpString}]+$`) : new RegExp(`^([${allowableSymbolsRegExpString}]+)?[.]?([${allowableSymbolsRegExpString}]+)?$`)
        }

        if (shouldLockFloatNumber) {
            regExp = shouldLockNegativeNumber ? new RegExp(`^[${allowableSymbolsRegExpString}]+$`) : new RegExp( `^[-]?([${allowableSymbolsRegExpString}]+)?$`)
        }

        /**
         * Проверка по указанным настройкам
         */
        isNumberValid = regExp.test(writtenValue)


        /**
         * Вычисление не валидных шаблонов
         */
        if (hasWriteValueInvalidPattern) {
            isNumberValid = false
        }

        /**
         * Проверка по кастомному выражению
         */
        if (customRegExp) {
            isNumberValid = customRegExp.test(writtenValue)
        }

    }

    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value can be only number or string`)

    return isNumberValid
}

export {
    isShorterThanLimit,
    isLongerThanLimit,
    isGreaterThanLimit,
    isLessThanLimit,
    isWrittenValueEmpty,
    isMailInvalid,
    isNumberValid
}
