const concatName = (user: {first: string, last: string}): string => {
    //Parameter 'user' implicitly has an 'any' type.
      return `${user.first} ${user.last}`;
    }