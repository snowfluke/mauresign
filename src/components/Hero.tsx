import { motion } from "motion/react";
import { SamplePost } from "./SamplePost";
import { ArrowRight, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-brand rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="flex-1 space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand font-bold text-sm mb-4 border border-brand/20">
            🔥 Platform Anti-Ghosting HRD
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight">
            Jangan resign <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
              diam-diam.
            </span><br />
            Wariskan posisimu.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-600 max-w-xl font-medium"
        >
          Platform pertama untuk kamu yang mau resign dan kamu yang butuh kerja. Spill gaji, plus-minus, dan kasih rekomendasi langsung ke HRD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <button className="bg-ink text-white font-bold px-8 py-4 rounded-xl border-2 border-ink brutal-shadow brutal-shadow-hover brutal-shadow-active transition-all flex items-center justify-center gap-2 text-lg">
            <Search className="w-5 h-5" /> Cari Loker Resign
          </button>
          <button className="bg-white text-ink font-bold px-8 py-4 rounded-xl border-2 border-ink brutal-shadow brutal-shadow-hover brutal-shadow-active transition-all flex items-center justify-center gap-2 text-lg">
            Spill Posisi Kamu <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 pt-8 text-sm font-mono text-gray-500"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                src={`https://picsum.photos/seed/user${i}/100/100`}
                alt="User"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <p>Bergabung dengan <span className="font-bold text-ink">10,000+</span> budak korporat lainnya.</p>
        </motion.div>
      </div>

      <div className="flex-1 w-full z-10 perspective-1000">
        <SamplePost />
      </div>
    </section>
  );
}
