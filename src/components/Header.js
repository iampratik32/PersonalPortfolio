import React from 'react';
import { HeaderContent, HeaderDiv, HeaderItem, HeaderLogo, HeaderMain, HeaderMenu, MenuSidebar, MenuSideBarIcon, MenuSidebarItem } from '../assets/styles';
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import Avatar from '../assets/images/Avatar.jpg'

function Header({ menuWidth, setMenuWidth, allRefs }) {
  const toogleMenu = () => setMenuWidth(menuWidth === '0px' ? '50%' : '0px')
  const scroll = i => allRefs[i].current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <HeaderDiv>
      <HeaderContent>
        <HeaderLogo href='/'><img alt='Logo' src={Avatar} width={50} height={50} /></HeaderLogo>
        <HeaderMain>
          <HeaderItem onClick={() => scroll(3)}>Home</HeaderItem>
          <HeaderItem onClick={() => scroll(0)}>About</HeaderItem>
          <HeaderItem onClick={() => scroll(1)}>Projects</HeaderItem>
          <HeaderItem onClick={() => scroll(2)}>Contact</HeaderItem>
          <HeaderMenu visible={menuWidth === '0px' ? true : false} onClick={toogleMenu}><FaBars color='#fff' size={22} /></HeaderMenu>
        </HeaderMain>
      </HeaderContent>
      <MenuSidebar width={menuWidth}>
        <MenuSideBarIcon visible={menuWidth !== '0px' ? true : false}><IoMdClose color='#fff' size={40} onClick={toogleMenu} /></MenuSideBarIcon>
        <MenuSidebarItem onClick={() => scroll(3)}>Home</MenuSidebarItem>
        <MenuSidebarItem onClick={() => scroll(0)}>About</MenuSidebarItem>
        <MenuSidebarItem onClick={() => scroll(1)}>Projects</MenuSidebarItem>
        <MenuSidebarItem onClick={() => scroll(2)}>Contact</MenuSidebarItem>
      </MenuSidebar>
    </HeaderDiv>
  );
}

export default Header;
