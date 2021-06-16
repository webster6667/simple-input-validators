export interface ValidatorSettingsProps {
    /**
     * Limit of length or number value
     */
    limit?: null | number | string;
    /**
     * message of error
     */
    message?: null | string;
    [key: string]: any;
}
export declare type Validator = (
/**
 * Validation value
 */
writtenValue: string | number, 
/**
 * Validator settings
 */
ValidatorSettingsProps: ValidatorSettingsProps) => boolean;
export declare type SimpleValidator = (
/**
 * Validation value
 */
writtenValue: string | number) => boolean;
export interface NumberValidatorRulesProps {
    shouldLockNegativeNumber?: boolean;
    shouldLockFloatNumber?: boolean;
    allowableSymbols?: string[];
    customRegExp?: RegExp;
    isLiveValidator?: boolean;
}
export declare type NumberValidator = (writtenValue: string | number | null, numberRules?: NumberValidatorRulesProps) => boolean;