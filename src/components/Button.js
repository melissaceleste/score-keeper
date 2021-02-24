import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? 'tomato' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  border: 1px solid black;
  width: 100%;
  height: 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 16px;
  margin: 10px auto;
`
