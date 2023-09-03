import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import GlobalStyle from "./js/GlobalStyle";
import { styled } from "styled-components";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

const Wrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
`


function App() {
  const [film, setFilm] = useState([]);
  const [isActivModal, setIsActivModal] = useState(false)
  const [currentFilm, setCurrentFilm] = useState({})

  return (
    <Wrapper >
     <Header setFilm={setFilm} />
     <Main film={film} setFilm={setFilm} setActive={setIsActivModal} isActivModal={isActivModal} setCurrentFilm={setCurrentFilm}/>
     <Footer/>
     <GlobalStyle/>
     <Modal currentFilm={currentFilm}  active={isActivModal} setActive={setIsActivModal}></Modal>
     </Wrapper >
   
  )
}

export default App;

