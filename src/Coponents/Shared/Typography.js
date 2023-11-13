import styled from 'styled-components';

const fontSans = "'Product Sans', sans-serif";

export const Heading1 = styled.h1`
    font-family: ${fontSans};
    font-size: 2.5em;
    font-weight:bold;
    color:#333;
    margin-bottom:16px;
    `;

export const Heading2 = styled.h2`
  font-family: ${fontSans};
  font-size: 2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 14px;
`;

// Paragraph styles
export const Paragraph = styled.p`
  font-family: ${fontSans};
  font-size: 16px;
  color: #555;
  margin-bottom: 12px;
`;

export const ButtonText = styled.span`
  font-family: ${fontSans};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #222222;
`;

export const NavBarItemText = styled.span`
    font-family: ${fontSans};
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #222222;
`;