import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/action/UserAction'
import { useAlert } from 'react-alert'


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()
    const { user, loading } = useSelector(state => state.auth)
    // console.log(user);

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
        alert.success('logout Successfully')

    }
    return (
        <>
            {/* Topbar Start  */}
            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <a className="text-body mr-3" href="/about">About</a>
                            <a className="text-body mr-3" href="/contact">Contact</a>
                            <a className="text-body mr-3" href="/">Help</a>
                            <a className="text-body mr-3" href="/">FAQs</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center" style={{ gap: "10px" }}>
                            {
                                user ? (
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">{user && user.name}</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
                                                <img style={{ height: "18px", width: "18px", borderRadius: "100%", marginLeft: "20px" }} src={user.image && user.image.url} className='rounded-circle' alt={user && user.name} />
                                                <span className="dropdown-item">{user && user.name}</span>
                                            </div>
                                            {
                                                user && user.role !== 'admin' ? (
                                                    <Link className="dropdown-item" to='/orders/me'>Orders</Link>
                                                ) : (
                                                    <Link className="dropdown-item" to='/admin/dashboard'>Dashboard</Link>
                                                )
                                            }
                                            <Link className="dropdown-item" to='/profile'>Profile</Link>
                                            <Link to='/' className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                        </div>
                                    </div>
                                ) : !loading && <Link className="dropdown-item" to='/login'>Sign in</Link>
                            }

                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="/" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingbottom: "2px" }} >0</span>
                            </a>
                            <a href="/" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingbottom: "2px" }}>0</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <a href="/" className="">
                            <img src="images/2023-25.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+910123456789</h5>
                    </div>
                </div>
            </div>
            {/* Topbar End  */}


            {/* Navbar Start  */}
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="dropdown nav-link">
                            <a href='/' className=" bg-success w-100 d-flex justify-content-center nav-link" style={{ height: "50px" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                                <i className="fa fa-angle-down mt-1"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="btn btn-secondary dropdown-toggle" href='/' type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dresses
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/">Men Dresses</a>
                                    <a className="dropdown-item" href="/">Women Dresses</a>
                                    <a className="dropdown-item" href="/">Baby Dress</a>
                                </div>
                                <a className="dropdown-item" href="/">Shirts</a>
                                <a className="dropdown-item" href="/">Jeans</a>
                                <a className="dropdown-item" href="/">Swimwear</a>
                                <a className="dropdown-item" href="/">Sleepwear</a>
                                <a className="dropdown-item" href="/">Sportswear</a>
                                <a className="dropdown-item" href="/">Jumpsuits</a>
                                <a className="dropdown-item" href="/">Blazers</a>
                                <a className="dropdown-item" href="/">Jackets</a>
                                <a className="dropdown-item" href="/">Shoes</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <a href="/" className="text-decoration-none d-block d-lg-none">
                                <img src="images/mobile view banner.png" alt="" />
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="/shop" className="nav-item nav-link">Shop</a>
                                    <a href="/detail" className="nav-item nav-link">Shop Detail</a>
                                    <div className="nav-item dropdown">
                                        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></a>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <a href="/cart" className="dropdown-item">Shopping Cart</a>
                                            <a href="/checkout" className="dropdown-item">Checkout</a>
                                        </div>
                                    </div>
                                    <a href="/contact" className="nav-item nav-link">Contact</a>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <a href="/" className="btn px-0">
                                        <i className="fas fa-heart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingbottom: "2px" }}>0</span>
                                    </a>
                                    <a href="/" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingbottom: "2px" }}>0</span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Navbar End  */}
            <br />
        </>
    )
}

export default Header