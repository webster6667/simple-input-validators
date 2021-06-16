<p align="center" style="text-align:center">
    <img src="./illustration.svg" alt="illustration" width="100"/>
</p>

# simple-input-validators

> description

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
    isNumberValid
} from 'simple-input-validators';

let hasError = false,
    writtenValue = '55'

if (isShorterThanLimit(writtenValue, {limit: 1})) {
    hasError = true
}

if (isLongerThanLimit(writtenValue, {limit: 3})) {
    hasError = true
}

if (isWrittenValueEmpty(writtenValue)) {
    hasError = true
}

if (isGreaterThanLimit(writtenValue, {limit: 125})) {
    hasError = true
}

if (isLessThanLimit(writtenValue, {limit: 10})) {
    hasError = true
}

if (isMailInvalid(writtenValue)) {
    hasError = true
}

if (!isNumberValid(writtenValue)) {
    hasError = true
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
        isNumberValid
} = require('simple-input-validators');

let hasError = false,
    writtenValue = '55'

if (isShorterThanLimit(writtenValue, {limit: 1})) {
    hasError = true
}

if (isLongerThanLimit(writtenValue, {limit: 3})) {
    hasError = true
}

if (isWrittenValueEmpty(writtenValue)) {
    hasError = true
}

if (isGreaterThanLimit(writtenValue, {limit: 125})) {
    hasError = true
}

if (isLessThanLimit(writtenValue, {limit: 10})) {
    hasError = true
}

if (isMailInvalid(writtenValue)) {
    hasError = true
}

if (!isNumberValid(writtenValue)) {
    hasError = true
}
```

#### Browser

Exports a global variable called `simpleInputValidators`. Use it like this

Connect to html file ```<script src="https://cdn.jsdelivr.net/npm/simple-input-validators/dist/lib/simple-input-validators.js" ></script>```

```html
<script>

    let hasError = false,
        writtenValue = '55'

    if (simpleInputValidators.isShorterThanLimit(writtenValue, {limit: 1})) {
        hasError = true
    }

    if (simpleInputValidators.isLongerThanLimit(writtenValue, {limit: 3})) {
        hasError = true
    }

    if (simpleInputValidators.isWrittenValueEmpty(writtenValue)) {
        hasError = true
    }

    if (simpleInputValidators.isGreaterThanLimit(writtenValue, {limit: 125})) {
        hasError = true
    }

    if (simpleInputValidators.isLessThanLimit(writtenValue, {limit: 10})) {
        hasError = true
    }

    if (simpleInputValidators.isMailInvalid(writtenValue)) {
        hasError = true
    }

    if (!simpleInputValidators.isNumberValid(writtenValue)) {
        hasError = true
    }

</script>
```

#### AMD

simple-input-validators as an AMD module. Use with Require.js, System.js, and so on.

1. <a href="https://cdn.jsdelivr.net/npm/simple-input-validators/dist/lib/simple-input-validators.js" target="_blank">Download lib</a>
2. Connect to your module loader

```js
requirejs(['simple-input-validators'], function(simpleInputValidators) {
    let hasError = false,
        writtenValue = '55'

    if (simpleInputValidators.isShorterThanLimit(writtenValue, {limit: 1})) {
        hasError = true
    }

    if (simpleInputValidators.isLongerThanLimit(writtenValue, {limit: 3})) {
        hasError = true
    }

    if (simpleInputValidators.isWrittenValueEmpty(writtenValue)) {
        hasError = true
    }

    if (simpleInputValidators.isGreaterThanLimit(writtenValue, {limit: 125})) {
        hasError = true
    }

    if (simpleInputValidators.isLessThanLimit(writtenValue, {limit: 10})) {
        hasError = true
    }

    if (simpleInputValidators.isMailInvalid(writtenValue)) {
        hasError = true
    }

    if (!simpleInputValidators.isNumberValid(writtenValue)) {
        hasError = true
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
isNumberValid('1.2') // => true
```



## Author

webster6667
