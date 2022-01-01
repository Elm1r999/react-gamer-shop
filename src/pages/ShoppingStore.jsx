import {BsGrid, BsListUl} from 'react-icons/bs'
import Products from '../components/shopping/Product/Products.jsx'
import NewsletterSignup from '../components/shopping/NewsletterSignup.jsx'
import ShoppingNavbar from '../components/shopping/Navbar/ShoppingNavbar'
import ShoppingNavigation from '../components/shopping/Navbar/ShoppingNavigation'
import ShoppingSideNav from '../components/shopping/Navbar/ShoppingSideNav.jsx'
import ShoppingFooter from '../components/shopping/ShoppingFooter.jsx'

const ShoppingStore = () => {
    return (
    <div>
        <ShoppingNavbar />
        <ShoppingNavigation />
		<div className="section">
			<div className="container">
				<div className="row">
                    <ShoppingSideNav />
					<div id="store" className="col-md-9">
						<div className="store-filter clearfix">
							<div className="store-sort">
                            <label>Sort By:</label>
                                <select className="input-select">
                                    <option value="0">Popular</option>
                                    <option value="1">Position</option>
                                </select>
                                &nbsp;&nbsp;&nbsp;&nbsp;
								<label>Show:</label>									
                                <select className="input-select">
                                    <option value="0">10</option>
                                    <option value="1">20</option>
                                </select>							
							</div>
							<ul className="store-grid">
								<li className="active"><BsGrid/></li>
								<li><a href="#"><BsListUl/></a></li>
							</ul>
						</div>         
                        <Products />
					</div>
				</div>
			</div>
		</div>
        <NewsletterSignup />
        <ShoppingFooter />
	</div>
    
    )
}

export default ShoppingStore
