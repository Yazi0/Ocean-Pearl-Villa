import { MapPin, MoveDown, Timer } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ocean text-white">
      <div
        className="absolute inset-0 bg-cover bg-center fade-mask"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,17,17,0.35), rgba(6,17,17,0.75)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-ocean" />

      <div className="section-shell relative flex min-h-screen items-center pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl animate-fadeUp">
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/80 backdrop-blur-md">
              Tropical luxury dining in Mirissa
            </p>
            <h1 className="font-display text-5xl leading-tight md:text-7xl">
              Taste the soul of <span className="text-sand">Mirissa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              A premium coastal restaurant experience inspired by the warmth of Sri Lankan hospitality,
              fresh seafood, slow mornings, and unforgettable sunsets by the sea.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ocean"
              >
                View Menu
              </a>
              <a
                href="#reservation"
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="ml-auto w-full max-w-xl animate-float">
            <div className="glass-panel rounded-[2rem] border border-white/15 p-6 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5">
                  <MapPin className="mb-4 text-sand" />
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Location</p>
                  <p className="mt-2 text-lg font-semibold">Mirissa Beach Road</p>
                  <p className="mt-1 text-sm text-white/70">Southern Coast, Sri Lanka</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <Timer className="mb-4 text-sand" />
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Opening Hours</p>
                  <p className="mt-2 text-lg font-semibold">Daily 8AM – 11PM</p>
                  <p className="mt-1 text-sm text-white/70">Breakfast to late dinner</p>
                </div>
              </div>
              <div className="mt-4 rounded-3xl bg-white/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/60">Highlights</p>
                    <p className="mt-2 text-lg font-semibold">Fresh daily catch • ocean view • premium brunch</p>
                  </div>
                  <div className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80">
                    5000+ happy guests
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/65"
      >
        Scroll
        <MoveDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
