import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    borderBottom: "1px solid ${COLORS.black}",
    fontSize: 14 +"px",
    //iconsize

  },

  large:{
    borderBottom: "2px solid ${COLORS.black}",
    fontSize: 18 +"px",
  }

};


const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} size={size} strokeWidth={1} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInputBase
        placeholder={placeholder}
        style={{ "--width": width + "px" }}
      ></TextInputBase>
    </Wrapper>
  );
};

const TextInputBase = styled.input`
  width: var(--width);
  height: 24px; //just added this
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  color: ${COLORS.gray700};
  font-weight: 700;
  padding-left: 24px; // Shift the placeholder text to the right.
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:focus {
    border-radius: 2px;
    border: 2px solid -webkit-focus-ring-color;
    border: 2px solid  #4374cb;
  }


`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;

const Wrapper = styled.div`
  position: relative;

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
    font-weight: 700;
  }
 
`;

export default IconInput;
