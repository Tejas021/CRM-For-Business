import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Pages/Task'
import TicketPage from './Pages/TicketPage'
import SingleTicketTask from './Pages/SingleTicketTask'
import Navbar from './components/Navbar'
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
        <Navbar />
        <Routes>

          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/tickets" element={user ? <TicketPage /> : <Login />} />
          <Route exact path="/tasks" element={user ? <Task /> : <Login />} />
          <Route exact path="/ticket/:id" element={user ? <SingleTicketTask /> : <Login />} />
          <Route exact path="/task/:id" element={user ? <SingleTicketTask /> : <Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
