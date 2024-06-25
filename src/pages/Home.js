import styled from "styled-components"
import CoverVideo from "../components/CoverVideo"
import Logo from '../components/Logo'
import Navbar from "../components/Navbar"

const Home = () => {

  const Section = styled.section`
    position: relative;
    min-height:100vh;
    overflow:hidden;
    `

  return (
    <Section>
      <CoverVideo/>
      <Logo/>
      <Navbar/>

    </Section>
  )
}
export default Home