const { colors } = require('../config/theme')
const { default: styled, keyframes } = require("styled-components");
const maxWidth = '1000px'
const maxCardWidth = '1175px'
const mobileM= '375px'
const mobileL= '425px'
const tablet = '820px' 

exports.Main = styled.div`
    background-color: ${colors.containerColor};
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
`

exports.HeaderDiv = styled.div`
    display: flex;
    background-color: ${colors.mainColor};
    height: 7rem;
`

exports.HeaderContent = styled.div`
    margin-left: 3rem;
    margin-right: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    flex-direction: row;
    @media(max-width: ${maxWidth}){
        margin-left: 1rem;
        margin-right: 1rem;
        justify-content: flex-end;
    }
`

exports.HeaderLogo = styled.a`
    margin-right: auto;
`

exports.HeaderMenu = styled.span`
    display: none;
    transition: opacity 0.4s ease-out;
    padding: 0.5rem;
    cursor: pointer;
    opacity: ${p => p.visible ? 1 : 0};
    @media(max-width: ${maxWidth}){
        display: block;
    }
`

exports.HeaderMain = styled.div`
    display: flex;
    flex-direction: row;
`

exports.HeaderItem = styled.a`
    padding-left: 1rem;
    cursor: pointer;
    padding-right: 1rem;
    color: ${colors.white};
    user-select: none;
    font-size: 16px;
    font-family: 'Josefin Sans', cursive;
    text-decoration: none;
    :hover{
        color: ${colors.hover};
    }
    @media(max-width: ${maxWidth}){
        display: none;
    }
`

exports.MenuSidebar = styled.div`
    height: 100%;
    width: ${props => props.width};
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: ${colors.menuColor};
    overflow-x: hidden;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
`

exports.MenuSidebarItem = styled.a`
    padding: 20px;
    cursor: pointer;
    width: 100%;
    font-family: 'Josefin Sans', cursive;
    text-decoration: none;
    font-size: 1.5rem;
    color: #818181;
    text-align: center;
    display: block;
    transition: 0.1s;
    :hover{
        color: ${colors.hover};
    }
`

exports.MenuSideBarIcon = styled.span`
    position: absolute;
    top: 2rem;
    cursor: pointer;
    right: 1rem;
    opacity: ${p => p.visible ? 1 : 0};
    transition: opacity 0.4s ease-out;
`


exports.BannerContainer = styled.div`
    display: flex;
    background: ${colors.bannerGradient};
    height: calc(100vh - 7rem);
    min-height: 27rem;
    @media(max-width: ${mobileL}){
        min-height: 26rem;
        height: 26rem;
    }
    @media(max-width:${mobileM}){
        height: 28rem;
        min-height: 28rem;
    }
    @media(max-width:${tablet}){
        height: 26rem;
        /* min-height: 27rem; */
    }
    @media(max-width:${'1100px'}){
        max-height: 26rem;
        /* min-height: 27rem; */
    }
`

exports.Content = styled.div`
    flex: 1 0 auto;
    flex-direction: column;
    margin-left: 10rem;
    margin-right: 10rem;
    @media(max-width: ${maxWidth}){
        margin-left: 1rem;
        margin-right: 1rem;
    }
`

exports.VSpacer = styled.div`
    height: ${p => p.height ? p.height : '1rem'};
`
exports.HSpacer = styled.div`
    width: ${p => p.width ? p.width : '1rem'};
`

exports.ParText = styled.p`
    text-align: justify;
    text-justify: inter-word;
    letter-spacing: ${props => props.spacing ? props.spacing : '0.05cm'};
    font-size: ${props => props.size ? props.size : '14px'};
    color: ${props => props.color ? props.color : colors.textColor};
`

exports.HeaderText = styled.span`
    font-size: ${props => props.size ? props.size : '36px'};
    font-weight: bolder;
    color: ${props => props.color ? props.color : colors.textColor};
    /* @media(max-width: ${maxWidth}){
        font-size: clamp(40px, 7vw, 40px);
    } */
`

exports.BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100vw - 17.5rem);
    flex-wrap: wrap-reverse;
    margin-left: 1.5rem;
    @media(max-width: ${maxWidth}){
        margin-left: 0rem;
        width: calc(100vw - 3rem);
    }
`

exports.SidebarDiv = styled.div`
    width: 7.5rem;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    @media(max-width: ${maxWidth}){
        display: none;
    }
`
exports.SidebarItem = styled.a`
    margin-top: 1em;
    transition: transform .2s;
    text-shadow: 0px 1px 10px 0px rgb(181, 165, 196);
    margin-bottom: 1em;
    padding-right: ${p => p.hor ? '1.8rem' : 0};
    :hover{
        transform: scale(1.3);
    }
`
exports.VLine = styled.div`
    height: 87px;
    margin-top: 1.8rem;
    border-left: 1px solid white;
`

// exports.MainContainer = styled.div`
//     margin-left: 8rem;
//     margin-right: 8rem;
// `

exports.FooterDiv = styled.div`
    background-color: ${colors.containerColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`
exports.Button = styled.span`
    border: 1px solid ${colors.textColor};
    width: auto;
    text-align: center;
    align-self: center;
    border-radius: 0.5rem;
    padding-top: 1rem;
    user-select: none;
    padding-bottom: 1rem;
    cursor: pointer;
    :hover{
        background: rgba(100,255,218,0.1);
        transition: 0.2s ease-in-out;
    }
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    color: ${colors.textColor};
`

exports.MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

exports.HLine = styled.div`
    width: ${p => p.width ? p.width : '87px'};
    align-self: center;
    margin-left: 1rem;
    margin-right: 1rem;
    border-top: 0.1px solid ${colors.lineColor};
`

exports.TitleWrapper = styled.div`
    display: flex;
    padding-top: 1rem;
    flex-direction: row;
`

exports.ContainerTitle = styled.span`
    font-size: clamp(20px, 7vw, 35px);
    font-weight: bolder;
    user-select: none;
    text-align: justify;
    text-justify: inter-word;
    color: ${colors.white};
`

exports.ContainerWrapper = styled.div`
    display: flex;
    align-self: center;
    width: ${p => p.width};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 1rem;
    background-color: ${p => p.back ? colors.cardBack : 'none'};
    border-radius: ${p => p.radius ? p.radius : '1rem'};
    border: ${p => p.border ? `1px solid ${colors.textColor}` : '0px'};
    flex-direction: column;
    @media(max-width: ${p => !p.cards ? maxWidth : maxCardWidth}){
        width: 90%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`

exports.RowWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: ${p => p.margin ? '1.5rem' : 0};
    @media(max-width: ${p => !p.cards ? maxWidth : maxCardWidth}){
        margin-bottom: ${p => p.margin ? '0.2rem' : 0};
        flex-direction: ${p => p.dont ? 'row' : 'column'};
    }
`
exports.ListWrapper = styled.div`
    width: 50%;
    margin-top: 1rem;
    padding-left: 1rem;
`

exports.CardWrapper = styled(this.ContainerWrapper)`
    transition: box-shadow 0.2s;
    cursor: pointer;
    :hover{
        animation-name: example;
        animation-duration: 0.25s;
        box-shadow: 0 0 20px ${colors.hover}, 0 0 10px ${colors.hover};
    }
`

exports.CardTitle = styled(this.HeaderText)`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${this.CardWrapper}:hover & {
        color: ${colors.textColor};
        transition: color 0.3s;
    }
`

exports.CardRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${p => p.right ? 'flex-end' : 'flex-start'};
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: ${p => p.bottom};
    @media(max-width: ${maxCardWidth}){
        margin-top: ${p => p.more ? '1rem' : 'none'};
    }
`
exports.Label = styled.span`
    border-radius: 0.7rem;
    margin-right: 0.5rem;
    flex-grow: initial;
    background-color: ${colors.containerColor};
    color: ${colors.white};
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 13px;
`

exports.Popup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    background-color: ${colors.popupDim};
    z-index: 2;
    visibility: ${p => p.show ? 'visible' : 'hidden'};
    opacity: ${p => p.show ? 1 : 0};
    overflow: hidden;
    transition: .54s ease-in-out;
    @media(max-width: ${maxWidth}){
        transition: .34s ease-in-out;
    }
`
exports.PopupInner = styled.div`
    position: relative;
    flex-direction: row;
    bottom: ${p => p.show ? 0 : '-100vw'};
    right: ${p => p.show ? 0 : '0vh'};
    display: flex;
    align-items: center;
    max-width: 800px;
    max-height: 600px;
    width: 60%;
    height: 80%;
    border-radius: 0.8rem;
    background-color: ${colors.popupBack};
    transition: .5s ease-in-out;
    @media(max-width: ${maxCardWidth}){
        flex-direction: column;
        width: 90%;
        padding-top: 2rem;
        max-height: none;
        max-height: none;
    }
    @media(max-width: ${maxWidth}){
        transition: .3s ease-in-out;
    }
`
exports.PopupLeft = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    overflow: hidden;
    @media(max-width: ${maxCardWidth}){
        width: 90%;
    }
`
exports.PopupImage = styled.img`
    width: auto;
    object-fit: fill;
    height: 100%;
    @media(max-width: ${maxCardWidth}){
        width: 100%;
        height: auto;
    }
`

exports.PopupRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding-top: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    @media(max-width: ${maxCardWidth}){
        width: 90%;
        overflow: auto;
        padding-top: 1rem;
    }
`
exports.PopupClose = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -1rem;
    top: -1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    border: 1px solid ${colors.textColor};
    background-color: ${colors.containerColor};
    z-index: 4;
    color: #fff;
    color: ${colors.white};
    line-height: 3rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
`

// Contact

exports.RowCol = styled.div`
    flex: ${p => p.flex};
    flex-direction: row;
`

exports.FormContainer = styled.form`
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    display: flex;
    flex-direction: column;
    @media(max-width: ${maxWidth}){
        margin-left: 1rem;
        margin-right: 1rem; 
    }
`

exports.Input = styled.input`
    width: 100%;
    padding: 1rem;
    background-color: ${colors.mainColor};
    border: 0px;
    color: ${colors.textColor};
    ::placeholder{
        color: ${colors.lineColor};
    }
    :focus{
        outline: none !important;
        border-color: ${colors.hover};
        box-shadow: 0 0 10px ${colors.hover};
    }
    border-radius: 10px;
    @media(max-width: ${maxWidth}){
        width: 95%;
        padding: 0.8rem;
        margin-bottom: 1rem;
    }
`

exports.TextArea = styled.textarea`
    width: 100%;
    padding: 1rem;
    resize: none;
    background-color: ${colors.mainColor};
    border: 0px;
    color: ${colors.textColor};
    ::placeholder{
        color: ${colors.lineColor};
    }
    :focus{
        outline: none !important;
        border-color: ${colors.hover};
        box-shadow: 0 0 10px ${colors.hover};
    }
    border-radius: 10px;
    margin-top: 2rem;
    @media(max-width: ${maxWidth}){
        width: 95%;
        padding: 0.8rem;
        margin-top: 0;
        margin-bottom: 1rem;
    }
`
exports.FormButton = styled.button`
    margin-top: ${p => p.loading ? '0.5rem' : '2rem'};
    width: auto;
    text-align: center;
    align-self: center;
    border-radius: 0.5rem;
    border: 1px solid ${colors.mainColor};
    padding-top: 1rem;
    background: ${colors.mainColor};
    user-select: none;
    padding-bottom: 1rem;
    cursor: ${p => p.disable ? 'not-allowed' : 'pointer'};
    :hover{
        outline: none !important;
        border-color: ${colors.hover};
        box-shadow: 0 0 10px ${colors.hover};
    }
    :focus{
        outline: none !important;
        border-color: ${colors.hover};
        box-shadow: 0 0 10px ${colors.hover};
    }
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    color: ${colors.lineColor};
    @media(max-width: ${maxWidth}){
        margin-top: 1rem;
    }
`

exports.FormInfo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: ${maxWidth}){
        margin-bottom: 1.25rem;
    }
`

const scaleOut = keyframes`
    0% { transform: scale(0); }
    100% { transform: scale(1.0); opacity: 0; }
`

exports.Spinner = styled.div`
    width: ${p => p.width ? p.width : '5rem'};
    height: ${p => p.height ? p.height : '5rem'};
    background-color: none;
    border: 3px solid ${colors.textColor};
    border-radius: 100%;
    transition : all 0.5s;
    animation: ${scaleOut} 2s infinite ease-in-out;
    -webkit-animation: ${scaleOut} 2s infinite ease-in-out;
    
`

exports.SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

exports.MessageContainer = styled.div`
    display: flex;
    flex: 10;
    width: auto;
    align-self: center;
    justify-self: center;
    border: 1px solid ${colors.lineColor};
    padding-top: 0.5rem;
    background-color: ${colors.cardBack};
    padding-bottom: 0.5rem;
    border-radius: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

exports.MessageWrapper = styled.div`
    flex: ${p => p.flex};
    display: flex;
    align-items: center;
    cursor: ${p => p.close ? 'pointer' : 'auto'};
    justify-items: flex-end;
    padding-left: ${p => p.center ? '1rem' : 0};
    padding-right: ${p => p.center ? '1rem' : 0};
`

exports.ScrollButton = styled.button`
    position: fixed;
    transition: transform .2s;
    bottom: 2rem;
    border: none;
    background-color: ${colors.transparent};
    cursor: pointer;
    right: 2rem;
    :hover{
        transform: scale(1.2);
    }
    z-index: 1;
`