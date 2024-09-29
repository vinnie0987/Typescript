const parseValue4 = (value: unknown): string => {
    if (
      typeof value === 'object' &&
      value !== null &&
      'data' in value &&
      typeof value.data === 'object' &&
      value.data !== null &&
      'id' in value.data &&
      typeof value.data.id === 'string'
    ) {
      return value.data.id
    }
  
    throw new Error('Parsing error!')
  }