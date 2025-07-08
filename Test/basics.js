"use strict";
// TypeScript Basics
// tsc .\basics.ts  => to compile the code => creation or updating of the javascript file
// tsc --watch .\basics.ts => to compile the code and watch for changes
// node .\basics.js => to run Javascript file
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'Imen';
console.log("", name);
//variables
//numbers
var a = 10;
var nbre1 = 20;
var myAge = 25;
//strings
var b;
b = 'hello';
var myName = 'Imen';
//booleans
var learning = true;
//undefined and null
var u = undefined;
var n = null;
var y;
console.log("", y); // undefined
console.log("", n); // null
//arrays
var list1 = [1, 2, 3];
console.log("", list1);
console.log("", list1[0]);
var list11 = ['1', '2', '3'];
console.log("", list11);
console.log("", list1[3]);
var list2 = [1, 2, 3];
var list22 = ['1', '2', '3'];
//tuples => for fixed values but different types
var tuple1 = [1, 'hello'];
var tuple2;
tuple2 = [2, 'hello', true];
console.log("", tuple2[0]); // 2
console.log("", tuple2[1].substring(2)); // 'hello'
console.log("", tuple2[2]); // true
//enums => giving more friendly names to sets of values => a set of named constant values 
// =>  It helps make your code more readable and maintainable when working with a fixed set of related values (like roles, directions, states, etc.).
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var dir = Direction.Up;
console.log("", dir); // 0 // Up is 0
console.log("", Direction[dir]); // 'Up' // Up is the name of the enum
var statusCode;
(function (statusCode) {
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["InternalServerError"] = 500] = "InternalServerError";
})(statusCode || (statusCode = {}));
var status = statusCode.Success;
console.log("", status); // 200
console.log("", statusCode[status]); // 'Success'
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("", c); // 1 ( because by default enums begin numbing their numbers starting at 0)/ 3 => if we set manually the value of one of its members
console.log("", Color[c]); // 'Green'
// Using enums with string values
var ColorString;
(function (ColorString) {
    ColorString["red"] = "red";
    ColorString["green"] = "green";
    ColorString["blue"] = "blue";
})(ColorString || (ColorString = {}));
var c2 = ColorString.red;
console.log("", c2); // 'red'
console.log("", ColorString[c2]); // 'red'
//unknown => a type that can be anything, but you need to check its type before using it
var unknownValue = "hello"; // can be a number, string, boolean, etc.
console.log("", unknownValue); //hello
//console.log("", unknownValue.toUpperCase()); // error: Object is of type 'unknown'.
// unknown forces you to check the type before using it.
if (typeof unknownValue === 'string') {
    console.log("", unknownValue.toUpperCase()); // 'HELLO'
}
//any => a type that can be anything, but you can use it without checking its type
//❗ any bypasses all TypeScript checks. It's like turning off the type system
var anyValue = "Bonjour"; // can be a number, string, boolean, etc.
console.log("", anyValue); // Bonjour
anyValue = 42; // can be a number now
console.log("", anyValue); // 42
anyValue = true; // can be a boolean now
console.log("", anyValue); // true
//anyValue.toUpperCase(); // works without error, but it's not type-safe
//any and unknown allow you to work with values of any type
//Use unknown when you receive data from an external source (e.g., JSON.parse, user input, API responses) and want to force type-checking before using it.
// Use any only as a last resort, like in quick prototypes or when gradually migrating JS to TS.
//Void => a type that represents the absence of a value, used for functions that don't return anything
function myFunction() {
    console.log("This function does not return anything - basics.ts:121");
}
myFunction(); // This function does not return anything
// commit3
//commit4
//commit5
