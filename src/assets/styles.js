const { default: styled } = require("styled-components");

const mainColor = 'rgba(10, 25, 47, 0.85)'

exports.Main = styled.div`
    background: ${mainColor};
    @import url("https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap");
`

exports.HeaderDiv = styled.div`
    display: flex;
    height: 5rem;
`

exports.HeaderContent = styled.div`
    margin-left: 3rem;
    margin-right: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: row;
`

exports.HeaderMain = styled.div`
    display: flex;
    flex-direction: row;
`

exports.HeaderItem = styled.a`
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    font-size: 16px;
    font-family: 'Sedgwick Ave', cursive;
    text-decoration: none;
    :hover{
        color: #7986CB;
    }
`


exports.BannerContainer = styled.div`
    display: flex;
    background: coral;
    z-index: 2;
    height: calc(100vh - 5rem);
`

exports.Content = styled.div`
    flex: 1 0 auto;
    margin-left: 8rem;
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
`
exports.SidebarItem = styled.a`
    margin-top: 1em;
    transition: transform .2s;
    text-shadow: 0px 1px 10px 0px rgb(181, 165, 196);
    margin-bottom: 1em;
    :hover{
        transform: scale(1.5);
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
    background-color: cornsilk;
    height: 4rem;
    text-align: center;
`
