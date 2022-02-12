import React from 'react'
import { MainContainer, RowWrapper } from '../assets/styles'
import ContainerTitle from './ContainerTitle'
import ProjectCard from './ProjectCard'

function Project({ pRef }) {

    const i1 = {
        title: 'Chat With Me',
        git: 'https://www.google.com',
        hosted: 'https://www.trakt.tv',
        images: [],
        used: ['NodeJS', 'Socket/IO', 'HTML/CSS'],
        description: 'Some Description',
    }
    const i2 = {
        title: 'Spoutify Stats',
        git: 'https://www.google.com',
        images: [],
        used: ['NodeJS', 'Socket/IO', 'HTML/CSS'],
        description: 'Some Description'
    }
    const i3 = {
        title: 'Personal Portfolio',
        git: 'https://www.google.com',
        images: ['React', 'NodeJS'],
        used: ['NodeJS', 'Socket/IO', 'HTML/CSS'],
        description: 'Some Description'
    }

    return (
        <MainContainer>
            <ContainerTitle title={'Projects'} pRef={pRef} />
            <RowWrapper cards style={{ marginBottom: '1.5rem' }}>
                <ProjectCard data={i1} />
                <ProjectCard data={i2} />
                <ProjectCard data={i3} />
            </RowWrapper>
        </MainContainer>
    )
}

export default Project