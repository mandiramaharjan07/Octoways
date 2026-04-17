import { NavMenuItem } from '../types/nav';

export const NAV_ITEMS: NavMenuItem[] = [
  {
    id: 'products',
    label: 'Products',
    type: 'mega',
    columns: [
      {
        id: 'ktm-ai',
        label: 'KTM AI Assistance',
        description: 'AI-powered companion app for motorcycle enthusiasts and riders.',
        badge: 'Popular',
        href: '/products',
        icon: { viewBox:'0 0 24 24', path:'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', color:'#3d92cc', bgColor:'rgba(61,146,204,0.12)' }
      },
      {
        id: 'pov',
        label: 'POV – Power Of Views',
        description: 'Next-gen feedback and reputation management platform.',
        href: '/products',
        icon: { viewBox:'0 0 24 24', path:'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zm10-3a3 3 0 100 6 3 3 0 000-6z', color:'#D4537E', bgColor:'rgba(212,83,126,0.1)' }
      },
      {
        id: 'entry-keeper',
        label: 'Entry Keeper',
        description: 'Seamless digital visitor management and entry tracking.',
        href: '/products',
        icon: { viewBox:'0 0 24 24', path:'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color:'#1D9E75', bgColor:'rgba(29,158,117,0.1)' }
      },
      {
        id: 'vat-bills',
        label: 'VAT Bills',
        description: 'IRD-approved compliant billing software for businesses in Nepal.',
        badge: 'IRD',
        href: '/products',
        icon: { viewBox:'0 0 24 24', path:'M9 17h6M9 13h6M9 9h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z', color:'#5ccafc', bgColor:'rgba(92,202,252,0.1)' }
      }
    ],
    featured: {
      label: 'New Integration',
      title: 'KTM AI V2.0 Launch',
      description: 'Integrated neural maintenance scheduling and predictive diagnostics.',
      ctaText: 'View Product Details',
      href: '/products'
    }
  },
  {
    id: 'solutions',
    label: 'Solutions',
    type: 'grouped',
    groups: [
      {
        groupLabel: 'By Industry',
        items: [
          { id:'automotive', label:'Automotive & Mobility', description:'Interactive systems for brands like Jeep Nepal', href:'/works', icon:{ viewBox:'0 0 24 24', path:'M18.5 13H5.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zM7 8V5a1 1 0 011-1h8a1 1 0 011 1v3', color:'#EF9F27', bgColor:'rgba(239,159,39,0.1)' } },
          { id:'media', label:'Media & Publishing', description:'Large-scale portals for Annapurna Express & Emountain', href:'/works', icon:{ viewBox:'0 0 24 24', path:'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v12a2 2 0 01-2 2z M12 11h3 M12 15h3 M12 7h2', color:'#D4537E', bgColor:'rgba(212,83,126,0.1)' } },
          { id:'luxury', label:'Luxury & Enterprise', description:'International platforms for Gafencu & Benline', href:'/works', icon:{ viewBox:'0 0 24 24', path:'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z', color:'#3d92cc', bgColor:'rgba(61,146,204,0.1)' } }
        ]
      },
      {
        groupLabel: 'By Expertise',
        items: [
          { id:'ai-dev', label:'Custom AI Development', description:'Bespoke neural systems and LLM integrations', href:'/products', icon:{ viewBox:'0 0 24 24', path:'M22 12h-4l-3 9L9 3l-3 9H2', color:'#3d92cc', bgColor:'rgba(61,146,204,0.1)' } },
          { id:'web-app', label:'Web & App Scaling', description:'High-performance full-stack architectures', href:'/works', icon:{ viewBox:'0 0 24 24', path:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', color:'#1D9E75', bgColor:'rgba(29,158,117,0.1)' } },
          { id:'geo', label:'GEO Optimisation', description:'Generative Engine Optimization for modern search', href:'/products', icon:{ viewBox:'0 0 24 24', path:'M21 21l-4.35-4.35M11 19A8 8 0 1011 3a8 8 0 000 16z', color:'#5ccafc', bgColor:'rgba(92,202,252,0.1)' } }
        ]
      }
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    type: 'simple',
    simpleItems: [
      { id:'blog', label:'Blog', description:'AI insights, engineering deep-dives, and industry news', href:'/blog', icon:{ viewBox:'0 0 24 24', path:'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z', color:'rgba(255,255,255,0.6)', bgColor:'rgba(255,255,255,0.05)' } },
      { id:'works', label:'Case Studies', description:'Real results from 1,200+ global deployments', href:'/works', badge:'500+', icon:{ viewBox:'0 0 24 24', path:'M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11', color:'#1D9E75', bgColor:'rgba(29,158,117,0.1)' } },
      { id:'support', label:'Support & Help', description:'Technical assistance and integration documentation', href:'/contact', icon:{ viewBox:'0 0 24 24', path:'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8', color:'#5ccafc', bgColor:'rgba(92,202,252,0.1)' } }
    ]
  },
  {
    id: 'company',
    label: 'Company',
    type: 'simple',
    simpleItems: [
      { id:'about', label:'About Us', description:'Our story, mission, and global team in Kathmandu', href:'/about', icon:{ viewBox:'0 0 24 24', path:'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75 M9 7a4 4 0 100 8 4 4 0 000-8z', color:'rgba(255,255,255,0.6)', bgColor:'rgba(255,255,255,0.05)' } },
      { id:'careers', label:'Careers', description:'Join our remote-first engineering team', href:'/about', badge:'Hiring', icon:{ viewBox:'0 0 24 24', path:'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z', color:'#EF9F27', bgColor:'rgba(239,159,39,0.1)' } },
      { id:'contact', label:'Contact', description:'Talk to our team in Kathmandu or remotely', href:'/contact', icon:{ viewBox:'0 0 24 24', path:'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', color:'#3d92cc', bgColor:'rgba(61,146,204,0.12)' } }
    ]
  }
];
