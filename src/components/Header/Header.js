import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { DiCssdeck } from 'react-icons/di';
import { Container, ContainerWrapper, Div1, Div2, Div3, NavLink, SocialIcons, Span, HamburgerIcon, DropdownContent, DropdownItem } from './HeaderStyles';
import { useState } from 'react';

const Header = () =>  {
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
  <>
  <div style={{padding:"10px", backgroundColor:"#c62368"}}/>
  <div style={{
    position: "sticky",
    top: 0,
    backgroundImage: `url(${require('../../../public/navbar.svg')})`,
    width: '100%',
    backgroundRepeat: "repeat-x",
    backgroundSize: "cover",
    zIndex: 10
    }}>
  <ContainerWrapper>
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/>
          <Span>Warun</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#accomplishment">
          <NavLink>Accomplishments</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/warun1801">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/warun_panpaliya">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/warun-panpaliya-568b77187">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <HamburgerIcon hide
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      >
        <GiHamburgerMenu size="3rem"/>
        <DropdownContent style={{display: showDropdown?'block':'none'}}>
          <DropdownItem href="#experience">Experience</DropdownItem>
          <DropdownItem href="#projects">Projects</DropdownItem>
          <DropdownItem href="#accomplishment">Accomplishments</DropdownItem>
        </DropdownContent>
      </HamburgerIcon>
    </Div3>
  </Container>
  </ContainerWrapper>
  </div>
  </>
)};

export default Header;
