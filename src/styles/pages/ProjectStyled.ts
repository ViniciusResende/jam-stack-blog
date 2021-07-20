import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin: 50px 0;
  padding: 16px;

  border: var(--primary) 1px solid;

  > img {
    border: var(--primary) 1px solid;
    padding: 5px;
    max-width: 400px;
  }

  > p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-align: justify;
  }

  > a {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--green);
    }
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 32px;
`;
