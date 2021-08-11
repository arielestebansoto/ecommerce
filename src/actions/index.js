export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload
})
export const sendLoginForm = (email, password) => ({
    type: 'SEND_LOGIN_FORM',
    email,
    password
})