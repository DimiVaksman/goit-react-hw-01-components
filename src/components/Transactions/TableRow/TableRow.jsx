import React from 'react';
import PropTypes from 'prop-types';
import { TrType,TdType } from "./TableRow.styled";

export const TableRow = ({ type, amount, currency, index }) => {
    return (
      <TrType idx={index}>
        <TdType>{type}</TdType>
        <TdType>{amount}</TdType>
        <TdType>{currency}</TdType>
      </TrType>
    );
  };



  TableRow.propTypes = {
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };