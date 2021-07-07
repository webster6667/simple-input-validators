<p align="center" style="text-align:center">
    <img src="./illustration.svg" alt="illustration" width="100"/>
</p>

# simple-input-validators

> Functions for validate enter data

[![npm version](https://badge.fury.io/js/simple-input-validators.svg)](https://www.npmjs.com/package/simple-input-validators)
[![](https://data.jsdelivr.com/v1/package/npm/simple-input-validators/badge)](https://www.jsdelivr.com/package/npm/simple-input-validators)


## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Initialization](#initialization)
- [Methods](#methods)
  - [isShorterThanLimit](#isShorterThanLimit)
  - [isLongerThanLimit](#isLongerThanLimit)
  - [isGreaterThanLimit](#isGreaterThanLimit)
  - [isLessThanLimit](#isLessThanLimit)
  - [isWrittenValueEmpty](#isWrittenValueEmpty)
  - [isMailInvalid](#isMailInvalid)
  - [isNumberValid](#isNumberValid)
  - [errorDataHandler](#errorDataHandler)

## Quick start

### Install

We support all platforms.

#### npm

For module bundlers such as Webpack or Browserify.

```shell
npm i simple-input-validators
```

#### Include with &lt;script&gt;

1. <a href="https://cdn.jsdelivr.net/npm/simple-input-validators/dist/lib/simple-input-validators.js" target="_blank">Download lib</a>
2. Add script to html

```html
<script src="simple-input-validators.js"></script>
```

##### CDN

Recommended for learning purposes, you can use the latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/simple-input-validators/dist/lib/simple-input-validators.js"></script>
```

Recommended for production for avoiding unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/simple-input-validators@0.0.0/dist/lib/simple-input-validators.js"></script>
```

### Initialization

#### ES6

simple-input-validators as an ES6 module.

```js
import {
    isShorterThanLimit,
    isLongerThanLimit,
    isGreaterThanLimit,
    isLessThanLimit,
    isWrittenValueEmpty,
    isMailInvalid,
    isNumberValid,
    errorDataHandler
} from 'simple-input-validators';

let hasError = true,
    inputRules = {
        minLengthRules: {
            limit: 1,
            message: 'is short'
        },
        maxLengthRules: {
            limit: 3,
            message: 'is long'
        },
        isEmptyRules: {
            message: 'is empty'
        },
        maxValueRules: {
            limit: 125,
            message: 'is greater'
        },
        minValueRules: {
            limit: 10,
            message: 'is less'
        },
        emailRules: {
            message: 'not valid email'
        },
        numberRules: {
            message: 'not valid number'
        },
    },
    commonErrorData = {
        hasError: false,
        message: ''
    },
    writtenValue = '55'

if (isShorterThanLimit(writtenValue, inputRules.minLengthRules)) {
    errorDataHandler(commonErrorData, {...inputRules.minLengthRules, hasError})
}

if (isLongerThanLimit(writtenValue, inputRules.maxLengthRules)) {
    errorDataHandler(commonErrorData, {...inputRules.maxLengthRules, hasError})
}

if (isWrittenValueEmpty(writtenValue)) {
    errorDataHandler(commonErrorData, {...inputRules.isEmptyRules, hasError})
}

if (isGreaterThanLimit(writtenValue, inputRules.maxValueRules)) {
    errorDataHandler(commonErrorData, {...inputRules.maxValueRules, hasError})
}

if (isLessThanLimit(writtenValue, inputRules.minValueRules)) {
    errorDataHandler(commonErrorData, {...inputRules.minValueRules, hasError})
}

if (isMailInvalid(writtenValue)) {
    errorDataHandler(commonErrorData, {...inputRules.emailRules, hasError})
}

if (!isNumberValid(writtenValue)) {
    errorDataHandler(commonErrorData, {...inputRules.numberRules, hasError})
}

```

#### Node

simple-input-validators as a Node.js module

```js
const { isShorterThanLimit,
        isLongerThanLimit,
        isGreaterThanLimit,
        isLessThanLimit,
        isWrittenValueEmpty,
        isMailInvalid,
        isNumberValid,
        errorDataHandler
} = require('simple-input-validators');

let hasError = true,
    inputRules = {
        minLengthRules: {
        limit: 1,
            message: 'is short'
        },
        maxLengthRules: {
            limit: 3,
            message: 'is long'
        },
        isEmptyRules: {
            message: 'is empty'
        },
        maxValueRules: {
            limit: 125,
            message: 'is greater'
        },
        minValueRules: {
            limit: 10,
            message: 'is less'
        },
        emailRules: {
            message: 'not valid email'
        },
        numberRules: {
            message: 'not valid number'
        },
    },
    commonErrorData = {
        hasError: false,
        message: ''
    },
    writtenValue = '55'

if (isShorterThanLimit(writtenValue, inputRules.minLengthRules)) {
    errorDataHandler(commonErrorData, {...inputRules.minLengthRules, hasError})
}

if (isLongerThanLimit(writtenValue, inputRules.maxLengthRules)) {
    errorDataHandler(commonErrorData, {...inputRules.maxLengthRules, hasError})
}

if (isWrittenValueEmpty(writtenValue)) {
    errorDataHandler(commonErrorData, {...inputRules.isEmptyRules, hasError})
}

if (isGreaterThanLimit(writtenValue, inputRules.maxValueRules)) {
    errorDataHandler(commonErrorData, {...inputRules.maxValueRules, hasError})
}

if (isLessThanLimit(writtenValue, inputRules.minValueRules)) {
    errorDataHandler(commonErrorData, {...inputRules.minValueRules, hasError})
}

if (isMailInvalid(writtenValue)) {
    errorDataHandler(commonErrorData, {...inputRules.emailRules, hasError})
}

if (!isNumberValid(writtenValue)) {
    errorDataHandler(commonErrorData, {...inputRules.numberRules, hasError})
}
```

#### Browser

Exports a global variable called `simpleInputValidators`. Use it like this

Connect to html file ```<script src="https://cdn.jsdelivr.net/npm/simple-input-validators/dist/lib/simple-input-validators.js" ></script>```

```html
<script>

    let hasError = true,
        inputRules = {
            minLengthRules: {
                limit: 1,
                message: 'is short'
            },
            maxLengthRules: {
                limit: 3,
                message: 'is long'
            },
            isEmptyRules: {
                message: 'is empty'
            },
            maxValueRules: {
                limit: 125,
                message: 'is greater'
            },
            minValueRules: {
                limit: 10,
                message: 'is less'
            },
            emailRules: {
                message: 'not valid email'
            },
            numberRules: {
                message: 'not valid number'
            },
        },
        commonErrorData = {
            hasError: false,
            message: ''
        },
        writtenValue = '55'

    if (simpleInputValidators.isShorterThanLimit(writtenValue, inputRules.minLengthRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.minLengthRules, hasError})
    }

    if (simpleInputValidators.isLongerThanLimit(writtenValue, inputRules.maxLengthRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.maxLengthRules, hasError})
    }

    if (simpleInputValidators.isWrittenValueEmpty(writtenValue)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.isEmptyRules, hasError})
    }

    if (simpleInputValidators.isGreaterThanLimit(writtenValue, inputRules.maxValueRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.maxValueRules, hasError})
    }

    if (simpleInputValidators.isLessThanLimit(writtenValue, inputRules.minValueRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.minValueRules, hasError})
    }

    if (simpleInputValidators.isMailInvalid(writtenValue)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.emailRules, hasError})
    }

    if (!simpleInputValidators.isNumberValid(writtenValue)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.numberRules, hasError})
    }

</script>
```

#### AMD

simple-input-validators as an AMD module. Use with Require.js, System.js, and so on.

1. <a href="https://cdn.jsdelivr.net/npm/simple-input-validators/dist/lib/simple-input-validators.js" target="_blank">Download lib</a>
2. Connect to your module loader

```js
requirejs(['simple-input-validators'], function(simpleInputValidators) {
    let hasError = true,
        inputRules = {
            minLengthRules: {
                limit: 1,
                message: 'is short'
            },
            maxLengthRules: {
                limit: 3,
                message: 'is long'
            },
                isEmptyRules: {
                message: 'is empty'
            },
            maxValueRules: {
                limit: 125,
                message: 'is greater'
            },
            minValueRules: {
                limit: 10,
                message: 'is less'
            },
            emailRules: {
                message: 'not valid email'
            },
            numberRules: {
                message: 'not valid number'
            },
        },
        commonErrorData = {
            hasError: false,
            message: ''
        },
        writtenValue = '55'

    if (simpleInputValidators.isShorterThanLimit(writtenValue, inputRules.minLengthRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.minLengthRules, hasError})
    }

    if (simpleInputValidators.isLongerThanLimit(writtenValue, inputRules.maxLengthRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.maxLengthRules, hasError})
    }

    if (simpleInputValidators.isWrittenValueEmpty(writtenValue)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.isEmptyRules, hasError})
    }

    if (simpleInputValidators.isGreaterThanLimit(writtenValue, inputRules.maxValueRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.maxValueRules, hasError})
    }

    if (simpleInputValidators.isLessThanLimit(writtenValue, inputRules.minValueRules)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.minValueRules, hasError})
    }

    if (simpleInputValidators.isMailInvalid(writtenValue)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.emailRules, hasError})
    }

    if (!simpleInputValidators.isNumberValid(writtenValue)) {
        simpleInputValidators.errorDataHandler(commonErrorData, {...inputRules.numberRules, hasError})
    }
});
```

## Methods

### isShorterThanLimit

function that check is write value shorted than limit


#### Params
- `writtenValue`
  - Type: `number,string`
  
- `validatorSettings`
  - Type: `ValidatorSettingsProps`
  

#### Returns
- `boolean`

#### Example
```JS
isShorterThanLimit('abcd',{limit: 5})
// => true
```


### isLongerThanLimit

function that check is write value longer than limit


#### Params
- `writtenValue`
  - Type: `number,string`
  
- `validatorSettings`
  - Type: `ValidatorSettingsProps`
  

#### Returns
- `boolean`

#### Example
```JS
isLongerThanLimit('abcd',{limit: 3})
// => true
```


### isGreaterThanLimit

function that check is write value greater than limit


#### Params
- `writtenValue`
  - Type: `number,string`
  
- `validatorSettings`
  - Type: `ValidatorSettingsProps`
  

#### Returns
- `boolean`

#### Example
```JS
isGreaterThanLimit(5,{limit: 3})
// => true
```


### isLessThanLimit

function that check is write value less than limit


#### Params
- `writtenValue`
  - Type: `number,string`
  
- `validatorSettings`
  - Type: `ValidatorSettingsProps`
  

#### Returns
- `boolean`

#### Example
```JS
isLessThanLimit(2,{limit: 3})
// => true
```


### isWrittenValueEmpty

function that check is write value empty


#### Params
- `writtenValue`
  - Type: `number,string`
  

#### Returns
- `boolean`

#### Example
```JS
isWrittenValueEmpty('')
// => true
```


### isMailInvalid

function that check is write mail invalid


#### Params
- `writtenValue`
  - Type: `number,string,null`
  

#### Returns
- `boolean`

#### Example
```JS
isMailInvalid('ab')
// => true

isMailInvalid('ab@mail.ru')
// => false
```


### isNumberValid

Validate number by rules
1. negative values
2. dots
3. allowableSymbols


#### Params
- `writtenValue`
  - Type: `string,number`
  - Description: data
- `numberRules`
  - Type: `NumberValidatorRulesProps`
  - Description: paramDesc

#### Returns
- `boolean`

#### Example
```JS
isNumberValid(1) // => true
isNumberValid('1') // => true

isNumberValid(1.5) // => true
isNumberValid(1.5, {shouldLockFloatNumber: true} // => false

isNumberValid(-1) // => true
isNumberValid(-1, {shouldLockNegativeNumber: true} // => false

isNumberValid('12a') // => false
isNumberValid('12a', {allowableSymbols: ['a']}) // => true

isNumberValid('1ab') // => false
isNumberValid('1ab', {customRegExp: /[1-9][a-z]+/}) // => true
```


### errorDataHandler

function update commonErrorData values to new input props


#### Params
- `commonErrorData`
  
  - Description: object that have all error state for single input
- `propsToUpdate`
  
  - Description: new props that must be update in commonErrorData


#### Example
```JS
const commonErrorData = {
         hasError: false,
         message: ''
      },
      validatorRules = {
         message: 'errorMessage'
      }

errorDataHandler(commonErrorData, {...validatorRules, hasError: true}) // => void

console.log(commonErrorData) // => {
         hasError: true,
         message: 'errorMessage'
}
```



## Author

webster6667
