const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user : {
                    ...state.user,
                    isLogin: action.payload
                } 
            }
        case 'SEND_LOGIN_FORM': 
            return {
                ...state,
                user : {
                    ...state.user,
                    ...action.payload
                }
            }
        case 'SEND_REGISTER_FORM':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        default: 
            return state
    }
}
export default reducer