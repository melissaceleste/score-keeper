import styled from 'styled-components/macro'
import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Nav>
      {/*    <NavigationContainer> */}
      <Button as={NavLink} exact to="/">
        Play
      </Button>
      <Button as={NavLink} rxact to="/history">
        History
      </Button>
      {/* </NavigationContainer> */}
    </Nav>
  )
}

const Nav = styled.nav`
  width: 100% auto;
  display: flex;
  justify-content: space-evenly;
`
/* const NavButton = styled(Button)`
  width: 100% auto;
  height: 100% auto;
`
 */
