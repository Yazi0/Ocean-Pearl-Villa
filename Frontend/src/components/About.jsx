function About() {
  return (
    <section id="about" className="bg-wave-pattern py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant interior"
            className="h-80 w-full rounded-[2rem] object-cover shadow-soft sm:h-[28rem]"
          />
          <div className="space-y-5 sm:pt-12">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
              alt="Signature dish"
              className="h-44 w-full rounded-[2rem] object-cover shadow-soft"
            />
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
              alt="Beach restaurant ambience"
              className="h-56 w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">About us</p>
          <h2 className="section-title mt-3">Where slow mornings, ocean breeze, and island flavor meet.</h2>
          <p className="section-copy">
            Inspired by the coastal calm of Mirissa and the charm of restaurants like Mila Mirissa,
            Ocean Pearl is designed as an elevated yet welcoming dining destination. The concept blends
            relaxed Sri Lankan beach culture with a more polished, modern presentation. The reference site
            highlights a simple navigation, warm introduction, opening hours, story section, menu, gallery,
            and contact details, and this project expands that foundation into a fuller premium experience.
          </p>
          <p className="mt-4 text-sm leading-7 text-coconut/75 md:text-base">
            Every dish is prepared with fresh seafood, local spices, tropical produce, and heartfelt hospitality.
            The result is a landing page concept that feels elegant, cinematic, and tailored for both tourists and locals.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['08AM–11PM', 'Open daily'],
              ['Fresh Daily', 'Local seafood'],
              ['Oceanfront', 'Sunset dining'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.75rem] bg-white p-5 shadow-soft">
                <p className="font-display text-2xl text-ocean">{value}</p>
                <p className="mt-2 text-sm text-coconut/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
