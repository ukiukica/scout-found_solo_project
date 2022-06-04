import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpModal from '../SignupFormPage/SignUpModal';
import { demouser } from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();

  const demoOnClick = async (e) => {
    e.preventDefault();
    await dispatch(demouser())
  }

  return (
    <div id='navigation'>
      <h3 id='logo'>Scout Found</h3>
    {sessionUser ?
      <>
        <ProfileButton user={sessionUser} />
      </> :
      <>
        <LoginFormModal />
        <SignUpModal />
        <button
          onClick={demoOnClick}
        >Demo
        </button>
      </>
    }
    </div>
  )
}


export default Navigation;
