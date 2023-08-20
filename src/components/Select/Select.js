import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper value={value} onChange={onChange}>
      {children}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  background-color:${COLORS.transparentGray15};
  width: calc(191rem/16); //191px; 
  /* width: max-content; */
  height:  calc(43rem/16); //43px;
  min-width: max-content;
  font-family: Roboto;
  font-size: 16px;
  font-weight:400;
  color: ${COLORS.gray700};
  border: 1px solid transparent;
  padding: calc(12rem/16); //add left aand right padding later.
  border-radius: 8px;
  
`;

export default Select;
