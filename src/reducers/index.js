const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                isLogin: action.payload,
            }
        case 'SEND_LOGIN_FORM': 
            return {
               email: action.email,
               password: action.password
            }
        default: 
            return state
    }
}
export default reducer