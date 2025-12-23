"use client";
import React, { useState } from "react";
import {
  Youtube,
  Facebook,
  HardDrive,
  Shield,
  Download,
  FileText,
  ChevronRight,
  Info,
  ExternalLink,
  Calendar,
  Clock,
  Share2,
  Play,
} from "lucide-react";
import { getYouTubeID } from "@/utils/ytId";
import { useParams } from "next/navigation";

import { talkshow } from "../../../public/videos/talkshow";
import { interview } from "../../../public/videos/talk";
import { rajpoth } from "../../../public/videos/rajpothe";
import { lecture } from "../../../public/videos/lectures";
import { kobita } from "../../../public/videos/kobita";
import { discussion } from "../../../public/videos/discussion";
import { biography } from "../../../public/videos/biography";

const VideoPlayerPage = () => {
  const params = useParams();
  const [activeSource, setActiveSource] = useState("youtube_original");

  // Data finding logic
  const allVideos = [
    ...talkshow,
    ...interview,
    ...rajpoth,
    ...lecture,
    ...kobita,
    ...discussion,
    ...biography,
  ];
  const video = allVideos.find(
    (item) => item.source_title === decodeURIComponent(params.video)
  );

  if (!video)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        Video not found
      </div>
    );

  const getEmbedUrl = (sourceId) => {
    switch (sourceId) {
      case "youtube_original":
        return `https://www.youtube.com/embed/${getYouTubeID(
          video?.yt_source_url
        )}?rel=0`;

      case "youtube_personal":
        return `https://www.youtube.com/embed/${getYouTubeID(
          video?.yt_personal_url
        )}?rel=0`;

      case "facebook_orginal":
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          video?.fb_url
        )}&show_text=0&width=900&height=600`;

      case "drive":
        if (!video?.drive_url) return "";

        // Clean the URL to ensure it is a /preview link
        const driveId = video.drive_url.match(/[-\w]{25,}/); // Extracts the ID safely
        if (driveId) {
          return `https://drive.google.com/file/d/${driveId[0]}/preview`;
        }
        return video.drive_url;

      default:
        return "";
    }
  };

  const sources = [
    {
      id: "youtube_original",
      label: "YouTube (Source)",
      icon: <Youtube size={16} />,
      url: video.yt_source_url,
    },
    {
      id: "facebook_orginal",
      label: "Facebook (Source)",
      icon: <Facebook size={16} />,
      url: video.fb_url,
    },
    {
      id: "drive",
      label: "Google Drive",
      icon: <HardDrive size={16} />,
      url: video.drive_url,
    },
    {
      id: "youtube_personal",
      label: "Youtube (Backup)",
      icon: <Shield size={16} />,
      url: video.yt_personal_url,
    },
  ];
  const isFacebook = activeSource === "facebook_orginal";

  return (
    <div className="min-h-screen bg-[#050000] text-white selection:bg-red-600/40 font-sans">
      <main className="pt-28 pb-20 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-3">
          {/* LEFT: PLAYER & SOURCES */}
          <div className="space-y-8">
            {/* TAB SYSTEM (SOURCE SWITCHER) */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sources.map((src) => {
                  if (src.url) {
                    return (
                      <button
                        key={src.id}
                        onClick={() => setActiveSource(src.id)}
                        className={`cursor-pointer flex items-center justify-center gap-3 p-5 rounded-3xl border transition-all text-[10px] font-black uppercase tracking-widest ${
                          activeSource === src.id
                            ? "bg-red-700 border-red-600 text-white shadow-xl shadow-red-700/20 scale-[1.02]"
                            : "bg-zinc-950 border-white/5 text-zinc-500 hover:border-red-900/50 hover:text-zinc-300"
                        }`}
                      >
                        {src.icon} {src.label}
                      </button>
                    );
                  }
                })}
              </div>
              <h3 className="text-zinc-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 px-2">
                <ExternalLink size={12} /> Select Available Stream Source
              </h3>
            </div>
            <div
              className={`relative bg-black rounded-lg border border-red-700/20 shadow-2xl shadow-red-900/5 ${
                isFacebook ? "overflow-visible" : "overflow-hidden aspect-video"
              }`}
            >
              {/* UNIVERSAL IFRAME PLAYER */}
              {isFacebook ? (
                <div className="w-full flex justify-center">
                  <iframe
                    src={getEmbedUrl(activeSource)}
                    width="900"
                    height="600"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <iframe
                  src={getEmbedUrl(activeSource)}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* RIGHT: METADATA SECTION (Kept same as your design) */}
          <div className="space-y-6">
            <div className="bg-zinc-950 border border-red-700/20 rounded-lg p-8 md:p-10 flex flex-col h-full shadow-2xl">
              <div className="space-y-6 flex-1">
                <span className="inline-block px-4 py-1 rounded-full bg-red-900/20 border border-red-900/30 text-red-500 text-[10px] font-black uppercase tracking-widest mb-4">
                  {video.category}
                </span>
                <h2 className="text-xl md:text-2xl font-black leading-tight tracking-tighter">
                  {video.source_title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayerPage;
