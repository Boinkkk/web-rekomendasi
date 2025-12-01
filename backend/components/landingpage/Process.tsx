import { useEffect, useState } from "react";

export default function Process() {

  const [MapComponent, setMapComponent] = useState<React.FC | null>(null);
  
    useEffect(() => {
      // Import hanya terjadi di browser, bukan saat initial render
      import("../../components/Maps").then((module) => {
        setMapComponent(() => module.default);
      });
    }, []);
  
    if (!MapComponent) return <p>Loading map...</p>;
    
  return (
    
    <section className="container mx-auto px-6 md:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#007595] leading-tight mb-4">
          Rekomendasi Tempat Wisata
        </h2>
        <p className="text-gray-600 mb-8">
          Kami membantu menemukan tempat wisata terbaik sesuai minat dan pengalaman Anda. Pilih suasana, aktivitas, atau lokasi — kami yang sesuaikan.
        </p>

        {/* Single clean image, no cards */}
        <div className="mx-auto mb-8 max-h-[400px] w-full max-w-2xl rounded-2xl overflow-hidden shadow-sm">
          {MapComponent ? <MapComponent /> : <p>Loading map...</p>}
        </div>

        {/* Simple inline features (no boxes) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-left md:text-center">
          <div className="md:w-1/3">
            <p className="font-semibold text-[#007595]">Akurat & Personal</p>
            <p className="text-sm text-gray-600">Rekomendasi sesuai preferensi Anda.</p>
          </div>
          <div className="md:w-1/3">
            <p className="font-semibold text-[#007595]">Data Terbaru</p>
            <p className="text-sm text-gray-600">Informasi destinasi yang selalu diperbarui.</p>
          </div>
          <div className="md:w-1/3">
            <p className="font-semibold text-[#007595]">Ringan & Intuitif</p>
            <p className="text-sm text-gray-600">Tampilan bersih tanpa banyak kotak atau card.</p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
