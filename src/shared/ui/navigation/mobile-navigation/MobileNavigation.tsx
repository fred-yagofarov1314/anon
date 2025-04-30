'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { cn } from '@/shared/lib/utils';

export interface MobileNavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface MobileNavigationProps {
  /** Элементы навигации */
  items: MobileNavigationItem[];
  /** Дополнительные классы */
  className?: string;
  /** Текст кнопки открытия меню */
  toggleButtonText?: string;
  /** Иконка для кнопки открытия/закрытия (когда меню закрыто) */
  openIcon?: React.ReactNode;
  /** Иконка для кнопки открытия/закрытия (когда меню открыто) */
  closeIcon?: React.ReactNode;
}

/**
 * Компонент мобильной навигации с выпадающим меню
 * Предназначен для использования на маленьких экранах
 */
export function MobileNavigation({
  items,
  className,
  toggleButtonText = 'Меню',
  openIcon = '☰',
  closeIcon = '✕',
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Закрываем меню при клике на ссылку
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn('md:hidden', className)}>
      <button
        type="button"
        onClick={toggleMenu}
        className="flex items-center space-x-1 p-2 rounded-md hover:bg-subtle transition-colors"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        <span className="sr-only">{toggleButtonText}</span>
        <span aria-hidden="true">{isOpen ? closeIcon : openIcon}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-background border-t border-b shadow-lg">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-2">
              {items.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center py-2 px-3 rounded-md transition-colors',
                        'hover:bg-accent hover:text-accent-foreground',
                        isActive && 'bg-accent text-accent-foreground font-medium',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={handleLinkClick}
                    >
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
