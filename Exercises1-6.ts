// NUMBER 1
//modify the add function to handle booleans and convert them to numbers

const add = (a: boolean, b: boolean) => {
  return Number(a) + Number(b);
};

const result = add(true, false);

//NUMBER 2
//To fix the errors in the concatTwoStrings function, you need to add type annotations for the parameters a and b. Since the function is designed to concatenate two strings, you should annotate both a and b as strings.

const concatTwoStrings = (a: string, b: string): string => {
  return [a, b].join(" ");
};

const result = concatTwoStrings("Hello", "World");

//NUMBER 3
// To resolve the errors in the examples, you need to change the type annotations to match the actual values being assigned.

export let example1: string = "Hello World!";  
export let example2: number = 42;  
export let example3: boolean = true;  
export let example4: symbol = Symbol();  
export let example5: bigint = 123n; 

//NUMBER 4

const handleFormData = (e: SubmitEvent) => {
    e.preventDefault();
  
    const data = new FormData(e.target as HTMLFormElement);
  
    const value = Object.fromEntries(data.entries());
  
    return value;
  };


//NUMBER 5
  
  



