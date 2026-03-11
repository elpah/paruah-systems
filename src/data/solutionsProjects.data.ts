import {
  School,
  Monitor,
  ShieldCheck,
  Users,
  ShoppingBag,
  Smartphone,
  LucideIcon,
} from 'lucide-react';

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
  mockupIcon: LucideIcon;
  mockupOuterClassName: string;
  mockupInnerClassName: string;
  mockupGradientClassName: string;
  reverse?: boolean;
};

export const SOLUTION_PROJECTS: SolutionProject[] = [
  {
    id: 'school-management',
    badgeLabel: 'School Management',
    badgeIcon: School,
    title: {
      main: 'Next-Gen School',
      accent: 'Management.',
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
    mockupIcon: Monitor,
    mockupOuterClassName: 'bg-[#F9FAFB]',
    mockupInnerClassName: 'w-full aspect-[16/10] rounded-3xl',
    mockupGradientClassName: 'bg-gradient-to-br from-[#0D3D3D]/5 to-transparent',
    reverse: true,
  },
  {
    id: 'healthcare',
    badgeLabel: 'Healthcare',
    badgeIcon: Users,
    title: {
      main: 'Patient Management',
      accent: '& Booking.',
    },
    description:
      'A patient management foundation that streamlines clinical workflows and automates the patient journey from first click to follow-up.',
    features: [
      'Smart Patient Intake',
      'Resource Scheduling',
      'Secure Health Records',
      'Billing Automation',
      'Telehealth Bridge',
      'Patient Analytics',
    ],
    mockupIcon: ShieldCheck,
    mockupOuterClassName: 'bg-[#F9FAFB]',
    mockupInnerClassName: 'w-full aspect-square rounded-[40px]',
    mockupGradientClassName: 'bg-gradient-to-tr from-[#0D3D3D]/5 to-transparent',
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
    mockupIcon: Smartphone,
    mockupOuterClassName: 'bg-[#F8FAFA]',
    mockupInnerClassName: 'w-full aspect-[9/16] max-w-[280px] rounded-[40px]',
    mockupGradientClassName: 'bg-gradient-to-tr from-[#C5A059]/5 to-transparent',
    reverse: true,
  },
];
