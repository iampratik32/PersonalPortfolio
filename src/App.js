import { BannerContainer, Content, Main } from "./assets/styles";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Main>
      <Header />
      <BannerContainer>
        <Sidebar />
        <Content>
          <Banner/>
        </Content>
      </BannerContainer>
      <Container />
      <Footer />
    </Main>
  );
}

export default App;
