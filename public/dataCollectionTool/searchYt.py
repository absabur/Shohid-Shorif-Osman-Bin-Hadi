import yt_dlp
import json

def search_youtube_advanced(query, limit=50, min_duration_minutes=20):
    """
    এই স্ক্রিপ্টটি অনেকগুলো রেজাল্ট নিয়ে আসবে এবং 
    সেখান থেকে আপনার দেওয়া সময় (২০ মিনিট) অনুযায়ী ফিল্টার করবে।
    """
    
    # আমরা বেশি করে রেজাল্ট নিব যেন ফিল্টার করার পর পর্যাপ্ত ভিডিও থাকে
    search_type = f"ytsearch{limit}:{query}"

    ydl_opts = {
        'quiet': True,
        'skip_download': True,
        'extract_flat': False, # ভিডিওর ভেতরে ঢুকে সঠিক ডিউরেশন চেক করার জন্য False রাখা ভালো
    }

    min_seconds = min_duration_minutes * 60

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            results = ydl.extract_info(search_type, download=False)
            
            filtered_videos = []
            if 'entries' in results:
                for entry in results['entries']:
                    duration = entry.get('duration')
                    
                    # যদি ভিডিওর ডিউরেশন আমাদের দেওয়া সময়ের (২০ মিনিট) বেশি হয়
                    if duration and duration >= min_seconds:
                        duration_formatted = f"{int(duration // 60)}m {int(duration % 60)}s"
                        
                        filtered_videos.append({
                            "title": entry.get('title'),
                            "url": f"https://www.youtube.com/watch?v={entry.get('id')}",
                            "duration": duration_formatted,
                            "uploader": entry.get('uploader'),
                            "upload_date": entry.get('upload_date'),
                            "view_count": entry.get('view_count')
                        })
            
            return filtered_videos

    except Exception as e:
        return {"error": str(e)}

# --- ব্যবহার ---
keyword = "Osman Hadi Talk show"
# ৫০টি রেজাল্ট সার্চ করবে এবং সেখান থেকে ২০ মিনিটের বেশি ভিডিওগুলোই শুধু রাখবে
final_results = search_youtube_advanced(keyword, limit=50, min_duration_minutes=20)

print(f"ফিল্টার করার পর মোট {len(final_results)}টি বড় ভিডিও পাওয়া গেছে:\n")
print(json.dumps(final_results, indent=2, ensure_ascii=False))

