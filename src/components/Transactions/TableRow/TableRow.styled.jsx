import styled from 'styled-components';

export const TrType = styled.tr`
border: 1px solid
border-collapse: collapse;
background-color: ${props => (props.idx % 2 === 0 ? '#9795e3' : 'transparent')};
:hover {
background-color: #f4f9c6;
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
-moz-box-shadow: 0 6px 6px -6px #0E1119;
box-shadow: 0 6px 6px -6px #0E1119;
cursor: pointer;
`;

export const TdType = styled.td`
  border: 1px solid;
  text-align: center;
  font-size: 16px;
  padding-top: 6px;
  padding-bottom: 6px;
`;
