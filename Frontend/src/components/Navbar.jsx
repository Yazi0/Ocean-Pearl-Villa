import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/content';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ocean/80 shadow-soft backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between py-4 text-white">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 font-display text-lg">
              OP
            </div>
            <div>
              <p className="font-display text-xl tracking-wide">Ocean Pearl</p>
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">Mirissa</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+94771234567"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Phone size={16} /> +94 77 123 4567
            </a>
            <a
              href="#reservation"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ocean"
            >
              Reserve a Table
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/20 p-3 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="section-shell pb-5 lg:hidden">
          <div className="rounded-3xl border border-white/10 bg-ocean/95 p-5 text-white shadow-soft">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/85"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
