import { Camera, Fish, HandPlatter, Leaf, Sparkles, SunMedium } from 'lucide-react';
import { experiences } from '../data/content';

const icons = [Leaf, Fish, HandPlatter, Sparkles, SunMedium, Camera];

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Why choose us</p>
          <h2 className="section-title mt-3">Designed for unforgettable coastal moments.</h2>
          <p className="section-copy mx-auto">
            Every touchpoint is built around comfort, flavor, atmosphere, and the premium tropical identity of Mirissa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item.title} className="rounded-[2rem] bg-white p-7 shadow-soft">
                <div className="inline-flex rounded-2xl bg-ocean p-3 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-ocean">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-coconut/75">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
