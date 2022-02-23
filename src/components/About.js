import React from 'react'
import { ContainerWrapper, HeaderText, ListWrapper, MainContainer, ParText, RowWrapper, VSpacer } from '../assets/styles'
import { colors } from '../config/theme'
import ContainerTitle from './ContainerTitle'
import { FaCaretRight } from 'react-icons/fa'
import ListItem from './ListItem'

function About({ aRef }) {
    return (
        <MainContainer>
            <ContainerTitle title={'About'} pRef={aRef} />
            <RowWrapper>
                <ContainerWrapper border width={'70%'}>
                    <HeaderText size={'19px'}>
                        <FaCaretRight size={13} />
                        Something About Me
                    </HeaderText>
                    <ParText spacing={'0.01cm'} color={colors.white}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat nulla odio, eget viverra turpis placerat et. Praesent iaculis, justo id cursus luctus, est risus tincidunt mi, pretium finibus sapien velit in magna. Nunc vitae nisi nulla. Donec aliquam euismod laoreet. Curabitur maximus sed nisl vel hendrerit. Aliquam rhoncus tortor eros. Proin accumsan leo semper eros vehicula tempus. Curabitur enim massa, dignissim sit amet vulputate vel, bibendum non nibh. Donec placerat arcu odio, quis consequat nisl ultrices vestibulum. Curabitur quam ante, iaculis vitae metus vel, efficitur egestas ante. Integer tempus, felis eget rhoncus eleifend, sapien quam pharetra purus, rhoncus lacinia dui purus ut ligula.
                    </ParText>
                </ContainerWrapper>
                <ContainerWrapper border width={'30%'}>
                    <HeaderText size={'19px'}>
                        <FaCaretRight size={13} />
                        Stuff I'm Familiar With
                    </HeaderText>
                    <RowWrapper dont>
                        <ListWrapper>
                            <ListItem text={'JS (ES6+)'} />
                            <ListItem text={'NodeJs'} />
                            <ListItem text={'React'} />
                            <ListItem text={'React Native'} />
                        </ListWrapper>
                        <ListWrapper>
                            <ListItem text={'Kotlin'} />
                            <ListItem text={'Android'} />
                            <ListItem text={'PHP'} />
                            <ListItem text={'Laravel'} />
                        </ListWrapper>
                    </RowWrapper>
                </ContainerWrapper>
            </RowWrapper>
            <VSpacer height={'7rem'}/>
        </MainContainer>
    )
}

export default About