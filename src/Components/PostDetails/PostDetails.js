import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
     const posted = useLoaderData();
     const { userId, title, body, id } = posted;
     
     const navigate = useNavigate()
     
     const hendlePosts = () => {
     navigate(`/friend/${userId}`)
   }

     return (
          <div className='posted'>
               <h2> User Id: {userId}</h2>
                <h3>Title:  {title}</h3>
               <p>{body}</p>
               <button onClick={hendlePosts}>Get Now</button>
          </div>
     );
};
export default PostDetails;