
function getUsername(username: string | null) {
    if (username !== null) {
      return `User: ${username}`
    } else {
      return 'Guest'
    }
  }