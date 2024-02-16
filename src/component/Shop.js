import React from 'react'

function Shop() {
  return (
    <>
    {/* Breadcrumb Start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <a className="breadcrumb-item text-dark" href="/">Home</a>
                    <a className="breadcrumb-item text-dark" href="/">Shop</a>
                    <span className="breadcrumb-item active">Shop List</span>
                </nav>
            </div>
        </div>
    </div>
    {/* Breadcrumb End */}


    {/* Shop Start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4">
                {/* Price Start */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="price-all"/>
                            <label className="custom-control-label" for="price-all">All Price</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1"/>
                            <label className="custom-control-label" for="price-1">Rs0 - Rs100</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2"/>
                            <label className="custom-control-label" for="price-2">Rs100 - Rs200</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}} >295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3"/>
                            <label className="custom-control-label" for="price-3">Rs200 - Rs300</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4"/>
                            <label className="custom-control-label" for="price-4">Rs300 - Rs400</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="price-5"/>
                            <label className="custom-control-label" for="price-5">Rs400 - Rs500</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>168</span>
                        </div>
                    </form>
                </div>
                {/* Price End */}
                
                {/* Color Start */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="color-all"/>
                            <label className="custom-control-label" for="price-all">All Color</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-1"/>
                            <label className="custom-control-label" for="color-1">Black</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-2"/>
                            <label className="custom-control-label" for="color-2">White</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-3"/>
                            <label className="custom-control-label" for="color-3">Red</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-4"/>
                            <label className="custom-control-label" for="color-4">Blue</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="color-5"/>
                            <label className="custom-control-label" for="color-5">Green</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>168</span>
                        </div>
                    </form>
                </div>
                {/* Color End */}

                {/* Size Start */}
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="size-all"/>
                            <label className="custom-control-label" for="size-all">All Size</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-1"/>
                            <label className="custom-control-label" for="size-1">XS</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-2"/>
                            <label className="custom-control-label" for="size-2">S</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-3"/>
                            <label className="custom-control-label" for="size-3">M</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-4"/>
                            <label className="custom-control-label" for="size-4">L</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="size-5"/>
                            <label className="custom-control-label" for="size-5">XL</label>
                            <span className="badge border font-weight-normal" style={{color:"red"}}>168</span>
                        </div>
                    </form>
                </div>
                {/* Size End */}
            </div>
            {/* <!-- Size End --> */}


           {/* Shop Product Start */}
            <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                            </div>
                            <div className="ml-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="/">Latest</a>
                                        <a className="dropdown-item" href="/">Popularity</a>
                                        <a className="dropdown-item" href="/">Best Rating</a>
                                    </div>
                                </div>
                                <div className="btn-group ml-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="/">10</a>
                                        <a className="dropdown-item" href="/">20</a>
                                        <a className="dropdown-item" href="/">30</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Sony Camera</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs10000</h5><h6 className="text-muted ml-2"><del>Rs15000</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Rounded Neck Sweater</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs700</h5> <h6 className="text-muted ml-2"> </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Wooden Electric Table Lamp</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs1200</h5><h6 className="text-muted ml-2"><del>Rs12300</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Running Nike</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs5000</h5><h6 className="text-muted ml-2"><del>Rs9000</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Z+ Drone</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs50000</h5><h6 className="text-muted ml-2"><del>Rs150000</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Noise</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs900</h5><h6 className="text-muted ml-2"><del>Rs1500</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">H&M Jeans</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs2300</h5><h6 className="text-muted ml-2"><del>Rs5500</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Facial</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs500</h5><h6 className="text-muted ml-2"><del>Rs1000</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-9.jpg" alt=""/>
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">office Chair</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>Rs12000</h5><h6 className="text-muted ml-2"><del>Rs20000</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <nav>
                          <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="/"> Previous </a></li>
                            <li className="page-item active"><a className="page-link" href="/">1</a></li>
                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item"><a className="page-link" href="/">Next</a></li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Shop Product End */}
        </div>
    </div>
    {/* Shop End */}
    </>
  )
}

export default Shop