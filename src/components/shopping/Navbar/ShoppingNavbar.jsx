import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import ShoppingCartDropdown from '../Cart/ShoppingCartDropdown'
import TopHeader from './TopHeader'

const ShoppingNavbar = () => {
    return (
        <header>
			<TopHeader />		
			<div id="header">		
				<div className="container">			
					<div className="row">						
						<div className="col-md-3">
							<div className="header-logo">
								<Link to="/store" className="logo">
									<img src="/images/logo.png" alt="" />
								</Link>
							</div>
						</div>
		
						<div className="col-md-6">
							<div className="header-search">
								<form>
									<select className="input-select">
										<option value="0">All Categories</option>
										<option value="1">Category 01</option>
										<option value="1">Category 02</option>
									</select>
									<input className="input" placeholder="Search here"/>
									<button className="search-btn">Search</button>
								</form>
							</div>
						</div>

						<div className="col-md-3 clearfix">
							<div className="header-ctn">
								<div>
									<a href="#">
										<BsHeart className='wishlist-heart-icon'/>
										<br/>
										<span>Your Wishlist</span>
										<div className="qty">2</div>
									</a>
								</div>

								<ShoppingCartDropdown />								

								<div className="menu-toggle">
									<a href="#">
										<FaBars />
										<span>Menu</span>
									</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
    )
}

export default ShoppingNavbar
