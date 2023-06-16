import FooterButtonGroup from "./FooterButtonGroup";

const Footer = () => {
  return (
    <div className="footer bg-dark mt-5 text-white">
      <p className="display-5 fw-bold text-center pt-3">Connect with us</p>
      <div className="d-flex justify-content-center">
        <FooterButtonGroup />
      </div>
      <p className="small fw-normal text-center pb-2 mb-0"> &#169; myFitnessBuddy</p>
    </div>
  );
};

export default Footer;
