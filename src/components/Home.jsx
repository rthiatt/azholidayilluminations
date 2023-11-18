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

                <button onClick={() => {
                  const formData = {
                    requestType: "Quote",
                    serviceType: ["Trim on the front of the house", "Tree Wrapping"],
                    startDate: "2023-11-20",
                    endDate: "2023-11-25",
                    name: "John Doe",
                    email: "johndoe@example.com",
                    phone: "123-456-7890",
                    bestContact: "Email",
                    hoa: "Yes",
                    address: "123 Main St",
                    city: "Springfield",
                    zipcode: "12345",
                    notes: "Please check the back entrance."
                  };
                  
                  const data = {
                    embeds: [{
                      title: "📝 Quote Request",
                      color: 3447003, // A blue color, for example
                      fields: [
                        {
                          name: "🏷️ Request Details",
                          value: `**Type:** ${formData.requestType}\n**Service Needed:** ${formData.serviceType.join(", ")}\n**HOA:** ${formData.hoa}`,
                          inline: false
                        },
                        {
                          name: "📅 Date Range",
                          value: `${formData.startDate} to ${formData.endDate}`,
                          inline: true
                        },
                        {
                          name: "📍 Location",
                          value: `${formData.address}, ${formData.city}, ${formData.zipcode}`,
                          inline: true
                        },
                        {
                          name: "👤 Client Information",
                          value: `**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Phone:** ${formData.phone}\n**Preferred Contact:** ${formData.bestContact}`,
                          inline: false
                        },
                        {
                          name: "📝 Additional Notes",
                          value: formData.notes,
                          inline: false
                        }
                      ]
                    }]
                  };

                  fetch('https://discord.com/api/webhooks/1174190572781707324/0ugBIdmH-3AuwenpRWs9K971tc-cq3iPy02wn5sZIa0F7JH9UhWv6XhwsfaS9pOM9HQ2', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                  .then(res => {
                    console.log(res)
                  })
                }}>Test</button>

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