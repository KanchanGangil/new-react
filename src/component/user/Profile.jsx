import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../layouts/Loading';

function Profile() {
    const navigate = useNavigate();
    const { user, isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    return (
        <>
            {/* loading */}
            {
                loading ? (
                    <Loading />
                ) : (

                    <>
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mt-5">
                                        <img src={user?.image?.url} style={{ width: "100px" }} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Name:{user.name}</h5>
                                            <h5 className="card-title">Email:{user.email}</h5>

                                        </div>
                                        <div className="card-body" >
                                            <Link to="/updateprofile">
                                                <button className='btn btn-info mr-2'> Update profile</button>
                                            </Link>
                                            <Link to="/updatepassword">
                                                <button className='btn btn-info'>Update Password</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-5">
                                    <div className="row">
                                        <div className='col-md-4'>
                                            <div className="card" style={{ width: "12rem" }}>
                                                <div className="card-body">
                                                    <center>
                                                        <Link to="/">
                                                            <h6 className="card-subtitle mb-2 text-muted">My Orders</h6>
                                                            <span>
                                                                <i class="fa-solid fa-bag-shopping" style={{ fontSize: "30px", color: "skyblue" }}></i>
                                                            </span>
                                                        </Link>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="card" style={{ width: "12rem" }}>
                                                <div className="card-body">
                                                    <center>
                                                        <Link to="/">
                                                            <h6 className="card-subtitle mb-2 text-muted">WishList</h6>
                                                            <span>
                                                                <i class="fa-solid fa-heart" style={{ fontSize: "30px", color: "skyblue" }}></i>
                                                            </span>
                                                        </Link>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="card" style={{ width: "12rem" }}>
                                                <div className="card-body">
                                                    <center>
                                                        <Link to="/">
                                                            <h6 className="card-subtitle mb-2 text-muted">Security</h6>
                                                            <span>
                                                                <i class="fa-solid fa-lock" style={{ fontSize: "30px", color: "skyblue" }}></i>
                                                            </span>
                                                        </Link>
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 mt-2'><div className="card" style={{ width: "12rem" }}>
                                            <div className="card-body">
                                                <center>
                                                    <Link to="/">
                                                        <h6 className="card-subtitle mb-2 text-muted">Security</h6>
                                                        <span>
                                                            <i class="fa-solid fa-location-dot" style={{ fontSize: "30px", color: "skyblue" }}></i>
                                                        </span>
                                                    </Link>
                                                </center>
                                            </div>
                                        </div></div>
                                        <div className='col-md-4 mt-2'><div className="card" style={{ width: "12rem" }}>
                                            <div className="card-body">
                                                <center>
                                                    <Link to="/">
                                                        <h6 className="card-subtitle mb-2 text-muted">Security</h6>
                                                        <span>
                                                            <i class="fa-brands fa-rocketchat" style={{ fontSize: "30px", color: "skyblue" }}></i>
                                                        </span>
                                                    </Link>
                                                </center>
                                            </div>
                                        </div></div>

                                    </div>
                                </div>



                            </div>

                        </div>
                    </>
                )
            }
        </>
    )
}

export default Profile