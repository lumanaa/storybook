import "../../main.scss";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const FlipCard = () => {
  return (
    <div className='card-2-body'>
      <div className='card-2'>
        <div className='front'>
          <img src='https://i.pinimg.com/736x/f7/52/2b/f7522b13f7dd4c3f4fb854235e01b57e.jpg' />
        </div>
        <div className='back'>
          <div className='details'>
            <h2>
              Kay <br /> <span>Designer</span>
            </h2>
            <div className='social-icons'>
              <a href='#'>
                <FaFacebookF />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
              <a href='#'>
                <FaGooglePlusG />
              </a>
              <a href='#'>
                <FaLinkedin />
              </a>
              <a href='#'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
