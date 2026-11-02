"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Lock, X, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CommunityTeaser({ posts }: { posts?: any }) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [demoLoggedIn, setDemoLoggedIn] = useState(false);
  const [targetRoomName, setTargetRoomName] = useState("");

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
          title: "The wage ceiling: will it stop us from signing a world-class striker?",
          replies: 173,
          time: "last reply 5m ago",
        },
        {
          id: "ch-2",
          cat: "TACTICS",
          hot: false,
          title: "Alonso's back-three experiment: better or worse than the 4-2-3-1?",
          replies: 92,
          time: "last reply 24m ago",
        },
        {
          id: "ch-3",
          cat: "ACADEMY",
          hot: false,
          title: "Cobham loan watch: who actually has a future in the first team?",
          replies: 44,
          time: "last reply 1h ago",
        },
        {
          id: "ch-4",
          cat: "MATCHDAY",
          hot: false,
          title: "Sunderland away: what counts as an acceptable result?",
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
          cat: "DE ZERBI",
          hot: true,
          title: "Are we finally seeing the real De Zerbi Spurs? The underlying numbers say yes",
          replies: 145,
          time: "last reply 8m ago",
        },
        {
          id: "to-2",
          cat: "TRANSFERS",
          hot: false,
          title: "Three signings in January: which positions cannot wait?",
          replies: 110,
          time: "last reply 35m ago",
        },
        {
          id: "to-3",
          cat: "ACADEMY",
          hot: false,
          title: "Is our youth pathway genuinely producing first-team regulars now?",
          replies: 62,
          time: "last reply 2h ago",
        },
        {
          id: "to-4",
          cat: "CARABAO CUP",
          hot: false,
          title: "Quarter-final draw reaction: why this is our biggest game of the season",
          replies: 39,
          time: "last reply 4h ago",
        },
      ],
    },
  ];

  const handleOpenLogin = (roomName: string) => {
    setTargetRoomName(roomName);
    setLoginModalOpen(true);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoLoggedIn(true);
    setTimeout(() => {
      setLoginModalOpen(false);
    }, 1500);
  };

  return (
    <section className="w-full">
      {/* Header: Clean title with dividing line. Removed "All rooms" per explicit feedback. */}
      <div className="flex items-center gap-4 pb-3 border-b border-hairline mb-4 sm:mb-6">
        <h2 className="font-display font-black text-sm uppercase tracking-wider text-navy shrink-0">
          COMMUNITY
        </h2>
        <div className="h-[1px] bg-hairline flex-1"></div>
      </div>

      {/* Responsive Grid: Horizontal swipeable on mobile, 3-col on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-4 sm:gap-6 pb-2 md:pb-0">
        {rooms.map((room) => (
          <div
            key={room.club}
            className="min-w-[280px] sm:min-w-0 snap-start flex-1 border border-hairline rounded-xs p-4 sm:p-5 bg-white flex flex-col justify-between shadow-2xs"
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
                      href={`/community?club=${room.club}`}
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

            {/* Input & Link footer: Open commenting removed per user request. Shows subscriber login prompt. */}
            <div className="pt-4 border-t border-hairline mt-4 space-y-3">
              <button
                type="button"
                onClick={() => handleOpenLogin(room.name)}
                className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 border border-hairline rounded-xs text-xs text-gray-600 hover:text-navy transition-colors cursor-pointer group"
                title="Log in to comment"
              >
                <span className="flex items-center gap-2 truncate">
                  <Lock className="w-3.5 h-3.5 text-gray-400 group-hover:text-navy shrink-0" />
                  <span className="text-[11px] font-semibold truncate">
                    {demoLoggedIn
                      ? "Logged in · Click to post comment"
                      : `Log in to comment in ${room.name}`}
                  </span>
                </span>
                <span className="text-[10px] font-extrabold text-indigo uppercase shrink-0">
                  {demoLoggedIn ? "Post →" : "Log In →"}
                </span>
              </button>

              {/* Automatically selects the clicked club on the community page */}
              <Link
                href={`/community?club=${room.club}`}
                className="text-xs font-bold text-indigo hover:text-ember transition-colors flex items-center gap-1"
                title={`Open ${room.name} Room in Community Hub`}
              >
                <span>Open the {room.name.charAt(0) + room.name.slice(1).toLowerCase()} room</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================
          SUBSCRIBER LOGIN FORM DEMO MODAL
          Per requirement: "We need login forms for when or if a person wants to comment something.
          To comment, they have to log in. Add that demo to the community section."
         ======================================================== */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-xs shadow-2xl border border-hairline overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-[#1D2B45] text-white p-5 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#CE3426] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-2xs tracking-wider">
                    SUBSCRIBER ONLY
                  </span>
                  <span className="text-xs text-gray-300 font-mono">
                    {targetRoomName ? `${targetRoomName} DEBATE ROOM` : "COMMUNITY DEBATE"}
                  </span>
                </div>
                <h3 className="font-display font-black text-xl text-white">
                  Log in to join the discussion
                </h3>
                <p className="text-xs text-gray-300 mt-0.5 font-normal">
                  To comment, reply to analysis, or vote in polls, log in to your account.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="text-gray-300 hover:text-white p-1 cursor-pointer"
                aria-label="Close login modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            {demoLoggedIn ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                <h4 className="font-display font-black text-lg text-navy">
                  Successfully Authenticated!
                </h4>
                <p className="text-xs text-gray-600">
                  You are signed in as a verified subscriber. Redirecting to your discussion...
                </p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-navy mb-1">
                    Email or Subscriber Username
                  </label>
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="e.g. subscriber@threepointslondon.com"
                    className="w-full text-xs bg-surface border border-hairline rounded px-3 py-2 text-ink focus:outline-navy"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-navy mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full text-xs bg-surface border border-hairline rounded px-3 py-2 text-ink focus:outline-navy"
                  />
                </div>

                <div className="p-2.5 bg-blue-50 border border-blue-200 rounded text-[11px] text-[#1C6BB0] font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#1C6BB0]" />
                  <span>
                    Demo Mode: Enter any email to test subscriber login commenting privileges.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1D2B45] hover:bg-indigo text-white font-display font-extrabold text-xs uppercase tracking-wider py-2.5 rounded transition-colors shadow-xs cursor-pointer"
                >
                  Log In & Start Commenting
                </button>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-muted">
                    Don't have a subscriber pass?{" "}
                    <Link
                      href="/contact#subscribe"
                      className="font-bold text-navy hover:underline"
                    >
                      Subscribe from £4/mo
                    </Link>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
