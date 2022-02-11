import { useState, useRef } from "react";
import { BannerContainer, Content, Main } from "./assets/styles";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {

  const [menuWidth, setMenuWidth] = useState('0px')
  const aRef = useRef(null)
  const eRef = useRef(null)
  const pRef = useRef(null)
  const cRef = useRef(null)
  const allRefs = [aRef, eRef, pRef, cRef]

  const closeMenu = () => menuWidth !== '0px' ? setMenuWidth('0px') : undefined

  return (
    <Main menu={menuWidth !== '0px' ? true : false} onClick={closeMenu}>
      <Header allRefs={allRefs} setMenuWidth={setMenuWidth} menuWidth={menuWidth} />
      <BannerContainer>
        <Sidebar />
        <Content>
          <Banner aRef={aRef} />
        </Content>
      </BannerContainer>
      <Content>
        <About aRef={aRef} />
        <Experience eRef={eRef} />
        <Project pRef={pRef} />
        <Contact cRef={cRef} />
      </Content>
      <Footer />
    </Main>
  );
}

export default App;
