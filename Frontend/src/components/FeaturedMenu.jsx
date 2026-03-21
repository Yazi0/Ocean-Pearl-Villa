import { featuredDishes } from '../data/content';

function FeaturedMenu() {
  return (
    <section id="menu" className="bg-white py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Featured menu</p>
            <h2 className="section-title mt-3">Signature dishes crafted for coastal cravings.</h2>
            <p className="section-copy">
              From freshly grilled seafood to tropical coolers and slow-brewed coffee, each card showcases the premium,
              relaxed experience of the brand.
            </p>
          </div>
          <a
            href="#reservation"
            className="inline-flex rounded-full border border-ocean/15 px-5 py-3 text-sm font-semibold text-ocean transition hover:bg-ocean hover:text-white"
          >
            Reserve for dinner
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredDishes.map((dish) => (
            <article
              key={dish.title}
              className="group overflow-hidden rounded-[2rem] border border-ocean/8 bg-cream shadow-soft transition duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean">
                  {dish.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-ocean">{dish.title}</h3>
                  <p className="rounded-full bg-ocean px-3 py-1 text-sm font-semibold text-white">{dish.price}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-coconut/75">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;
