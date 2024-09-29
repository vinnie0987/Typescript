const goToLocation = (coordinates: [number, number, number | undefined]) => {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];
  
   
  
//     type tests = [
//       Expect<Equal<typeof latitude, number>>,
//       Expect<Equal<typeof longitude, number>>,
//       Expect<Equal<typeof elevation, number | undefined>>,
  
//     ];
//   };