import React from 'react'
import { ContainerTitle as CT, HLine, TitleWrapper, VSpacer } from '../assets/styles'

function ContainerTitle({pRef, title}) {
    return (
        <>
            <VSpacer height={'1rem'} />
            <TitleWrapper ref={pRef}>
                <CT>{title}</CT>
                <HLine width={'100%'} />
            </TitleWrapper>
            <VSpacer height={'2rem'} />
        </>
    )
}

export default ContainerTitle