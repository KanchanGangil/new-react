import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../redux/action/ProductAction'
import Loading from '../layouts/Loading'
import MetaData from '../layouts/MetaData'
import { Message } from '../layouts/Message'
import { addItemsToCart } from '../../redux/action/CartAction'
import { Link } from 'react-router-dom'

function ProductDetail() {
    //for id get we use useParams
    const { id } = useParams()
    // console.log(id);
    // state for quantity
    const [quantity, setQuantity] = useState(1)

    // stock increase decrease function
    const increaseQty = () => {
        if (productDetail.stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);

    }
    const decreaseQty = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    }

    const dispatch = useDispatch();
    const { productDetail, loading } = useSelector(state => state.pdetail)
    console.log(productDetail);

    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch, id])

    const addtoCartHandler = () => {
        // alert('Hello Cart add')
        dispatch(addItemsToCart(id, quantity))
    }

    return (
        <>
            {/* Breadcrumb Start  */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="/">Home</a>
                            <a className="breadcrumb-item text-dark" href="/shop">Shop</a>
                            <span className="breadcrumb-item active">Shop Detail</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}


            {/* Shop Detail Start */}



            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src={productDetail?.image?.url} alt="" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            {
                                loading ? <Loading /> : (
                                    <>
                                        <MetaData title={'Product Detail'} />
                                        <h3>{productDetail.name}</h3>
                                    </>
                                )
                            }
                            <h3>{productDetail.name}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">{productDetail.price}</h3>
                            <p className="mb-4">{productDetail.description}</p>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus" onClick={decreaseQty}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control bg-secondary border-0 text-center" value={quantity} />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus" onClick={increaseQty}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <Link to='/cart'>
                                    <button className="btn btn-primary px-3" onClick={addtoCartHandler}><i className="fa fa-shopping-cart mr-1"></i> Add To
                                        Cart</button>
                                </Link>
                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">Share on:</strong>
                                <div className="d-inline-flex">
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a className="text-dark px-2" href="/">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="bg-light p-30">
                            <div className="nav nav-tabs mb-4">
                                <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <h4 className="mb-3">Product Description</h4>
                                    <p>A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted</p>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <h4 className="mb-3">Additional Information</h4>
                                    <p>When you add shipping information to a product page in WooCommerce, they are default shown in the Additional Information tab. This article covers the overview of WooCommerce Additional Information tab and presents 4 ways to customize the Additional Information tab in WooCommerce.
                                        Keep reading if you are looking for a way to make custom changes with such a tab on the WooCommerce product page.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    This adds another layer of complexity and further emphasizes.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    The benefits of using an all-in-one plugin solution that provides comprehensive features.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    This adds another layer of complexity and further emphasizes.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    The benefits of using an all-in-one plugin solution that provides comprehensive features.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="mb-4">1 review for "Product Name"</h4>
                                            <div className="media mb-4">
                                                <img src="images/ageof code.png" alt="" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                                                <div className="media-body">
                                                    <h6>Rohit Bhadauriya<small> - <i>21 Nov 2023</i></small></h6>
                                                    <div className="text-primary mb-2">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className="mb-4">Leave a review</h4>
                                            <small>Your email address will not be published. Required fields are marked *</small>
                                            <div className="d-flex my-3">
                                                <p className="mb-0 mr-2">Your Rating * :</p>
                                                <div className="text-primary">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <label for="message">Your Review *</label>
                                                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label for="name">Your Name *</label>
                                                    <input type="text" className="form-control" id="name" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="email">Your Email *</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                                <div className="form-group mb-0">
                                                    <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shop Detail End */}


            {/* Products Start */}

            <div className='container-fluid'>
                <div className='row'>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-1.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-2.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-3.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-4.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-5.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-6.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-7.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="card-img-top" src="images/product-8.jpg" alt="" />
                                            <div className="card-body">
                                                <p className="card-text text-center">High quality resolution camera </p>
                                                <p className="card-text text-center">Rs 10,000</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  product end  */}
        </>
    )
}

export default ProductDetail