import { motion } from "motion/react";
import { Briefcase, LogOut, ArrowRight, ThumbsUp, ThumbsDown, Clock, DollarSign, Building } from "lucide-react";

export function SamplePost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white border-2 border-ink rounded-xl p-6 brutal-shadow w-full max-w-md mx-auto relative group"
    >
      <div className="absolute -top-4 -right-4 bg-brand text-white font-mono text-xs font-bold px-3 py-1 border-2 border-ink rounded-full brutal-shadow-sm transform rotate-6">
        RESIGN IN 30 DAYS
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-ink overflow-hidden flex items-center justify-center">
          <img src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg leading-tight">Budak Korporat #124</h3>
          <p className="text-sm text-gray-500 font-mono">Anonymous Poster</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Posisi & Perusahaan</h4>
          <div className="flex items-start gap-2">
            <Briefcase className="w-5 h-5 text-brand mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-lg">Senior Frontend Developer</p>
              <p className="text-gray-600 flex items-center gap-1 text-sm">
                <Building className="w-4 h-4" /> Startup Unicorn (Inisial T)
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1 flex items-center gap-1">
              <DollarSign className="w-3 h-3" /> Gaji
            </p>
            <p className="font-mono font-semibold text-sm">Rp 15-20 Jt</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1 flex items-center gap-1">
              <Clock className="w-3 h-3" /> Masa Kerja
            </p>
            <p className="font-mono font-semibold text-sm">2 Thn 3 Bln</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Review Jujur</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 bg-green-50 p-2 rounded border border-green-200">
              <ThumbsUp className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
              <p className="text-green-800">WFA bebas, dapet Macbook Pro M3, asuransi cover ortu 100%.</p>
            </div>
            <div className="flex items-start gap-2 bg-red-50 p-2 rounded border border-red-200">
              <ThumbsDown className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <p className="text-red-800">Kerja rodi, weekend sering diganggu, bos micromanage parah.</p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-ink text-white font-bold py-3 rounded-lg border-2 border-ink flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
        Apply Posisi Ini <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
