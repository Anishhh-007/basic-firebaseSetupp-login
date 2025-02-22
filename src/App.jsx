import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

import Signin from './Signin'
import Login from './login'
import Welcome from './Welcome'
const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route index  element = {<Login />}/>
   
      <Route path='signin'  element = {<Signin />}/>
      <Route path='welcome'  element = {<Welcome />}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
