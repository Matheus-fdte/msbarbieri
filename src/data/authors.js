const authors = {
  hugomn: {
    name: 'Matheus Barbieri',
    additionalName: 'hugomn',
    address: 'Berlin CA',
    birthDate: '1986-09-01',
    birthPlace: 'São Paulo BR',
    brand: 'Matheus Barbieri, Software Engineer',
    children: '...',
    email: 'matheussouzabarbieri@gmail.com',
    familyName: 'Barbierei',
    gender: 'Male',
    givenName: 'Matheus',
    height: '...',
    homeLocation: 'São Paulo',
    jobTitle: 'Software Engineering',
    knows: '...',
    memberOf: '...',
    nationality: 'Brazilian',
    owns: '...',
    parent: '...',
    performerIn: '...',
    publishingPrinciples: '...',
    relatedTo: '...',
    seeks: '...',
    sibling: '...',
    telephone: '...',
    weight: '...',
    workLocation: '...',
    worksFor: '...',
    description: '...',
    disambiguatingDescription: '...',
    identifier: '...',
    image: 'http://www.gravatar.com/avatar/9174fca44b5ca403593ac9cb2407e0e7',
    sameAs: 'https://hugomagalhaes.com/en/about/',
    url: 'https://hugomagalhaes.com/en/about/',
  },
};

const getAuthor = (id) => {
  const author = {
    ...authors[id],
    '@type': 'Person',
  };
  return author ? author : authors[0];
};

module.exports = {
  authors,
  getAuthor,
};
