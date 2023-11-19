import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Mali&family=Mountains+of+Christmas&display=swap');

    font-family: 'Mali', cursive;
    border: none;
    cursor: pointer;
    font-size: 1.5vw;
    margin: 1vw;
    height: 100%;
    width: 100%;
    background-color: transparent;
    color: white;
    text-shadow: 0px 0px 20px #000000fb;


    text-shadow: 0 4px 3px rgba(0, 0, 0, 0.63);

    &:hover {
        background-color: #c5c5c560;
        transition: background-color 0.5s ease 0.5ms
    }

    @media (max-width: 500px) {
     font-size: 2vw;
    }
`

function NavButton(props) {
  return (
    <Button onClick={props.onClick}>{props.children}</Button>
  )
}

export default NavButton