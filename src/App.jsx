import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Skills from "./components/Skills/Skills"
import MyWork from "./components/MyWork/MyWork"
import Testimonials from "./components/Testimonials/Testimonials"
import HireMe from "./components/HireMe/HireMe"
import ContactForm from "./components/ContactForm/ContactForm"
import { useLoaderData } from 'react-router-dom';
import GoToTopButton from "./components/GoToTopButton/GoToTopButton"


function App() {
  const testimonials = useLoaderData();

  return (
    <>
      <Header/>
      <Outlet/>
      <About/>
      <GoToTopButton/>
      <Education/>
      <WorkExperience/>
      <Skills/>
      <MyWork/>
      <Testimonials/>
      <HireMe/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
