import { React, useRef, useEffect } from 'react'

import Section from "./Section.jsx";
import Panel from "./Panel.jsx";
import SectionPlain from "./SectionPlain.jsx";
import SocialMediaPanel from "./SocialMediaPanel.jsx";
import styled from 'styled-components'
import useWindowDimensions from "../useWindowDimensions.js";
import Logo from "./Logo.jsx";
import Navbar from "./Navbar.jsx";
import CustomCarousel from './CustomCarousel.jsx';

const MainContainer = styled.div`
  text-align: center;
  padding-left: 5vw;
  padding-right: 5vw;
  z-index: 999;
`
const RequestPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  scroll-margin-top: 10vw;
`
const Image = styled.img`
    border-radius: 8px;
    /* margin: 10px; */
    height: 30vw;

    @media (max-width: 500px) {
        height: 64vw;
    }
    
`
const LogoComponent = () => {
  const { height, width } = useWindowDimensions();

  let snowflakeCount
  let snowHeight
  let snowWidth
  let radiusMin
  let radiusMax
  let windMin
  let windMax
  let speedMin
  let speedMax

  if (width < 821) {
    snowflakeCount = 100
    // snowHeight = "100%"
    // snowWidth = "100%"
    radiusMin = 0.01
    radiusMax = 0.5
    windMin = 0.001
    windMax = 0.002
    speedMin = 0.03
    speedMax = 0.05
  } else {
    snowflakeCount = 300
    // snowHeight = "100%"
    // snowWidth = "100%"
    radiusMin = 1
    radiusMax = 3
    windMin = 0.5
    windMax = 1
    speedMin = 1.5
    speedMax = 2
  }

  return(
    <Logo snowflakeCount={snowflakeCount} height={snowHeight} width={snowWidth} radiusMin={radiusMin} radiusMax={radiusMax} windMin={windMin} windMax={windMax} speedMin={speedMin} speedMax={speedMax}/>
  )
}

function Home() {
    
    const HomeRef = useRef(null)
    const RequestsRef = useRef(null)
    const ContactRef = useRef(null)
    const GalleryRef = useRef(null)
    const AboutRef = useRef(null)

    const refs = [HomeRef, RequestsRef, ContactRef, GalleryRef, AboutRef]

    

    return (
        <>
            <Navbar refs={refs}/>
            <MainContainer ref={HomeRef}>
                {/* LOGO */}
                <LogoComponent />

                {/* INTRO */}
                <Section title="Making the Holidays Brighter" ref={AboutRef}>
                    What started out as providing quality lighting for family and friends is now a passion to deliver the same high-quality decorations to your family. 
                    <br />
                    <br />
                    We use only LED lights to help keep your costs down. With incandescent lights, your monthly electricity bill can jump by hundreds of dollars.
                    By using LED we help keep the jump in your electricity bill to a minimum.
                </Section>

                {/* WHAT WE OFFER */}
                <SectionPlain title={"What We Offer"}/>

                {/* REQUESTS PAGE */}
                <RequestPanel ref={RequestsRef}>
                    <Panel panel="Request"/>
                    <Panel panel="Repair"/>          
                    <Panel panel="TakeDown"/>
                </RequestPanel>

                {/* CAROUSEL /> */}
                <div ref={GalleryRef}></div>
                <CustomCarousel />

                {/* CONTACT US */}
                <SocialMediaPanel ref={ContactRef}/>
            </MainContainer>
        </>
    )
}

export default Home