// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
let ta: string = 'hello ts';

let a;                  // undefined
let b: boolean          // boolean
b = true

let c: number
c = 1                   // number

let d: string
d = "hello"             // string


let e: bigint           // big int (starting ES2020)
e = 100n

let f : Symbol
f = Symbol("Sym")       // symbol  (starting ES2015)


let g = function () {   // function
    return null;
};

let h : null;    
h = null                // null ( special primitive )


let i : Record<string, unknown>;
i = {}                  // Object Literal

let j : [];             // array
j = []

class Product {
    // class
    //...
}
let k = new Product();

let z:any
z = 123
z = "hello"
z = [1,2,3]

function sum(a:number,b:number):number{
    return(a+b)
}

console.log(sum(2,2))

let multi: string | number
multi = "hello"
multi = 1
// multi = true

// type alias
type CustomType  = string | number
let myType: CustomType
myType = "Hello"
myType = 1