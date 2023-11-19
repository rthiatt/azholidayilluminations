import React from 'react'
import {Facebook, Yelp, Instagram, Twitter} from "../index.js";
import styled from 'styled-components'
import Text from './Text.jsx';

const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Image = styled.img`
    height: 3vw;
    margin-left: 2vw;
    margin-right: 2vw;
    filter: drop-shadow(0px 0px 10px #0000008d);

    @media (max-width: 500px) {
        height: 5vw;
    }
`

const MainSection = styled.div`
    border-radius: 10px;
    margin-bottom: 7vw;
    box-shadow: 0px 0px 10px 0px #00000028;
    padding-top: 3vw;
    padding-bottom: 3vw;
`

const IconSet = styled.div`
    /* margin-top: .75vw; */
`

const StyledHeader = styled.h1`
    font-size: 2vw;
    @media (max-width: 500px) {
     font-size: 5vw;
    }
    margin-top: 6vw;
`

const SocialMediaPanel = React.forwardRef((props, ref) => (
    <MainSection ref={ref}>
        <OuterDiv>
            <StyledHeader>Follow us on Social Media!</StyledHeader>  
            <IconSet>
                <Image src={Facebook}></Image>
                <Image src={Yelp}></Image>
                <Image src={Instagram}></Image>
                <Image src={Twitter}></Image>
            </IconSet>
        </OuterDiv>

        <OuterDiv>
            <StyledHeader>Have a question?</StyledHeader>
            <Text>Email us at contact@azholidayilluminations.com <br /> for basic questions or to request a quote.</Text>
        </OuterDiv>

        <OuterDiv style={{"margin" : "3vw"}}>
            <StyledHeader>Call Us</StyledHeader>
            <Text>602-390-5007</Text>
        </OuterDiv>
    </MainSection>
))

export default SocialMediaPanel