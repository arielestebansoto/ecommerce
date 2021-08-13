const reducer = (state, action) => {
    switch (action.type) {
        case 'LOG_REQUEST':
            return {
                ...state,
                user : {
                    ...state.user,
                    isLogin: action.payload
                } 
            }
        case 'LOGIN_REQUEST': 
            return {
                ...state,
                user : {
                    ...state.user,
                    ...action.payload
                }
            }
        case 'REGISTER_REQUEST':
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