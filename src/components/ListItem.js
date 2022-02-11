import React from 'react'
import { MdPlayCircle } from 'react-icons/md'
import { ParText } from '../assets/styles'
import { colors } from '../config/theme'

function ListItem({ text }) {
    return (
        <ParText spacing={'0.01cm'} color={colors.white}>
            <MdPlayCircle size={12} style={{ marginRight: '0.5rem' }} />
            {text}
        </ParText>
    )
}

export default ListItem