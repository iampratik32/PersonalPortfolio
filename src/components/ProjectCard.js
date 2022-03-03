import React, { useEffect, useState } from 'react'
import { CardTitle, CardWrapper, CardRowWrapper, VSpacer, Popup, PopupInner, PopupLeft, PopupRight, PopupClose, PopupImage, ParText, HeaderText, Button, HSpacer } from '../assets/styles'
import { IoOpenOutline, IoFolderOpenOutline, IoGitBranch, IoClose } from 'react-icons/io5'
import { colors } from '../config/theme'
import LabelWrapper from './LabelWrapper'

function ProjectCard({ data }) {

    const [show, setShow] = useState(false)
    const openLink = open => window.open(open, '_blank')

    useEffect(() => {
        const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
        if (show) {
            document.body.style.overflow = "hidden"
            document.body.style.paddingRight = `${scrollBarCompensation}px`;
        }
        else {
            document.body.style.overflow = "auto"
            document.body.style.paddingRight = `0px`;
        }
    }, [show])

    const toogle = () => setShow(!show)

    const pressLink = (e, link) => {
        e.stopPropagation()
        openLink(link)
    }

    return (
        <>
            <CardWrapper cards onClick={toogle} hover back radius={'0.3rem'} width={'30%'}>
                <CardRowWrapper right={true} bottom={'1.5rem'}>
                    <div style={{ width: '100%' }}>
                        <IoFolderOpenOutline color={colors.textColor} size={45} />
                    </div>
                    <IoGitBranch onClick={(e) => pressLink(e, data.github)} color={colors.white} size={25} />
                    {data.hosted ?
                        <IoOpenOutline onClick={(e) => pressLink(e, data.hosted)} color={colors.white} size={25} style={{ marginLeft: '0.8rem' }} />
                        : undefined}

                </CardRowWrapper>
                <CardTitle style={{ marginLeft: '1rem', marginRight: '1rem' }} color={colors.white} size={'19px'}>
                    {data.title}
                </CardTitle>
                <VSpacer height={'1.5rem'} />
                <LabelWrapper data={data.tags} />
            </CardWrapper>

            <Popup show={show}>
                <PopupInner show={show}>
                    <PopupLeft>
                        <PopupImage src={data.image1} alt={`${data.title} Snippet`} />
                    </PopupLeft>
                    <PopupRight>
                        <HeaderText color={colors.white} size={'clamp(20px, 7vw, 26px)'}>
                            {data.title}
                        </HeaderText>
                        <VSpacer />
                        <LabelWrapper more data={data.tags} />
                        <VSpacer />
                        <ParText spacing={'0.01cm'} color={colors.white}>{data.description}</ParText>
                        <VSpacer />
                        <CardRowWrapper style={{ alignSelf: 'center' }} bottom={'1rem'}>
                            <Button onClick={() => openLink(data.github)}>Github</Button>
                            <HSpacer />
                            {data.hosted ?
                                <Button onClick={() => openLink(data.hosted)}>{data.app ? 'Download' : 'View Live'}</Button> : undefined
                            }
                        </CardRowWrapper>
                        <VSpacer />
                    </PopupRight>
                    <PopupClose onClick={toogle}>
                        <IoClose size={20} color={colors.white} />
                    </PopupClose>
                </PopupInner>
            </Popup>
        </>
    )
}

export default ProjectCard