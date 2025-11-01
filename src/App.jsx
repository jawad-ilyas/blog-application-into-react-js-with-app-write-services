import React, { useEffect, useState } from 'react'
import config from './config/Config'
import Register from './Component/Register'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Loader from './Component/Loader/Loader'
import { useDispatch } from 'react-redux'
import authService from "./Appwrite/auth"
import { login, logout } from './features/AuthSlice'
import GlassLogin from './Component/Login/Login'
import { Outlet, useNavigate } from 'react-router-dom'
import PostCard from './Component/postCard/PostCard'
import RTE from './Component/rte/RTE'
const App = () => {
  // const navigator = useNavigate();
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {

    authService.getCurrentUser()
      .then((userData) => {
        console.log("userData ", userData);

        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())

        }
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App
