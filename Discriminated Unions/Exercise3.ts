type APIResponse = ['error', string] | ['success', User[]]


async function fetchData(): Promise<APIResponse> {
    try {
      const response = await fetch('https://api.example.com/data')
  
      if (!response.ok) {
        return [
          'error',
          
          'An error occurred',
        ]
      }
  
      const data = await response.json()
  
      return ['success', data]
    } catch (error) {
      return ['error', 'An error occurred']
    }
  }