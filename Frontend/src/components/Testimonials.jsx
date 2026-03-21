import { Star } from 'lucide-react';
import { testimonials } from '../data/content';

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Guest stories</p>
          <h2 className="section-title mt-3">What people remember after the last bite.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[2rem] bg-cream p-8 shadow-soft">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-coconut/80">“{item.quote}”</p>
              <div className="mt-6 border-t border-ocean/10 pt-5">
                <p className="font-display text-2xl text-ocean">{item.name}</p>
                <p className="text-sm text-coconut/60">{item.country}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
