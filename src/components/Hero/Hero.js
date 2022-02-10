import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { GiBrain } from 'react-icons/gi';
import {FaConnectdevelop} from 'react-icons/fa';
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        Warun&apos;s Portfolio
      </SectionTitle>
      <SectionText>
        I&apos;m a software developer based in the India! I love to explore new fields and follow my passions. My interests lie in Web development <FaConnectdevelop/> and Machine learning <GiBrain/> (Particularly NLP)
      </SectionText>
      <Button onClick={() => window.location = 'https://tinyurl.com/2p83x5bp'}>Resumé</Button>
    </LeftSection>
  </Section>
);

export default Hero;