import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    borderThickness: 1,
    fontSize: 14,
    iconSize: 16,
    height: 24 
  },
  large: {
    borderThickness: 2,
    fontSize: 18,
    iconSize: 24,
    height: 36 
  }, 
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}> {/*We are just creating custom css variable here with 16 as it's value, how does this become the size of the height? Answer is that we used it in Line 54,when declaring the height */}
        <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
      </IconWrapper>
      <TextInput {...delegated} style={{'--width': width + "px", '--height': styles.height + "px", '--borderThickness': styles.borderThickness +"px", '--font-size': styles.fontSize + "px"}}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover{
    color: ${COLORS.black};

  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  height: var(--height)rem;
  width: var(--width);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--height); //We want the text to start from the size (width) of IconWrapper;And interestingly the width of IconWrapper is perfectly th height of TextInput
  color: inherit; /*How does setting the color as inherit on the textinput impact the adajcent element: Icon? Answer is that this inherit the color of the parent, explicitly, so does the adjacent implicitly.*/
  font-weight: 700;
  font-size: var(--font-size);
  outline-offset: 2px;
  

  &::placeholder{
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
