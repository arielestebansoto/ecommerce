const INITIAL_STATE = {
    isLogin: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    tou: false,
    location: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGOUT_REQUEST':
            return INITIAL_STATE
        case 'LOG_REQUEST':
            return {
                ...state,
                isLogin: action.payload
            }
        case 'LOGIN_REQUEST': 
            return {
                ...state,
                ...action.payload
                }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                ...action.payload
                }
        default: 
            return state
    }
}
export default userReducer