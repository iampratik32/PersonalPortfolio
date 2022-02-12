import React from 'react'
import { CardTitle, CardWrapper, CardRowWrapper, VSpacer, Label } from '../assets/styles'
import { IoOpenOutline, IoFolderOpenOutline, IoGitBranch } from 'react-icons/io5'
import { colors } from '../config/theme'

function ProjectCard({ data }) {

    const openLink = open => window.open(open, '_blank')

    const openPop = () => {
        alert(`Open ${data.title}`);
    }

    //TODO :: Remove Transform PLS

    return (
        <CardWrapper cards onClick={openPop} hover back radius={'0.3rem'} width={'30%'}>
            <CardRowWrapper right={true} bottom={'1.5rem'}>
                <div style={{ width: '100%' }}>
                    <IoFolderOpenOutline color={colors.textColor} size={45} />
                </div>
                <IoGitBranch onClick={() => openLink(data.git)} color={colors.white} size={25} />
                {data.hosted ?
                    <IoOpenOutline onClick={() => openLink(data.hosted)} color={colors.white} size={25} style={{ marginLeft: '0.8rem' }} />
                    : undefined}
            </CardRowWrapper>
            <CardTitle style={{ marginLeft: '1rem', marginRight: '1rem' }} color={colors.white} size={'19px'}>
                {data.title}
            </CardTitle>
            <VSpacer height={'1.5rem'} />
            <CardRowWrapper bottom={'0.5rem'} right={false}>
                {data.used.map((v, i) => {
                    return <Label>{v}</Label>
                })}
            </CardRowWrapper>
        </CardWrapper>
    )
}

export default ProjectCard