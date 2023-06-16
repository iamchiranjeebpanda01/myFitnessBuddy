import BMRCalculatorForm from "./BMRCalculatorForm";
import CurrentPageContext from "../../store/CurrentPage-Context";
import { useContext, useEffect } from "react";

const BMRCalculatorApp = () => {
  const PageCTX = useContext(CurrentPageContext);

  useEffect(() => {
    PageCTX.setCurrentPage("BMR");
  }, [PageCTX])
  
  return (
    <div className="container-lg mt-5 me-5">
      <div className="row ms-3 me-3">
        <div className="col-lg-5 mb-3 lead">
            <span className="display-5 bold me-1">What is your BMR?</span>
            <p className="mt-5">
              Your BMR (Basal Metabolic Rate) is an estimate of how many
              calories you'd burn if you were to do nothing but rest for 24
              hours. It represents the minimum amount of energy needed to keep
              your body functioning, including breathing and keeping your heart
              beating. Your BMR does not include the calories you burn from
              normal daily activities or exercise. Our calculator uses the
              Mifflin-St. Jeor equations to estimate your BMR which is believed
              to be more accurate than the more commonly used Harris-Benedict
              equation.
          </p>
        </div>

        <div className="col-lg-5 mt-1 offset-lg-1">
          <p className="display-5 bold mb-2 ms-2">BMR CALCULATOR</p>
          <p className="bold lead ms-2 mb-0">Calculate your BMR</p>
          <p className="small ms-2 mt-0">
            To determine your current BMR, please provide the following
            information:
          </p>
          <BMRCalculatorForm />
        </div>
      </div>
    </div>
  );
};

export default BMRCalculatorApp;
