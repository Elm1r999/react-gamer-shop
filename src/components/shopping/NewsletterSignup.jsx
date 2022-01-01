import React from 'react'
import {
    GrFacebook as Facebook,
    GrInstagram as Instagram,
    GrTwitter as Twitter,
    GrYoutube as Youtube
} from "react-icons/gr";
import {BsEnvelopeOpen} from 'react-icons/bs'

const NewsletterSignup = () => {
    return (
		<div id="newsletter" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button style={{height: '41px'}}><BsEnvelopeOpen/> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook/></a>
								</li>
								<li>
									<a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram/></a>
								</li>
								<li>
									<a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter /></a>
								</li>
								<li>
									<a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube/></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default NewsletterSignup
