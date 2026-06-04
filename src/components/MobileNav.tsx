import { useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#treatments', label: 'Treatments' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#results', label: 'Results' },
  { href: '#visit', label: 'Visit' },
];

export function MobileNav({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={`mnav ${open ? 'open' : ''} fixed top-0 right-0 z-50 h-full w-[68%] max-w-[300px] bg-bg pt-5 px-5 pb-10 overflow-y-auto shadow-[0_0_60px_-10px_rgba(31,27,22,0.45)]`}
        aria-hidden={!open}
      >
      <div className="flex items-center justify-between mb-10">
        <span className="flex items-center gap-2 min-w-0">
          <img src="/brand/lotus.png" alt="" className="h-7 w-auto shrink-0" />
          <span className="text-[18px] font-semibold tracking-[-0.02em] whitespace-nowrap">
            Dr. Ashwini's skin arc<span className="text-accent">.</span>
          </span>
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-line grid place-items-center"
          aria-label="Close menu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="font-serif text-[2rem] sm:text-4xl space-y-4 sm:space-y-5 mb-10">
        {LINKS.map((l) => (
          <a key={l.href} className="block" href={l.href} onClick={onClose}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="pt-6 border-t border-line space-y-4 text-sm text-inksoft">
        <div>Mon–Sun · 10:00 AM – 2:00 PM, 5:30 PM – 9:30 PM</div>
        <div className="flex flex-col gap-3">
          <a
            href="tel:+917288911000"
            className="btn btn-ghost justify-center"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call +91 72889 11000
          </a>
          <a href="#book" className="btn btn-primary justify-center" onClick={onClose}>
            Book Consultation
          </a>
        </div>
      </div>
      </aside>
    </>
  );
}
