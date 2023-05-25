import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Education from "./components/Education/Education"


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <About/>
      <Education/>
      <Footer/>
    </>
  )
}

export default App
