import React from 'react'
import { MainContainer, RowWrapper, VSpacer } from '../assets/styles'
import ContainerTitle from './ContainerTitle'
import ProjectCard from './ProjectCard'

function Project({ pRef }) {

    const i1 = {
        title: 'Chat With Me',
        git: 'https://www.google.com',
        hosted: 'https://www.trakt.tv',
        app: false,
        image: 'https://victoria.mediaplanet.com/app/uploads/sites/102/2019/07/mainimage-26.jpg',
        used: ['NodeJS', 'Socket/IO', 'HTML/CSS'],
        description: 'Some Description',
    }
    const i2 = {
        title: 'Spoutify Stats',
        git: 'https://www.google.com',
        app: true,
        image: 'https://miro.medium.com/max/1838/0*kBHpKva09AsGj7RQ',
        used: ['Kotlin', 'Android'],
        description: 'Some Description'
    }
    const i3 = {
        title: 'Personal Portfolio',
        git: 'https://www.google.com',
        app: false,
        image: 'https://www.preface.ai/blog/wp-content/uploads/2021/05/photo-1610563166150-b34df4f3bcd6-768x575.jpeg',
        used: ['ReactJS', 'NodeJS'],
        description: 'Some Description'
    }

    return (
        <MainContainer>
            <ContainerTitle title={'Projects'} pRef={pRef} />
            <RowWrapper cards margin>
                <ProjectCard data={i1} />
                <ProjectCard data={i2} />
                <ProjectCard data={i3} />
            </RowWrapper>
            
            <VSpacer height={'5.5rem'}/>
        </MainContainer>
    )
}

export default Project