import { School, Users, ShoppingBag, UtensilsCrossed, LucideIcon } from 'lucide-react';

export type SolutionProject = {
  id: string;
  badgeLabel: string;
  badgeIcon: LucideIcon;
  badgeTextColor?: string;
  title: {
    main: string;
    accent: string;
  };
  description: string;
  features?: string[];
  groupedFeatures?: {
    title: string;
    items: string[];
  }[];
  image: string;
  mockupOuterClassName: string;
  reverse?: boolean;
};

export const SOLUTION_PROJECTS: SolutionProject[] = [
  {
    id: 'school-management',
    badgeLabel: 'School Management',
    badgeIcon: School,
    title: {
      main: 'School Management',
      accent: 'App.',
    },
    description:
      'Transform your institution with a unified platform that connects administrators, teachers, parents, and students in one intelligent ecosystem.',
    features: [
      'Automated Enrollment',
      'Smart Attendance Tracking',
      'Integrated Fee Systems',
      'Exam & Grade Logic',
      'Interactive Dashboards',
      'Predictive Reporting',
    ],
    image:
      'https://res.cloudinary.com/dvwpuenzk/image/upload/f_auto,q_100,w_1800,c_fill/in-dev_oppies.png',
    mockupOuterClassName: 'bg-[#F9FAFB]',
    reverse: true,
  },
  {
    id: 'healthcare',
    badgeLabel: 'Healthcare',
    badgeIcon: Users,
    title: {
      main: 'Dialysis Patient',
      accent: 'Management.',
    },
    description:
      'A digital platform designed to simplify dialysis patient management, treatment scheduling, and the day-to-day coordination of dialysis care.',
    features: [
      'Patient Management',
      'Dialysis Scheduling',
      'Treatment Tracking',
      'Appointment Management',
      'Patient Records',
      'Care Coordination',
    ],
    image:
      'https://res.cloudinary.com/dvwpuenzk/image/upload/f_auto,q_100,w_1800,c_fill/in-dev_oppies.png',
    mockupOuterClassName: 'bg-[#F9FAFB]',
  },
  {
    id: 'salon-commerce',
    badgeLabel: 'Salon Commerce',
    badgeIcon: ShoppingBag,
    badgeTextColor: 'text-[#C5A059]',
    title: {
      main: 'Salon Commerce',
      accent: '& Booking.',
    },
    description:
      'A hybrid commerce engine that merges real-time scheduling with fully integrated digital storefronts.',
    groupedFeatures: [
      {
        title: 'Operations',
        items: ['Real-time Booking', 'Staff Logic', 'Calendar Sync'],
      },
      {
        title: 'Commerce',
        items: ['Product Catalog', 'Secure Checkout', 'Inventory Engine'],
      },
    ],
    image:
      'https://res.cloudinary.com/dvwpuenzk/image/upload/f_auto,q_100,w_1800,c_fill/in-dev_oppies.png',
    mockupOuterClassName: 'bg-[#F8FAFA]',
    reverse: true,
  },
  {
    id: 'restaurant-management',
    badgeLabel: 'Restaurant Management',
    badgeIcon: UtensilsCrossed,
    title: {
      main: 'Restaurant Management',
      accent: 'System.',
    },
    description:
      'A restaurant operations platform that connects reservations, table management, ordering, and kitchen operations in one system.',
    features: [
      'Table Reservations',
      'Table Management',
      'Order Management',
      'Kitchen Display System',
      'Menu Management',
      'Inventory Management',
    ],
    image:
      'https://res.cloudinary.com/dvwpuenzk/image/upload/f_auto,q_100,w_1800,c_fill/in-dev_oppies.png',
    mockupOuterClassName: 'bg-[#F9FAFB]',
  },
];
