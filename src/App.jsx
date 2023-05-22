import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
