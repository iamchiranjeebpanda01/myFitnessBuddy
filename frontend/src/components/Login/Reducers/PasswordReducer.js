//* Password Reducer Function Definition
const passwordReducer = (prevState, action) => {
    if (action.type === "USER_INPUT") {
      return { val: action.val, isValid: action.val.trim().length >= 8 };
    } else if (action.type === "USER_BLUR") {
      return { val: prevState.val, isValid: prevState.val.trim().length >= 8 };
    }
    return { val: "", isValid: false };
  };

  export default passwordReducer;