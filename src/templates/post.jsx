import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/layout";

export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { title, tags, date } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;

    return (
      <Layout>
        <div>
          <h2>{title}</h2>
          <p>{tags.map(tag => <Link key={tag} to={`/tag/${_.kebabCase(tag)}`}>
            <span className="ml-1 badge badge-dark ">{tag}</span>
          </Link>)}</p>
          <div>
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <p>{date}</p>
        </div>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
    query PostPage($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } } ) {
        html
        timeToRead
        excerpt
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          tags
          description
        }
        fields {
          slug
        }
      }
    }
  `;