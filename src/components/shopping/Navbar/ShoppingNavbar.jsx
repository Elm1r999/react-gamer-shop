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
										<option value="all">All Categories</option>
										<option value="chairs">Gaming Chairs</option>
										<option value="laptops">Laptops</option>
										<option value="monitors">Monitors</option>
										<option value="mouses">Mouses</option>
										<option value="mousepads">Mousepads</option>
										<option value="headsets">Headsets</option>									
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
