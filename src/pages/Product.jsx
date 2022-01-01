import React from 'react'
import NewsletterSignup from '../components/shopping/NewsletterSignup'
import ShoppingNavbar from '../components/shopping/Navbar/ShoppingNavbar'
import ShoppingNavigation from '../components/shopping/Navbar/ShoppingNavigation'
import ShoppingBreadcrumb from '../components/shopping/Navbar/ShoppingBreadcrumb'
import ShoppingFooter from '../components/shopping/ShoppingFooter.jsx'
import {BsArrowLeftRight, BsArrowRight, BsCartPlus, BsStar, BsStarFill, BsStarHalf, BsHeartFill, BsEyeFill, BsHeartHalf} from 'react-icons/bs'
import {FaEnvelopeOpenText, FaFacebook, FaTwitter, FaGooglePlus} from 'react-icons/fa'

const Product = () => {
    return (
    <div>
        <ShoppingNavbar />
        <ShoppingNavigation />
        <ShoppingBreadcrumb />
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-5 col-md-push-2">
						<div id="product-main-img">
							<div className="product-preview">
								<img src="/images/ASUS-TUF-Gaming-FX505DV.jpeg" alt="" />
							</div>
						</div>
					</div>

					<div className="col-md-2  col-md-pull-5">
						<div id="product-imgs">
							<div className="product-preview">
								<img src="/images/ASUS-TUF-Gaming-FX505DV.jpeg" alt="" />
							</div>

							<div className="product-preview">
								<img src="/images/asus-tuf-gaming-monitor.jpg" alt="" />
							</div>

							<div className="product-preview">
								<img src="/images/msi-gaming-laptop.png" alt="" />
							</div>
						</div>
					</div>
	
					<div className="col-md-5">
						<div className="product-details">
							<h2 className="product-name">ASUS TUF FX505 GAMING LAPTOP</h2>
							<div>
								<div className="product-rating">
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarHalf/>
								</div>
								<a className="review-link" href="#">10 Review(s) | Add your review</a>
							</div>
							<div>
								<h3 className="product-price">$1500.00 <del className="product-old-price">$3000.00</del></h3>
								<span className="product-available">In Stock</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

							<div className="product-options">
								<label>Model:</label>&nbsp;&nbsp;
								<select className="input-select">
									<option value="0">FX505DV</option>
								</select>
								&nbsp;&nbsp;&nbsp;&nbsp;					
								<label>	Color:</label> &nbsp;&nbsp;&nbsp;&nbsp;
								<select className="input-select">
									<option value="0">Black</option>
								</select>
							</div>

							<div className="add-to-cart">
								<div className="qty-label">
									<label htmlFor="">Quantity:</label>&nbsp;&nbsp;&nbsp;&nbsp;
									<div className="input-number">
										<input type="number"/>
										<span className="qty-up">+</span>
										<span className="qty-down">-</span>
									</div>
								</div>
								<button className="add-to-cart-btn">add to cart</button>
							</div>

							<ul className="product-links">
								<li>Category:</li>
								<li><a href="#">Laptops</a></li>
								<li><a href="#">ASUS</a></li>
							</ul>

							<ul className="product-links">
								<li>Share:</li>
								<li><a href="#"><FaFacebook/></a></li>
								<li><a href="#"><FaTwitter/></a></li>
								<li><a href="#"><FaGooglePlus/></a></li>
								<li><a href="#"><FaEnvelopeOpenText/></a></li>
							</ul>

						</div>
					</div>

					<div className="col-md-12">
						<div id="product-tab">
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
								<li><a data-toggle="tab" href="#tab2">Details</a></li>
								<li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
							</ul>

							<div className="tab-content">
								<div id="tab1" className="tab-pane fade in active">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>

								<div id="tab2" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
								</div>

								<div id="tab3" className="tab-pane fade in">
									<div className="row">
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>4.5</span>
													<div className="rating-stars">
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarHalf/>
													</div>
												</div>
												<ul className="rating">
													<li>
														<div className="rating-stars">
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
														</div>
														<div className="rating-progress">											
														</div>
														<span className="sum">3</span>
													</li>
													<li>
														<div className="rating-stars">
															<BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStar/>
														</div>
														<div className="rating-progress">															
														</div>
														<span className="sum">2</span>
													</li>
													<li>
														<div className="rating-stars">
															<BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStar/>
                                                            <BsStar/>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<BsStarFill/>
                                                            <BsStarFill/>
                                                            <BsStar/>
                                                            <BsStar/>
                                                            <BsStar/>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<BsStarFill/>
                                                            <BsStar/>
                                                            <BsStar/>
                                                            <BsStar/>
                                                            <BsStar/>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
												</ul>
											</div>
										</div>
	
										<div className="col-md-6">
											<div id="reviews">
												<ul className="reviews">
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">{new Date().toLocaleDateString('en-UK')}</p>
															<div className="review-rating">
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">{new Date().toLocaleDateString('en-UK')}</p>
															<div className="review-rating">
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
																<BsStarHalf />
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">{new Date().toLocaleDateString('en-UK')}</p>
															<div className="review-rating">
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
																<BsStarFill />
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul className="reviews-pagination">
													<li className="active">1</li>
													<li><a href="#">2</a></li>
													<li><a href="#">3</a></li>
													<li><a href="#">4</a></li>
													<li><a href="#"><BsArrowRight/></a></li>
												</ul>
											</div>
										</div>
			
										<div className="col-md-3">
											<div id="review-form">
												<form className="review-form">
													<input className="input" type="text" placeholder="Your Name"/>
													<input className="input" type="email" placeholder="Your Email"/>
													<textarea className="input" placeholder="Your Review"></textarea>
													<div className="input-rating">
														<span>Your Rating: </span><br/>
														<div className="rate">																							
															<input type="radio" id="star5" name="rate" value="5" />
															<label for="star5" title="text">5 stars</label>
															<input type="radio" id="star4" name="rate" value="4" />
															<label for="star4" title="text">4 stars</label>
															<input type="radio" id="star3" name="rate" value="3" />
															<label for="star3" title="text">3 stars</label>
															<input type="radio" id="star2" name="rate" value="2" />
															<label for="star2" title="text">2 stars</label>
															<input type="radio" id="star1" name="rate" value="1" />
															<label for="star1" title="text">1 star</label>
														</div>
													</div>
													<button className="primary-btn">Submit</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="section">
			<div className="container">
				<div className="row">

					<div className="col-md-12">
						<div className="section-title text-center">
							<h3 className="title">Related Products</h3>
						</div>
					</div>

					<div className="col-md-3 col-xs-6">
						<div className="product">
							<div className="product-img">
								<img src="/images/ASUS-TUF-Gaming-FX505DV.jpeg" alt="" />
								<div className="product-label">
									<span className="sale">-50%</span>
								</div>
							</div>
							<div className="product-body">
								<p className="product-category">Category</p>
								<h3 className="product-name"><a href="#">product name goes here</a></h3>
								<h4 className="product-price">$1500.00 <del className="product-old-price">$3000.00</del></h4>
								<br />
								<div className="add-to-cart">
									<button className="add-to-cart-btn"><BsCartPlus/> add to cart</button>
								</div>
								<div className="product-rating">
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarHalf/>
								</div>
								<div className="product-btns">
									<button className="add-to-wishlist"><BsHeartFill/><span className="tooltipp">add to wishlist</span></button>
									<button className="add-to-compare"><BsArrowLeftRight/><span className="tooltipp">add to compare</span></button>
									<button className="quick-view"><BsEyeFill/><span className="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-3 col-xs-6">
						<div className="product">
							<div className="product-img">
								<img src="/images/asus-tuf-gaming-monitor.jpg" alt="" />
								<div className="product-label">
									<span className="new">NEW</span>
								</div>
							</div>
							<div className="product-body">
								<p className="product-category">Category</p>
								<h3 className="product-name"><a href="#">product name goes here</a></h3>
								<h4 className="product-price">$150.00 <del className="product-old-price">$300.00</del></h4>
								<br />
								<div className="add-to-cart">
									<button className="add-to-cart-btn"><BsCartPlus/> add to cart</button>
								</div>
								<div className="product-rating">
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarHalf/>
								</div>
								<div className="product-btns">
									<button className="add-to-wishlist"><BsHeartFill/><span className="tooltipp">add to wishlist</span></button>
									<button className="add-to-compare"><BsArrowLeftRight/><span className="tooltipp">add to compare</span></button>
									<button className="quick-view"><BsEyeFill/><span className="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>

					<div className="clearfix visible-sm visible-xs"></div>

					<div className="col-md-3 col-xs-6">
						<div className="product">
							<div className="product-img">
								<img src="/images/gaming-chair.jpeg" alt="" />
							</div>
							<div className="product-body">
								<p className="product-category">Category</p>
								<h3 className="product-name"><a href="#">product name goes here</a></h3>
								<h4 className="product-price">$150.00 <del className="product-old-price">$300.00</del></h4>
								<br />
								<div className="add-to-cart">
									<button className="add-to-cart-btn"><BsCartPlus/> add to cart</button>
								</div>
								<div className="product-rating">
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarHalf/>
								</div>
								<div className="product-btns">
									<button className="add-to-wishlist"><BsHeartFill/><span className="tooltipp">add to wishlist</span></button>
									<button className="add-to-compare"><BsArrowLeftRight/><span className="tooltipp">add to compare</span></button>
									<button className="quick-view"><BsEyeFill/><span className="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-3 col-xs-6">
						<div className="product">
							<div className="product-img">
								<img src="/images/msi-gaming-laptop.png" alt="" />
							</div>
							<div className="product-body">
								<p className="product-category">Category</p>
								<h3 className="product-name"><a href="#">product name goes here</a></h3>
								<h4 className="product-price">$150.00 <del className="product-old-price">$300.00</del></h4>
								<br />
								<div className="add-to-cart">
									<button className="add-to-cart-btn"><BsCartPlus/> add to cart</button>
								</div>
								<div className="product-rating">
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarFill/>
									<BsStarHalf/>
								</div>
								<div className="product-btns">
									<button className="add-to-wishlist"><BsHeartFill/><span className="tooltipp">add to wishlist</span></button>
									<button className="add-to-compare"><BsArrowLeftRight/><span className="tooltipp">add to compare</span></button>
									<button className="quick-view"><BsEyeFill/><span className="tooltipp">quick view</span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <NewsletterSignup />
        <ShoppingFooter />
    </div>
    )
}

export default Product
