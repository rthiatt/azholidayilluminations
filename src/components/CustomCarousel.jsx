import React from 'react'
import { createRef, Component } from "react";
import styled from 'styled-components'
import Carousel from 'better-react-carousel'
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16 } from "../index.js";

const Image = styled.img`
    border-radius: 8px;
    margin: 10px;
    height: 30vw;

    @media (max-width: 500px) {
        height: 64vw;
    }
    
`
const ImageContainer = styled.div`
    margin-top: 2vw;
    margin-bottom: 3vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    z-index: 1000;
    position: relative;
`

const CustomCarousel = React.forwardRef((props, ref) => (    

    <Carousel cols={2} rows={1} loop={true} gap={"5px"} autoplay={6000} containerStyle={{"paddingBottom": "10vw", "paddingTop": "10vw"}} ref={ref}>
        {
        [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16].map((image) =>
            <Carousel.Item key={image.toString()}>
            <Image src={image} />
            </Carousel.Item>
        )}
    </Carousel>
))

export default CustomCarousel
