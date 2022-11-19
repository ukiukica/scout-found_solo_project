import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { demouser } from '../../store/session';

import './LoginForm.css'
import '../../context/Modal.css'


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // const sessionUser = useSelector((state) => state.session.user);

  // if (sessionUser) return <Redirect to="/filmLocations" />;

  const demoOnClick = async (e) => {
    e.preventDefault();
    await dispatch(demouser())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div >
      <form className="forms" onSubmit={handleSubmit}>
        <div className="login-h2-div">
          <h2 id="login-h2">Log In</h2>
        </div>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className='form-field'>
          <label className='form-label'>
            Username or Email
            <input
              className='form-input'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='form-field'>
          <label className='form-label'>
            Password
            <input
              className='form-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button className='user-button-modal' type="submit">Log In</button>
          <button
            className='user-button demo'
            onClick={demoOnClick}
          >Demo
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
