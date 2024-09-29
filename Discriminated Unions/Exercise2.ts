function calculateArea(shape: Shape) {
    switch (shape.kind) {
      case 'circle': {
        return Math.PI * shape.radius * shape.radius
      }
      case 'square': {
        return shape.sideLength * shape.sideLength
      }
    }
  }