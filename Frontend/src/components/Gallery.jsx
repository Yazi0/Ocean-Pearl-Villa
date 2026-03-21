import { galleryImages } from '../data/content';

function Gallery() {
  return (
    <section id="gallery" className="bg-ocean py-24 text-white">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand">Discover our gallery</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
              A visual taste of the atmosphere.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
          >
            View full experience
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className={`${index % 3 === 0 ? 'xl:row-span-2' : ''} overflow-hidden rounded-[2rem]`}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className={`w-full object-cover transition duration-500 hover:scale-105 ${
                  index % 3 === 0 ? 'h-[32rem]' : 'h-64'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
