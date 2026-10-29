import React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function CommunityTeaser({ posts }: { posts?: any }) {
  const rooms = [
    {
      club: "arsenal",
      name: "ARSENAL",
      color: "bg-[#E8192C]",
      online: 312,
      tag: "Ar",
      tagBg: "bg-[#CE3426]",
      threads: [
        {
          id: "ar-1",
          cat: "REST-DEFENCE",
          hot: true,
          title: "Is the rest-defence actually a problem, or just variance?",
          replies: 214,
          time: "last reply 2m ago",
        },
        {
          id: "ar-2",
          cat: "TEAM NEWS",
          hot: false,
          title: "Saliba fit for Hull — does the back line change shape?",
          replies: 86,
          time: "last reply 18m ago",
        },
        {
          id: "ar-3",
          cat: "ACADEMY",
          hot: false,
          title: "Hale End: who earns real minutes before January?",
          replies: 51,
          time: "last reply 1h ago",
        },
        {
          id: "ar-4",
          cat: "MATCHDAY",
          hot: false,
          title: "Rate the Villa Park performance, honestly",
          replies: 33,
          time: "last reply 2h ago",
        },
      ],
    },
    {
      club: "chelsea",
      name: "CHELSEA",
      color: "bg-[#1C6BB0]",
      online: 248,
      tag: "Ch",
      tagBg: "bg-[#1C6BB0]",
      threads: [
        {
          id: "ch-1",
          cat: "TRANSFERS",
          hot: true,
          title: "The wage structure: who is actually blocking January?",
          replies: 173,
          time: "last reply 5m ago",
        },
        {
          id: "ch-2",
          cat: "TACTICS",
          hot: false,
          title: "Alonso's third build-up pattern — better or worse?",
          replies: 92,
          time: "last reply 24m ago",
        },
        {
          id: "ch-3",
          cat: "ACADEMY",
          hot: false,
          title: "Cobham's class of 2026: which two make it?",
          replies: 44,
          time: "last reply 2h ago",
        },
        {
          id: "ch-4",
          cat: "MATCHDAY",
          hot: false,
          title: "Sunderland away: what does a good result look like?",
          replies: 28,
          time: "last reply 3h ago",
        },
      ],
    },
    {
      club: "tottenham",
      name: "TOTTENHAM",
      color: "bg-[#24376B]",
      online: 196,
      tag: "To",
      tagBg: "bg-[#24376B]",
      threads: [
        {
          id: "to-1",
          cat: "TRANSFERS",
          hot: true,
          title: "Three signings from a title race — which three?",
          replies: 198,
          time: "last reply 1m ago",
        },
        {
          id: "to-2",
          cat: "TACTICS",
          hot: false,
          title: "De Zerbi's full-backs: brave, or reckless?",
          replies: 77,
          time: "last reply 31m ago",
        },
        {
          id: "to-3",
          cat: "MATCHDAY",
          hot: false,
          title: "Carabao quarter-final: rotate, or go strong?",
          replies: 39,
          time: "last reply 1h ago",
        },
        {
          id: "to-4",
          cat: "DATA",
          hot: false,
          title: "Progression is up. Is control actually down?",
          replies: 25,
          time: "last reply 4h ago",
        },
      ],
    },
  ];

  return (
    <section className="w-full my-10">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-hairline mb-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
            COMMUNITY
          </h2>
          <div className="h-[1px] bg-hairline flex-1 hidden sm:block"></div>
        </div>
        <Link
          href="/community"
          className="text-xs font-bold text-navy hover:text-indigo transition-colors"
        >
          All rooms →
        </Link>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.club}
            className="border border-hairline rounded-xs p-4 sm:p-5 bg-white flex flex-col justify-between"
          >
            <div>
              {/* Room Header */}
              <div className="flex items-center justify-between pb-3 border-b border-hairline mb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-3.5 h-[3px] ${room.color}`}></span>
                  <span className="font-display font-black text-xs uppercase tracking-wider text-navy">
                    {room.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span>{room.online} online</span>
                </div>
              </div>

              {/* Threads List */}
              <div className="space-y-4 divide-y divide-hairline">
                {room.threads.map((t, idx) => (
                  <div key={t.id} className={idx > 0 ? "pt-3.5" : ""}>
                    <div className="flex items-center gap-1.5 mb-1 text-[9px] font-bold uppercase tracking-wider text-muted">
                      <span>{t.cat}</span>
                      {t.hot && (
                        <span className="bg-[#FFEAE8] text-[#CE3426] px-1 py-0.2 rounded-xs font-black text-[8px]">
                          HOT
                        </span>
                      )}
                    </div>
                    <Link
                      href="/community"
                      className="font-headline font-bold text-xs sm:text-[13px] text-ink hover:text-indigo transition-colors leading-snug block mb-1"
                    >
                      {t.title}
                    </Link>
                    <div className="flex items-center gap-2 text-[10px] text-muted font-medium">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-2.5 h-2.5 opacity-60" />
                        {t.replies}
                      </span>
                      <span>·</span>
                      <span>{t.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input & Link footer */}
            <div className="pt-5 border-t border-hairline mt-4 space-y-3">
              <div className="flex items-center gap-2 bg-white border border-hairline rounded-full px-2.5 py-1.5">
                <span className={`w-5 h-5 rounded-full ${room.tagBg} text-white text-[9px] font-black flex items-center justify-center shrink-0`}>
                  {room.tag}
                </span>
                <input
                  type="text"
                  placeholder="Say something..."
                  className="w-full text-xs bg-transparent focus:outline-none text-ink placeholder:text-gray-400"
                />
              </div>

              <Link
                href="/community"
                className="text-xs font-bold text-indigo hover:text-ember transition-colors flex items-center gap-1"
              >
                <span>Open the {room.name.charAt(0) + room.name.slice(1).toLowerCase()} room</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
