import React from 'react'
import styled from "styled-components"
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll, animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
    background: #000;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24 px;
    max-width: 1100px;
`

const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 3rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

const HamburgerIcon = styled.div`
    display: none;
    @media screen and (max-width:768px){
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;  
`

const NavLink = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid red;
    }
`
const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display:none;
    }
`

const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background-color: red;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: red;
    }
`

const Navbar = ({toggle}) => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>ProGamerShop  </NavLogo>
                <HamburgerIcon onClick={toggle}>
                    <FaBars></FaBars>
                </HamburgerIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='featured-products' smooth={true} duration={800} spy={true} exact='true' offset={-20}>Featured</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='discover' smooth={true} duration={800} spy={true} exact='true' offset={-20}>Discover</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='reviews'>Reviews</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/get-started'>
                        Get Started
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
