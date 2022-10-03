import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import Main from './Layout/Main';
import Friends from './Components/Fridends/Friends';
import FriendsDetails from './Components/FriendsDetails/FriendsDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/Items', element: <Items></Items> },
        {loader: async () => { return fetch('https://jsonplaceholder.typicode.com/users')},
          path: '/friends',
          element: <Friends></Friends>
        },
        { path: '/friend/:teamId',
          element: <FriendsDetails></FriendsDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.teamId}`);
          }
        },
        {
          path: '/posts',
          element: <Posts></Posts>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          }
        },
        {
          path: '/post/:postId',
          element: <PostDetails></PostDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          }
        },
    ]},
    { path: '/about', element: <About></About> },
    { path: '*', element: <div>not found pleace try agen 404</div> },
  ]);

  return (
    <div className="App">
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
