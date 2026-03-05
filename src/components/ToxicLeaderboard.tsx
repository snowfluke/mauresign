import { motion } from "motion/react";
import { AlertTriangle, TrendingUp, Skull, Ghost } from "lucide-react";

const toxicCompanies = [
  { rank: 1, name: "PT. Palugada Nusantara (Agency)", score: 98, resignCount: 142, icon: <Skull className="w-5 h-5 text-red-500" /> },
  { rank: 2, name: "Startup EduTech 'M'", score: 94, resignCount: 89, icon: <Ghost className="w-5 h-5 text-purple-500" /> },
  { rank: 3, name: "Corporate Bank Biru", score: 87, resignCount: 76, icon: <AlertTriangle className="w-5 h-5 text-orange-500" /> },
  { rank: 4, name: "F&B Kekinian Group", score: 82, resignCount: 65, icon: <TrendingUp className="w-5 h-5 text-yellow-500" /> },
];

export function ToxicLeaderboard() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-ink">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-4 border border-red-200">
              🚨 Peringatan Dini
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Toxic <br/>Leaderboard.</h2>
            <p className="text-xl text-gray-600 font-medium mb-8">
              Data real-time perusahaan dengan tingkat resign tertinggi bulan ini. Hindari sebelum terlambat, atau jadikan tantangan kalau kamu wibu corporate.
            </p>
            <div className="bg-ink text-white p-6 rounded-xl brutal-shadow-sm border-2 border-transparent">
              <p className="font-mono text-sm leading-relaxed">
                "Score dihitung berdasarkan rasio resign, frekuensi lembur tak dibayar, dan jumlah micromanagement yang dilaporkan."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="md:w-2/3 w-full">
          <div className="flex flex-col gap-4">
            {toxicCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl border-2 border-ink brutal-shadow-sm flex items-center justify-between hover:-translate-y-1 transition-transform group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 border-ink brutal-shadow-sm font-black text-xl font-display ${company.rank === 1 ? 'bg-red-400 text-white' : company.rank === 2 ? 'bg-orange-300' : company.rank === 3 ? 'bg-yellow-300' : 'bg-gray-200'}`}>
                    #{company.rank}
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-lg group-hover:text-red-600 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono flex items-center gap-2">
                      {company.icon} {company.resignCount} Korban Jiwa
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-black font-mono text-ink">
                    {company.score}
                  </span>
                  <span className="text-xs uppercase font-bold text-gray-500">Toxic Score</span>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="w-full mt-6 bg-transparent text-ink font-bold py-4 rounded-xl border-2 border-ink border-dashed hover:bg-gray-50 hover:border-solid transition-all flex items-center justify-center gap-2">
            Lihat Full Leaderboard (100+ Perusahaan)
          </button>
        </div>
      </div>
    </section>
  );
}
