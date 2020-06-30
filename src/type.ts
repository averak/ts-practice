/* 基本的な型 */

// boolean
let flag: boolean = false;

// number
let decimal: number = 123;
let hex: number = 0xff;
let binary: number = 0b0000;
let octal: number = 0o123;

// string
let color: string = "while";
color = "black";
let myColor = `my color is ${color}`;

// array
let list: number[] = [1, 2, 3];
// = let list: Array<number> = [1, 2, 3]

// tuple
let x: [string, number];
x = ["tokyo", 19];
// x = [19, 'tokyo']  // => Error!
// console.log(x[0].substr(1)) // => 'okyo'

// union
let value: boolean | number | string;
value = true;
value = 100;
value = "text";
let numberOrStrings: (number | string)[];
numberOrStrings = [1, 2, "text"];
let nullAble: string | null;
nullAble = "hello";
nullAble = null;

// literal
let var0: "text";
let var1: 100;
let var2: "text1" | "text2" | "text3"; // use literal & union type

