import styled from "styled-components"
import MainVideo from '../assets/Walking Girl.mp4'
import { motion } from "framer-motion"

const CoverVideo = () => {
  const VideoContainer = styled.section`
    position:relative;
    width:100%;
    height:100vh;

    video{
      object-fit:cover;
      width:100%;
      height:100vh;
    }
    `
  const DarkOverlay = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:1;
    background-color: ${(props)=>`rgba(${props.theme.bodyRgba},0.6)`}
  `
  const Title = styled(motion.div)`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:5;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:${props => props.theme.text};

    h1{
      font-family:Kaushan Script;
      font-size:${props=>props.theme.fontBig};
      text-shadow: 1px 1px 1px ${props => props.theme.body}

    }
    div{
      display:flex;
      flex-direction:row;
    }
      
    h2{
      font-family: "Sirin Stencil";
      font-size:${props=>props.theme.fontlg};
      text-shadow: 1px 1px 1px ${props => props.theme.body};
      font-weight:500;
      text-transform:capitalize; 
    }
  `
  const container = {
    hidden : {
        opacity:0,
    },
    visible : {
        opacity:1,
        transition: {
          delayChildren:1,
          staggerChildren:0.3
        }
    }
}
const item = {
  hidden : {
      opacity:0,
  },
  visible : {
      opacity:1,
  }
}





  return (
    <VideoContainer>
        <DarkOverlay/>
        <Title variants={container} initial="hidden" animate="visible">
          <div>
            <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.13">W</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.09">i</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.06">b</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.04">e</motion.h1>
          </div>
          <motion.h2 variants={item} data-scroll data-scroll-speed="2" data-scroll-delay="0.04">Inspire. Create. Believe</motion.h2>
        </Title>
        <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}
export default CoverVideo