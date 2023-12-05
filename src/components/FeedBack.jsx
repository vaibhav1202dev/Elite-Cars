import "../styles/FeedBackStyles/feedback.css";
import Img2 from "../images/feedbacks/pfp1.png";
import Img3 from "../images/feedbacks/pfp2.png";

function FeedBack() {
  return (
    <>
      <section className="feedback-section">
        <div className="container">
          <div className="feedback-content">
            <div className="feedbacks-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Feed Back</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their review. Our clients have experienced our
                service and results, and they're eager to share their positive
                experiences with you.
              </p>
            </div>

            <div className="all-feedbacks">
              <div className="all-feedbacks__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="all-feedbacks__box__name">
                  <div className="all-feedbacks__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Heisenberg</h4>
                      <p>Pune</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-feedbacks__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="all-feedbacks__box__name">
                  <div className="all-feedbacks__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Jesse Pinkman</h4>
                      <p>Mumbai</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeedBack;
