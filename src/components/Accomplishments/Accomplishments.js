import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import { FaAward } from 'react-icons/fa';

const data = [
  {title: "Academic Excellence Award 2021",
  description: "Highest overall 3rd Year CGPA (9.8) for the year 2020-2021"},
  {title: "Academic Excellence Award 2020",
  description: "Highest overall 2nd Year CGPA (10.0) for the year 2019-2020"},
  {title: "ACM ICPC 2020 Regionalist",
  description: "Qualified for the Regional round of ACM ICPC 2020 from the Amritapuri Region"}
];

const Accomplishments = () => (
  <Section id="accomplishment">
    <SectionDivider/>
    <SectionTitle main><FaAward style={{paddingTop: "10px"}}/> Accomplishments </SectionTitle>
    <Boxes>
      {data.map(( card, index ) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.description}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
