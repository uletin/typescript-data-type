/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */



/**
 * 1. Array of Number
 * [1,2,3,4]
 */

//type inference
let list = [1,2,3,4,5]

// square bracket
let list2: number[]
list2 = [1,2,3,4]

// generic array
let list3: Array<number>
list3 = [1,2,3]

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

//generic
let list4: Array<string>
list4 = ["a", "b", "c"]



/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

//inferance
let list5 = ["hello", 1,3]

//square bracket
let list6:(string|number)[]
list6 = ["hello",2,3, "4"]

let list7:Array<string|number>
list7 = ["hello", 2,3,4]


/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

let list8: [string,number,number,number]
list8 = ["oke", 1,2,3]

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

// inline interface
let list9: {color:string, index:number}[]
list9 = [
    {color:'blue', index:1},
    {color:'red', index:2},
]

//generic array
let list10: Array<{color:string; index:number}>
list10 = [
    {color:'blue', index:1},
    {color:'red', index:2},
]


/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

let matrix: number[][]

matrix = [
    [1,2],
    [3,4]
]

let matrixs: Array<Array<number>>
matrixs = [
    [1,2],
    [3,4]
]


/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

let [a,b,c,d]: [number, number, number, string] = [1,2,3,"four"]