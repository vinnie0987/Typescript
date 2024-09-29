// NUMBER 1
//modify the add function to handle booleans and convert them to numbers
// i also renamed result to additionresult since the word result cannot be redeclared 

 export const add = (a: boolean, b: boolean) => {
    return Number(a) + Number(b);
  };
  
  const result = add(true, false);