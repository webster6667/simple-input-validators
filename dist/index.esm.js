function r(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var e={exports:{}};!function(r){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(r.exports=e=function(r){return typeof r},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=e=function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r.exports.default=r.exports,r.exports.__esModule=!0),e(n)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0}(e);var n=r(e.exports),t=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.limit,o=void 0===t?null:t,i="string"==typeof o?Number(o):o,u=!Array.isArray(r)&&!["string","number"].includes(n(r)),l="number"!=typeof i&&null!==i||null!==i&&isNaN(i),a=Array.isArray(r)?r.length:String(r).length,s="number"==typeof i&&a<i;if(l)throw new TypeError("limit value must be only number or number in string like '1'");if(u)throw new TypeError("written value must be only string, number or array");return s},o=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.limit,o=void 0===t?null:t,i="string"==typeof o?Number(o):o,u=!Array.isArray(r)&&!["string","number"].includes(n(r)),l="number"!=typeof i&&null!==i||null!==i&&isNaN(i),a=Array.isArray(r)?r.length:String(r).length,s="number"==typeof i&&a>i;if(l)throw new TypeError("limit value must be only number or number in string like '1'");if(u)throw new TypeError("written value must be only string, number or array");return s},i=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.limit,t=void 0===n?null:n,o="string"==typeof t?Number(t):t,i=isNaN(Number(r))||null===r,u="number"!=typeof o&&null!==o||null!==o&&isNaN(o),l="number"==typeof o&&Number(r)>o;if(u)throw new TypeError("limit value must be only number or number in string like '1'");if(i)throw new TypeError("written value can be only number");return l},u=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.limit,t=void 0===n?null:n,o="string"==typeof t?Number(t):t,i=isNaN(Number(r))||null===r,u="number"!=typeof o&&null!==o||null!==o&&isNaN(o),l="number"==typeof o&&Number(r)<o;if(u)throw new TypeError("limit value must be only number or number in string like '1'");if(i)throw new TypeError("written value can be only number");return l},l=function(r){var e=!Array.isArray(r)&&!["string","number"].includes(n(r)),t=0===(Array.isArray(r)?r.length:String(r).length);if(e)throw new TypeError("written value can be only string or number");return t},a=function(r){var e=!["string","number"].includes(n(r)),t=!/.+@.+\..+/i.test(String(r));if(e)throw new TypeError("written value can be only string or number");return t},s=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=!["string","number"].includes(n(r))||null===r;r=String(r);var o=e||{},i=o.shouldLockNegativeNumber,u=void 0!==i&&i,l=o.shouldLockFloatNumber,a=void 0!==l&&l,s=o.allowableSymbols,y=void 0===s?[]:s,m=o.customRegExp,b=void 0===m?null:m,p=o.isLiveValidator,c=void 0!==p&&p,f=y.includes("-")?y.join("").replace(/-/g,"\\-"):y.join(""),g="".concat(f,"0-9"),v=new RegExp("^[-]?([".concat(g,"]+)?[.]?([").concat(g,"]+)?$")),w=c?["-.",".",".-"]:["-.",".",".-","-"],d=w.includes(r),h=!0;if(r){var N=v;u&&(N=a?new RegExp("^[".concat(g,"]+$")):new RegExp("^([".concat(g,"]+)?[.]?([").concat(g,"]+)?$"))),a&&(N=u?new RegExp("^[".concat(g,"]+$")):new RegExp("^[-]?([".concat(g,"]+)?$"))),h=N.test(r),d&&(h=!1),b&&(h=b.test(r))}if(t)throw new TypeError("written value can be only number or string");return h},y=function(r,e){Object.keys(r).forEach((function(n){var t=e[n];t&&(r[n]=t)}))};export{y as errorDataHandler,i as isGreaterThanLimit,u as isLessThanLimit,o as isLongerThanLimit,a as isMailInvalid,s as isNumberValid,t as isShorterThanLimit,l as isWrittenValueEmpty};
