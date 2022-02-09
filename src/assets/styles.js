const { colors } = require('../config/theme')
const { default: styled } = require("styled-components");
const maxWidth = '650px'

exports.Main = styled.div`
    background-color: ${colors.mainColor};
    /* background-color: ${props => props.menu ? colors.dimmed : colors.mainColor}; */
    @import url("https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap");
`

exports.HeaderDiv = styled.div`
    display: flex;
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
    padding: 0.5rem;
    cursor: pointer;
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
    top: 1rem;
    cursor: pointer;
    right: 1rem;
`


exports.BannerContainer = styled.div`
    display: flex;
    background: ${colors.bannerGradient};
    /* background-color: ${colors.mainColor}; */
    height: calc(100vh - 7rem);
`

exports.Content = styled.div`
    flex: 1 0 auto;
    margin-left: 8rem;
    @media(max-width: ${maxWidth}){
        margin-left: 1rem;
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

exports.MainContainer = styled.div`
    margin-left: 8rem;
    margin-right: 8rem;
`

exports.FooterDiv = styled.div`
    /* background-color: cornsilk; */
    height: 4rem;
    text-align: center;
`
