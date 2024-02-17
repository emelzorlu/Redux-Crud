const initialState = {
    isAdmin:false,
    userInfo:{},
};



const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGİN_USER':
         return state;

        case 'LAGOUT_USER':
            return state;

        default:
            return state;
    }
}
export default userReducer;