import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
     const post = useLoaderData()

     return (
          <div>
               <h2>This Is My Post Page: {post.length}</h2>
               <div className='post-container'>
                    {
                         post.map(post=><Post post={post}key={post.id}></Post>)
                    }
               </div>
          </div>
     );
};

export default Posts;