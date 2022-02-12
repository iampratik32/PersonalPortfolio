import React from 'react'
import { CardRowWrapper, Label } from '../assets/styles'

function LabelWrapper({data, more}) {
    return (
        <CardRowWrapper more bottom={'0.5rem'} right={false}>
            {data.map((v, i) => {
                return <Label key={i}>{v}</Label>
            })}
        </CardRowWrapper>
    )
}

export default LabelWrapper