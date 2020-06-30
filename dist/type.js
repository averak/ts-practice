"use strict";
/* 基本的な型 */
// boolean
var flag = false;
// number
var decimal = 123;
var hex = 0xff;
var binary = 0;
var octal = 83;
// string
var color = "while";
color = "black";
var myColor = "my color is " + color;
// array
var list = [1, 2, 3];
// = let list: Array<number> = [1, 2, 3]
// tuple
var x;
x = ["tokyo", 19];
// x = [19, 'tokyo']  // => Error!
// console.log(x[0].substr(1)) // => 'okyo'
// union
var value;
value = true;
value = 100;
value = "text";
var numberOrStrings;
numberOrStrings = [1, 2, "text"];
var nullAble;
nullAble = "hello";
nullAble = null;
// literal
var var0;
var var1;
var var2; // use literal & union type
