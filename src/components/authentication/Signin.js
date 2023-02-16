import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TbdContext } from "../../provider/provider";

function Signin() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [user, setUser] = useState({});
  const handleSignInForm = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="col-md-4">
      <form id="loginform" onSubmit={(e) => context.login(e, user)}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="EmailInput"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleSignInForm}
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handleSignInForm}
          />
          <small id="passworderror" className="text-danger">
            {/* {passwordError} */}
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-lg in-btn clear-err"
          id="form-submit-btn"
        >
          LOGIN
        </button>
        <p className="auth-extra text-right">
          {" Do not have an account yet," + " "}
          <Link to="/signup" className="auth-extra-link link clear-err">
            sign up?
          </Link>
          {" " + " or Forgot" + " "}
          <Link to="/signup" className="auth-extra-link clear-err">
            password?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;
