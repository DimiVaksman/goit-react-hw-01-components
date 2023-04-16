import styled from 'styled-components';

export const Table = styled.table`
  background-color: #e5ecee;
  border: 1px solid;
  box-shadow: -3px 2px 14px -5px rgb(0 0 0 / 95%);
  width: 440px;
  border-collapse: collapse;
  top: 185%;
  left: 6%;
  position: absolute;
`;

export const TableHeader = styled.thead`
  background-color: #6866c0;
`;
export const Tr = styled.tr`
  :hover {
    background-color: white;
  }
  cursor: pointer;
`;

export const Th = styled.th`
  font-size: 24px;
  border: 1px solid;
  padding-top: 16px;
  padding-bottom: 16px;
  text-aling: center;
`;

export const Tbody = styled.tbody`
  border: 1px solid;
`;
