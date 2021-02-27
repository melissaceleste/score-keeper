import styled from 'styled-components/macro'
export default styled.button`
  background-color: ${props => (props.isActive ? 'tomato' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  border: 1px solid black;
  width: 100%;
  padding: 8px;
  margin: 10px auto;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 16px;
  text-decoration: none;
  color: inherit;
  text-align: center;
  box-shadow: 1px 2px lightgray;
  &.active {
    background-color: tomato;
    color: white;
    box-shadow: 3px 4px tomato;
  }
`
