import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import CurrentPageContext from "../../store/CurrentPage-Context";
import Diet from "./Diet";

const CustomDiet = () => {
  const navigate = useNavigate();
  
  const PageCTX = useContext(CurrentPageContext);
  useEffect(() => {
    PageCTX.setCurrentPage("customDiet");
  }, [PageCTX])
  
  const [calories, setCalories] = useState(0);

  //* Click Handler function for 'RECALCULATE' Button
  const clickHandler = () => {
    fetch("http://localhost:5000/bmr", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
          bmrValue: 0,
        }),
      })
      .then((res) => res.json())
      .then((res) => {
        if(res.status === "Success"){
          navigate("/BMRCalculator");
        }
      })
    
  };

  fetch("http://localhost:5000/bmr/" + localStorage.getItem("email"))
  .then((res) => res.json())
  .then((res) => {
    setCalories(res.bmrValue)
  })

  //*Workout Click Handler function
  const workoutClickHandler = () => {
    navigate("/Workout");
  };
  return (
    <Fragment>
      <h1 className="ps-5 pt-5">
        Your estimated BMR is: {calories} calories/day*
      </h1>
      <p className="small text-muted ps-5 pb-1">
        *BMR based on the Mifflin - St. Jeor equations. Please remember that
        even the best BMR calculators provide only a best guess and should be
        used as a guide only.
      </p>
      <Button
        className="d-inline"
        buttonAtr={{
          className: "btn btn-primary btn-lg ms-5 mb-5",
          type: "button",
          onClick: clickHandler,
        }}
      >
        Recalculate
      </Button>

      <Button
      className="d-inline"
        buttonAtr={{
          className: "btn btn-primary btn-lg ms-5 mb-5",
          type: "button",
          onClick: workoutClickHandler,
        }}
      >
        About Workout Regime
      </Button>

      <div className="offset-3 col-6">
        <h1 className="mb-5">Put your diet on autopilot</h1>
        <p className="lead text-justify">
          myFitnessBuddy creates personalized meal plans based on your food
          preferences, budget, and schedule. Reach your diet and nutritional
          goals with our calorie calculator, weekly meal plans, grocery lists
          and more.
        </p>

        <p className="font-weight-bold mb-5">
          **Create your meal plan right here in seconds.**
        </p>

        {calories <= 1800 && <Diet chart="1"/>}
        {calories > 1800 && <Diet chart="2"/>}
      </div>
    </Fragment>
  );
};

export default CustomDiet;
