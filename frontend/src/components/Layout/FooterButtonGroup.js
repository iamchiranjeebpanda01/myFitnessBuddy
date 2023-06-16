import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import mail from "../../assets/mail.png";
import youtube from "../../assets/youtube.png";

const FooterButtonGroup = () => {

    return (
        <div className="btn-group">
        <a type="button" className="btn btn-dark" href="https://www.instagram.com/">
          <img src={instagram} alt="instagram logo" />
        </a>
        <a type="button" className="btn btn-dark" href="https://twitter.com/?lang=en-in">
        <img src={twitter} alt="twitter logo" />
        </a>
        <a type="button" className="btn btn-dark" href="https://www.youtube.com/">
        <img src={youtube} alt="youtube logo" />
        </a>
        <a type="button" className="btn btn-dark" href="https://mail.google.com">
        <img src={mail} alt="mail logo" />
        </a>
      </div>
    );
};

export default FooterButtonGroup;