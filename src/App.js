import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GitHub from './components/GitHub/GitHub';
import GoogleSingUpform from './components/google-singUp-form/google-singUp-form';
import Google from './components/google/google';
import Header_nav from './header-nav/header-nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/log-in/log-in';
function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        element:<Header_nav></Header_nav>,
        children:[
          {
            path:'/google-singUp-from',
            element:<GoogleSingUpform></GoogleSingUpform>
          },
          {
            path:'/google-singUp',
            element:<Google></Google>
          },
          {
            path:'/GitHub-singUp',
            element:<GitHub></GitHub>
          },
          {
            path:'/log-in',
            element:<LogIn></LogIn>
          }
        ]
      }
    ])
  return (
   <div>
    <RouterProvider router={router} ></RouterProvider>
   </div>
  );
}

export default App;
