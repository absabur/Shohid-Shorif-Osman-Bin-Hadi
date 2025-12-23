"use client";

import React, { useState } from "react";
import { talkshow } from "../../../public/videos/talkshow";
import { interview } from "../../../public/videos/talk";
import { rajpoth } from "../../../public/videos/rajpothe";
import { lecture } from "../../../public/videos/lectures";
import { kobita } from "../../../public/videos/kobita";
import { discussion } from "../../../public/videos/discussion";
import { biography } from "../../../public/videos/biography";
import { getYouTubeID } from "@/utils/ytId";
import { Play } from "lucide-react";
import Link from "next/link";

const page = () => {
  const [activeTab, setActiveTab] = useState("All");
  // Data for Video Categories
  const videoCategories = [
    {
      id: "All",
      label: "সবগুলো (All)",
      videos: [
        ...talkshow,
        ...interview,
        ...rajpoth,
        ...lecture,
        ...kobita,
        ...discussion,
        ...biography,
      ],
    },
    { id: "Speeches", label: "বক্তৃতা (Speeches)", videos: [] },
    { id: "Protests", label: "আন্দোলন (Protests)", videos: rajpoth },
    { id: "Interviews", label: "সাক্ষাৎকার (Interviews)", videos: interview },
    { id: "Poetry", label: "কবিতা আবৃত্তি (Poetry)", videos: kobita },
    { id: "TalkShow", label: "টক শো (Talk Show)", videos: talkshow },
    {
      id: "PressConference",
      label: "সংবাদ সম্মেলন (Press conference)",
      videos: [],
    },
  ];

  const filteredVideos = videoCategories.filter((v) => v.id === activeTab)[0]
    .videos;
  return (
    <section id="vault" className="py-32 bg-[#050000]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col justify-between items-end gap-10 mb-16">
          <div className="space-y-4 w-full">
            <h3 className="text-red-600 font-black uppercase flex items-center gap-2">
              <Play size={16} fill="currentColor" /> Cinematic Vault
            </h3>
            <h2 className="text-xl md:text-3xl font-black">
              ভিডিও আর্কাইভ (YouTube Collection)
            </h2>
            <p className="text-zinc-500 max-w-xl text-lg">
              ওসমান হাদীর আন্দোলন, বক্তব্য এবং ব্যক্তিগত জীবনের দুর্লভ ভিডিও
              ক্লিপগুলোর বিশাল সংগ্রহ।
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-zinc-950 p-2 rounded-2xl border border-white/10">
            {videoCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`cursor-pointer px-6 border border-red-700/20 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-widest ${
                  activeTab === cat.id
                    ? "bg-red-700 text-white shadow-lg"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <Link
              key={video.yt_source_url}
              href={`/${encodeURIComponent(video?.source_title)}`}
              className="group relative bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${getYouTubeID(
                    video.yt_source_url
                  )}/hqdefault.jpg`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  alt={video.source_title}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-all">
                    <Play fill="white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">
                  {video.duration}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">
                    {video.category}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase">
                    {video.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-red-500 transition-colors">
                  {video.source_title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
