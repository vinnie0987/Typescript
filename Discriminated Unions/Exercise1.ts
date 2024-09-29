type Circle = {
    kind: 'circle'
    radius: number
  }
  
  type Square = {
    kind: 'square'
    sideLength: number
  }
  
  type Shape = Circle | Square



  function calculateArea(shape: Shape) {
    if (shape.kind === 'circle') {
        const {radius} = shape
    
        return Math.PI * radius * radius
      } else {
        const {sideLength} = shape
    
        return sideLength * sideLength
      }
    }