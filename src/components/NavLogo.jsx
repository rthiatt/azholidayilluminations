import React from 'react'
import styled from 'styled-components'
import { logo } from "../index.js";

const Logo = styled.img`
    height: 100%;
`

function NavLogo(props) {

    return (
        <Logo src={logo}/>
    )
}

export default NavLogo