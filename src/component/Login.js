import React from 'react'
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from './layouts/Loading';
import MetaData from './layouts/MetaData';
import { useState } from 'react';
import { clearErrors, loginUser } from '../redux/action/UserAction';
import { useEffect } from 'react';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    const submitHandle = (e) => {
        e.preventDefault();
        // console.log(email + password);
        dispatch(loginUser(email, password))

    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate("/");
        }
    }, [error, alert, dispatch, isAuthenticated, navigate]);
    return (
        <>
            {/* loading */}
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <MetaData title={'login'} />
                        <div className='container'>
                            <div className='px-5'>
                                <center><h3 className='mb-3'>Login Form</h3></center>
                                <form onSubmit={submitHandle}>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" name='email' className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" name='password' className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>
                            </div>
                        </div>

                    </>
                )
            }


        </>
    )
}

export default Login