const concatName5 = (first: string, last?: string = "Pocock") => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
  };