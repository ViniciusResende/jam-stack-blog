import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';

import {
  Container,
  Wrapper,
  SiteTitle,
  NavContainer,
  NavLinks,
  NavLinkItem,
  Heading,
} from './LayoutStyled';

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

export const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <title>
            {pageTitle} | {data.site.siteMetadata.title}
          </title>
          <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
          <NavContainer>
            <NavLinks>
              <NavLinkItem>
                <Link to='/'>Home</Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to='/about'>About</Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to='/projects'>Projects</Link>
              </NavLinkItem>
            </NavLinks>
          </NavContainer>
          <Heading>{pageTitle}</Heading>
          {children}
        </Wrapper>
      </Container>
    </>
  );
};
