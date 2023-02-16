import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="col-md-4">
      <form
        id="signupform"
        // onSubmit={loginSubmit}
      >
        <div className="form-group">
          <input
            type="username"
            className="form-control"
            id="UsernameInput"
            name="UsernameInput"
            aria-describedby="usernameHelp"
            placeholder="Username"
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="firstName"
            className="form-control"
            id="FirstNameInput"
            name="FirstNameInput"
            aria-describedby="firstNameHelp"
            placeholder="First Name"
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="lastName"
            className="form-control"
            id="LastNameInput"
            name="LastNameInput"
            aria-describedby="lastNameIHelp"
            placeholder="Last Name"
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="EmailInput"
            name="EmailInput"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <small id="passworderror" className="text-danger">
            {/* {passwordError} */}
          </small>
        </div>

        <button
          type="submit"
          className="btn btn-lg in-btn"
          id="form-submit-btn"
        >
          Sign up
        </button>
        <p className="auth-extra text-right">
          {"Already have an account," + " "}
          <Link to="/signin" className="auth-extra-link link">
            sign in?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
