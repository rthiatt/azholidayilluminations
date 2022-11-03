import React from 'react'
import styled from 'styled-components'
import { logo } from "../index.js";

import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

const StyledSnowfall = styled(Snowfall)`
`

const StyledLogo = styled.img`
    position: relative;
    
    height: 30%;
    width: 30%;

    &:before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(to top left, #ff3d00 0%, #0400ff 100% );
        transform: translate3d(0px, 20px, 0) scale(0.95);
        filter: blur(13px);
        opacity: var(0.7);
        transition: opacity 0.3s;
    }
    
`

const OuterContainer = styled.div`
    height: max-content;
`

function Logo(props) {

    return (
        <OuterContainer>
            <StyledSnowfall style={{
                zIndex: -1000,
                filter: "blur(5px)",
                position: 'fixed',
            }} snowflakeCount={props.snowflakeCount} radius={[props.radiusMin, props.radiusMax]} wind={[props.windMin, props.windMax]} speed={[props.speedMin, props.speedMax]}/>
            <StyledLogo src={logo}/>
        </OuterContainer>
    )
}

export default Logo