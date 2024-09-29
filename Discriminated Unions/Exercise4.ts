function calculateArea(shape: Shape) {
    if (shape.kind === 'circle') {
      return Math.PI * shape.radius * shape.radius
    } else {
      return shape.sideLength * shape.sideLength
    }
  }