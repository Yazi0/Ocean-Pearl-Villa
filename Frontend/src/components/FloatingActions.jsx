import { ChevronUp, MessageCircleMore } from 'lucide-react';
import { useEffect, useState } from 'react';

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/94771234567"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1"
        aria-label="WhatsApp"
      >
        <MessageCircleMore size={24} />
      </a>
      {visible && (
        <button
          type="button"
          onClick={scrollTop}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ocean text-white shadow-soft transition hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

export default FloatingActions;
