import { MessageCircleMore, PhoneCall } from 'lucide-react';

function Reservation() {
  return (
    <section id="reservation" className="py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-ocean p-8 text-white shadow-soft md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand">Reservation</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
                Book your table for a sunset dinner in Mirissa.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/80 md:text-base">
                Plan a brunch by the sea, a cozy coffee date, or a seafood dinner with friends. The page is frontend-only,
                so the buttons are ready for future backend or WhatsApp integration.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="tel:+94771234567"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-ocean"
              >
                <PhoneCall size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/94776683072"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircleMore size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
