// initial store declaration
const inititalState = {
    userName: ""
};
// reducer
const viewUser = (state = inititalState, action) => {
    console.log(action);
    switch (action.type) {
        //add user
        case "VIEW_USER":
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state
    }
}
export default viewUser;