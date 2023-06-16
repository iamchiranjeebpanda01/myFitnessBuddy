import SignUpForm from "./SignUpForm";
import CurrentPageContext from "../../store/CurrentPage-Context";
import { useContext, useEffect } from "react";


const SignUp = () => {
  const PageCTX = useContext(CurrentPageContext);
  useEffect(() => {
    PageCTX.setCurrentPage("signup");
  }, [PageCTX])

  return (
    <div className="col-4 offset-4 mt-5 border rounded">
      <SignUpForm/>
    </div>
  );
};

export default SignUp;
