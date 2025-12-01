import { Map, Search, Navigation } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Rekomendasi Wisata",
      desc: "Temukan destinasi terbaik sesuai minat dan preferensimu.",
      icon: <Map size={48} className="text-[#007595]" />,
    },
    {
      title: "Pencarian Lokasi",
      desc: "Cari tempat wisata berdasarkan kota, kategori, dan jarak terdekat.",
      icon: <Search size={48} className="text-[#007595]" />,
    },
    {
      title: "Map Interaktif",
      desc: "Jelajahi peta wisata dengan tampilan visual yang mudah dipahami.",
      icon: <Navigation size={48} className="text-[#007595]" />,
    },
  ];

  return (
    <section className="container mx-auto px-8 py-20">
      <div className="grid md:grid-cols-3 gap-16 text-center">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col items-center">
            
            {/* ICON */}
            <div className="mb-4 bg-[#007595]/10 p-4 rounded-full">
              {s.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-slate-900">
              {s.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm text-slate-600 max-w-[260px]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
