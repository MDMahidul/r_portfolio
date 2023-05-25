import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import WorkExperience from "./components/WorkExperience/WorkExperience"


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <About/>
      <Education/>
      <WorkExperience/>
      <Footer/>
    </>
  )
}

export default App
