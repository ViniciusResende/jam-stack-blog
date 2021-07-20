import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/Layout';

import { Container, ProjectTitle } from '../styles/pages/ProjectStyled';

interface mdxData {
  data: {
    allMdx: {
      nodes: [
        {
          frontmatter: {
            date: string;
            title: string;
            picture: string;
            GitHubUrl: string;
          };
          id: string;
          body: string;
        },
      ];
    };
  };
}

const BlogPage = ({ data }: mdxData) => {
  return (
    <Layout pageTitle='My Lovely Projects'>
      {data.allMdx.nodes.map((node) => (
        <Container key={node.id}>
          <ProjectTitle>{node.frontmatter.title}</ProjectTitle>
          <p>Created at: {node.frontmatter.date}</p>
          <img src={node.frontmatter.picture} alt={node.frontmatter.title} />
          <MDXRenderer>{node.body}</MDXRenderer>
          <a href={node.frontmatter.GitHubUrl} target='_blank' rel='noreffer'>
            GitHub Repository
          </a>
        </Container>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          picture
          GitHubUrl
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
