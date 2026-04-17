export interface NavIcon {
  viewBox: string;
  path: string;
  color: string;
  bgColor: string;
}

export interface NavSubItem {
  id: string;
  label: string;
  description: string;
  icon: NavIcon;
  badge?: string;
  href: string;
}

export interface NavGroup {
  groupLabel: string;
  items: NavSubItem[];
}

export interface NavFeatured {
  label: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

export interface NavMenuItem {
  id: string;
  label: string;
  type: 'mega' | 'grouped' | 'simple';
  columns?: NavSubItem[];
  groups?: NavGroup[];
  simpleItems?: NavSubItem[];
  featured?: NavFeatured;
}

export type ActiveMenu = string | null;
