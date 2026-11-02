"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MessageSquare,
  ThumbsUp,
  Share2,
  Shield,
  Award,
  Lock,
  X,
  ShieldCheck,
  CheckCircle2,
  Send,
  UserCheck,
} from "lucide-react";
import AdSlot from "@/components/AdSlot";

interface Reply {
  author: string;
  badge?: string;
  time: string;
  text: string;
  upvotes?: number;
}

interface Post {
  id: string;
  club: "arsenal" | "chelsea" | "tottenham" | "all";
  authorName: string;
  badge?: string;
  time: string;
  desk: string;
  title: string;
  content: string;
  upvotes: number;
  repliesCount: number;
  poll?: {
    total: number;
    options: { name: string; pct: number }[];
  };
  replies: Reply[];
}

function CommunityContent() {
  const searchParams = useSearchParams();
  const [activeClub, setActiveClub] = useState<string>("all");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  // Subscriber Authentication Demo State
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [subscriberName, setSubscriberName] = useState("Vayam Lahoti");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const initialPosts: Post[] = [
    {
      id: "c-1",
      club: "arsenal",
      authorName: "danny_k",
      badge: "TOP CONTRIBUTOR",
      time: "4 hours ago",
      desk: "Matchday",
      title: "Are we actually watching a rest-defence problem, or just variance? Eleven games is not a season",
      content:
        "Read the xGA piece this morning and I buy most of it, but 0.47 of the jump comes from counters and we have played three of the four quickest sides in the league already. Genuine question for the people who track this properly — at what point does the sample stop being noise? #xGA #arteta #tactics",
      upvotes: 248,
      repliesCount: 2,
      replies: [
        {
          author: "Vayam Lahoti",
          badge: "EDITOR",
          time: "3 hours ago",
          text: "Fair challenge, and I said as much in the piece. Phase-level xGA stabilises around fifteen to eighteen games, so we are not there. What makes me think it is signal rather than noise is that the full-back height has moved too, and that is a choice rather than a sample.",
          upvotes: 96,
        },
        {
          author: "spursmatt",
          badge: "TOTTENHAM",
          time: "2 hours ago",
          text: "Same thing happened to us under Ange and it took a full season for anyone to call it. The full-back height is the tell every time.",
          upvotes: 41,
        },
      ],
    },
    {
      id: "c-2",
      club: "chelsea",
      authorName: "rhys_bridge",
      badge: "CHELSEA",
      time: "6 hours ago",
      desk: "Transfers",
      title: "Chelsea's amortisation cliff: what the 2026 accounts actually show",
      content:
        "A breakdown of the squad cost ratio and why the January headroom is smaller than reported. Not ours and not a TPL take — but it is the clearest thing I have read on the squad cost ratio, and it lines up with Nathan's piece last week. #psr #january #offsite",
      upvotes: 176,
      repliesCount: 0,
      replies: [],
    },
    {
      id: "c-3",
      club: "tottenham",
      authorName: "spursmatt",
      badge: "TOTTENHAM",
      time: "Yesterday",
      desk: "De Zerbi Tactics",
      title: "Three signings from a title race — which three positions can we actually fix in January?",
      content:
        "De Zerbi said we are three signings away. We clearly need a press-resistant pivot, another left-sided defender who can invert, and a reliable secondary goalscorer. Who fits those profiles in January without paying £80m premiums?",
      upvotes: 198,
      repliesCount: 0,
      replies: [],
    },
    {
      id: "c-4",
      club: "all",
      authorName: "Amelia Hart",
      badge: "WRITER",
      time: "Yesterday",
      desk: "Matchday",
      title: "Which London side finishes highest this season? (Poll)",
      content:
        "Vote below and explain why in the comments. Arsenal have the defensive baseline, Chelsea have the bench depth, Tottenham have the tactical dynamism.",
      upvotes: 412,
      repliesCount: 0,
      poll: {
        total: 2104,
        options: [
          { name: "Arsenal", pct: 54 },
          { name: "Chelsea", pct: 31 },
          { name: "Tottenham", pct: 15 },
        ],
      },
      replies: [],
    },
  ];

  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Automatically select the club when ?club=arsenal, ?club=chelsea, etc. is present in URL
  useEffect(() => {
    const club = searchParams.get("club")?.toLowerCase();
    if (club && ["arsenal", "chelsea", "tottenham"].includes(club)) {
      setActiveClub(club);
    }
  }, [searchParams]);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSubscriber) {
      setLoginModalOpen(true);
      return;
    }
    if (!newPostTitle.trim()) return;

    const newPost: Post = {
      id: `c-${Date.now()}`,
      club: (activeClub === "all" ? "arsenal" : activeClub) as any,
      authorName: subscriberName,
      badge: "SUBSCRIBER",
      time: "Just now",
      desk: "General Discussion",
      title: newPostTitle,
      content: "Shared with the Three Points London community.",
      upvotes: 1,
      repliesCount: 0,
      replies: [],
    };
    setPosts([newPost, ...posts]);
    setNewPostTitle("");
  };

  const handleAddReply = (postId: string) => {
    if (!isSubscriber) {
      setLoginModalOpen(true);
      return;
    }
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            repliesCount: p.repliesCount + 1,
            replies: [
              ...p.replies,
              {
                author: subscriberName,
                badge: "SUBSCRIBER",
                time: "Just now",
                text,
              },
            ],
          };
        }
        return p;
      })
    );
    setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
  };

  const handleLoginDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = loginEmail.split("@")[0] || "subscriber";
    setSubscriberName(name);
    setIsSubscriber(true);
    setLoginModalOpen(false);
  };

  const filteredPosts = posts.filter((p) => {
    if (activeClub === "all") return true;
    return p.club === activeClub || p.club === "all";
  });

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8">
      {/* Header */}
      <div className="pb-6 border-b border-hairline mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-muted">
            THE COMMUNITY HUB
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl uppercase text-navy">
            Three clubs, one room
          </h1>
          <p className="text-sm text-muted mt-1 max-w-2xl font-normal">
            Argue about the football, debate tactical xGA models, and get direct answers from the people who write the site. Moderated, named, and open to all three fanbases.
          </p>
        </div>

        {/* Counter Stats & Subscriber Status */}
        <div className="flex flex-wrap items-center gap-3">
          {isSubscriber ? (
            <div className="bg-green-50 border border-green-200 px-3 py-2 rounded-xs flex items-center gap-2 text-xs font-bold text-green-700">
              <UserCheck className="w-4 h-4 text-green-600" />
              <span>Signed in as @{subscriberName}</span>
              <button
                onClick={() => setIsSubscriber(false)}
                className="text-[10px] text-gray-500 hover:text-navy underline ml-1 cursor-pointer"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setLoginModalOpen(true)}
              className="bg-navy hover:bg-indigo text-white px-3.5 py-2 rounded-xs text-xs font-bold transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-ember" />
              <span>Subscriber Log In</span>
            </button>
          )}

          <div className="bg-surface border border-hairline px-3 py-1.5 text-center rounded-xs">
            <span className="block text-[9px] font-extrabold text-muted uppercase">MEMBERS</span>
            <span className="font-display font-black text-base text-navy">4,318</span>
          </div>
          <div className="bg-surface border border-hairline px-3 py-1.5 text-center rounded-xs">
            <span className="block text-[9px] font-extrabold text-muted uppercase">ACTIVE</span>
            <span className="font-display font-black text-base text-green-600">212</span>
          </div>
        </div>
      </div>

      {/* Club Selector Tabs: Automatically highlights active club if clicked from nav dropdown */}
      <div className="overflow-x-auto scrollbar-none whitespace-nowrap flex items-center gap-2 pb-4 sm:pb-6 border-b border-hairline mb-6 sm:mb-8 text-xs font-bold">
        {[
          { key: "all", label: "All Rooms" },
          { key: "arsenal", label: "Arsenal Room", color: "text-[#E8192C]" },
          { key: "chelsea", label: "Chelsea Room", color: "text-[#1C6BB0]" },
          { key: "tottenham", label: "Tottenham Room", color: "text-[#24376B]" },
        ].map((c) => (
          <button
            key={c.key}
            onClick={() => setActiveClub(c.key)}
            className={`shrink-0 px-3.5 py-1.5 rounded-xs transition-colors cursor-pointer text-xs ${
              activeClub === c.key
                ? "bg-navy text-white font-black shadow-xs"
                : "bg-surface hover:bg-gray-200 text-ink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Feed + Rules/Trending Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Posts Feed (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Post Creation Box with Login Gate */}
          <div className="bg-surface border border-hairline p-4 rounded-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs shrink-0">
                {isSubscriber ? subscriberName.charAt(0).toUpperCase() : <Lock className="w-4 h-4 text-ember" />}
              </span>
              <input
                type="text"
                placeholder={
                  isSubscriber
                    ? `Start a topic in the ${activeClub.toUpperCase()} room...`
                    : "Log in to post a topic or comment in the room..."
                }
                value={newPostTitle}
                onClick={() => {
                  if (!isSubscriber) setLoginModalOpen(true);
                }}
                onChange={(e) => setNewPostTitle(e.target.value)}
                className="flex-1 bg-white border border-hairline px-3 py-2 text-xs rounded-xs focus:outline-indigo"
              />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-hairline text-xs font-semibold text-muted">
              <span className="text-[11px] text-gray-500">
                {isSubscriber
                  ? `Posting to: ${activeClub === "all" ? "Arsenal & All Rooms" : `${activeClub.toUpperCase()} Room`}`
                  : "Authentication required to participate"}
              </span>
              <button
                type="button"
                onClick={handlePostSubmit}
                className="bg-navy text-white font-bold px-4 py-1.5 rounded-xs text-xs hover:bg-indigo transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {isSubscriber ? (
                  <>
                    <Send className="w-3 h-3" />
                    <span>Post to Room</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3 h-3 text-ember" />
                    <span>Log In to Post</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Posts List */}
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white border border-hairline p-6 rounded-xs space-y-4 shadow-2xs">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy">@{post.authorName}</span>
                  {post.badge && (
                    <span className="text-[10px] font-black uppercase bg-surface text-muted px-1.5 py-0.5 rounded border border-hairline">
                      {post.badge}
                    </span>
                  )}
                  <span className="text-gray-400">• {post.time}</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase text-ember tracking-wider">
                  #{post.desk}
                </span>
              </div>

              <h2 className="font-headline font-bold text-base sm:text-lg text-ink leading-snug">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
                {post.content}
              </p>

              {/* Poll Rendering if present */}
              {post.poll && (
                <div className="bg-surface p-4 rounded-xs border border-hairline space-y-2 text-xs">
                  {post.poll.options.map((opt) => (
                    <div key={opt.name} className="space-y-1">
                      <div className="flex justify-between font-bold">
                        <span>{opt.name}</span>
                        <span>{opt.pct}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-xs overflow-hidden">
                        <div
                          className="bg-navy h-full"
                          style={{ width: `${opt.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="text-[10px] text-muted pt-2 text-right">
                    {post.poll.total.toLocaleString()} votes
                  </div>
                </div>
              )}

              {/* Actions & Comment Count */}
              <div className="flex items-center justify-between pt-3 border-t border-hairline text-xs font-semibold text-muted">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 hover:text-navy cursor-pointer">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.upvotes}</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{post.repliesCount} comments</span>
                  </span>
                </div>
                <button className="flex items-center gap-1 hover:text-navy cursor-pointer">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Nested Replies */}
              {post.replies && post.replies.length > 0 && (
                <div className="bg-surface p-4 rounded-xs space-y-3 mt-4 border-l-2 border-l-navy">
                  {post.replies.map((reply, ridx) => (
                    <div key={ridx} className="text-xs space-y-1 pb-2 border-b border-hairline last:border-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-navy">{reply.author}</span>
                        {reply.badge && (
                          <span
                            className={`text-[9px] font-black uppercase px-1 py-0.2 rounded ${
                              reply.badge === "EDITOR"
                                ? "bg-ember text-white"
                                : "bg-white text-muted border border-hairline"
                            }`}
                          >
                            {reply.badge}
                          </span>
                        )}
                        <span className="text-[11px] text-gray-400">• {reply.time}</span>
                      </div>
                      <p className="text-ink leading-relaxed">{reply.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Comment Input Box (Login gated) */}
              <div className="pt-3 border-t border-hairline">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder={
                      isSubscriber
                        ? `Reply as @${subscriberName}...`
                        : "Log in to join the conversation and comment..."
                    }
                    value={commentInputs[post.id] || ""}
                    onClick={() => {
                      if (!isSubscriber) setLoginModalOpen(true);
                    }}
                    onChange={(e) =>
                      setCommentInputs((prev) => ({
                        ...prev,
                        [post.id]: e.target.value,
                      }))
                    }
                    className="flex-1 text-xs bg-slate-50 border border-hairline rounded px-3 py-1.5 text-ink focus:outline-navy"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddReply(post.id)}
                    className="bg-navy hover:bg-indigo text-white px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer"
                  >
                    {isSubscriber ? "Reply" : "Log In"}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <AdSlot id="infeed_728x90" label="AD — 970×250 IN-FEED · AFTER POST 2, HEIGHT RESERVED" />
        </div>

        {/* Sidebar: House Rules & Top Contributors (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* House Rules */}
          <div className="bg-white border border-hairline p-5 rounded-xs">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-hairline">
              <Shield className="w-4 h-4 text-navy" />
              <h3 className="font-display font-extrabold text-xs uppercase tracking-wider text-navy">
                House Rules
              </h3>
            </div>
            <ol className="space-y-2.5 text-xs text-muted leading-relaxed list-decimal list-inside font-medium">
              <li><strong className="text-ink">Argue with the point</strong>, never the person.</li>
              <li><strong className="text-ink">Credit and link</strong> anything that is not yours.</li>
              <li><strong className="text-ink">No tragedy chanting</strong>, no abuse, no unverified leaks.</li>
              <li><strong className="text-ink">Rival fans are guests</strong>, not targets. All three London badges live here.</li>
            </ol>
          </div>

          {/* Top Contributors */}
          <div className="bg-surface border border-hairline p-5 rounded-xs">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-hairline">
              <Award className="w-4 h-4 text-amber-500" />
              <h3 className="font-display font-extrabold text-xs uppercase tracking-wider text-navy">
                Top Contributors This Month
              </h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-navy">@danny_k (Arsenal)</span>
                <span className="font-extrabold text-muted">1,204 pts</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-navy">@spursmatt (Tottenham)</span>
                <span className="font-extrabold text-muted">988 pts</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-navy">@rhys_bridge (Chelsea)</span>
                <span className="font-extrabold text-muted">743 pts</span>
              </div>
            </div>
          </div>

          <AdSlot id="rail_300x600" label="AD — 300×600 HALF-PAGE · HIGHEST-DWELL PAGE ON SITE" />
        </aside>
      </div>

      {/* Subscriber Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-xs shadow-2xl border border-hairline overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#1D2B45] text-white p-5 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#CE3426] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-2xs tracking-wider">
                    AUTHENTICATION
                  </span>
                  <span className="text-xs text-gray-300 font-mono">
                    SUBSCRIBER ACCESS
                  </span>
                </div>
                <h3 className="font-display font-black text-xl text-white">
                  Log in to post and comment
                </h3>
                <p className="text-xs text-gray-300 mt-0.5 font-normal">
                  Verified discussion and replies are subscriber-only.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="text-gray-300 hover:text-white p-1 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleLoginDemoSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-navy mb-1">
                  Subscriber Email or Username
                </label>
                <input
                  type="text"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="e.g. danny_k or subscriber@threepointslondon.com"
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
                  Demo Mode: Sign in with any email to unlock full commenting and topic posting access!
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1D2B45] hover:bg-indigo text-white font-display font-extrabold text-xs uppercase tracking-wider py-2.5 rounded transition-colors shadow-xs cursor-pointer"
              >
                Log In & Unlock Commenting
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-muted">
                  Need a subscriber account?{" "}
                  <Link href="/contact#subscribe" className="font-bold text-navy hover:underline">
                    Get Access
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CommunityPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-16 text-center text-xs text-muted font-mono">
          Loading Community Rooms...
        </div>
      }
    >
      <CommunityContent />
    </Suspense>
  );
}
