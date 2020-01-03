import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = (
    edges.map(({ node }) => (
      <div key={node.fields.slug} className="post">
        <Link to={node.fields.slug} className="post-title"><h2>{node.frontmatter.title}</h2></Link>
        <Img fixed={data.file.childImageSharp.fixed} />
        <p className="post-date">{node.frontmatter.date}</p>
        <p>{node.frontmatter.description}</p>
      </div>
    ))
  );

  return (
    <div className="posts">
      {posts}
    </div>
  )
}