import React from 'react';
import Header from '../header';
import Container from '../container';

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
      </Container>
    </main>
  </div>
);
