import { LogOut } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white py-16 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-brand text-white p-1.5 rounded border-2 border-white">
              <LogOut className="w-6 h-6" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight">mauresign.</span>
          </div>
          <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
            Platform pertama untuk kamu yang mau resign dan kamu yang butuh kerja. Spill gaji, plus-minus, dan kasih rekomendasi langsung ke HRD.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-display">Pencari Kerja</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="#" className="hover:text-brand transition-colors">Cari Loker Resign</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Cara Minta Rekomendasi</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Tips Interview</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-display">Mau Resign</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="#" className="hover:text-brand transition-colors">Spill Posisi Kamu</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Cara Resign Elegan</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Template Surat Resign</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} mauresign. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
