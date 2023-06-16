import { useContext, useEffect } from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import CurrentPageContext from "../../store/CurrentPage-Context";

const Header = () => {
  const navigate = useNavigate();
  const CurrentPageCTX = useContext(CurrentPageContext);

  let emailValInLocalStorage = localStorage.getItem("email")
  useEffect(() => {}, [emailValInLocalStorage])


  //* Click Handler Function for LogOut Button
  const logoutClickHandler = () => {
    localStorage.setItem("email", "loggedOut");
    navigate("/");
  };

  //* Click Handler Function for Sign Up Button
  const loginClickHandler = () => {
    navigate("/login");
  }

  //*Logo Click Handler
  const logoClickHandler = () => {
    navigate("/");
  }

  return (
    <nav className="navbar navbar-light bg-dark">
          <p className="fs-1 fw-bolder text-white ps-5" onClick={logoClickHandler}>myFitnessBuddy</p>
      
        
          {localStorage.getItem("email") !== "loggedOut" && (
            <Button
              buttonAtr={{
                className: "btn btn-dark me-4",
                type: "button",
                onClick: logoutClickHandler,
              }}
            >
              Logout
            </Button>
          )}

  
          {(localStorage.getItem("email") === "loggedOut" && (!CurrentPageCTX.currentPage.toLocaleLowerCase().match("login"))) && (
            <Button
              buttonAtr={{
                className: "btn btn-dark me-4",
                type: "button",
                onClick: loginClickHandler,
              }}
            >
              LOG IN
            </Button>
          )}
    </nav>
  );
};

export default Header;
