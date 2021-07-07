import {errorDataHandler} from '../src'

describe('error handler update common error data', () => {

    test('function update values commonErrorData, that input to propsToUpdate', () => {

        const commonErrorData = {
                hasError: false,
                message: '',
                limit: 0
              },
              validatorRules = {
                message: 'has error'
              },
              expectCommonErrorData = {
                  ...commonErrorData,
                  ...validatorRules,
                  hasError: true
              }

        errorDataHandler(commonErrorData, {...validatorRules, hasError: true})

        expect(commonErrorData).toEqual(expectCommonErrorData)
    });

})


