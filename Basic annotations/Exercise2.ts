//NUMBER 2
//To fix the errors in the concatTwoStrings function, you need to add type annotations for the parameters a and b. Since the function is designed to concatenate two strings, you should annotate both a and b as strings.

const concatTwoStrings = (a: string, b: string): string => {
    return [a, b].join(" ");
  };
  
  const result = concatTwoStrings("Hello", "World");