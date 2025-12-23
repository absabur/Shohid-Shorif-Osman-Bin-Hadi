"use client";
import React from "react";
import {
  User,
  Book,
  Target,
  Award,
  Calendar,
  MapPin,
  Heart,
  Shield,
  Zap,
  Quote,
  Flame,
  Star,
  ArrowRight,
  Crosshair,
  Globe,
  Users,
  History,
  GraduationCap,
  Briefcase,
  BookOpen,
  Mic2,
  HeartHandshake,
  Scale,
  LocationEdit,
} from "lucide-react";

/**
 * ENHANCED BIODATA - SHAHEED OSMAN HADI MEMORIAL
 * Professional, high-contrast, and detail-rich layout.
 */

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050000] text-white selection:bg-red-600/40 font-sans pb-32">
      {/* 1. CINEMATIC HERO HEADER */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-black/40 to-transparent z-10" />
          <img
            src="/static/header.webp"
            className="w-full h-full object-cover opacity-30 grayscale saturate-50"
            alt="Osman Hadi"
          />
          {/* Decorative Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-900/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-red-700/5 blur-[120px] rounded-full delay-700 animate-pulse" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="text-lg inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-black uppercase tracking-[0.3em] mb-8 animate-bounce">
            <Flame size={14} /> Shaheed Sharif Osman Bin Hadi
          </div>
          <h1 className="text-2xl md:text-6xl font-black tracking-tighter leading-[0.85] mb-6">
            THE VOICE OF <br />
            <span className="text-red-700 drop-shadow-[0_0_50px_rgba(185,28,28,0.5)]">
              INSAF
            </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-zinc-500 font-black text-[10px] md:text-xs uppercase tracking-widest mt-8">
            <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-red-700/20 transition-colors">
              Writer
            </span>
            <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-red-700/20 transition-colors">
              Lecturer
            </span>
            <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-red-700/20 transition-colors">
              Strategist
            </span>
            <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-red-700/20 transition-colors">
              Martyr
            </span>
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-6 -mt-32 relative z-30 space-y-32">
        {/* 2. CORE IDENTITY BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DetailCard
            icon={<Calendar />}
            label="জন্ম (Birth)"
            value="৩০ জুন, ১৯৯৩"
            sub="Nalchity, Jhalakathi"
          />
          <DetailCard
            icon={<History />}
            label="শাহাদাত (Martyrdom)"
            value="১৮ ডিসেম্বর, ২০২৫"
            sub="Singapore General Hospital"
          />
          <DetailCard
            icon={<MapPin />}
            label="জন্মস্থান (Birth Place)"
            value="নলছিটি, ঝালকাঠি, বাংলাদেশ"
            sub="Beside Kazi Nazrul Islam"
          />
          <DetailCard
            icon={<LocationEdit />}
            label="সমাধি (Tomb)"
            value="ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় মসজিদ প্রাঙ্গণ"
            sub="Youngest of 6 Siblings"
          />
        </div>

        {/* 3. PHILOSOPHICAL PILLARS - NEW DESIGN */}
        <section className="py-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-red-600 font-black uppercase tracking-[0.5em] text-xs">
              Philosophy
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              দার্শনিক ভিত্তি
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <PillarCard
              icon={<Scale />}
              title="Justice"
              desc="আল্লাহর জমিনে ইনসাফ কায়েম করাই ছিল তাঁর রাজনীতির মূল লক্ষ্য।"
            />
            <PillarCard
              icon={<Shield />}
              title="Sovereignty"
              desc="আধিপত্যবাদ বিরোধী লড়াইয়ে আপোষহীন অবস্থান ছিল তাঁর চরিত্রের ভূষণ।"
            />
            <PillarCard
              icon={<HeartHandshake />}
              title="Integrity"
              desc="ব্যক্তিগত জীবনে সততা ও নৈতিকতার এক অনন্য উদাহরণ ছিলেন তিনি।"
            />
          </div>
        </section>

        {/* 4. CHRONOLOGY OF A REVOLUTIONARY - TIMELINE DESIGN */}
        <section className="grid md:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32 space-y-8">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
              বিপ্লবীর <br /> <span className="text-red-600">পথচলা</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
              ঝালকাঠির নিভৃত গ্রাম থেকে শুরু হয়ে ঢাকা বিশ্ববিদ্যালয়ের রাজপথ,
              অতঃপর ইনকিলাব মঞ্চের মুখপাত্র হিসেবে এক অমর ইতিহাসের নাম ওসমান
              হাদী।
            </p>
            <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-white/5">
              <Quote className="text-red-700 mb-4 opacity-50" size={32} />
              <p className="italic text-zinc-300">"জান দেব, জুলাই দেব না।"</p>
            </div>
          </div>
          <div className="space-y-12 border-l border-red-900/30 pl-8 md:pl-16">
            <TimelineItem
              year="১৯৯৩"
              title="জন্ম ও শৈশব"
              desc="ঝালকাঠি জেলার নলছিটি উপজেলার এক সম্ভ্রান্ত মুসলিম পরিবারে জন্ম। বাবা ছিলেন বিশিষ্ট আলেম মাওলানা আব্দুল হাদী।"
            />
            <TimelineItem
              year="২০১০"
              title="মাদরাসা শিক্ষা"
              desc="ঝালকাঠি এন এস কামিল মাদরাসা থেকে কৃতিত্বের সাথে আলিম সম্পন্ন করে উচ্চশিক্ষার পথে যাত্রা।"
            />
            <TimelineItem
              year="২০১৫"
              title="ঢাবি জীবন"
              desc="ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগ থেকে স্নাতক ও স্নাতকোত্তর ডিগ্রি লাভ। সক্রিয় ছিলেন অধিকার আদায়ের আন্দোলনে।"
            />
            <TimelineItem
              year="২০২২"
              title="পেশাগত জীবন"
              desc="ইউনিভার্সিটি অফ স্কলারস-এর ব্যবসায় শিক্ষা বিভাগে প্রভাষক হিসেবে যোগদান এবং মেধার স্বাক্ষর রাখা।"
            />
            <TimelineItem
              year="২০২৪"
              title="জুলাই অভ্যুত্থান"
              desc="ইনকিলাব মঞ্চের মুখপাত্র হিসেবে রাজপথে নেতৃত্ব প্রদান এবং আধিপত্যবাদ বিরোধী আন্দোলনের রূপরেখা প্রণয়ন।"
            />
            <TimelineItem
              year="২০২৫"
              title="শাহাদাত"
              desc="বিজয়নগরে দুর্বৃত্তদের গুলিতে আহত হয়ে সিঙ্গাপুরে চিকিৎসাধীন অবস্থায় ১৮ ডিসেম্বর শাহাদাত বরণ।"
            />
          </div>
        </section>

        {/* 5. PROFESSIONAL MATRIX SECTION */}
        <section className="bg-zinc-950 border border-white/10 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-20 -right-20 opacity-5 rotate-12">
            <Briefcase size={500} />
          </div>
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <span className="text-red-600 font-black uppercase tracking-widest text-xs">
                Academic & Intellectual
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                শিক্ষকতা ও <br />
                তাত্ত্বিক শক্তি
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed">
                ওসমান হাদী বিশ্বাস করতেন জ্ঞান ছাড়া বিপ্লব অসম্পূর্ণ। প্রভাষক
                হিসেবে তিনি কেবল পাঠদান করতেন না, বরং ছাত্রদের নৈতিক ও রাজনৈতিক
                সচেতনতা তৈরিতে কাজ করতেন।
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <SkillBar
                icon={<BookOpen />}
                label="Political Strategy"
                level="95%"
              />
              <SkillBar icon={<Mic2 />} label="Public Speaking" level="90%" />
              <SkillBar icon={<Zap />} label="Crisis Leadership" level="98%" />
            </div>
          </div>
        </section>

        {/* 6. ENHANCED QUOTE SECTION */}
        <section className="py-20 text-center max-w-5xl mx-auto px-6 relative">
          <div className="absolute inset-0 bg-red-900/5 blur-[120px] rounded-full" />
          <Quote className="text-red-700 mx-auto mb-12 opacity-30" size={80} />
          <h2 className="text-2xl md:text-5xl font-serif italic leading-tight text-zinc-200 relative z-10">
            "আমি তো ছোটোবেলা থেকে স্বপ্ন দেখি-একটা তুমুল মিছিল হচ্ছে অন্যায়ের
            বিরুদ্ধে, সেই মিছিলের সামনে আমি আছি, কোনো একটা বুলেট এসে হয়তো আমার
            বুকটা বিদ্ধ করে দিয়েছে! এবং সেই মিছিলে হাসতে হাসতে আমি শহীদ হয়ে
            গেছি।"
          </h2>
          <div className="mt-12 flex items-center justify-center gap-6 relative z-10">
            <div className="h-px w-24 bg-red-700/50" />
            <p className="font-black text-red-600 tracking-[0.4em] uppercase text-xs">
              শেষ ভিডিও বার্তা থেকে
            </p>
            <div className="h-px w-24 bg-red-700/50" />
          </div>
        </section>

        {/* 7. FINAL RESTING PLACE MAP/INFO */}
        <section className="text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-500 font-black text-[10px] uppercase tracking-widest">
            <MapPin size={14} className="text-red-600" /> The Eternal Abode
          </div>
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter">
            নজরুলের পাশে <br />{" "}
            <span className="text-red-700">অমর এক বিপ্লবী</span>
          </h2>
          <p className="text-zinc-500 text-xl max-w-3xl mx-auto leading-relaxed">
            ২০ ডিসেম্বর ২০২৫, তাঁকে রাষ্ট্রীয় মর্যাদায় ঢাকা বিশ্ববিদ্যালয়
            কেন্দ্রীয় মসজিদের পাশে জাতীয় কবি কাজী নজরুল ইসলামের সমাধির ঠিক পাশেই
            সমাহিত করা হয়।
          </p>
          <div className="flex justify-center gap-6 pt-10">
            <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all shadow-3xl active:scale-95">
              Watch Documentary
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const DetailCard = ({ icon, label, value, sub }) => (
  <div className="bg-zinc-950 border border-white/10 p-10 rounded-[3rem] hover:border-red-700/50 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/5 blur-3xl" />
    <div className="text-red-600 mb-8 group-hover:scale-110 transition-transform duration-500">
      {React.cloneElement(icon, { size: 36 })}
    </div>
    <div className="space-y-2">
      <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">
        {label}
      </p>
      <p className="text-xl font-black text-zinc-100 leading-tight">{value}</p>
      <p className="text-[10px] text-red-700 font-bold uppercase tracking-wider opacity-60">
        {sub}
      </p>
    </div>
  </div>
);

const TimelineItem = ({ year, title, desc }) => (
  <div className="relative group pb-12">
    <div className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 bg-red-700 rounded-full border-4 border-[#050000] z-10 group-hover:scale-150 transition-transform" />
    <span className="text-red-600 font-black text-2xl tracking-tighter block mb-2">
      {year}
    </span>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-zinc-500 leading-relaxed text-sm md:text-base">{desc}</p>
  </div>
);

const PillarCard = ({ icon, title, desc }) => (
  <div className="bg-zinc-950 p-12 border border-white/5 hover:bg-zinc-900 transition-colors text-center group">
    <div className="text-red-600 mb-6 flex justify-center group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 40 })}
    </div>
    <h3 className="text-xl font-black uppercase mb-4 tracking-widest">
      {title}
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const SkillBar = ({ icon, label, level }) => (
  <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3">
        <span className="text-red-600">{icon}</span>
        <span className="font-black text-[10px] uppercase tracking-widest">
          {label}
        </span>
      </div>
      <span className="text-[10px] font-black text-zinc-500">{level}</span>
    </div>
    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
      <div
        className="h-full bg-red-700 rounded-full"
        style={{ width: level }}
      />
    </div>
  </div>
);

export default AboutPage;
