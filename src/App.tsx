import Nav from "./components/Menu/Menu"
import Header from './components/Header/Header.jsx'
import MainContent from "./components/MainContent/MainContent"
import ResetCss from "./AppGlobal"
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
    <ResetCss/>
      <Nav/>
      <Header/>
      <MainContent/>
      <Footer/>

    </>
  )
}

export default App
