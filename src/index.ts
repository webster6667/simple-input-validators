import {
    Validator,
    ValidatorWithArray,
    ValidatorSettingsProps,
    SimpleValidator,
    SimpleValidatorWithArray,
    NumberValidator,
    NumberValidatorRulesProps,
    ErrorDataHandler
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
 *
 * isShorterThanLimit(['a','b','c','d'],{limit: 5})
 * // => true
 */
const isShorterThanLimit: ValidatorWithArray = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
          limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
          isWrittenValueHasInvalidType = Array.isArray(writtenValue) ? false : !['string', 'number'].includes(typeof writtenValue),
          isLimitHasInvalidType = typeof limit !== 'number' && limit !== null || limit !== null && isNaN(limit),
          writtenValueLength = Array.isArray(writtenValue) ? writtenValue.length : String(writtenValue).length,
          isWrittenValueShorterThanLimit = typeof limit === 'number' && writtenValueLength < limit
    
    /**
     * limit type validator
     */
    if (isLimitHasInvalidType) throw new TypeError(`limit value must be only number or number in string like '1'`)

    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value must be only string, number or array`)

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
 *
 * isLongerThanLimit(['a','b','c','d'],{limit: 3})
 * // => true
 */
const isLongerThanLimit: ValidatorWithArray = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
        limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
        isWrittenValueHasInvalidType = Array.isArray(writtenValue) ? false : !['string', 'number'].includes(typeof writtenValue),
        isLimitHasInvalidType = typeof limit !== 'number' && limit !== null || limit !== null && isNaN(limit),
        writtenValueLength = Array.isArray(writtenValue) ? writtenValue.length : String(writtenValue).length,
        isWrittenValueLongerThanLimit = typeof limit === 'number' && writtenValueLength > limit

    /**
     * limit type validator
     */
    if (isLimitHasInvalidType) throw new TypeError(`limit value must be only number or number in string like '1'`)

    /**
     * written value type validator
     */
    if (isWrittenValueHasInvalidType) throw new TypeError(`written value must be only string, number or array`)

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
 *
 * // install package: https://www.npmjs.com/package/get-array-sum
 * import getArraySum from 'get-array-sum';
 *
 * const arraySum = getArraySum([1,2,3]), //6
 *       shouldValidateArray = !isNaN(arraySum) //true
 *
 * if (shouldValidateArray) {
 *   isGreaterThanLimit(arraySum,{limit: 3}) // true
 * }
 *
 */
const isGreaterThanLimit: Validator = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
        limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
        isWrittenValueHasInvalidType = isNaN(Number(writtenValue)) || writtenValue === null,
        isLimitHasInvalidType = typeof limit !== 'number' && limit !== null || limit !== null && isNaN(limit),
        isWrittenValueGreaterThanLimit = typeof limit === 'number' && Number(writtenValue) > limit

    /**
     * limit type validator
     */
    if (isLimitHasInvalidType) throw new TypeError(`limit value must be only number or number in string like '1'`)
    
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
 *
 * // install package: https://www.npmjs.com/package/get-array-sum
 * import getArraySum from 'get-array-sum';
 *
 * const arraySum = getArraySum([1,2,3]), //6
 *       shouldValidateArray = !isNaN(arraySum) //true
 *
 * if (shouldValidateArray) {
 *   isLessThanLimit(arraySum,{limit: 10}) // true
 * }
 *
 */
const isLessThanLimit: Validator = (writtenValue, validatorSettings = {}) => {
    const {limit: notConvertLimit = null} = validatorSettings,
        limit = typeof notConvertLimit === 'string' ? Number(notConvertLimit) : notConvertLimit,
        isWrittenValueHasInvalidType = isNaN(Number(writtenValue)) || writtenValue === null,
        isLimitHasInvalidType = typeof limit !== 'number' && limit !== null || limit !== null && isNaN(limit),
        isWrittenValueLessThanLimit = typeof limit === 'number' && Number(writtenValue) < limit


    /**
     * limit type validator
     */
    if (isLimitHasInvalidType) throw new TypeError(`limit value must be only number or number in string like '1'`)

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
 *
 * isWrittenValueEmpty([])
 * // => true
 */
const isWrittenValueEmpty: SimpleValidatorWithArray = (writtenValue) => {
    const isWrittenValueHasInvalidType = Array.isArray(writtenValue) ? false : !['string', 'number'].includes(typeof writtenValue),
          writtenValueLength = Array.isArray(writtenValue) ? writtenValue.length : String(writtenValue).length,
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
    const isWrittenValueHasInvalidType = !['string','number'].includes(typeof writtenValue),
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
    const isWrittenValueHasInvalidType = !['string', 'number'].includes(typeof writtenValue) || writtenValue === null
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
        allowableSymbolsRegExpString = `${allowableValidateSymbols}0-9`,
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
const errorDataHandler: ErrorDataHandler = (commonErrorData, propsToUpdate) => {

    Object.keys(commonErrorData).forEach((commonErrorKey) => {
        const updatedValue = propsToUpdate[commonErrorKey]

        if (updatedValue) {
            //@ts-ignore
            commonErrorData[commonErrorKey] = updatedValue
        }

    })
    
}

export {
    isShorterThanLimit,
    isLongerThanLimit,
    isGreaterThanLimit,
    isLessThanLimit,
    isWrittenValueEmpty,
    isMailInvalid,
    isNumberValid,
    errorDataHandler
}
