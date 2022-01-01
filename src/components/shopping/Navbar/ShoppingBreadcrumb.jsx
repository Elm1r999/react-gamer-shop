import React from 'react'

const ShoppingBreadcrumb = () => {
    return (
        <div id="breadcrumb" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#">Home</a></li>
							<li><a href="#">All Categories</a></li>
							<li><a href="#">Laptops</a></li>
							<li><a href="#">ASUS</a></li>
							<li className="active">ASUS TUF GAMING 505</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ShoppingBreadcrumb
