import styled from 'styled-components';

const NavbarButton = styled.button`
  appearance: none;
  outline: none;
  font-size: 5vmin;
  border: 3px solid black;
  background: white;

  --distance: 0;
  transform: translateX(var(--distance)) translateY(var(--distance));

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: transform 0.2s ease;
  }

  &:hover:not(:active) {
    --distance: -10px;
  }
`;

export default NavbarButton;