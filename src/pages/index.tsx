import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import { Container, TopContent, MainContent } from '../styles/pages/HomeStyled';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <Container>
        <TopContent>
          <p>
            Essa pequena aplicação foi desenvolvida com o intuíto de ser um
            demonstração prática do JamStack utilizando a ferramenta Gastby.
          </p>
          <div>
            <StaticImage alt='Gatsby' src='../images/gatsby-plain.svg' />
            <strong>Gatsby</strong>
          </div>
        </TopContent>
        <MainContent>
          <p>
            A Tech Week é uma semana inteira destinada à algo que gostamos muito
            por aqui: tecnologia. Do dia 19/07 ao dia 23/07, teremos uma
            programação repleta de palestras, talks e workshops. Feito pelos
            (as) nossos (as) associados (as) para nossos (as) associados (as).
            Em formato remoto, dessa vez de forma ainda mais integrada,
            compartilharemos o que está acontecendo dentro da americanas s.a.{' '}
          </p>
          <StaticImage
            alt='TechWeekBanner'
            src='../images/techWeekFooter.jpg'
          />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default IndexPage;
