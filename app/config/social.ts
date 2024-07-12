export const social = [
  {
    name: 'gelzin',
    url: 'https://gelzin.com',
    icon: 'https://gelzin.com/gelzin.svg',
    filter: 'invert(0)',
    classNames: 'print:hidden',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/gelzinn',
    icon: 'https://simpleicons.org/icons/github.svg',
    filter: 'invert(1)',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/gelzin',
    icon: 'https://simpleicons.org/icons/linkedin.svg',
    filter: 'invert(1)',
  },
  {
    name: '𝕏/Twitter',
    url: 'https://x.com/gelzinn_',
    icon: 'https://simpleicons.org/icons/x.svg',
    filter: 'invert(1)',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/gelzinn_',
    icon: 'https://simpleicons.org/icons/instagram.svg',
    filter: 'invert(1)',
  },
];

export type Social = (typeof social)[number];
