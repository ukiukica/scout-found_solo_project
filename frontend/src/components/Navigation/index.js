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
      <img id='logo' src='/images/logo.png' />
    {sessionUser ?
      <div className='profile-button'>
        <ProfileButton user={sessionUser} />
      </div> :
      <div className='user-button-div'>
        <LoginFormModal />
        <SignUpModal />
        <button
          className='user-button'
          onClick={demoOnClick}
        >Demo
        </button>
      </div>
    }
    </div>
  )
}


export default Navigation;
