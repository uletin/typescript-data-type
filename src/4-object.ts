/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

let product = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

//inline interface
let product1: {
  id : string
  product : string
  price : number
  node : string
}

product1:{
  id : '1'
  product : 'baju basket'
  price : 20000
  node : 'node js'
}

interface Product {
  id : string
  product : string
  price : number
  node : string
}
 let product2: Product
 let product3: Product

/**
 * 2. Nested Object
 */
 
 interface Item {
   id : string,
   productName : string,
   price : number,
   productDetail : ItemDetail,
 }
 
 interface ItemDetail{
   year: number,
   storage : number,
 }
 
 let product4: Item
 product4 = {
   id : "ID-1",
   productName : "Baju",
   price : 2000,
   productDetail : {
     year : 2020,
     storage : 256
   }
 
 }


/**
 * 3. Nested, Array of Object
 */
interface User {
  id:string,
  name:string,
  address: Array<Address>,
}

interface Address {
  street : string,
  city : string,
}

let user1: User
user1 = {
  id: "U-1",
  name: "Adi dodi",
  address: [
    {
      street : "Jln. Setapak No.2",
      city: "Jakarta"
    },
    {
      street: "Jln. Lebar sekali no 10",
      city: "Medan"
    }
  ]
}



/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

/**
 * 4. Nested, Object of Object
 */

 interface CartItems{
  id : string,
  name: string,
  qty: number,
}

interface Cart{
  idCart : string,
  dateOrdered: Date,
  items: {
    [key: string]: CartItems,
  }
}

let UserChart: Cart

UserChart = {
  idCart : 'C1',
  dateOrdered : new Date('2020-05-20'),
  items: {
    p1 :{
      "id": "P-1",
      "name": "Mechanical Keyboard",
      "qty": 2
    },
    p2 :{
      "id": "P-2",
      "name": "USB Hub",
      "qty": 1
    },
  }
}
/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

/**
 * 5. Object Destructuring
 */

let fullName = {
  firstName : "Sastra",
  lastName : "Nababan",
}
//type interface
let {firstName, lastName} = fullName

// inline interface
  // let {firstName, lastName} : {firstname:string, lastName:string} = fullName

