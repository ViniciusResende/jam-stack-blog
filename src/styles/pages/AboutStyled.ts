import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  > div {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
  }

  > strong {
    font-size: 24px;
    text-align: center;
    margin: 10px;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  text-align: justify;
`;

export const Details = styled.ul`
  margin: 40px 0;

  > strong {
    font-size: 18px;
  }

  > li {
    padding-top: 15px;
    padding-left: 10px;
  }
`;

export const Technologies = styled.div`
  > strong {
    font-size: 18px;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    grid-gap: 10px;
    margin-top: 10px;
  }
`;
