import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Posts from '../components/posts';
import 'minireset.css';
import 'bootstrap/dist/css/bootstrap.css';


export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Posts data={data} />
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            bg
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;