const concatName4 = (first: string, last?: string) => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
  };