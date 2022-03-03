import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, HeaderText, MainContainer, RowWrapper, Spinner, SpinnerContainer, VSpacer } from '../assets/styles'
import { colors } from '../config/theme'
import ContainerTitle from './ContainerTitle'
import ProjectCard from './ProjectCard'

function Project({ pRef }) {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [datas, setDatas] = useState([])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            var per = 3
            var result = data.reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / per)

                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [] // start a new chunk
                }

                resultArray[chunkIndex].push(item)

                return resultArray
            }, [])
            setDatas(result)
            console.log(result);
        }
    }, [data])

    useEffect(() => {
        error || data.length > 0 ? setLoading(false) : setLoading(true)
    }, [data, error])

    const getData = async () => {
        setError(null)
        await axios.get(`http://localhost:6969`)
            .then((v) => {
                setData(v.data.data)
            }).catch((err) => setError(`Something Went Horribly Wrong :(`))
    }

    return (
        <MainContainer>
            <ContainerTitle title={'Projects'} pRef={pRef} />
            {datas.length > 0 ?
                <>
                    {
                        datas.map((v, i) =>
                            <RowWrapper key={i} cards margin>
                                {v.map((v2) => <ProjectCard data={v2} key={v2.id} />)}
                            </RowWrapper>)
                    }
                    <VSpacer height={'1rem'} />
                    <Button onClick={() => window.open('https://github.com/iampratik32', '_blank')}>View All My Public Projects</Button>
                </>
                : loading ?
                    <SpinnerContainer>
                        <Spinner />
                        <HeaderText color={colors.white} size={'17px'}>
                            Loading ...
                        </HeaderText>
                    </SpinnerContainer>
                    :
                    <SpinnerContainer>
                        <HeaderText color={colors.lineColor} size={'23px'}>
                            {error}
                        </HeaderText>
                        <VSpacer height={'3rem'} />
                        <Button onClick={() => getData()}>Try Again</Button>
                    </SpinnerContainer>
            }


            <VSpacer height={'5.5rem'} />
        </MainContainer>
    )
}

export default Project