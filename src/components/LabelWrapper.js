import React from 'react'
import { CardRowWrapper, Label } from '../assets/styles'

function LabelWrapper({data, more}) {
    const items = data? data.split(',') : []
    return (
        <CardRowWrapper more bottom={'0.5rem'} right={false}>
            {items.map((v, i) => {
                return <Label key={i}>{v}</Label>
            })}
        </CardRowWrapper>
    )
}

export default LabelWrapper