import React from 'react';
import { HeaderText, BannerWrapper, ParText, VSpacer, Button } from '../assets/styles';
import { colors } from '../config/theme';

function Banner({ aRef }) {

  const scrollDown = () => aRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <BannerWrapper>
      <ParText>Hello! It's me,</ParText>
      <VSpacer height={'0.8rem'} />
      <HeaderText color={colors.white} size={'clamp(40px, 7vw, 70px)'}>Pratik Poudel.</HeaderText>
      <VSpacer height={'0.5rem'} />
      <HeaderText color={colors.white} size={'clamp(40px, 7vw, 55px)'}>Some Wity Line :)</HeaderText>
      <VSpacer height={'1.2rem'} />
      <ParText>I'm a Full Stack Developer That Specalizes in Android & <br />Web Development. And Some Other Nonsense</ParText>
      <VSpacer height={'2rem'} />
      <Button onClick={scrollDown}>Learn More</Button>
      <VSpacer height={'0.5rem'} />
    </BannerWrapper>
  )
}

export default Banner;
