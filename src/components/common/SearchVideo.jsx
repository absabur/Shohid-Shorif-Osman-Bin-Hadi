"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition, useEffect, useState } from "react";

export default function SearchField() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();

  // ১. সার্চের জন্য লোকাল স্টেট
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  // ২. ইউআরএল আপডেট করার কমন ফাংশন
  function updateURL(key, value) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // প্রতিবার ফিল্টারে পেজ ১ এ রিসেট হবে

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  // ৩. শুধুমাত্র সার্চের জন্য useEffect ডিবounce লজিক
  useEffect(() => {
    // যদি ইনপুট ভ্যালু আর ইউআরএল প্যারামিটার ভিন্ন হয়, তবেই আপডেট করবে
    const timer = setTimeout(() => {
      if (searchTerm !== (searchParams.get("search") || "")) {
        updateURL("search", searchTerm);
      }
    }, 500); // ৫০০ মিলি-সেকেন্ড অপেক্ষা করবে

    return () => clearTimeout(timer); // ক্লিনিআপ ফাংশন
  }, [searchTerm]);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3 items-stretch">
      <div className="relative flex-[3] group">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <Search
            size={18}
            className={`${
              isPending ? "animate-pulse text-red-600" : "text-zinc-500"
            } transition-colors`}
          />
        </div>
        <input
          type="text"
          placeholder="SEARCH ARCHIVE..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // লোকাল স্টেট আপডেট
          className="w-full h-full bg-zinc-950 border border-white/5 rounded-2xl py-4 pl-16 pr-12 text-xs font-black tracking-widest uppercase text-white focus:outline-none focus:border-red-600/50 transition-all shadow-2xl"
        />
      </div>

      {/* Sort Dropdown: এটিতে কোনো ডিবounce নেই, ক্লিক করলেই কাজ করবে */}
      <select
        defaultValue={searchParams.get("sort") || "views"}
        onChange={(e) => updateURL("sort", e.target.value)}
        className="bg-zinc-950 flex-1 border border-white/5 rounded-2xl px-4 py-4 text-xs font-black tracking-widest uppercase text-zinc-400 focus:outline-none focus:border-red-600/50 transition-all cursor-pointer"
      >
        <option value="views">Default</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="duration">Longest Duration</option>
      </select>
    </div>
  );
}
