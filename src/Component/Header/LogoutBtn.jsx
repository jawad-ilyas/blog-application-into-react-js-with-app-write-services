import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/auth'
import { logout } from '../../features/AuthSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div>
            <button onClick={logoutHandler}>
                Logout
            </button>
        </div>
    )
}

export default LogoutBtn
