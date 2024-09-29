const menu =[
    {name:"Margherita",price: 8},
    {name: "Pepperoni",price: 10},
    {name: "Hawaian",price: 10},
    {name: "veggie",price: 9},
] 

let cashInRegister = 100
let nextOrderId = 1
const orderQueue= []

//challange add a utility function "addNewPizza" that takes a pizza object and add it to menu

function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}

function placeOrder(pizzaName){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++,pizza: selectedPizza, status:"ordered"}
    orderQueue.push(newOrder)
    return newOrder
}


function completeOrder(orderId : number){
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({name:"chicken bacon", cost:12}) 
addNewPizza({name:"bbq chicken", cost:12}) 
addNewPizza({name:"spicy sausage", cost:11}) 

placeOrder("chicken bacon")
completeOrder(1)

console.log("menu:", menu)
console.log("cash in register:",cashInRegister)
console.log("order queue:",orderQueue)


const myName: string = 'Robert';
const myAge : number = 24;
const bHasHobies : boolean = true;
const hobbies : string[] = ['programming','cooking'];

// tuple - they allow you to express an array where the type of fixed element is known 
// but need not to be the same 
const address : [string, number] = ["street", 99];

// use type any when u dont know the type that will be used especially when its a user input or a 
//3rd party library 
let myCar : any = 'BMW'
myCar = {brand:'BMW', series: 3}

//enum is used to define a set of named constant values 

enum Color {
    Gray,
    Red,
    Green = 100,
    Yellow = 2
}

const myColor : Color = Color.Green
console.log(myColor);

//FUNCTIONS- in typescript you may assign the function two things
// argument types/function types

//1.ARGUMENT TYPES 
function greet(name: string) {
    return "Hello, " + name;
  }
  
  greet("John"); // OK
  greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

  // HERE name:string defines that the argument name must be a string 

  //2. FUNCTION TYPES- refers to the return type of a function , specifying what kind of value the function
  // returns the expected type of data 

  function add(a: number, b: number): number {
    return a + b;
  }
// :number after the parameters defines the function's return type as a number 
//function types 
function returnMyName(myName): string{
    return myName 
}
console.log(returnMyName('Robert')) // prints: Robert 

// const myMultiply:(val1: number, val2: number)=> number;
// myMultiply = multiply;
// console.log = multiply;

function multiply(val1: number, val2: number): number {
    return val1 * val2;
  }
  
//argument types 

function multiply(value1:number, value2: number){
    return value1 * value2;
}

// console.log(multiply('Robert',5)) not possible , both arguments must be of type number 
console.log(multiply(10,5))

// void function type-- declaring functions as void is not usefull because you can only assign undefined or null to them 

function sayHello(): void {
    console.log('Hello!');
    //return myName; not possible because the function cant return anything due to the void assigned type

}


//OBJECTS- type object represents the non-primitive type 
// objects are comprised of key value pairs 
// we can assign types to the key-value pairs 

let complex : {data: number[],output:(all:boolean) => number[]}= {
    data:[100,3,99,10],
    output: function(all:boolean): number[]{
        return this.data
    }
};
// output:(all:boolean) => number[] this is a function that takes a bolean argument and returns an array of numbers 

// optional object properties

const right: {name: string, age? : number} = {
    name: 'Robert'
}

const alsoRight: {name: string, age?: number} = {
    name: 'Robert',
    age: 24
};

// UNION - variables are not restricted to only one assigned type 
// we can assign two or more types to a single varaible

let myRealAge: number | string = 24;
myRealAge = '24';

// INTERSECTION - type is simply a mix between two or more types which are compatible 




// The inline approaches are useful, but I prefer extracting them out to a new type. This means that if another part of your application needs to use the Ingredient type, it can.

// array syntax-- can contain multiple elements of the same type and is flexible in terms of the number of elements it caan hold 


// Array Syntax Example
let myArray: number[];  // This is an array that can hold any number of numbers.

myArray = [1, 2, 3, 4, 5];  // Valid array of numbers


//tuple syntax allows us to determine an array with a fixed number of elements where each element can have a different type 
 
// Tuple Syntax Example
let myTuple: [number, string];  // This is a tuple that must have exactly two elements: a number and a string.

myTuple = [42, "Hello"];  // Valid tuple: first element is a number, second is a string

// another example 

// Using Array Syntax
function setRange(range: number[]) {
    console.log(`Range is: ${range[0]} to ${range[1]}`);
  }
  
  setRange([10, 20]);
  
  // Using Tuple Syntax
  function setRange(range: [number, number]) {  // Tuple with exactly two numbers
    console.log(`Range is: ${range[0]} to ${range[1]}`);
  }
  
  setRange([10, 20]);  // Must provide exactly two elements

// add the types for more clarity

const setRange = (range: [x: number, y: number]) => {
    // rest of function body
  };

// optional members of tuples 

const goToLocation = (coordinates: [number, number, number | undefined]) => {};

//The problem here is that while the third member of the tuple is able to be a number or undefined, the function still is expecting something to be passed in. It's not a good solution to have to pass in undefined manually.

//Using a named tuple in combination with the optional operator ? is a better solution:


const goToLocation = (
    coordinates: [latitude: number, longitude: number, elevation?: number],
  ) => {};

//Alternatively, if you don't want to use named tuples, you can use the ? operator after the definition:

const goToLocation = (coordinates: [number, number, number?]) => {};


//This type describes an array of strings. To make that happen, we're passing a type (string) as an argument to another type (Array).

Array<string>;

Promise<string>

// set in JS is a feature that represents a collection of unique values 

const formats = new Set();

//a set is a built in object that lets you store unique values of any type whether primitive or object references 
//// set automatically removes duplicate values - used where uniqueness is important 
// removes duplicates entries from an array
// checking if an element is present in a set . its faster 
// sets can be used to perform matheatical set operations such as union(combining 2 sets), intersection(common elements btwn 2 sets ), difference(elements in setA but not in setB)
// storing unique primitive or object refrences
// sets provide a quick way to get the number of unique values 
// you can easily delete specific values from a set 


const obj1 = { id: 1 };
const obj2 = { id: 2 };
const mySet = new Set([obj1, obj2]);

//pass a type to a set 
// you can pass types as well as values to functions 
const formats = new Set<string>();


//If the function has angle brackets (<>) when you hover over it, you can pass a type. If it doesn't, you can't
// In short: querySelector can take types, getElementById can't.


const userMap = new Map();

userMap.set(1, { name: "Max", age: 30 });

userMap.set(2, { name: "Manuel", age: 31 });

// @ts-expect-error
Unused '@ts-expect-error' directive.
userMap.set("3", { name: "Anna", age: 29 });

// @ts-expect-error
Unused '@ts-expect-error' directive.
userMap.set(3, "123");

// the problem here is that currently any type of key and value is allowed in the map
// soln: create a user type
type User = {
    name: string;
    age: number;
  };

// we can pass number and user as the types for the Map

const userMap = new Map<number, User>();

// some functions can receive multiple type arguments . in this case the map constructor can receive 2 types -one for the key
// and one for the value.. now we can no longer pass incorrect types into the userMap.set function

// you can also express the user type inline

const userMap = new Map<number, { name: string; age: number }>();

// mAP IS A COLLECTION THAT HOLDS KEY-VALUE PAIRS SIMILAR TO AN OBJECT BUT WITH SOME IMPORTANT DIFFERENCES 
// IN A MAP , KEYS CAN BE OF ANY DATA TYPE . IN OBJECTS , KEYS ARE ALWAYS STRINGS OR SYMBOLS








const parsedData = JSON.parse<{
   // Expected 0 type arguments, but got 1.
      name: string;
      age: number;
    }>('{"name": "Alice", "age": 30}');

// remove the angle braces 
//TypeScript does not allow passing types directly to JSON.parse().
 // corrected 


const parsedData = JSON.parse('{"name": "Alice", "age": 30}') as { name: string; age: number };



const parsedData = JSON.parse{
    name: string;
       age: number;
     }('{"name": "Alice", "age": 30}');


 // optional parameters 
 
 const logAlbumInfo = (
    title: string,
    trackCount: number,
    isReleased: boolean,
    releaseDate?: string,
  ) => {
    // rest of function body
  };

  logAlbumInfo("midnights",13,true,"2022-10-21");
  logAlbumInfo("American beauty",10,true);


 // default parameters 
 
 const logAlbumInfo  (
    title : string,
    trackCount: number,
    isReleased: boolean,
    format: string = "cd", // the annotation of : string can also be omitted since it can infer the type of the format parameter from the value provided. this is an example of type inference 

 ) => {
    // rest of the function body 
    };

 // FUNCTION RETURN TYPES 
 // in addition to setting parameter types , we can also set the return type of a function

 const logAlbumInfo=(
    title: string,
    trackCount: number,
    isReleased: boolean,
 ): string => {

 };

 // REST PARAMETERS - allows u to pass in any number of arguments to a function 

function getAlbumFormats(album: Album, ...formats: string[]) {
  return `${album.title} is available in the following formats: ${formats.join(
    ", ",
  )}`;
}

getAlbumFormats(
    { artist: "Radiohead", title: "OK Computer", year: 1997 },
    "CD",
    "LP",
    "Cassette",
  );


  // as an alternative , we can use the array syntax instead 

function getAlbumFormats(album:Album,...formats:Array<string>) {

}


// FUNCTION TYPES - can use typescript to describe the types of functions themselves 

type Mapper = (item: string) => number;

// this type alias for a function that takes in a string and returns a number 

const mapOverItems = (items: string[], map: mapper) => {
    return items.map(map);
};

//VOID - 
(method) console.log(...data: any[]): void 
// this is typescript way of saying ignore the result of this function call

// typing for async functions 

// the return type of an asnc function or method must be a PROMISE<T> TYPE 
// our function must return a promise that resolves to a user.

const getUser = async(id: string): Promise<user> => {
    const user = await db.users.get(id);

    return user;
};


//Exercise 1: Optional Function Parameters
//Try to use an optional parameter annotation to fix the error

const concatName = (first: string, last?: string) => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
  };
//EXERCISE 2: DEFAULT FUNCTION PARAMETERS
// also make the above function return John pocok EVEN WHEN ONLY the 1st name is passed 

export const concatNmae = (first: string, last?: string = "pocock")=> {
    return `${first}${last}`;
};

// this fails coz typescrippt doesnt allow us to have both an optional parameter and a default value. the optionality is already implied by the default value 

export const concatName = (first: string, last="pocock")=> {
    return `${first} ${last}`;
};

//EXERCISE 3:REST PARAMETERS -

export function concatenate(...string: string[]){
    return concatTwoStrings.join("")
}

//or 

export function concatenate(...string: Array<string>){
    return strings.join()
}

// when you dont specify a type for a parameter, it is implicitly assigned the any type


//EXERCISE 4 - FUNCTION TYPES 

type User = {
    id: string;
    name: string;
};

const modifyUser = (users : user[], id: string, makeChange:(user: User)=>{
    returns users.map((u)=> {
        if(u.id === id){
            return makeChange(u);
        }
        return u;
    });
});

// function signature: clearly specifying the function signature ((user: User) => User)
// avoids any an type problems and makes the code safer and more predictable 




