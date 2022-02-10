import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import parseData from './projectsutils';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, GithubCard } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { AiFillBook,AiFillProject } from 'react-icons/ai';
import { FaFileCode } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import { BiGitRepoForked } from 'react-icons/bi';
const Projects = () => {
  const [data, setData] = useLocalStorage([]);

  const fetchData = async () => {
    try{
      const reponse = await fetch('/api/github');
      const d = await reponse.json();
      console.log("hello");
      const newD = parseData(d);
      setData(newD);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(async () => {
    await fetchData();
    console.log(data);
  }, []);

  return (
    <Section id="projects" style={{overflow: "hidden"}}>
      <div style={{padding:"2vh"}}/>
      <SectionDivider />
      <SectionTitle main><AiFillProject style={{paddingTop:"10px"}}/>Projects</SectionTitle>
      <GridContainer style={{overflowY: "scroll", maxHeight: "70vh"}}>
        {data && data.map(({id, title, description, link, language, stars, forks}) => (
          <GithubCard key={id}>
            <TitleContent>
              <a href={link}><HeaderThree title><AiFillBook size="2.4rem"/></HeaderThree></a>
              &nbsp;&nbsp;&nbsp;
              <a href={link}><HeaderThree title>{title.replaceAll("-", " ")}</HeaderThree></a>
            </TitleContent>
              <Hr/>
            <CardInfo style={{color: "#BBB"}}>{description}</CardInfo>
            <Hr/>
            <CardInfo>
              <div style={{display: "flex", alignItems: "center", justifyContent: "left"}}>
                <FaFileCode/>&nbsp;{language}&emsp;
                <BsFillStarFill/>&nbsp;{stars}&emsp;
                <BiGitRepoForked/>&nbsp;{forks}
              </div>
            </CardInfo>
          </GithubCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;