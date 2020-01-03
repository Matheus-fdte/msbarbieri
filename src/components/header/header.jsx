import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default () => (
  <StaticQuery
    query={graphql`
        query HeaderQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
    render={data => (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {data.site.siteMetadata.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="/tag/devops">DevOps</Nav.Link>
            <Nav.Link href="/tag/graphics">Graphics</Nav.Link>
            <Nav.Link href="/about">Sobre Mim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}
  />
);
