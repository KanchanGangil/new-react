import React from 'react'
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                            <Link to={`productDetails/${product._id}`}>
                        <img className="img-fluid w-100" src={product.image.url} alt="" />
                        </Link>
                            </div>
                            <div className="text-center py-4">
                                <Link className="h6 text-decoration-none text-truncate" to={`ProductDetails/${product._id}`}>
                                    <h6>{product.name}</h6>
                                </Link>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>{product.price}</h5><h6 className="text-muted ml-2"><del>Rs15000</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>{product.description}</h5>
                                    <h6 className="text-muted ml-2"></h6>
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
    </>
  )
}

export default Product