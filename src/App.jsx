import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Skills from "./components/Skills/Skills"
import MyWork from "./components/MyWork/MyWork"


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <About/>
      <Education/>
      <WorkExperience/>
      <Skills/>
      <MyWork/>
      <Footer/>
    </>
  )
}

export default App
