import React from 'react';
import { NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
     return (
          <div className='navbar'>
                    <NavLink className={({ isActive })=>isActive? 'active':undefined} to='/home'>Home</NavLink>
                    <NavLink  to='/friends'>Friends</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/posts'>Post</NavLink>
                    <NavLink to='/items'>Items</NavLink>
          </div>
     );
};

export default Header;