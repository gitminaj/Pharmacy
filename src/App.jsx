import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css'
import UserDashboard from './components/user/UserDashboard';
import SignIn from './components/SignIn'

function App() {

  
  const appRoutes = createBrowserRouter([
    {
        path:"/",
        element: <SignIn/>,
        
    },
    {
        path:"/user_dashboard",
        element: <UserDashboard/>,
    }

])

  return (
    <>
        <RouterProvider router={appRoutes}/>
    </>
  )
}

export default App
