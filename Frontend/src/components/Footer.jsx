import { Facebook, Instagram, Send } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-ocean py-10 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 font-display text-lg">
              OP
            </div>
            <div>
              <p className="font-display text-2xl">Ocean Pearl</p>
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">Mirissa</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            A premium beachside restaurant frontend concept built with React and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col gap-5 text-sm text-white/75 md:items-end">
          <div className="flex gap-4">
            {[Facebook, Instagram, Send].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p>© 2026 Ocean Pearl Mirissa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
