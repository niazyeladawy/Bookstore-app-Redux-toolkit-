import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInOut } from '../store/authSlice'


function Header() {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.auth);
    const { error } = useSelector(state => state.books);
    return (
        <>
            {
                error && <div class="alert alert-danger mb-0" role="alert">
                    error fetch data
                </div>
            }

            <div className='header d-flex justify-content-between p-3 bg-info'>
                <h2 className='text-white'>My Books</h2>
                <button className='btn text-white border' onClick={()=> dispatch(logInOut())}>{isLoggedIn ? "Logout" : "Login"}</button>
            </div>
        </>

    )
}

export default Header