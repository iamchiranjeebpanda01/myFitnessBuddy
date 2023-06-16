//*Age Reducer Function Definiton
const ageReducer = (prevState, action) => {
    if(action.type === "USER_INPUT"){
        return {val: action.val, isValid: action.val > 0};
    }
    else if(action.type === "USER_BLUR"){
        return {val: prevState.val, isValid: prevState.val > 0}
    }
    return {val:"", isValid: false}
};

export default ageReducer;