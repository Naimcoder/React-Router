import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';


const Post = ({ post }) => {
     console.log(post)
     const { id,title, userId, body } = post;

     const navigte = useNavigate()
     

     const handlarPost = () =>{
          navigte(`/post${id}`)
     }

     return (
          <div className='post-card'>
               <h2> userId: {userId}</h2>
               <h3>Title: {title}</h3>
               <p>{body}</p>
               <Link to={`/post/${id}`}>vist: {id}</Link>
               <Link to={`/post/${id}`}>
                    <button>show details</button>
               </Link>
               <button onClick={handlarPost}>show details2</button>
          </div>
     );

};

export default Post;