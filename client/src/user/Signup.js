import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import "../signup.css";
import Base from "../core/Base";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
  });

  const { name, email, password, error, success, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false, loading: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            loading: false,
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <main className="form-signup text-center">
        <h1 className="h3 mb-3 fw-normal">Signup</h1>
        <form>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
            placeholder="Name"
            autoFocus
          />
          <input
            type="email"
            className="form-control"
            onChange={handleChange("email")}
            value={email}
            placeholder="Email address"
          />
          <input
            type="password"
            className="form-control"
            onChange={handleChange("password")}
            value={password}
            placeholder="Password"
          />

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={onSubmit}
          >
            Sign up
          </button>

        </form>
      </main>
    );
  };

  const successMessage = () => {
    return (
      <div className="row mt-2">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Your account was created successfully. Please
            <Link to="/signin" className="none-underline"> Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row mt-2">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Base />
      {loadingMessage()}
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className="text-danger text-center">{JSON.stringify(values)}</p>
    </div>
  );
};

export default Signup;
