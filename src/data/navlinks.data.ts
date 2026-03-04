type Page = 'home' | 'solutions' | 'custom' | 'about' | 'contact';

interface NavLink {
  name: string;
  id: Page;
}
export const NAV_LINKS: NavLink[] = [
  {
    name: 'Solutions',
    id: 'solutions',
  },
  {
    name: 'Custom Dev',
    id: 'custom',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
];
