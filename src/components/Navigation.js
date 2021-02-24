import styled from 'styled-components/macro'
import React from 'react'
import Button from './Button'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <NavigationContainer>
      <NavButton onClick={() => onNavigate(0)} isActive={activeIndex === 0}>
        Play
      </NavButton>
      <NavButton isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </NavButton>
    </NavigationContainer>
  )
}

const NavigationContainer = styled.nav`
  width: 100% auto;
  background-color: #eee;
  padding: 2px;
  display: flex;
  justify-content: space-evenly;
`
const NavButton = styled(Button)`
  width: 100% auto;
  height: 100% auto;
`
