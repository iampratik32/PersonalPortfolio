import React, { useState } from 'react'
import { FormButton, FormContainer, FormInfo, HeaderText, Input, MainContainer, MessageContainer, MessageWrapper, ParText, RowCol, RowWrapper, Spinner, SpinnerContainer, TextArea, VSpacer } from '../assets/styles'
import { colors } from '../config/theme'
import ContainerTitle from './ContainerTitle'
import { FaCheckCircle } from 'react-icons/fa'
import { AiOutlineCloseCircle, AiOutlineWarning } from 'react-icons/ai'
import axios from 'axios'

function Contact({ cRef }) {

    const iconSize = 20
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const submitForm = (e) => {
        e.preventDefault()
        if (!loading) {
            setResponse(null)
            setLoading(true)
            contactMe()
        }
    }

    const contactMe = async () => {
        const data = { email: email, message: message, name: name }
        await axios.post(`http://localhost:6969/mail`, data).then((v) => {
            setLoading(false)
            setResponse({ error: false })
            setName('')
            setEmail('')
            setMessage('')
        }).catch((err) => {
            setLoading(false)
            setResponse({ error: true })
        })
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
                {loading ? <SpinnerContainer>
                    <VSpacer height={'0.5rem'} />
                    <Spinner height={'2rem'} width={'2rem'} />
                </SpinnerContainer> : undefined}
                {response ?
                    <MessageContainer>
                        <MessageWrapper flex={0.1}>
                            {response.error ? <AiOutlineWarning color='red' size={iconSize} /> : <FaCheckCircle color='green' size={iconSize} />}
                        </MessageWrapper>
                        <MessageWrapper center flex={4}>
                            <ParText spacing={'0.01cm'} color={colors.white}>
                                {response.error ?
                                    `Something Doesn't Seem Quite Right. Your Message Has Not Been Sent. Please Try Again.`
                                    : 'Thanks! Your Message Has Been Delivered. I Will Get Back To You Soon Enough.'
                                }
                            </ParText>
                        </MessageWrapper>
                        <MessageWrapper close onClick={() => setResponse(null)} flex={0.1}>
                            <AiOutlineCloseCircle color={colors.textColor} size={iconSize} />
                        </MessageWrapper>
                    </MessageContainer> : undefined}
                <FormButton disable={loading} loading={loading}>{loading ? 'Please Wait...' : 'Contact Me'}</FormButton>
            </FormContainer>
            <VSpacer height={'3rem'} />
        </MainContainer>
    )
}

export default Contact