import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 w-full">

      {/* ===== TOP CONTACT BAR ===== */}
      <div className="w-full bg-[#E9F5F6] py-3 border-b border-[#c7e7ea]">
        <div className="container mx-auto px-8 flex justify-center md:justify-between items-center text-sm text-slate-700 flex-wrap gap-4">
          
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-[#007595]" />
            <span>Telepon (Whatsapp)085755357484</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[#007595]" />
            <span>Jawa01@gmail.com</span>
          </div>

        </div>
      </div>

      {/* ===== MAIN FOOTER WITH GRADIENT ===== */}
      <div
        className="
          w-full 
          py-16 text-white 
          bg-gradient-to-r 
          from-[#0092B8] 
          to-[#005F73]
        "
      >
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* LEFT SECTION */}
          <div>
            <h2 className="text-4xl font-extrabold">Jawa</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Temukan tempat wisata terbaik dan pengalaman tak terlupakan bersama Jawa.
            </p>

            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 bg-white/20 hover:bg-white/30 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/20 hover:bg-white/30 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/20 hover:bg-white/30 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/20 hover:bg-white/30 rounded-full">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* CENTER MENU */}
          <div className="flex justify-start md:justify-center">
            <ul className="space-y-2 text-sm">
              <li className="font-semibold text-lg mb-2">Menu</li>
              <li>Home</li>
              <li>Wisata</li>
              <li>Gallery</li>
              <li>Kontak</li>
            </ul>
          </div>

          {/* RIGHT - NEWSLETTER */}
          <div>
            <h3 className="font-semibold text-lg">Subscribe to our Newsletter</h3>
            <p className="text-sm mt-2 mb-4"></p>
            <div className="flex w-full max-w-sm bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Input your email here"
                className="flex-1 px-3 py-2 text-black outline-none"
              />
              <button className="px-4 bg-[#007595] hover:bg-[#005c6c] transition">
                <span className="text-white text-lg">➤</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      

    </footer>
  );
}
