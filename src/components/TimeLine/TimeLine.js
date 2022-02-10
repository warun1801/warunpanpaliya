import React from 'react';
import { CarouselItemText, CarouselItemTitle, Box, CarouselWrapper } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { RiComputerFill } from 'react-icons/ri';

const Timeline = () => {
  return (
    <Section id="experience" style={{overflow: "hidden"}}>
      <div style={{padding:"5vh"}} />
      <SectionDivider/>
      <SectionTitle main><RiComputerFill style={{paddingTop: "10px"}}/> Work Experience</SectionTitle>
      <SectionText>
        I have had some amazing experiences during my internships which have helped me become the person I am today and hone my skills. Here are a few of them listed out:
      </SectionText>
      <CarouselWrapper>
        <Carousel dynamicHeight swipeable autoPlay interval={6000} showThumbs={false}>
          {TimeLineData.map((item, i) => (
            <Box key={i}>
              <CarouselItemTitle style={{fontSize: "17px", marginBottom: "0px", color:"#999"}}>{item.duration}</CarouselItemTitle>
              <CarouselItemTitle>{item.title}</CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
              <div style={{display: "flex", justifyContent: "flex-start",flexWrap: 'wrap', alignItems: "center", marginTop: "10px"}}>
              {item.techStack.map((tech) => (
                <CarouselItemText style={{paddingRight: "12px", color: "white"}}>{tech}</CarouselItemText>
              ))}
              </div>

            </Box>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Section>
  );
};

export default Timeline;
