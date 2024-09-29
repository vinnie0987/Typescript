async function fetchData() : Promise<number> {
    const response = await fetch("https://api.example.com/data");
  
    const data = await response.json();
  
    return data;
  }