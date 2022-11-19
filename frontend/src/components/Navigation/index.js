import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpModal from '../SignupFormPage/SignUpModal';
import SearchBar from '../SearchBar/Searchbar';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();


  return (
    <>
      <div id='nav-parent'>
        <div id='navigation'>
          <img id='logo' src='/images/logo.png' />
          <div id="search-div">
            <SearchBar />
          </div>
          {sessionUser ?
            <div className='profile-button'>
              <ProfileButton user={sessionUser} />
            </div> :
            <div className='user-button-div'>
              <LoginFormModal />
              <SignUpModal />
            </div>
          }
        </div>
      </div>
    </>
  )
}


export default Navigation;
