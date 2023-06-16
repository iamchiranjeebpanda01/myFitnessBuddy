import Button from "../UI/Button";
import cereal from "../../assets/cereal.jpg";
import blueberry from "../../assets/blueberry.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  //*Click Handler for Home
  const clickHandler = () => {
    if(localStorage.getItem("email") !== "loggedOut"){
      navigate("/BMRCalculator");
      return;
    }
    
    //*Navigate to Login 
    navigate("/welcome");
  };

  //*JSX Code for Home
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6">
          <div className="card-body">
            <p className="card-title display-1 mt-3 fw-bolder">
              Good health starts with what you eat.
            </p>
            <p className="card-text lead mt-5">
              Want to eat more mindfully? Track meals, learn about your habits,
              and reach your goals with MyFitnessBuddy
            </p>
            <Button
              className="d-grid gap-2 mt-5"
              buttonAtr={{
                className: "btn btn-primary",
                type: "button",
                onClick: clickHandler,
              }}
            >
              Start For Free
            </Button>
          </div>
        </div>

        <div className="col-lg-5 ms-5 ps-5 overflow-hidden">
          <img src={cereal} alt="Cereals" className="img-fluid"/>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6 overflow-hidden">
          <img src={blueberry} alt="Blueberry Calorie Count" className="img-fluid"/>
        </div>

        <div className="col-lg-5 ms-5 ps-5">
          <div className="card-body pt-5">
            <p className="card-title display-6 mt-5 me-4 fw-bolder">
              Log from over 14 million foods.
            </p>
            <p className="card-text lead mt-5 me-4">
              See a breakdown of calories and nutrients, compare serving sizes,
              and discover how the food you eat supports your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
