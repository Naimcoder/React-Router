import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendsDetails.css'

const FriendsDetails = () => {
     const items = useLoaderData()
     const { id, email, phone,name } = items;
     console.log(items)
     return (
          <div className='cards'>
               <h3>Id:  {id}</h3>
               <h4>Parson Name:  {name}</h4>
               <p>Email: {email}</p>
               <h4>Phone:  {phone}</h4>
               <h2>EveryThink  you need to know about this parson</h2> 
          </div>
     );
};

export default FriendsDetails;