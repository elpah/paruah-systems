import { Layout, Smartphone, Database, Layers, Globe } from 'lucide-react';

export const CUSTOM_SERVICES = [
  {
    title: 'Web Applications',
    icon: Layout,
    color: '#0D3D3D',
    items: ['Enterprise SaaS', 'Data Dashboards', 'Workflow Automation', 'API Design'],
  },
  {
    title: 'Mobile Platforms',
    icon: Smartphone,
    color: '#C5A059',
    items: [
      'iOS & Android Native',
      'High-Performance React Native',
      'Consumer Facing',
      'Corporate Tools',
    ],
  },
  {
    title: 'Cloud Infrastructure',
    icon: Database,
    color: '#1F2937',
    items: [
      'AWS/Azure/GCP',
      'Kubernetes Orchestration',
      'Serverless Architecture',
      'CI/CD Pipelines',
    ],
  },
  {
    title: 'UI/UX Strategy',
    icon: Layers,
    color: '#0D3D3D',
    items: [
      'User Journey Mapping',
      'High-Fidelity Prototyping',
      'Design Systems',
      'Accessibility Audits',
    ],
  },
  {
    title: 'Digital Presence',
    icon: Globe,
    color: '#C5A059',
    items: ['Performance Optimized Sites', 'Headless CMS', 'Technical SEO', 'Immersive UI/UX'],
  },
];
