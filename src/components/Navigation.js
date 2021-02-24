import styled from 'styled-components/macro'
import React from 'react'
import Button from './Button'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <NavigationContainer>
      <NavButton
        isActive={currentPage === 'play'}
        onClick={() => onNavigate('play')}
      >
        Play
      </NavButton>
      <NavButton
        isActive={currentPage === 'history'}
        onClick={() => onNavigate('history')}
      >
        History
      </NavButton>
    </NavigationContainer>
  )
}

const NavigationContainer = styled.nav`
  width: 100% auto;
  display: flex;
  justify-content: space-evenly;
`
const NavButton = styled(Button)`
  width: 100% auto;
  height: 100% auto;
`
