export interface ValidatorSettingsProps {
    /**
     * Limit of length or number value
     */
    limit?: null | number | string,

    /**
     * message of error
     */
    message?: null | string,
    [key: string]: any
}

export type ValidatorWithArray = (
    /**
     * Validation value
     */
    writtenValue: string | number | any[],

    /**
     * Validator settings
     */
    ValidatorSettingsProps: ValidatorSettingsProps,
) => boolean

export type Validator = (
    /**
     * Validation value
     */
    writtenValue: string | number,
    
    /**
     * Validator settings
     */
    ValidatorSettingsProps: ValidatorSettingsProps,
) => boolean

export type SimpleValidator = (
    /**
     * Validation value
     */
    writtenValue: string | number,
) => boolean

export type SimpleValidatorWithArray = (
    /**
     * Validation value
     */
    writtenValue: string | number | any[],
) => boolean

export interface NumberValidatorRulesProps {
    shouldLockNegativeNumber?: boolean,
    shouldLockFloatNumber?: boolean,
    allowableSymbols?: string[],
    customRegExp?: RegExp,
    isLiveValidator?: boolean,
    [key: string]: any;
}

export interface CommonErrorData {
    [key: string]: any
}


export type ErrorDataHandler = <T extends CommonErrorData>(commonErrorData: T, propsToUpdate: Partial<T>) => void

export type NumberValidator = (writtenValue: string | number | null, numberRules?: NumberValidatorRulesProps) => boolean