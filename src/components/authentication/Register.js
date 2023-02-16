import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="col-md-4">
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <div className="custom-checkbox-group">
              <input
                type="checkbox"
                className="custom-control-input"
                id="buyerheck1"
              />
              <label className="custom-control-label" htmlFor="buyerheck1">
                Buyer of RECs
              </label>
            </div>
            <div className="custom-checkbox-group">
              <input
                type="checkbox"
                className="custom-control-input"
                id="sellerheck1"
              />
              <label className="custom-control-label" htmlFor="sellerheck1">
                Seller of RECs
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="companyname"
            className="form-control"
            id="CompanynameInput"
            name="CompanynameInput"
            aria-describedby="companynameHelp"
            placeholder="Company Name"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="companynameHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
      </div>
      <div className="col-md-5">
        <div className="form-group">
          <input
            type="firstName"
            className="form-control"
            id="FirstNameInput"
            name="FirstNameInput"
            aria-describedby="firstNameHelp"
            placeholder="First Name"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="firstNameHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="phone"
            className="form-control"
            id="PhoneInput"
            name="PhoneInput"
            aria-describedby="phonelHelp"
            placeholder="Phone"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="phoneHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
      </div>
      <div className="col-md-5">
        {/* <form
          id="loginform"
          // onSubmit={loginSubmit}
        > */}
        <div className="form-group">
          <input
            type="lastName"
            className="form-control"
            id="LastNameInput"
            name="LastNameInput"
            aria-describedby="lastNameIHelp"
            placeholder="Last Name"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="lastNameHelp" className="text-danger form-text">
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
            placeholder="email"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="emailHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        {/* </form> */}
      </div>

      <div className="col-md-4">
        <div className="form-group">
          <input
            type="address"
            className="form-control"
            id="Address"
            name="AddressInput"
            aria-describedby="addressHelp"
            placeholder="Address"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="addressHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="address2"
            className="form-control"
            id="Address2"
            name="Address2Input"
            aria-describedby="address2Help"
            placeholder="Address2"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="address2Help" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <input
            type="city"
            className="form-control"
            id="CityInput"
            name="CityInput"
            aria-describedby="cityHelp"
            placeholder="City"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="cityHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <div className="form-group">
          <input
            type="country"
            className="form-control"
            id="countryInput"
            name="countryInput"
            aria-describedby="countryHelp"
            placeholder="Country"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="phoneHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <input
            type="firstName"
            className="form-control"
            id="FirstNameInput"
            name="FirstNameInput"
            aria-describedby="firstNameHelp"
            placeholder="State"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="firstNameHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <input
            type="zipCode"
            className="form-control"
            id="ZipCodeInput"
            name="ZipCodeInput"
            aria-describedby="zipCodeHelp"
            placeholder="Zip Code"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="zipCodeHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <input
            type="wallet"
            className="form-control"
            id="WalletInput"
            name="WalletInput"
            aria-describedby="WalletlHelp"
            placeholder="Wallet"
            // onChange={(event) => setEmail(event.target.value)}
          />
          <small id="walletHelp" className="text-danger form-text">
            {/* {emailError} */}
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-lg in-btn"
          id="form-submit-btn"
        >
          REGISTER
        </button>
      </div>
    </>
  );
}

export default Register;
