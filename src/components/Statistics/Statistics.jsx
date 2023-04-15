import React from 'react';
import { PropTypes } from "prop-types";
import {Section, Title, StatList, ItemList} from "./Statistics.styled";




export const Statistics = ({stats}) => {
return (
<Section >
 <Title>Upload stats</Title>
<StatList>
{stats.map((item, idx) => (
<ItemList key={item.id} id={item.id} index={idx} >
    <span>{item.label}</span>
    <span>{item.percentage}%</span>
  </ItemList>
))}
  </StatList>
</Section>
)
}
