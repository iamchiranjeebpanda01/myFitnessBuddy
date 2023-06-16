import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import CurrentPageContext from "../../store/CurrentPage-Context";
import { useContext, useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();

  const PageCTX = useContext(CurrentPageContext);
  useEffect(() => {
    PageCTX.setCurrentPage("welcome");
  }, [PageCTX])
  

  const clickHandler = () => {
    navigate("/signUp");
  };

  return (
    <div className="card col-8 offset-2 mt-5">
      <div className="card-body mt-5 pt-5 ms-auto me-auto">
        <p className="card-text display-5 fw-bold text-justify ms-3 me-3">
          Welcome! Let’s customize myFitnessBuddy for your goals.
        </p>
        <Button
          className="d-grid gap-2 mt-5 mb-5 ms-3 me-3"
          buttonAtr={{
            className: "btn btn-primary",
            type: "submit",
            onClick: clickHandler,
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
