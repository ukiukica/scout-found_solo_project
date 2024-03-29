import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import '../../context/Modal.css'

function SignupForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/filmLocations" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return (
        dispatch(sessionActions.signup({ email, username, password })))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <div className="login-h2-div">
          <h2 id="login-h2">Sign Up</h2>
        </div>
      <ul className='errors'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className='form-field'>
      <label className='form-label'>
        Email
        <input
          className='form-input'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      </div>
      <div className='form-field'>
      <label className='form-label'>
        Username
        <input
          className='form-input'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div className='form-field'>
      <label className='form-label'>
        Confirm Password
        <input
          className='form-input'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      </div>
      <button className='user-button-modal' type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
