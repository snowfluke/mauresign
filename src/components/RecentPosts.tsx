import { motion } from "motion/react";
import { Briefcase, Building, DollarSign, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    role: "Product Manager",
    company: "E-commerce Hijau",
    salary: "Rp 25-30 Jt",
    tenure: "3 Tahun",
    status: "Resign in 14 days",
    avatar: "user10"
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Fintech Biru",
    salary: "Rp 12-18 Jt",
    tenure: "1.5 Tahun",
    status: "Resign in 45 days",
    avatar: "user11"
  },
  {
    id: 3,
    role: "Digital Marketing",
    company: "Agency Jaksel",
    salary: "Rp 8-12 Jt",
    tenure: "8 Bulan",
    status: "Resign in 7 days",
    avatar: "user12"
  },
  {
    id: 4,
    role: "Data Analyst",
    company: "Startup Edukasi",
    salary: "Rp 15-22 Jt",
    tenure: "2 Tahun",
    status: "Resign in 30 days",
    avatar: "user13"
  },
  {
    id: 5,
    role: "Backend Engineer",
    company: "Tech Giant",
    salary: "Rp 35-45 Jt",
    tenure: "4 Tahun",
    status: "Resign in 60 days",
    avatar: "user14"
  },
  {
    id: 6,
    role: "Social Media Specialist",
    company: "F&B Brand",
    salary: "Rp 6-9 Jt",
    tenure: "1 Tahun",
    status: "Resign in 21 days",
    avatar: "user15"
  }
];

export function RecentPosts() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Hot Resign Posts 🔥</h2>
          <p className="text-xl text-gray-600 font-medium">Posisi-posisi yang bakal segera kosong. Buruan sikat!</p>
        </div>
        <button className="bg-white text-ink font-bold px-6 py-3 rounded-lg border-2 border-ink brutal-shadow-sm brutal-shadow-hover brutal-shadow-active transition-all flex items-center gap-2">
          Lihat Semua <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl border-2 border-ink brutal-shadow-sm hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0A0A0A] transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src={`https://picsum.photos/seed/${post.avatar}/100/100`} 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-ink"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-sm">Anonim</p>
                  <p className="text-xs text-gray-500 font-mono">{post.status}</p>
                </div>
              </div>
              <span className="bg-brand/10 text-brand text-xs font-bold px-2 py-1 rounded border border-brand/20">
                HOT
              </span>
            </div>

            <h3 className="font-display font-bold text-xl mb-1 group-hover:text-brand transition-colors">{post.role}</h3>
            <p className="text-gray-600 flex items-center gap-1 text-sm mb-4">
              <Building className="w-4 h-4" /> {post.company}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-50 p-2 rounded border border-gray-200">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1 flex items-center gap-1">
                  <DollarSign className="w-3 h-3" /> Gaji
                </p>
                <p className="font-mono font-semibold text-xs">{post.salary}</p>
              </div>
              <div className="bg-gray-50 p-2 rounded border border-gray-200">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Masa Kerja
                </p>
                <p className="font-mono font-semibold text-xs">{post.tenure}</p>
              </div>
            </div>

            <button className="w-full bg-gray-100 text-ink font-bold py-2 rounded border-2 border-transparent group-hover:bg-brand group-hover:text-white group-hover:border-ink transition-all flex items-center justify-center gap-2 text-sm">
              Lihat Detail <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
