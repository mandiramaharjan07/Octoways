import React from 'react';
import { NavIcon as NavIconType } from '../../types/nav';

interface Props { 
  icon: NavIconType; 
  size?: number; 
}

const NavIcon: React.FC<Props> = ({ icon, size = 34 }) => (
  <div 
    className="flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
    style={{ 
      width: size, 
      height: size, 
      backgroundColor: icon.bgColor || 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.05)'
    }}
  >
    <svg 
      width={size * 0.55} 
      height={size * 0.55} 
      viewBox={icon.viewBox}
      fill="none" 
      stroke={icon.color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d={icon.path} />
    </svg>
  </div>
);

export default NavIcon;
