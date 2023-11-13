import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { NavBarItemText } from '../Shared/Typography';

const NavBar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
        console.log(itemName);
    };

    return (
        <NavBarWrapper>
            <NavItem
                href="#about"
                className={selectedItem === 'about' ? 'selected' : ''}
                onClick={() => handleItemClick('about')}
            >
                <NavBarItemText>About</NavBarItemText>
            </NavItem>
            <NavItem
                href="#experience"
                className={selectedItem === 'experience' ? 'selected' : ''}
                onClick={() => handleItemClick('experience')}
            >
                <NavBarItemText>Experience</NavBarItemText>
            </NavItem>
            <NavItem
                href="#knowledge"
                className={selectedItem === 'knowledge' ? 'selected' : ''}
                onClick={() => handleItemClick('knowledge')}
            >
                <NavBarItemText>Knowledge</NavBarItemText>
            </NavItem>
            <BottomStroke selected={selectedItem} />
        </NavBarWrapper>
    );
};

const NavBarWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Added box shadow */
`;

const hoverAnimation = keyframes`
  0% {
    color: inherit;
  }
  100% {
    color: #333333;
  }
`;

const BottomStroke = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #000000; /* Stroke color for the selected item */
  transition: transform 0.3s ease-in-out;
  ${({ selected }) =>
          selected === 'about' &&
          css`
      transform: translateX(0%);
    `}
  ${({ selected }) =>
          selected === 'experience' &&
          css`
      transform: translateX(100%);
    `}
  ${({ selected }) =>
          selected === 'knowledge' &&
          css`
      transform: translateX(200%);
    `}
`;

const NavItem = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  padding: 20px; 
  cursor: pointer;
  position: relative;
`;

export default NavBar;
