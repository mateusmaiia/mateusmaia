'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'work', path: '/work' },
  { name: 'resume', path: '/resume' },
  { name: 'testimonials', path: '/testimonials' },
  { name: 'contact', path: '/contact' },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && 'text-accent'
            } capitalize font-medium`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;