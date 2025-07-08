
// TypeScript Basics
// tsc .\basics.ts  => to compile the code => creation or updating of the javascript file
// tsc --watch .\basics.ts => to compile the code and watch for changes
// node .\basics.js => to run Javascript file



// This code demonstrates the basic types and structures in TypeScript

export {}
let name ='Imen';
console.log("", name )

//variables

//numbers

let a = 10;

let nbre1:number=20;

let myAge:number = 25;

//strings
let b ;
b='hello';
let myName: string = 'Imen';


//booleans

let learning:boolean = true;

//undefined and null

let u:undefined = undefined;
let n:null = null;

let y;
console.log("", y); // undefined
console.log("", n); // null

//arrays

let list1: number[] = [1,2,3];
console.log("", list1);
console.log("", list1[0]);
let list11: string[] = ['1','2','3'];
console.log("", list11);
console.log("", list1[3]);

let list2: Array<number> = [1,2,3];
let list22: Array<string> = ['1','2','3'];

//tuples => for fixed values but different types
let tuple1: [number, string] = [1, 'hello'];

let tuple2: [number, string, boolean];
tuple2 = [2, 'hello', true];
console.log("", tuple2[0]); // 2
console.log("", tuple2[1].substring(2)); // 'hello'
console.log("", tuple2[2]); // true

//enums => giving more friendly names to sets of values => a set of named constant values 
// =>  It helps make your code more readable and maintainable when working with a fixed set of related values (like roles, directions, states, etc.).
enum Direction {Up, Down, Left, Right}
let dir: Direction = Direction.Up;
console.log("", dir); // 0 // Up is 0
console.log("", Direction[dir]); // 'Up' // Up is the name of the enum

enum statusCode {Success = 200, NotFound = 404, InternalServerError = 500}
let status: statusCode = statusCode.Success;
console.log("", status); // 200
console.log("", statusCode[status]); // 'Success'

enum Color {Red, Green=3, Blue}
let c: Color = Color.Green;
console.log("", c); // 1 ( because by default enums begin numbing their numbers starting at 0)/ 3 => if we set manually the value of one of its members
console.log("", Color[c]); // 'Green'
// Using enums with string values
enum ColorString {'red' = 'red', 'green' = 'green', 'blue' = 'blue'}
let c2: ColorString = ColorString.red;
console.log("", c2); // 'red'
console.log("", ColorString[c2]); // 'red'




//unknown => a type that can be anything, but you need to check its type before using it
let unknownValue: unknown = "hello"; // can be a number, string, boolean, etc.
console.log("", unknownValue);//hello
//console.log("", unknownValue.toUpperCase()); // error: Object is of type 'unknown'.

// unknown forces you to check the type before using it.
if (typeof unknownValue === 'string') {
    console.log("", unknownValue.toUpperCase()); // 'HELLO'
} 

//any => a type that can be anything, but you can use it without checking its type
//❗ any bypasses all TypeScript checks. It's like turning off the type system

let anyValue: any = "Bonjour"; // can be a number, string, boolean, etc.
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

function myFunction(): void {
    console.log("This function does not return anything - basics.ts:121");
}
myFunction(); // This function does not return anything