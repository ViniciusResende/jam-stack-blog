import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-align: justify;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      max-width: 50px;
    }

    > strong {
      font-size: 20px;
      margin-left: 10px;
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 0;

  > p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-align: justify;
  }
`;
