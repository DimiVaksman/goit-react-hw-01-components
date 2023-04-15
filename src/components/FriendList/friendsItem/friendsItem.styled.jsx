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
`;


export const List = styled.li`
padding-top: 25px;
padding-left: 15px;
display: flex;
align-items: baseline;
border: 1px solid rgba(113,255,222,0.88);
box-shadow: 10px 7px 32px 12px rgba(113,255,222,0.88);`


export const Avatar = styled.img`
margin-right: 15px;
`

export const FriendsName = styled.p`
font-size: 24px;
color:${props => {
    return props.isOnline ? 'rgba(27,249,26,0.88)' : 'rgba(249,65,28,0.88)';
    }};

text-shadow:${props => {
        return props.isOnline ? '2px 2px 6px rgba(27,249,26,0.88)' : '2px 2px 6px rgba(249,65,28,0.88)';
        }};

`