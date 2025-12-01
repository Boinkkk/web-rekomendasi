import { User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-6">
        <div className="text-4xl font-extrabold text-[#007595]">Jawa</div>

        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="/landing" className="hover:text-slate-900">Home</a>
          <a href="/wisata" className="hover:text-slate-900">Wisata</a>
          <a href="/galery" className="hover:text-slate-900">Gallery</a>
          <a href="/kontak" className="hover:text-slate-900">Kontak</a>
        </nav>
      </div>

      {/* BUTTON LOGIN (Lucide icon + text) */}
      <a
        href="/login"
        className="
          flex items-center gap-2
          px-4 py-2 rounded-md
          bg-[#007595] text-white
          hover:bg-[#00607a]
          transition
        "
      >
        <User size={18} />
        <span>Masuk</span>
      </a>
    </header>
  );
}
