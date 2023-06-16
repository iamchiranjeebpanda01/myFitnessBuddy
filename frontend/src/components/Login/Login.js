import { useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useContext } from "react";
import CurrentPageContext from "../../store/CurrentPage-Context";
import emailReducer from "./Reducers/EmailReducer";
import passwordReducer from "./Reducers/PasswordReducer";


const Login = () => {
  //* State to check validity of form
  const [isFormValid, setFormValidity] = useState(true);

  const navigate = useNavigate();


  //* Using the Current Page Context
  const PageCTX = useContext(CurrentPageContext);
  useEffect(() => {
    PageCTX.setCurrentPage("login");
  }, [PageCTX])
 

  //* Sign Up button Click Handler
  const signUpClickHandler = () => {
    navigate("/welcome");
  };

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

  //* Login Form Submit Handler Function
  const submitHandler = (event) => {
    event.preventDefault();

    if (emailState.isValid && passwordState.isValid) {
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailState.val,
          password: passwordState.val,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "Success") {
            setFormValidity(true);
            localStorage.setItem("email", emailState.val)
            navigate("/BMRCalculator");
          } else {
            setFormValidity(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //*Login Form JSX Code
  return (
    <div className="col-4 offset-4 mt-5">
      <form
        className="p-2 mt- rounded border border-secondary"
        onSubmit={submitHandler}
      >
        {!isFormValid && (
          <p className="text-danger text-center fs-6 fw-light mt-4 lead border border-danger col-8 offset-2 rounded pt-2 pb-2">
            INCORRECT EMAIL OR PASSWORD!
          </p>
        )}
        <h2 className="ms-2 pb-5 pt-2 text-center">Member Login</h2>
        <Input
          className="form-floating mb-4 ms-3 me-3"
          input={{
            type: "email",
            className: `form-control ${
              !emailState.isValid ? "is-invalid" : ""
            }`,
            id: "email",
            onChange: emailChangeHandler,
            onBlur: emailBlurHandler,
            value: emailState.val,
            required: "required",
          }}
          label="Email"
        />

        <Input
          className="form-floating mb-4 ms-3 me-3"
          input={{
            type: "password",
            className: `form-control ${
              !passwordState.isValid ? "is-invalid" : ""
            }`,
            id: "height",
            onChange: passwordChangeHandler,
            onBlur: passwordBlurHandler,
            value: passwordState.val,
            required: "required",
          }}
          label="Password"
        />

        <Button
          className="d-grid gap-2 mt-5 mb-3 ms-3 me-3"
          buttonAtr={{ className: "btn btn-primary", type: "submit" }}
        >
          Login
        </Button>

        <p className="text-center bold">or</p>

        <Button
          className="d-grid gap-2 mt-3 mb-5 ms-3 me-3"
          buttonAtr={{
            className: "btn btn-primary",
            type: "button",
            onClick: signUpClickHandler,
          }}
        >
          Sign Up for Free
        </Button>
      </form>
    </div>
  );
};

export default Login;
