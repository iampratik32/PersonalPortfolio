import React from 'react';
import { HeaderContent, HeaderDiv, HeaderItem, HeaderMain } from '../assets/styles';

function Header() {
  return (
    <HeaderDiv>
      <HeaderContent>
        <HeaderMain>
          <HeaderItem href='/'>Home</HeaderItem>
          <HeaderItem href='#'>Experience</HeaderItem>
          <HeaderItem href='#'>Work</HeaderItem>
          <HeaderItem href='#'>Contact</HeaderItem>
        </HeaderMain>
      </HeaderContent>
    </HeaderDiv>
  );
}

export default Header;
