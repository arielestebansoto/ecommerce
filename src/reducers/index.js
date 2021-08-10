const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                isLogin: action.payload,
            }
        default: 
            return state
    }
}
export default reducer