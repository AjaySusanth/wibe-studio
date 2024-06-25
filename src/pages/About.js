import styled from "styled-components"
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const About = () => {

  const Section = styled.section`
    position: relative;
    min-height:100vh;
    width:80vw;
    display:flex;
    margin: 0 auto;
    `
    const Title = styled.h1`
        font-family:Kaushan Script;
        font-size: ${props => props.theme.fontBig};
        font-weight:300;
        position:absolute;
        top:1rem;
        left:5%;
        z-index:5;
    `

    const Left = styled.div`
        width:50%;
        font-size: ${props => props.theme.fontlg};
        font-weight:300;
        margin-top:20%;
        position:relative;
        z-index:5;
    `
    const Right = styled.div`
    width:50%;
    position:relative;

    img{    
        width:100%;
        height:auto;
    }

    .small-img1{
        position:absolute;
        bottom:10%;
        right:95%;
        width:40%;
    }
    .small-img2{
        position:absolute;
        bottom:30%;
        left:80%;
        width:40%;
    }
`





  return (
    <Section id="fixed-target">
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction="horizontal">
            About Us
        </Title>

        <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
            We're fashion studio based in california. 
            We create unique designs that will blow your mind. We also design unique jewellary pieces. 
            Fashion is an ART that can not be grasped by everyone.

            <br/> <br/>

            We are very dedicated to making our products. 
            We offer unique and creative products to a wide range of people. 
            We have a variety of styles, but for most people, all of the options are in the box. 
            We specialize in making things that make you happy.

            <br/> <br/>

            We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. 
            We are always looking to make something that is easy for everyone.
        </Left>

        <Right>
            <img src={img1} alt="about-us"/>
            <img
            data-scroll
            data-scroll-speed="5"
            src={img2} className="small-img1" alt="about-us"/>
            <img 
            data-scroll
            data-scroll-speed="-2"
            src={img3} className="small-img2" alt="about-us"/>
        </Right>
    </Section>
  )
}
export default About