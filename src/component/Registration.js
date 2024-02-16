import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, createUser } from '../redux/action/UserAction';
import Loading from './layouts/Loading';
import MetaData from './layouts/MetaData';

function Registration() {
    const navigate = useNavigate(); // For Form 
    const alert = useAlert();
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setCpassword] = useState()
    const [image, setImage] = useState()

    const submitHandle = (e) => {
        e.preventDefault();

        // console.log(name + email + password + cpassword);
        // console.log(image);
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('confirmpassword', confirmpassword)
        formData.append("image", image)
        dispatch(createUser(formData))

    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/login')
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [error, alert, dispatch, isAuthenticated, navigate])
    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <MetaData title={'registration'} />


                    </>
                )


            }
            <div className='container'>
                <div className='px-5'>
                    <center><h3 className='mb-3'>Registration Form</h3></center>
                    <form onSubmit={submitHandle}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name='name' className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name='email' className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" name='password' className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Confirm Password</label>
                            <input type="cpassword" name='confirmpassword' className="form-control" placeholder="Confirm Password" onChange={(e) => setCpassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Upload Image</label>
                            <input type="file" name='image' className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Registration