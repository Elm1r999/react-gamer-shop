import React from 'react'
import {
    GrFacebook as Facebook,
    GrInstagram as Instagram,
    GrTwitter as Twitter,
    GrYoutube as Youtube
} from "react-icons/gr";
import ShoppingNavbar from '../components/shopping/Navbar/ShoppingNavbar';
import NewsletterSignup from '../components/shopping/NewsletterSignup';
import ShoppingFooter from '../components/shopping/ShoppingFooter';

const Checkout = () => {
    return (
        <div>
        <ShoppingNavbar/>    
		<div class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-7">
						<div class="billing-details">
							<div class="section-title">
								<h3 class="title">Billing address</h3>
							</div>
							<div class="form-group">
								<input class="input" type="text" name="first-name" placeholder="First Name"/>
							</div>
							<div class="form-group">
								<input class="input" type="text" name="last-name" placeholder="Last Name"/>
							</div>
							<div class="form-group">
								<input class="input" type="email" name="email" placeholder="Email"/>
							</div>
							<div class="form-group">
								<input class="input" type="text" name="address" placeholder="Address"/>
							</div>
							<div class="form-group">
								<input class="input" type="text" name="city" placeholder="City"/>
							</div>
							<div class="form-group">
								<input class="input" type="text" name="country" placeholder="Country"/>
							</div>
							<div class="form-group">
								<input class="input" type="text" name="zip-code" placeholder="ZIP Code"/>
							</div>
							<div class="form-group">
								<input class="input" type="tel" name="tel" placeholder="Telephone"/>
							</div>
							<div class="form-group">
								<div class="input-checkbox">
									<input type="checkbox" id="create-account"/>
									<label htmlFor="create-account">
										<span></span>
										Create Account?
									</label>
									<div class="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<input class="input" type="password" name="password" placeholder="Enter Your Password"/>
									</div>
								</div>
							</div>
						</div>

						<div class="shiping-details">
							<div class="section-title">
								<h3 class="title">Shiping address</h3>
							</div>
							<div class="input-checkbox">
								<input type="checkbox" id="shiping-address"/>
								<label htmlFor="shiping-address">
									<span></span>
									Ship to a diffrent address?
								</label>
								<div class="caption">
									<div class="form-group">
										<input class="input" type="text" name="first-name" placeholder="First Name"/>
									</div>
									<div class="form-group">
										<input class="input" type="text" name="last-name" placeholder="Last Name"/>
									</div>
									<div class="form-group">
										<input class="input" type="email" name="email" placeholder="Email"/>
									</div>
									<div class="form-group">
										<input class="input" type="text" name="address" placeholder="Address"/>
									</div>
									<div class="form-group">
										<input class="input" type="text" name="city" placeholder="City"/>
									</div>
									<div class="form-group">
										<input class="input" type="text" name="country" placeholder="Country"/>
									</div>
									<div class="form-group">
										<input class="input" type="text" name="zip-code" placeholder="ZIP Code"/>
									</div>
									<div class="form-group">
										<input class="input" type="tel" name="tel" placeholder="Telephone"/>
									</div>
								</div>
							</div>
						</div>

						<div class="order-notes">
							<textarea class="input" placeholder="Order Notes"></textarea>
						</div>		
					</div>

					<div class="col-md-5 order-details">
						<div class="section-title text-center">
							<h3 class="title">Your Order</h3>
						</div>
						<div class="order-summary">
							<div class="order-col">
								<div><strong>PRODUCT</strong></div>
								<div><strong>TOTAL</strong></div>
							</div>
							<div class="order-products">
								<div class="order-col">
									<div>1x Product Name Goes Here</div>
									<div>$980.00</div>
								</div>
								<div class="order-col">
									<div>2x Product Name Goes Here</div>
									<div>$980.00</div>
								</div>
							</div>
							<div class="order-col">
								<div>Shiping</div>
								<div><strong>FREE</strong></div>
							</div>
							<div class="order-col">
								<div><strong>TOTAL</strong></div>
								<div><strong class="order-total">$2940.00</strong></div>
							</div>
						</div>
						<div class="payment-method">
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-1"/>
								<label htmlFor="payment-1">
									<span></span>
									Direct Bank Transfer
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-2"/>
								<label htmlFor="payment-2">
									<span></span>
									Cheque Payment
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-3"/>
								<label htmlFor="payment-3">
									<span></span>
									Paypal System
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="input-checkbox">
							<input type="checkbox" id="terms"/>
							<label htmlFor="terms">
								<span></span>
								I've read and accept the <a href="#">terms and conditions</a>
							</label>
						</div>
						<a href="#" class="primary-btn order-submit">Place order</a>
					</div>
				</div>		
			</div>		
		</div>
        <NewsletterSignup />
        <ShoppingFooter />
        </div>
    )
}

export default Checkout
