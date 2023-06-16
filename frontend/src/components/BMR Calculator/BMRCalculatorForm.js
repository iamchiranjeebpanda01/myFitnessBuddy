import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Radio from "../UI/Radio";
import BMRLogic from "./BMRCalculatorLogic";
import weightReducer from "./Reducers/WeightReducer";
import heightReducer from "./Reducers/HeightReducer"
import ageReducer from "./Reducers/AgeReducer";


const BMRCalculatorForm = () => {
  //* Setup Navigation
  const navigate = useNavigate();

  //* useReducer() for weight state management
    const [weightState, dispatchWeightState] = useReducer(weightReducer, {
    val: "",
    isValid: true,
  });

  //*useReducer() for height state management
  const [heightState, dispatchHeightState] = useReducer(heightReducer, {
    val:"", 
    isValid: true
  })

  //*useReducer() for age state management
  const [ageState, dispatchAgeState] = useReducer(ageReducer, {
    val:"", 
    isValid: true
  })

  //*useState() for sex state management
  const [sex, setSex] = useState("");



  //* Weight Change Function
  const weightChangeHandler = (event) => {
    dispatchWeightState({type: "USER_INPUT", val: event.target.value});
  }

  //* Weight Blur Function
  const weightBlurHandler = () => {
    dispatchWeightState({type:"USER_BLUR"});
  }

  //* Height Change Function
  const heightChangeHandler = (event) => {
    dispatchHeightState({type: "USER_INPUT", val: event.target.value});
  }

  //* Height Blur Function
  const heightBlurHandler = () => {
    dispatchHeightState({type:"USER_BLUR"});
  }

  //* Age Change Function
  const ageChangeHandler = (event) => {
    dispatchAgeState({type: "USER_INPUT", val: event.target.value});
  }

   //* Age Blur Function
   const ageBlurHandler = () => {
    dispatchAgeState({type:"USER_BLUR"});
  }

  //* Sex Click Function
  const sexClickHandler = (event) => {
    if(event.target.checked){
        setSex(event.target.value);
    }
  }

  //* Submit Handler Function
  const submitHandler = (event) => {
    event.preventDefault();

    if ((weightState.isValid && heightState.isValid) && ageState.isValid) {
      //*Implement BMRCalacularLogic
      const amount = BMRLogic(
        weightState.val,
        heightState.val,
        ageState.val,
        sex
      ).toFixed(0);

      fetch("http://localhost:5000/bmr", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
          bmrValue: amount,
        }),
      })
      .then((res) => res.json())
      .then((res) => {
        if(res.status === "Success"){
          navigate("/customDiet");
        }
      })
    }
  }

  //* JSX Code 
  return (
    <form className="p-3 mt- rounded border border-secondary" onSubmit={submitHandler}>
      <Input
        className="form-floating mb-3"
        input={{
          type: "number",
          className: `form-control ${!weightState.isValid ? "is-invalid" : ""}`,
          id: "weight",
          onChange: weightChangeHandler,
          onBlur: weightBlurHandler,
          value: weightState.val,
          required: "required"
        }}
        label="Current Weight (in kg)"
      />

      <Input
        className="form-floating mb-3"
        input={{
          type: "number",
          className: `form-control ${!heightState.isValid ? "is-invalid" : ""}`,
          id: "height",
          onChange: heightChangeHandler,
          onBlur: heightBlurHandler,
          value: heightState.val,
          required: "required"
        }}
        label="Current Height (in cm)"
      />

      <Input
        className="form-floating mb-3"
        input={{
          type: "number",
          className: `form-control ${!ageState.isValid ? "is-invalid" : ""}`,
          id: "age",
          onChange: ageChangeHandler,
          onBlur: ageBlurHandler,
          value: ageState.val,
          required: "required"
        }}
        label="Age"
      />

      <h5 className="p-2 text-muted">Sex</h5>

      <Radio
        className="form-check form-check-inline text-muted small"
        input={{
          className: "form-check-input",
          type: "radio",
          name: "sex",
          id: "male",
          value: "male",
          required:"required",
          onClick: sexClickHandler
        }}
        labelClassName="form-check-label"
        label="Male"
      />

      <Radio
        className="form-check form-check-inline text-muted small"
        input={{
          className: "form-check-input",
          type: "radio",
          name: "sex",
          id: "female",
          value: "female",
          onClick: sexClickHandler
        }}
        labelClassName="form-check-label"
        label="Female"
      />

      <Button
        className="d-grid gap-2 mt-3"
        buttonAtr={{ className: "btn btn-primary", type: "submit" }}
      >
        Calculate
      </Button>
    </form>
  );
};

export default BMRCalculatorForm;
