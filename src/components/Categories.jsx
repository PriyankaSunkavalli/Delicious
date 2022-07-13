import React from 'react'
import {FaPizzaSlice,FaHamburger,} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const IconContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;
`
const StyledLink=styled(NavLink)`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;
    h4{
        font-size: 8px;
        margin: 0;
        margin-top: 8px;
    }
`

const Categories = () => {
  return (
    <IconContainer>
        <StyledLink to='/cuisine/italian'><FaPizzaSlice/>
        <h4>Italian</h4>
        </StyledLink>
        <StyledLink to='/cuisine/american'><FaHamburger/>
        <h4>Ameriacan</h4>
        </StyledLink>
        <StyledLink to='/cuisine/chinese'><GiNoodles/>
        <h4>Chinese</h4>
        </StyledLink>
        <StyledLink to='/cuisine/japanese'><GiChopsticks/>
        <h4>Japanese</h4>
        </StyledLink>

    </IconContainer>
  )
}

export default Categories