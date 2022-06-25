import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sign from "../../sign/sign";

function PrivateRoute({ component: Component, roles, ...rest }) {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("user")) {
          // not logged in so redirect to login page with the return url
          return (
            <Routes>
              <Route exact path="/login" element={<Sign type="in" />} />
            </Routes>
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}

export { PrivateRoute };
