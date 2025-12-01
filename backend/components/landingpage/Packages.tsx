// Packages.tsx

type PackageItem = {
  id: number;
  title: string;
  price: string;
  rating: number;
  img: string;
  featured?: boolean;
  desc?: string;
};

export default function Packages() {
  // NOTE:
  // - If you move images into public/, use "/bromo.jpg" etc.
  // - One image references the uploaded file path (will be transformed to a served URL by your environment):
  //   "/mnt/data/Homepage.jpg"
  const packages: PackageItem[] = [
    {
      id: 1,
      title: "Gunung Bromo Sunrise",
      price: "120.000",
      rating: 4.9,
      img: "/bromo.jpg",
      desc: "Experience the magical sunrise over the volcanic sea.",
    },
    {
      id: 2,
      title: "Kota Tua Heritage Walk",
      price: "45.000",
      rating: 4.6,
      img: "/kotatua.jpg",
      desc: "A guided walk through the historic heart of Jakarta.",
    },
    {
      id: 3,
      title: "Suroboyo Park Family Day",
      price: "30.000",
      rating: 4.7,
      img: "/suroboyopark.jpg",
      desc: "Fun family activities and green spaces in Surabaya.",
    },
    {
      id: 4,
      title: "Featured: Island Escape",
      price: "200.00",
      rating: 5.0,
      img: "/home.jpeg", // uploaded image path (environment will serve/transform this)
      desc: "A premium island getaway with private beach access.",
    },
  ];

  return (
    <section id="packages" className="container mx-auto px-8 py-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Our Packages</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />

              

              <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-sm">
                ★ {p.rating}
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-sm text-slate-500 mt-2">{p.desc}</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-slate-500 text-sm">Price (per day)</div>
                  <div className="font-bold text-lg">Rp {p.price}</div>
                </div>

                <a
                  href={`/wisata/${p.id}`}
                  className="px-3 py-2 bg-[#0092B8] text-white rounded shadow hover:bg-[#007b95] transition"
                  aria-label={`Detail ${p.title}`}
                >
                  Detail
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
