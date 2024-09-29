const parseValue = (value: unknown) => {
    if (hasDataId(value)) {
      return value.data.id
    }
  
    throw new Error('Parsing error!')
  }



  const parseValueAgain = (value: unknown) => {
    if (hasDataId(value)) {
      return value.data.id
    }
  
    throw new Error('Parsing error!')
  }

  const hasDataId :(value: unknown) => value is {data: {id: string}}