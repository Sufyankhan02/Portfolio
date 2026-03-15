import { MdArrowOutward, MdCopyright, MdPayment } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:developersufyankhan@gmail.com" data-cursor="disable">
                developersufyankhan@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.E Computer Science and Engineering</p>
            <h4>Support</h4>
            <a
              href="https://buy.stripe.com/test_fyc5kX0T"
              target="_blank"
              data-cursor="disable"
              className="contact-payment"
            >
              Support My Work <MdPayment />
            </a>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Sufyankhan02"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/sufyankhan04"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/sufyan1044916"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/mr_professer_01/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sufyan Khan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
