import { motion } from "motion/react";
import { LogOut } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand text-white p-1.5 rounded border-2 border-ink brutal-shadow-sm">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="font-display font-black text-xl tracking-tight">mauresign.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <a href="#" className="hover:text-brand transition-colors">Cari Loker</a>
          <a href="#" className="hover:text-brand transition-colors">Cara Kerja</a>
          <a href="#" className="hover:text-brand transition-colors">Testimoni</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block font-bold hover:text-brand transition-colors">
            Masuk
          </button>
          <button className="bg-brand text-white font-bold px-4 py-2 rounded-lg border-2 border-ink brutal-shadow-sm brutal-shadow-hover brutal-shadow-active transition-all">
            Spill Posisi
          </button>
        </div>
      </div>
    </nav>
  );
}
