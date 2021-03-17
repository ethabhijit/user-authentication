import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAutheticated, signout } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#FFFFFF" };
  } else {
    return { color: "#bdc3c7" };
  }
};

const Navbar = ({ history }) => {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" class="navbar-brand">Title</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link style={currentTab(history, "/")} to="/" class="nav-link">Home</Link>
          </li>
          {!isAutheticated() && (
            <Fragment>
              <li class="nav-item">
                <Link style={currentTab(history, "/signup")} to="/signup" class="nav-link">Signup</Link>
              </li>
              <li class="nav-item">
                <Link style={currentTab(history, "/signin")} to="/signin" class="nav-link">Signin</Link>
              </li>
            </Fragment>
          )}
        </ul>
        <div>
          {isAutheticated() && (
            <button className="btn btn-outline-info" onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}>Signout</button>
          )}
        </div>
      </div>

    </nav>
  );
};

export default withRouter(Navbar);
