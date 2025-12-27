import { Home, Heart, ShieldCheck, MessageCircle, Quote } from "lucide-react";
import BackSection from "@/components/common/BackSection";
import Pagination from "@/components/common/Pagination"; // Ensure correct path
import Link from "next/link";
import { AllTribute } from "@/serverAction";

export default async function TributesPage({ searchParams }) {
  // Next.js 15+ searchParams is a Promise
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const limit = 20;

  // Destructure tributes and totalPages from your server action
  const { tributes, totalPages } = await AllTribute(currentPage, limit);

  return (
    <div className="min-h-screen bg-[#050000] text-white selection:bg-red-600/40 pb-32 pt-32 px-6">
      <div className="max-w-[1400px] px-6 mx-auto">
        <BackSection
          links={[{ path: "/", text: "", icon: <Home size={15} /> }]}
          current={`Tributes`}
        />

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-12 h-px bg-red-600 hidden md:block"></span>
              Digital Memorial
            </h3>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none italic">
              শ্রদ্ধাঞ্জলি <br />
              <span className="text-zinc-800 not-italic">আর্কাইভ</span>
            </h2>
          </div>
          <Link
            href="/tributes/add"
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-red-700 hover:text-white transition-all duration-500 shadow-xl"
          >
            <MessageCircle size={14} /> শ্রদ্ধা নিবেদন করুন
          </Link>
        </div>

        {/* Timeline Layout */}
        <div className="relative mb-20">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-900 md:-translate-x-1/2 hidden sm:block"></div>

          {tributes && tributes.length > 0 ? (
            <div className="space-y-12">
              {tributes.map((tribute, index) => (
                <div
                  key={tribute._id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-0 md:left-1/2 top-12 w-3 h-3 rounded-full bg-red-700 border-4 border-[#050000] z-10 md:-translate-x-1/2 hidden sm:block"></div>

                  <div className="md:w-1/2">
                    <article className="group bg-zinc-950 border border-white/5 p-8 md:p-10 rounded-[2.5rem] hover:border-red-900/40 transition-all duration-700 shadow-2xl relative overflow-hidden">
                      <Quote
                        className="absolute right-6 top-6 text-zinc-900 group-hover:text-red-900/10 transition-colors duration-700"
                        size={80}
                      />
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h4 className="text-xl font-black text-white group-hover:text-red-500 transition-colors">
                              {tribute.name}
                            </h4>
                            <span className="text-[10px] font-black uppercase tracking-widest text-red-700 bg-red-950/20 px-2 py-0.5 rounded">
                              {tribute.relation}
                            </span>
                          </div>
                        </div>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed italic font-serif mb-8 italic">
                          &quot;{tribute.message}&quot;
                        </p>
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-zinc-600">
                            <ShieldCheck size={14} className="text-red-900" />
                            <span className="text-[10px] font-bold uppercase tracking-tighter">
                              Verified Legacy
                            </span>
                          </div>
                          <time className="text-[10px] font-bold text-zinc-700 uppercase">
                            {tribute.createDate?.date} |{" "}
                            {tribute.createDate?.formatedTime}
                          </time>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-dashed border-white/10 rounded-[3rem]">
              <Heart className="mx-auto text-zinc-800 mb-6" size={40} />
              <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs italic">
                এখনো কোনো শ্রদ্ধাঞ্জলি নেই।
              </p>
            </div>
          )}
        </div>

        {/* Numbered Pagination Component */}
        <div className="flex justify-center mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl="/tributes"
          />
        </div>
      </div>
    </div>
  );
}
