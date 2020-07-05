"use strict";
// null able
function getFormattedValue(value, unit) {
    if (unit === void 0) { unit = "pt"; }
    if (value == null)
        return "--" + unit;
    return value.toFixed(1) + " " + unit;
}
console.log(getFormattedValue(0.1));
console.log(getFormattedValue(0));
console.log(getFormattedValue(100, "kg"));
console.log(getFormattedValue(null));
// 引数をオプションにする
function greet(name) {
    if (name == undefined)
        return "Hello";
    return "Hello " + name.toUpperCase();
}
console.log(greet());
console.log(greet("Taro"));
function registerUser(user) { }
registerUser({});
