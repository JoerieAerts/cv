import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {ButtonText} from "../Shared/Typography";

const DynamicButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const DynamicCircle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(#e66465, #9198e5);
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
  z-index: 2;
  pointer-events: none;
  left: calc((100% - var(--mouse-x, 0)) * 1%);
  top: calc((100% - var(--mouse-y, 0)) * 1%);
`;

const DynamicButtonContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px 20px;
  background-color: #0077cc;
  color: #ffffff;
  cursor: pointer;
`;

const DynamicButton = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX: mouseX, clientY: mouseY } = event;
        setMousePosition({ x: mouseX, y: mouseY });
    };

    return (
        <DynamicButtonWrapper onMouseMove={handleMouseMove}>
            <DynamicCircle style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }} />
            <DynamicButtonContent onClick={() => console.log('Button Clicked!')}>
             <ButtonText>Click me</ButtonText>
            </DynamicButtonContent>
        </DynamicButtonWrapper>
    );
};

export default DynamicButton;
