import { useState } from "react";
import { BannerContainer, Content, Main } from "./assets/styles";
import Banner from "./components/Banner";
// import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {

  const [menuWidth, setMenuWidth] = useState('0px')

  const closeMenu = () => menuWidth !== '0px' ? setMenuWidth('0px') : undefined

  return (
    <Main menu={menuWidth !== '0px' ? true : false} onClick={closeMenu}>
      <Header setMenuWidth={setMenuWidth} menuWidth={menuWidth} />
      <BannerContainer>
        <Sidebar />
        <Content>
          <Banner />
        </Content>
      </BannerContainer>
      <Content>
        asd
      </Content>
      <Footer />
    </Main>
  );
}

export default App;
