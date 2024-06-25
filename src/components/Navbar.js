import { useState } from "react"
import styled from "styled-components"
import {motion} from 'framer-motion'

const NavContainer = styled(motion.div)`
    position:absolute;
    top: ${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};
    width:100vw;
    z-index:6;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.3s ease;
`
const MenuItems = styled.ul`
    position:relative;
    height:${props => props.theme.navHeight};
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    list-style:none;
    padding: 0 10rem;
`



const MenuItem = styled(motion.li)`
    color: ${props => props.theme.text};
    text-transform:uppercase;
    cursor:pointer;

`

const MenuBtn = styled.li`
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
    color: ${(props) => props.theme.body};
    width:15rem;
    height:2.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    list-style:none;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%); {/*https://bennettfeely.com/clippy/*/}
    font-size: ${props => props.theme.fontmd};
    text-transform:uppercase;
    cursor:pointer;
    font-weight:600;
    position:absolute;
    top:100%;
    left:50%;
    transform:translateX(-50%);

`

const Navbar = () => {
    const [click,setClick] = useState(false)
  return (
    <NavContainer
    click={click}
    initial={{y:'-100%'}}
    animate={{y:0}}
    transition={{duration:2,delay:2}}
    >
        <MenuItems>
            <MenuBtn onClick={()=> setClick(!click)}>Menu</MenuBtn>
            <MenuItem 
            whileHover={{scale:1.1,y:-5}}
            whileTap={{scale:0.9,y:0}}
            >
                Home
            </MenuItem>
            <MenuItem
            whileHover={{scale:1.1,y:-5}}
            whileTap={{scale:0.9,y:0}}
            >
                About
            </MenuItem>
            <MenuItem
            whileHover={{scale:1.1,y:-5}}
            whileTap={{scale:0.9,y:0}}
            >
                Shop
            </MenuItem>
            <MenuItem
            whileHover={{scale:1.1,y:-5}}
            whileTap={{scale:0.9,y:0}}
            >
                New Arrival
            </MenuItem>
        </MenuItems>
    </NavContainer>
  )
}
export default Navbar