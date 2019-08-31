export function login(username, password) {
    //call api
    //hardcode for now
    const user = `${username} ${password}`
    localStorage.setItem('user', user)
}

export function logout() {
    localStorage.removeItem('user')
}