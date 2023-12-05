import { Link } from "react-router-dom";
import Errorimg from "../images/error/error-img.png";

const Error = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "80px",
          color: "black",
          marginLeft: "36rem",
        }}
      >
        <img src={Errorimg} alt="Error-img" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            fontSize: "25px",
            borderRadius: "10px",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          {/* Return to Home Page */}
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            style={{ color: "black", textUnderlineOffset: "45px" }}
          >
            back to home page &nbsp;
            <i class="fa-solid fa-car-side fa-beat"></i>&nbsp;
          </Link>
        </button>
      </div>
    </>
  );
};

export default Error;
