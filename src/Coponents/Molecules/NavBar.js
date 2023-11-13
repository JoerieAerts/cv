import React from 'react';
import styled from 'styled-components';
import NavbarButton from "../Atoms/NavBarButton";
import {NavBarItemText} from "../Shared/Typography";
import {NavbarMenuItem} from "../Atoms/NavBarMenuItem.js";

const NavbarContainer = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2.5vmin;
`;

const Navbar = () => {
    return (
        <NavbarContainer className="shadow-button-set">
            <NavbarMenuItem>
                <NavbarButton>
                    <NavBarItemText>About me</NavBarItemText>
                </NavbarButton>
            </NavbarMenuItem>
            <NavbarMenuItem>
                <NavbarButton><NavBarItemText>Experience</NavBarItemText></NavbarButton>
            </NavbarMenuItem>
            <NavbarMenuItem>
                <NavbarButton><NavBarItemText>Knowledge</NavBarItemText></NavbarButton>
            </NavbarMenuItem>
        </NavbarContainer>
    );
};

export default Navbar;
