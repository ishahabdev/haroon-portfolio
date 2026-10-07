import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const brand = 'Haroon'; // change to your name
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          {brand}
          <span className="text-emerald-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[#9aa5a1] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="text-[#9aa5a1] transition-colors hover:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-emerald-500 px-3.5 py-1.5 text-sm font-medium text-[#0b1210] transition-colors hover:bg-emerald-400 sm:block"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-[#9aa5a1] hover:text-white md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#9aa5a1] hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-[#0b1210]"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;