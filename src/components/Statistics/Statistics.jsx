import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Section,
  Title,
  StatList,
  ItemList,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((item, idx) => (
          <ItemList key={item.id} id={item.id} index={idx}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </ItemList>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
