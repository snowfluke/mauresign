import { motion } from "motion/react";
import { UserMinus, UserPlus, Handshake, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <UserMinus className="w-8 h-8 text-brand" />,
    title: "Buat Kamu Yang Mau Resign",
    description: "Spill gaji, plus-minus kerjaan, dan kasih rekomendasi langsung ke HRD. Biar resign makin tenang.",
    bg: "bg-orange-50"
  },
  {
    icon: <UserPlus className="w-8 h-8 text-blue-600" />,
    title: "Buat Kamu Pencari Kerja",
    description: "Dapat info lowongan eksklusif sebelum di-post di portal loker biasa. Langsung dari orang dalamnya.",
    bg: "bg-blue-50"
  },
  {
    icon: <Handshake className="w-8 h-8 text-green-600" />,
    title: "Rekomendasi Langsung",
    description: "Bisa minta rekomendasi langsung dari orang yang mau resign. HRD lebih percaya rekomendasi internal.",
    bg: "bg-green-50"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    title: "100% Anonim & Aman",
    description: "Identitas kamu aman. Spill gaji dan review jujur tanpa takut ketahuan bos atau HRD.",
    bg: "bg-purple-50"
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y-2 border-ink">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Kenapa pakai mauresign?</h2>
        <p className="text-xl text-gray-600 font-medium">Karena portal loker biasa cuma ngasih tau yang manis-manis aja.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-8 rounded-2xl border-2 border-ink brutal-shadow-sm ${feature.bg} hover:-translate-y-2 transition-transform duration-300`}
          >
            <div className="bg-white w-16 h-16 rounded-xl border-2 border-ink flex items-center justify-center mb-6 brutal-shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
            <p className="text-gray-700 font-medium leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
