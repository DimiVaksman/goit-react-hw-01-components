import styled from "styled-components";

export const Status = styled.span`

  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;

  margin-right: 25px;
  background-color: ${props => {
  return props.isOnline ? 'green' : 'red';
  }};
  box-shadow:${props => {
    return props.isOnline ? '2px 2px 6px rgba(27,249,26,0.88)' : '2px 2px 6px rgba(249,65,28,0.88)';
    }};
`;


export const List = styled.li`
padding-top: 25px;
padding-bottom: 25px;
justify-content: center;
display: flex;
align-items: center;
border: 4px solid rgba(113,255,222,0.88);
border-radius: 24px;
background-color: ${props => {
  return props.isOnline ? '#c3f7c5' : '#fad6e0';
  }};
margin-bottom: 10px;
:hover{
  cursor: pointer;
}`


export const Avatar = styled.img`
margin-right: 15px;
`

export const FriendsName = styled.p`
font-size: 24px;
color:${props => {
    return props.isOnline ? '#2a532c' : 'rgba(249,65,28,0.88)';
    }};

text-shadow:${props => {
        return props.isOnline ? '2px 2px 6px rgba(27,249,26,0.88)' : '2px 2px 6px rgba(249,65,28,0.88)';
        }};

`