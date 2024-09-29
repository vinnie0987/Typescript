function validateUsername(username: string | null): boolean {
    if (username) {
        return username.length > 5
      }
    
      return false
    }