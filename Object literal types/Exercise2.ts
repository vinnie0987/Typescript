const concatName2 = (user: { first: string; last: string }) => {
    if (!user.last) {
      return user.first;
    }
  
    return `${user.first} ${user.last}`;
  };