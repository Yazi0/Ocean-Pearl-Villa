import { Clock3, Mail, MapPinned, Phone, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact us</p>
          <h2 className="section-title mt-3">Visit the coast, stay for the flavor.</h2>
          <p className="section-copy">
            Inspired by the Mirissa reference site’s core details like location, phone, email, and opening hours,
            this section presents them in a more elevated layout ready for real business information.
          </p>

          <div className="mt-8 space-y-5">
            {[
              [MapPinned, 'Address', 'Mirissa Beach Road, Mirissa, Sri Lanka'],
              [Phone, 'Phone', '+94 77 123 4567'],
              [Mail, 'Email', 'info@oceanpearlmirissa.com'],
              [Clock3, 'Opening Hours', 'Monday – Sunday • 8:00 AM – 11:00 PM'],
            ].map(([Icon, title, value]) => (
              <div key={title} className="flex gap-4 rounded-[1.75rem] bg-cream p-5 shadow-soft">
                <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coconut/45">{title}</p>
                  <p className="mt-1 text-base text-coconut/80">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-ocean/10 bg-cream shadow-soft">
          <div className="h-80 w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(18,60,58,0.2), rgba(18,60,58,0.35)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Map placeholder</p>
                <h3 className="mt-2 font-display text-3xl text-ocean">Ready for Google Maps embed</h3>
              </div>
              <a
                href="mailto:info@oceanpearlmirissa.com"
                className="inline-flex items-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
              >
                <Send size={16} /> Send inquiry
              </a>
            </div>
            <p className="mt-5 text-sm leading-7 text-coconut/75">
              Swap this placeholder with a real Google Maps iframe or location embed when you connect live contact details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
