import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectNative value={value} onChange={onChange}>
        {children}
      </SelectNative>

      <PresentationalBit>
        {displayedValue}

        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

//Their Parent; Why do we have to wrap them in the parent?? The parent needs to wrap them because we need the Select Element to fill the parent and the PresentationalBit size(width and height) to determine the size of the parent and shape of the Select element. Remember, the relative parent size will be determined by the size of it's non positional(static) element.
const Wrapper = styled.div`
  position: relative;
  width: max-content; //makes it not fill the whole screen, but rather takes the space of it's size(which is also based on her children).
`;

//The real Select Form Element
const SelectNative = styled.select`
  //Make the Select Element fill the whole Parent;So that when the parent area is clicked, the form element and presentational element gets clicked.
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  //Hide the Real Select;So that we can show our custom created Select: PresentatoionBit
  opacity: 0;
`;

//What gets shown
const PresentationalBit = styled.div`
  //The PresentationBit stays directly behind of the real Select Element,sothat when the Real is clicked the presentation,reacts.
  border-radius: calc(8rem / 16); //${8 / 16}rem; //calc(8rem/16); //8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: Roboto;
  font-size: ${16 / 16}rem; //calc(16rem/16); //16px;
  padding: 12px 16px;
  padding-right: 52px;


  //Whenever the Real Select Element is in focused, the adjacent element should: have an outline;
  ${SelectNative}:focus + &{
    outline: 1px dotted #212121; //fallbackif line 62 doesn't work...
    outline: 5px auto -webkit-focus-ring-color; //Making an element that does not naturally have an outline focus have an outline focus.
  }

  //Whenever the RealSelct is hovered on, the adjacent element(Presentation bit) should:
  ${SelectNative}:hover + &{
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none; //disallow mouse click/Activity on IconWrapper region,let the Real Select work the work.

`;

export default Select;
