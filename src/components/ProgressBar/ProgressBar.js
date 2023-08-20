/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    radius: 4,
    height: 8,
    padding: 0,
  },
  medium: {
    radius: 4,
    height: 12,
    padding: 0,
  },
  large: {
    radius: 8,
    height: 24,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]; //A limited version: //const height = size === "small" ? 8 : 12;
  if (!styles) {
    throw new Error(
      `The Size applied is not recognised by the ProgressBar ${size}`
    );
  }

  return (
    <>
      <Label> {size} </Label>

      <Progressbar
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          "--radius": styles.radius + "px",
          "--padding": styles.padding + "px",
        }}
      >
        <VisuallyHidden>{value} %</VisuallyHidden>

        <BarWrapper>
          <Bar
            style={{ "--width": value + "%", "--height": styles.height + "px" }}
          />
        </BarWrapper>
      </Progressbar>
    </>
  );
};

// ---------------------------STYLES BEGINS-------------------------------------

const Progressbar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius); //needs to be changed from 4px to dynamic //border-radius: var(--borderRadiusSize); // WHY DIDN'T JOSH DO THIS?
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden; //I set this, so that if any child bleeds outside of this parent, it will be trimmed off.
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  width: var(--width);
  height: var(--height);
`;

const Label = styled.span`
  text-transform: capitalize;
`;
export default ProgressBar;
