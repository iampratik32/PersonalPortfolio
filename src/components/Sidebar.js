import React from 'react';
import { SidebarDiv, SidebarItem, VLine } from '../assets/styles';
import { FaGithub, FaInstagram, FaTwitter, FaFilePdf } from 'react-icons/fa'

const size = 25

function Sidebar() {
  return (
    <SidebarDiv>
      <SidebarItem target='_blank' href='https://www.github.com/iampratik32'><FaGithub color='#fff' size={size} /></SidebarItem>
      <SidebarItem target='_blank' href='https://www.instagram.com/pratik__.p'><FaFilePdf color='#fff' size={size} /></SidebarItem>
      <SidebarItem target='_blank' href='https://twitter.com/Purrtik_P'><FaTwitter color='#fff' size={size} /></SidebarItem>
      <SidebarItem target='_blank' href='https://www.instagram.com/pratik__.p'><FaInstagram color='#fff' size={size} /></SidebarItem>
      <VLine />
    </SidebarDiv>
  )
}

export default Sidebar;
