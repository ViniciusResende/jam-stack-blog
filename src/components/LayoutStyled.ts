import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
`;

export const Wrapper = styled.main`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

export const SiteTitle = styled.h1`
  font-size: 3rem;
  color: var(--primary);
  font-weight: 700;
  text-align: center;
  text-shadow: 1px 0px 1px var(--outline), 0px 1px 1px var(--light-gray),
    2px 1px 1px var(--outline), 1px 2px 1px var(--light-gray),
    3px 2px 1px var(--outline), 2px 3px 1px var(--light-gray),
    4px 3px 1px var(--outline), 3px 4px 1px var(--light-gray),
    5px 4px 1px var(--outline), 4px 5px 1px var(--light-gray),
    6px 5px 1px var(--outline), 5px 6px 1px var(--light-gray),
    7px 6px 1px var(--outline);
`;

export const NavContainer = styled.nav`
  display: flex;
  padding: 20px 0;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;

  list-style: none;
`;

export const NavLinkItem = styled.li`
  padding-right: 2rem;
  color: black;
  > a {
    text-decoration: none;
    color: var(--white);
    font-weight: 600;

    &::before {
      bottom: 0px;
      content: ' ';
      display: block;
      height: 0.1875rem;
      line-height: 0;
      position: relative;
      transform: scaleX(0);
      transition: all 0.6s ease;
    }

    &:hover::before {
      background-color: var(--primary);
      bottom: 0px;
      content: ' ';
      display: block;
      height: 0.1875rem;
      line-height: 0;
      position: relative;
      transform: scaleX(1);
      transition: all 0.6s ease;
    }
  }
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 32px;
  margin: 20px 0;
  color: var(--gray);
`;
