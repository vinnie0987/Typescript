type User = {
    id: string;
    name: string;
  };

  type MakeChangeFunc = (user: User) => User;
  
  const modifyUser = (user: User[], id: string, makeChange: () => any) => {
    return user.map((u) => {
      if (u.id === id) {
        return makeChange(u);
  
      }
  
      return u;
    });
  };