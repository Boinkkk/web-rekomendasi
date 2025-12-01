export default function TopDestinations() {
  const destinations = [
    { title: "Gunung Bromo", img: "/bromo.jpg" },
    { title: "Kota Tua Jakarta", img: "/kotatua.jpg" },
    { title: "Suroboyo Park", img: "/suroboyopark.jpg" },
  ];

  return (
    <section id="destinations" className="py-12 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl font-bold text-center">Top Destinations</h2>

        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className={`relative w-full rounded-lg overflow-hidden shadow-lg transform ${
                  idx === 1 ? "scale-105 z-10" : ""
                }`}
              >
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-56 object-cover"
                />

                {/* ⭐ TITLE DI ATAS KIRI */}
                <div className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow">
                  {dest.title}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
