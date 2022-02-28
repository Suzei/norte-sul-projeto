import Nav from "./components/Menu/Menu"
import Header from './components/Header/Header.jsx'
import MainContent from "./components/MainContent/MainContent"
import ResetCss from "./AppGlobal"


function App() {
  return (
    <>
    <ResetCss/>
      <Nav/>
      <Header/>
      <MainContent/>

    </>
  )
}

export default App
