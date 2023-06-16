//* Email Reducer Function Definition
const emailReducer = (prevState, action) => {
    if (action.type === "USER_INPUT") {
      return { val: action.val, isValid: action.val.includes("@") };
    } else if (action.type === "USER_BLUR") {
      return { val: prevState.val, isValid: prevState.val.includes("@") };
    }
    return { val: "", isValid: false };
  };

  export default emailReducer;