
export default function Hero({ heroSrc = "/home.jpeg" }) {
  return (
    <section className="relative overflow-hidden min-h-[690px]">
      <div className="absolute inset-0">
        <img
          src={heroSrc}
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative container mx-auto px-8 py-40">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Temukan Destinasi Wisata Terbaik Untukmu
          </h1>

          <p className="mt-6 text-lg text-black/90 max-w-xl">
            Get the best prices on all excursions and activities across World.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="/wisata"
              className="
                inline-block px-6 py-3 
                bg-cyan-700 text-white rounded-md shadow 
                transition-all duration-300
                hover:bg-cyan-800 hover:shadow-lg hover:scale-105
              "
            >
              Explore Now
            </a>

            
          </div>
        </div>
      </div>
    </section>
  );
}
