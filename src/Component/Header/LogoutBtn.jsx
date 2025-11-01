import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/auth'
import { logout } from '../../features/AuthSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            console.log("logout services is called into logoutbtn ")
            dispatch(logout())
        })
    }
    return (
        <div className="hidden md:flex items-center gap-4">
            <button onClick={logoutHandler} className="px-4 py-1.5 rounded-lg border border-rose-300/60 bg-white/50 text-rose-800 font-medium hover:bg-white hover:shadow transition">
                Log Out
            </button>

        </div>
    )
}

export default LogoutBtn
