import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friend }) => {
     const { id, name, email, username } = friend;
     return (
          <div className='card'>
               <h3>User Id:{id}</h3>
               <h4>  Name: {name}</h4>
               <p>Email Address:  {email}</p>
               <p><small>User Name: <Link to={`/friend/${id}`}>{username}</Link> </small></p>
          </div>
     );
};

export default Friend;