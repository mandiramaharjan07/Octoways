import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavMenuItem, NavSubItem } from '../../types/nav';
import NavIcon from './NavIcon';

interface MegaMenuProps {
  item: NavMenuItem;
  isOpen: boolean;
  onClose: () => void;
}

const SubItemCard: React.FC<{ item: NavSubItem; onClick: () => void }> = ({ item, onClick }) => (
  <Link 
    to={item.href} 
    onClick={onClick}
    className="flex gap-4 items-start p-3 px-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-primary/5 group border border-transparent hover:border-primary/10"
  >
    <NavIcon icon={item.icon} size={36} />
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-headline text-[13px] font-bold text-text-primary group-hover:text-primary transition-colors">
          {item.label}
        </span>
        {item.badge && (
          <span className="text-[10px] font-bold bg-secondary/15 text-secondary border border-secondary/25 rounded px-1.5 py-0.5 uppercase tracking-wider">
            {item.badge}
          </span>
        )}
      </div>
      <p className="font-body text-[12px] text-text-secondary leading-snug break-words group-hover:text-text-primary transition-colors">
        {item.description}
      </p>
    </div>
  </Link>
);

const MegaMenu: React.FC<MegaMenuProps> = ({ item, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          exit={{ opacity: 0, y: -6, scaleY: 0.97 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 right-0 z-[9995] origin-top top-[60px]"
          style={{
            background: 'var(--color-bg)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            padding: '40px 0 48px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          <div className="max-w-7xl mx-auto px-8">
            {item.type === 'mega' && (
              <div className="flex gap-16">
                <div className="flex-[2] grid grid-cols-2 gap-x-8 gap-y-4">
                  {item.columns?.map((sub) => (
                    <SubItemCard key={sub.id} item={sub} onClick={onClose} />
                  ))}
                </div>
                {item.featured && (
                  <div className="flex-1">
                    <Link 
                      to={item.featured.href} 
                      onClick={onClose}
                      className="block p-8 rounded-[2rem] bg-surface-raised group relative overflow-hidden h-full shadow-card hover:shadow-xl transition-all"
                    >
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-8xl text-primary">neurology</span>
                      </div>
                      <span className="inline-block font-headline text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">
                        {item.featured.label}
                      </span>
                      <h4 className="font-headline text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                        {item.featured.title}
                      </h4>
                      <p className="font-body text-sm text-text-secondary mb-8 leading-relaxed">
                        {item.featured.description}
                      </p>
                      <span className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                        {item.featured.ctaText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {item.type === 'grouped' && (
              <div className="flex gap-12">
                {item.groups?.map((group, idx) => (
                  <React.Fragment key={group.groupLabel}>
                    <div className="flex-1">
                      <span className="block font-body text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-8 pb-4 px-4">
                        {group.groupLabel}
                      </span>
                      <div className="space-y-2">
                        {group.items.map((sub) => (
                          <SubItemCard key={sub.id} item={sub} onClick={onClose} />
                        ))}
                      </div>
                    </div>
                    {idx < (item.groups?.length || 0) - 1 && (
                      <div className="w-12" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {item.type === 'simple' && (
              <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8">
                {item.simpleItems?.map((sub) => (
                  <SubItemCard key={sub.id} item={sub} onClick={onClose} />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
