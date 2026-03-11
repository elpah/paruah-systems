type Page = 'home' | 'solutions' | 'custom' | 'about' | 'contact' | 'projects';

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
    name: 'Projects',
    id: 'projects',
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
