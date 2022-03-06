import { useState, useRef } from "react";
import { BannerContainer, Content, Main, ScrollButton } from "./assets/styles";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import { FaChevronCircleUp } from 'react-icons/fa'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import { colors } from "./config/theme";

function App() {

  const [menuWidth, setMenuWidth] = useState('0px')
  const [sVisible, setSVisible] = useState(false)
  const hRef = useRef(null)
  const aRef = useRef(null)
  const pRef = useRef(null)
  const cRef = useRef(null)
  const allRefs = [aRef, pRef, cRef, hRef]

  const toggleVisible = () => {
    document.documentElement.scrollTop > 420 ? setSVisible(true) : setSVisible(false)
  }

  window.addEventListener('scroll', toggleVisible);

  const closeMenu = () => menuWidth !== '0px' ? setMenuWidth('0px') : undefined
  const backTop = () => hRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <Main ref={hRef} menu={menuWidth !== '0px' ? true : false} onClick={closeMenu}>
      {sVisible ?
        <ScrollButton onClick={backTop}>
          <FaChevronCircleUp size={45} color={colors.textColor} />
        </ScrollButton> : undefined}
      <Header allRefs={allRefs} setMenuWidth={setMenuWidth} menuWidth={menuWidth} />
      <BannerContainer>
        <Sidebar />
        <Content>
          <Banner aRef={aRef} />
        </Content>
      </BannerContainer>
      <Content>
        <About aRef={aRef} />
        <Project pRef={pRef} />
        <Contact cRef={cRef} />
      </Content>
      <Footer />
    </Main>
  );
}

export default App;
