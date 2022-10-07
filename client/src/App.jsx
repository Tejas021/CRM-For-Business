import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { userRequest } from "./axios";
import { setUser } from "./redux/reducers/auth";

function App() {

  const user = useSelector(state => state.auth.currentUser)
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUser = async () => {
      // console.log("run")
      try {
        const res = await userRequest.get('/auth/verify')
        console.log(res.data)
        dispatch(setUser(res.data))
      } catch (err) {
        console.log(err)
      }
    }
    verifyUser();
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/" element={user ? <Home /> : <Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
