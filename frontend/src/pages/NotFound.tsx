import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../assets/images/notfound.jpeg';
import './NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <div className='main-not-found'>
          <Link to='/'>
            <p className='link-home'>HOMEPAGE</p>
          </Link>
          <img src={ notfound } alt='not-found' />
        </div>
      </>
    )
  }
}

export default NotFound;