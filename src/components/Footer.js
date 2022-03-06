import React, { useEffect, useState } from 'react';
import { FooterDiv, ParText, SidebarItem, HeaderMain } from '../assets/styles';
import { colors } from '../config/theme';
import { FaGithub, FaInstagram, FaTwitter, FaFilePdf } from 'react-icons/fa'

function Footer() {
  const [width, setWidth] = useState(0)
  const size = 22
  window.addEventListener('resize', () => resize())

  useEffect(() => {
    resize()
  }, [])

  const resize = () => setWidth(window.innerWidth)


  return (
    <FooterDiv>
      {width <= 1000 ? <HeaderMain>
        <SidebarItem hor target='_blank' href='https://www.github.com/iampratik32'><FaGithub color='#fff' size={size} /></SidebarItem>
        <SidebarItem hor target='_blank' href='https://www.instagram.com/pratik__.p'><FaFilePdf color='#fff' size={size} /></SidebarItem>
        <SidebarItem hor target='_blank' href='https://twitter.com/Purrtik_P'><FaTwitter color='#fff' size={size} /></SidebarItem>
        <SidebarItem hor target='_blank' href='https://www.instagram.com/pratik__.p'><FaInstagram color='#fff' size={size} /></SidebarItem>
      </HeaderMain> : undefined}
      <ParText style={{ cursor: 'pointer' }} onClick={() => window.open('http://www.github.com/iampratik32', '_blank')}
        spacing={'0.01cm'} color={colors.lineColor}>
        Designed & Built By Pratik Poudel<br />
      </ParText>
    </FooterDiv>
  );
}

export default Footer;
