import React from 'react';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { FaHeart, FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call <FaPhone/></LinkTitle>
          <LinkItem href="tel:8830036413"> 8830036413 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email <IoMdMail size={"1.4rem"}/></LinkTitle>
          <LinkItem href="mailto:warun1801@gmail.com"> warun1801@gmail.com </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan> Copyright &copy; 2022. Made by Warun Panpaliya.<FaHeart/> </Slogan>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;
