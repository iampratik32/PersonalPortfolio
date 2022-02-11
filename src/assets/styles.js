const { colors } = require('../config/theme')
const { default: styled } = require("styled-components");
const maxWidth = '1000px'

exports.Main = styled.div`
    background-color: ${colors.containerColor};
    /* background-color: ${props => props.menu ? colors.dimmed : colors.mainColor}; */
    @import url("https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap");
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

exports.HeaderLogo = styled.div`
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
    font-size: 16px;
    font-family: 'Sedgwick Ave', cursive;
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
    font-family: 'Sedgwick Ave', cursive;
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
    text-align: justify;
    text-justify: inter-word;
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
    height: 4rem;
    background-color: ${colors.containerColor};
    text-align: center;
`
exports.Button = styled.span`
    border: 1px solid ${colors.textColor};
    width: 100px;
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
    border-radius: 1rem;
    border: 1px solid ${colors.textColor};
    flex-direction: column;
    @media(max-width: ${maxWidth}){
        width: 90%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`

exports.RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width: ${maxWidth}){
        flex-direction: ${p=> p.dont ? 'row' : 'column'};
    }
`
exports.ListWrapper = styled.div`
    width: 50%;
    margin-top: 1rem;
    padding-left: 1rem;
`