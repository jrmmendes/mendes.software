import styled from "styled-components";

export const Briefing = styled.h2`
color: white;
font-weight: 300;
font-size: 1em;
`

export const Container = styled.article`
transition: all 200ms ease-in-out;
background-color: black;
position: relative;
border: 0.01em solid #939393;
padding: 1em;
margin-top: 2em;
border-radius: 0.3em;
&:hover {
  transition: all 200ms ease-in-out;
  transform: scale(1.03);
}
`

export const CardHeader = styled.header`
  display: flex;
  font-size: 0.8em;
`

export const Tag = styled.h1`
color: white;
font-weight: 500;
font-size: 1em;
display: inline;
margin-right: 0.5em;
`

export const Timestamp = styled.h2`
color: #939393;
font-size: 1em;
font-weight: 400;
display: inline;
margin-left: auto;
`

export const Title = styled.h1`
color: white;
font-weight: 300;
font-size: 1.5em;
`

export const TopColor = styled.div`
position: absolute;
margin: 0;
content: " ";
background: white;
height: 0.5em;
top: 0;
left: 0;
width: 100%;
border-radius: 0.2em 0.2em 0 0;
`
