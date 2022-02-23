import React, { useState } from 'react'
import { FormButton, FormContainer, FormInfo, HeaderText, Input, MainContainer, ParText, RowCol, RowWrapper, TextArea, VSpacer } from '../assets/styles'
import { colors } from '../config/theme'
import ContainerTitle from './ContainerTitle'

function Contact({ cRef }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        alert('G')
    }


    return (
        <MainContainer>
            <ContainerTitle title={'Contact'} pRef={cRef} />
            <FormContainer onSubmit={submitForm}>
                <FormInfo>
                    <HeaderText size={'22px'}>
                        Hit Me Up
                    </HeaderText>
                    <ParText spacing={'0.01cm'} color={colors.white}>
                        Could Be Start of Something Big...
                    </ParText>
                </FormInfo>
                <RowWrapper>
                    <RowCol flex={1}>
                        <Input required onChange={(e) => setName(e.target.value)}
                            value={name} placeholder='Name' type={'text'} />
                    </RowCol>
                    <RowCol flex={0.15} />
                    <RowCol flex={1}>
                        <Input required onChange={(e) => setEmail(e.target.value)}
                            value={email} placeholder='Email' type={'email'} />
                    </RowCol>
                </RowWrapper>
                <TextArea required rows={3} onChange={(e) => setMessage(e.target.value)}
                    value={message} placeholder='Your Message' type={'text'} />
                <FormButton>Contact Me</FormButton>
            </FormContainer>
            <VSpacer height={'3rem'} />
        </MainContainer>
    )
}

export default Contact