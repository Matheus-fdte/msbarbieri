const languages = require('./languages');

module.exports = {
  siteUrl: 'https://matheusbarbieri.io',
  description: 'Software Engineer',
  author: {
    name: 'Matheus Barbieri',
    bio: '',
    homeCity: 'São Paulo',
    email: 'matheussouzabarbieri@gmail.com',
    defaultLink: 'https://github.com/MSBarbieri',
  },
  sourceCodeLink: 'https://github.com/hugomn/hugo.im',
  disqusShortname: 'hugomagalhes',
  menu: [
    { label: 'home', slug: '/' },
    { label: 'about', slug: '/about/' },
    { label: 'blog', slug: '/blog/' },
    // { label: 'talks', slug: '/talks/' },
    { label: 'contact', slug: '/contact/' },
    { label: 'call', link: 'http://matheusbarbieri.io/' },
  ],
  languages,
  contact: [
    {
      type: 'email',
      value: 'matheussouzabarbieri@gmail.com',
      link: 'mailto:matheussouzabarbieri@gmail.com',
    },
    {
      type: 'phone',
      value: '+55 11 984413886',
      country: 'BR',
      link: 'tel:+55 11 984413886',
    },
  ],
};
