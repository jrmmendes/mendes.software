import styled from 'styled-components'

export default styled.a`
  transition: all 200ms ease-in-out;
  bos-sizing: border-box;
  text-align: center;
  height: 1em;
  color: white;
  text-decoration: none;
  font-size: 1em;
  border: 0.02em solid white;
  border-radius: 0.3em;
  padding: 0.8em;

  &:hover {
    transition: all 200ms ease-in-out;
    color: black;
    background: #FFF;
  }

  &.disabled {
    cursor: default;
    opacity: 0.6;
    &:hover {
      color: white;
      background: none;
    }
  }
  ` 
