//NUMBER 4

const handleFormData = (e: SubmitEvent) => {
    e.preventDefault();
  
    const data = new FormData(e.target as HTMLFormElement);
  
    const value = Object.fromEntries(data.entries());
  
    return value;
  };