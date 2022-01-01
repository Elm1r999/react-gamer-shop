import React from 'react'
import NewsletterSignup from '../components/shopping/NewsletterSignup.jsx'
import ShoppingNavbar from '../components/shopping/Navbar/ShoppingNavbar'
import ShoppingFooter from '../components/shopping/ShoppingFooter.jsx'
import styled from 'styled-components'

const GoHomeBtn = styled.button`
    width: 25%;
    height: 5vh;

    :hover{
        background-color: black;
        color: white;
        border: dotted white;
    }
`

const NotFound = () => {
    return (
        <div>            
            <ShoppingNavbar />
            <div className="section">
                <div className="container">
                    <div class="center" style={{textAlign:'center'}}>
                        <h1> 404 <br/><br/> OOPS! PAGE NOT FOUND.</h1>
                        <br/>
                        <GoHomeBtn>RETURN TO HOMEPAGE</GoHomeBtn> 
                    </div>                     
                </div>
            </div>
            <NewsletterSignup />
            <ShoppingFooter />            
        </div>
    )
}

export default NotFound
