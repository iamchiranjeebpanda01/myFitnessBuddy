import { useReducer, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import emailReducer from "./Reducers/EmailReducer";
import passwordReducer from "./Reducers/PasswordReducer";

const SignUpForm = () => {
    const navigate = useNavigate();

  //* useReducer() for email state management
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    val: "",
    isValid: true,
  });

  //* useReducer() for password state management
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    val: "",
    isValid: true,
  });

  //* Re-Password Reducer Function Definition
  const rePasswordReducer = (prevState, action) => {
    if (action.type === "USER_INPUT") {
      return { val: action.val, isValid: action.val.match(passwordState.val) };
    } else if (action.type === "USER_BLUR") {
      return {
        val: prevState.val,
        isValid: prevState.val.match(passwordState.val),
      };
    }
    return { val: "", isValid: false };
  };

  //* useReducer() for re-password state management
  const [rePasswordState, dispatchRePasswordState] = useReducer(
    rePasswordReducer,
    {
      val: "",
      isValid: true,
    }
  );

  //* Email Change Function
  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "USER_INPUT", val: event.target.value });
  };

  //* Email Blur Function
  const emailBlurHandler = () => {
    dispatchEmailState({ type: "USER_BLUR" });
  };

  //* Password Change Function
  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "USER_INPUT", val: event.target.value });
  };

  //* Password Blur Function
  const passwordBlurHandler = () => {
    dispatchPasswordState({ type: "USER_BLUR" });
  };

  //* Re-Password Change Function
  const rePasswordChangeHandler = (event) => {
    dispatchRePasswordState({ type: "USER_INPUT", val: event.target.value });
  };

  //* Re-Password Blur Function
  const rePasswordBlurHandler = () => {
    dispatchRePasswordState({ type: "USER_BLUR" });
  };

  //* Error State
  const [status, setStatus] = useState("");

  //*Form Submit Handler
  const submitHandler = (event) => {
    event.preventDefault();

    if((emailState.isValid && passwordState.isValid) && rePasswordState.isValid){
        fetch("http://localhost:5000/signup",{
          method: "POST",
          headers: {'Content-Type': "application/json"},
          body: JSON.stringify({email: emailState.val, password: passwordState.val})
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if(res.status === 'Success'){
            localStorage.setItem("email", emailState.val)
            navigate("/BMRCalculator");
          } 
          else{
            setStatus(res.message)
          }
        })
        .catch((error) => {
          setStatus(error)
        })
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p className="lead text-center mt-3 mb-3">
        We’re happy you’re here. <br />
        Let’s get to know a little about you.
      </p>

      <p className="text-center mt-3 mb-3 text-danger">{status}</p>

      <Input
        className="form-floating mb-3 ms-3 me-3"
        input={{
          type: "email",
          className: `form-control ${!emailState.isValid ? "is-invalid" : ""}`,
          id: "email",
          onChange: emailChangeHandler,
          onBlur: emailBlurHandler,
          value: emailState.val,
          required: "required",
        }}
        label="Email"
      />

      <Input
        className="form-floating mb-3 ms-3 me-3"
        input={{
          type: "password",
          className: `form-control ${
            !passwordState.isValid ? "is-invalid" : ""
          }`,
          id: "password",
          onChange: passwordChangeHandler,
          onBlur: passwordBlurHandler,
          value: passwordState.val,
          required: "required",
        }}
        label="Password"
      />

      <Input
        className="form-floating mb-3 ms-3 me-3"
        input={{
          type: "password",
          className: `form-control ${
            !rePasswordState.isValid ? "is-invalid" : ""
          }`,
          id: "re-password",
          onChange: rePasswordChangeHandler,
          onBlur: rePasswordBlurHandler,
          value: rePasswordState.val,
          required: "required",
        }}
        label="Re-Enter Password"
      />

      <Button
        className="d-grid gap-2 mt-4 mb-4 ms-3 me-3"
        buttonAtr={{
          className: "btn btn-primary",
          type: "submit",
        }}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
