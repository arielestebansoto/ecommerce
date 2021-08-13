export const logRequest = payload => ({
    type: 'LOG_REQUEST',
    payload
})
export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload
})
export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload
})
export const logOutRequest = () => ({
    type: 'LOGOUT_REQUEST',
})