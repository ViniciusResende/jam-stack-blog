import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import {
  Container,
  Header,
  MainContent,
  Description,
  Details,
  Technologies,
} from '../styles/pages/AboutStyled';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <Container>
        <Header>
          <StaticImage
            alt='ProfilePic'
            src='https://avatars.githubusercontent.com/u/52660930?v=4'
          />
          <strong>Vinícius Alves</strong>
        </Header>
        <MainContent>
          <Description>
            I'm a programmer who is searching for new knowledge everyday, a
            person who is passionate with technology and someone who wants to be
            better whenever I can.
          </Description>
          <Details>
            <strong>My details:</strong>
            <li>Frontend Developer at B2WADS</li>
            <li>Information Systems student at UFMG</li>
            <li>IT Technician by UFV</li>
            <li>Mentoring Enthusiast</li>
          </Details>
          <Technologies>
            <strong>My favotite Technologies:</strong>
            <div>
              <StaticImage
                alt='HTML5'
                src='../images/html5-original-wordmark.svg'
              />
              <StaticImage
                alt='CSS3'
                src='../images/css3-original-wordmark.svg'
              />
              <StaticImage alt='React' src='../images/react-original.svg' />
              <StaticImage
                alt='JavaScript'
                src='../images/javascript-original.svg'
              />
              <StaticImage alt='NodeJS' src='../images/nodejs-original.svg' />
              <StaticImage alt='GIT' src='../images/git-original.svg' />
              <StaticImage
                alt='TypeScript'
                src='../images/typescript-original.svg'
              />
              <StaticImage alt='Docker' src='../images/docker-original.svg' />
              <StaticImage
                alt='Kubernets'
                src='../images/kubernetes-plain.svg'
              />
              <StaticImage
                alt='Firebase'
                src='../images/firebase-plain-wordmark.svg'
              />
              <StaticImage alt='Webpack' src='../images/webpack-original.svg' />
              <StaticImage alt='Babel' src='../images/babel-original.svg' />
            </div>
          </Technologies>
        </MainContent>
      </Container>
    </Layout>
  );
};

export default AboutPage;
