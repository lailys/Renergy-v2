import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="col-md-4">
      <label className="Auth-form-title">Signup</label>
      <form
        id="signupform"
        // onSubmit={loginSubmit}
      >
        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            id="UsernameInput"
            name="UsernameInput"
            aria-describedby="usernameHelp"
            placeholder="Username"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="firstName"
            className="form-control"
            id="FirstNameInput"
            name="FirstNameInput"
            aria-describedby="firstNameHelp"
            placeholder="First Name"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="lastName"
            className="form-control"
            id="LastNameInput"
            name="LastNameInput"
            aria-describedby="lastNameIHelp"
            placeholder="Last Name"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="EmailInput"
            name="EmailInput"
            aria-describedby="emailHelp"
            placeholder="Email"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            // onChange={(event) => setPassword(event.target.value)}
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
