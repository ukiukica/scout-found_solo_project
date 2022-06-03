import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpModal from '../SignupFormPage/SignUpModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);


  return (
    (sessionUser ?
      <>
        <ProfileButton user={sessionUser} />
      </> :
      <>
        <LoginFormModal />
        <SignUpModal />
      </>
    )
  )
}


export default Navigation;
