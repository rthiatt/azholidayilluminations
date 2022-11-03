import { React, useEffect } from 'react'
import styled from 'styled-components'
import Logo from './NavLogo.jsx'
import NavButton from './NavButton'
import NavLogo from './NavLogo.jsx'

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 7vw;
    padding-left: 2vw;
    padding-right: 2vw;
    box-shadow: 0px 10px 10px 0px #00000028;
    position: sticky;
    overflow: hidden;
    top: -1px;
    background-color: #ffffff47;

    margin-bottom: 1.5vw;
    z-index: 1001;
    backdrop-filter: blur(20px);
`

function Navbar(props) {

    console.log(props.refs)

    function handleScrollToElement(event) {

        if (event.target.innerHTML == "HOME") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } else if (event.target.innerHTML == "ABOUT") {
            props.refs[4].current.scrollIntoView({ behavior: "smooth" })
            
        } else if (event.target.innerHTML == "REQUESTS") {
            props.refs[1].current.scrollIntoView({ behavior: "smooth" })
            
        } else if (event.target.innerHTML == "CONTACT") {
            props.refs[2].current.scrollIntoView({ behavior: "smooth" })
            
        } else if (event.target.innerHTML == "GALLERY") {
            props.refs[3].current.scrollIntoView({ behavior: "smooth" })
            
        }
    }

    return (
        <Nav>   
            <NavLogo />
            <NavButton onClick={handleScrollToElement} >HOME</NavButton>
            <NavButton onClick={handleScrollToElement} >REQUESTS</NavButton>
            <NavButton onClick={handleScrollToElement} >CONTACT</NavButton>
            <NavButton onClick={handleScrollToElement} >GALLERY</NavButton>
            <NavButton onClick={handleScrollToElement} >ABOUT</NavButton>
        </Nav>
    )
}

export default Navbar