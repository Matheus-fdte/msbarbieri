import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Container from '../components/container';

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre mim"
            description="Sou um desenvolvedor apaixonado por JavaScript"
          />
          <Sidebar
            title="Sobre o blog"
            description="Aqui você encontará muito conteúdo de FrontEnd e CSS"
          />
        </aside>
      </Container>
    </main>
  </div>
);
