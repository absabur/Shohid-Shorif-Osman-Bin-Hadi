import React from "react";
import {
  Youtube,
  Facebook,
  HardDrive,
  Shield,
  ExternalLink,
  Download,
  Home,
} from "lucide-react";
import { getYouTubeID } from "@/utils/ytId";
import Link from "next/link";
import { videoCategories } from "@/app/videos/page";
import BackSection from "../common/BackSection";
import { formatDuration, formatUploadDate } from "../VideosPage";

const VideoPlayerPage = async ({ params, searchParams }) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const videoTitle = decodeURIComponent(resolvedParams?.video);

  const allVideos =
    videoCategories.find((item) => item.id == "All")?.videos || [];
  const video = allVideos.find((item) => item.source_title === videoTitle);

  if (!video) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white p-6 text-center">
        <h1 className="text-xl font-black uppercase tracking-widest">
          Video not found
        </h1>
      </div>
    );
  }

  const sources = [
    {
      id: "youtube_original",
      label: "YouTube",
      icon: <Youtube size={14} />,
      url: video.yt_source_url,
    },
    {
      id: "facebook_orginal",
      label: "Facebook",
      icon: <Facebook size={14} />,
      url: video.fb_url,
    },
    {
      id: "drive",
      label: "GDrive",
      icon: <HardDrive size={14} />,
      url: video.drive_url,
    },
    {
      id: "youtube_personal",
      label: "Backup",
      icon: <Shield size={14} />,
      url: video.yt_personal_url,
    },
  ];

  const activeSource =
    resolvedSearchParams?.source || sources.find((item) => item.url != "")?.id;

  const getEmbedUrl = (sourceId) => {
    switch (sourceId) {
      case "youtube_original":
        return `https://www.youtube.com/embed/${getYouTubeID(
          video?.yt_source_url
        )}?rel=0&autoplay=1`;
      case "youtube_personal":
        return `https://www.youtube.com/embed/${getYouTubeID(
          video?.yt_personal_url
        )}?rel=0&autoplay=1`;
      case "facebook_orginal":
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          video?.fb_url
        )}&show_text=0&autoplay=true`;
      case "drive":
        if (!video?.drive_url) return "";
        const driveId = video.drive_url.match(/[-\w]{25,}/);
        return driveId
          ? `https://drive.google.com/file/d/${driveId[0]}/preview`
          : video.drive_url;
      default:
        return "";
    }
  };

  const isFacebook = activeSource === "facebook_orginal";
  const isDrive = activeSource === "drive";

  return (
    <div className="min-h-screen bg-[#050000] text-white selection:bg-red-600/40 font-sans">
      <main className="pt-24 md:pt-28 pb-20 px-6 max-w-[1400px] mx-auto">
        <BackSection
          links={[
            { path: "/", text: "", icon: <Home size={15} /> },
            { path: "/videos", text: "Videos" },
          ]}
          current={videoTitle}
        />
        <div className="flex flex-col gap-6 md:gap-8">
          {/* SOURCE SWITCHER */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
              {sources.map((src) => {
                if (!src.url) return null;
                const isActive = activeSource === src.id;
                return (
                  <Link
                    key={src.id}
                    scroll={false}
                    href={`?source=${src.id}`}
                    className={`flex items-center justify-center gap-2 md:gap-3 p-3 md:p-5 rounded-xl md:rounded-3xl border transition-all text-[9px] md:text-[10px] font-black uppercase tracking-widest ${
                      isActive
                        ? "bg-red-700 border-red-600 text-white shadow-xl shadow-red-700/20"
                        : "bg-zinc-950 border-white/5 text-zinc-500 hover:border-red-900/50 hover:text-zinc-300"
                    }`}
                  >
                    {src.icon} <span className="truncate">{src.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 px-2">
              <h3 className="text-zinc-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                <ExternalLink size={12} className="text-red-600" />
                ভিডিও না চললে অন্য সোর্স ট্রাই করুন
              </h3>
              {isFacebook && (
                <Link
                  target="_blank"
                  href={video.fb_url}
                  className="inline-block"
                >
                  <div className="flex items-center gap-2 bg-red-900/10 border border-red-900/30 px-3 py-1 rounded-full hover:bg-red-900/20 transition-all">
                    <span className="text-[8px] md:text-[9px] font-black uppercase text-red-500">
                      Open in FB App
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* VIDEO PLAYER CONTAINER */}
          <div className="space-y-6">
            <div className="relative w-full bg-black rounded-xl md:rounded-2xl border border-white/5 shadow-2xl overflow-hidden aspect-video group">
              {isDrive && (
                <GetDriveDownloadLink driveUrl={getEmbedUrl(activeSource)} />
              )}

              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src={getEmbedUrl(activeSource)}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* INFO CARD */}
            <div className="bg-zinc-950/50 border border-white/5 rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center flex-wrap space-x-3">
                  <div className="w-1 h-6 bg-red-700 rounded-full" />
                  <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">
                    {video.category}
                  </span>

                  <div className="ml-auto">
                    <span className="py-1 flex items-center text-zinc-300 rounded-lg text-[10px] font-black tracking-widest uppercase">
                      {formatDuration(video.fetched_metadata.duration)}
                    </span>
                    <span className="text-sm text-zinc-500 font-bold uppercase">
                      {formatUploadDate(video.fetched_metadata.upload_date)}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl md:text-3xl font-black leading-tight tracking-tighter text-zinc-100">
                  {video.source_title}
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-2" />
                <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed">
                  শহীদ শরীফ ওসমান বিন হাদি আর্কাইভ। এই ভিডিওটি ইনসাফ কায়েমের
                  লড়াইয়ের একটি দলিল।
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayerPage;

const GetDriveDownloadLink = ({ driveUrl }) => {
  const regex = /\/d\/([^/]+)/;
  const match = driveUrl.match(regex);
  const fileId = match && match[1] ? match[1] : null;
  const downloadUrl = fileId
    ? `https://drive.google.com/uc?export=download&id=${fileId}`
    : driveUrl;

  return (
    <Link
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute right-4 top-4 z-40 p-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-red-700 hover:border-red-500 transition-all shadow-lg"
      title="Download Video"
    >
      <Download size={18} />
    </Link>
  );
};
