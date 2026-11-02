import React from "react";
import { ArrowUpRight, Users, Bell, Sparkles } from "lucide-react";
import { XTwitterIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from "@/components/SocialIcons";

export default function FollowSocialSection() {
  const socials = [
    {
      name: "X (Twitter)",
      handle: "@3pointslondon",
      description: "Breaking news alerts, transfer exclusives, and instant post-match telemetry across London.",
      link: "https://x.com/3pointslondon",
      icon: <XTwitterIcon size={22} className="text-white" />,
      tag: "LIVE ALERTS",
      tagColor: "bg-[#CE3426] text-white",
      hoverBorder: "hover:border-white/50",
    },
    {
      name: "Instagram",
      handle: "@3pointslondon",
      description: "Tactical touch maps, player ratings infographics, and behind-the-scenes pitchside photography.",
      link: "https://instagram.com/3pointslondon",
      icon: <InstagramIcon size={22} className="text-white" />,
      tag: "VISUAL DATA",
      tagColor: "bg-[#833ab4] text-white",
      hoverBorder: "hover:border-[#fd1d1d]/60",
    },
    {
      name: "LinkedIn",
      handle: "Three Points London",
      description: "Club finance investigations, UEFA sustainability metrics, and executive football appointments.",
      link: "https://linkedin.com/company/threepointslondon",
      icon: <LinkedInIcon size={22} className="text-white" />,
      tag: "BUSINESS OF FOOTBALL",
      tagColor: "bg-[#0A66C2] text-white",
      hoverBorder: "hover:border-[#0A66C2]/60",
    },
    {
      name: "Facebook",
      handle: "Three Points London",
      description: "Community debate rooms, longform weekly dossiers, and supporter video discussions.",
      link: "https://facebook.com/threepointslondon",
      icon: <FacebookIcon size={22} className="text-white" />,
      tag: "COMMUNITY HUB",
      tagColor: "bg-[#1877F2] text-white",
      hoverBorder: "hover:border-[#1877F2]/60",
    },
  ];

  return (
    <section className="w-full bg-[#1D2B45] text-white rounded-xs p-6 sm:p-9 lg:p-10 my-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#2B3C5C] mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-300">
              CONNECT WITH THE NEWSROOM
            </span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white">
            Follow Us On Social Media
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl font-normal leading-relaxed">
            Real-time coverage, data dossiers, and tactical intelligence across Arsenal, Chelsea, and Tottenham. Join over 15,000+ London football supporters.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs text-gray-300 font-semibold bg-[#142036] px-3.5 py-2 rounded-xs border border-[#273859]">
          <Bell className="w-4 h-4 text-[#FF7E67]" />
          <span>Real-time matchday updates</span>
        </div>
      </div>

      {/* Social Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#142036] border border-[#23334F] ${s.hoverBorder} p-5 rounded-xs flex flex-col justify-between transition-all group shadow-xs`}
            title={`Follow Three Points London on ${s.name}`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xs bg-[#1D2B45] border border-[#2B3C5C] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {s.icon}
                </div>
                <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-2xs ${s.tagColor}`}>
                  {s.tag}
                </span>
              </div>

              <h3 className="font-headline font-bold text-base text-white group-hover:text-[#FF7E67] transition-colors mb-0.5">
                {s.name}
              </h3>
              <div className="text-xs text-gray-400 font-mono mb-2.5">
                {s.handle}
              </div>

              <p className="text-xs text-gray-300 font-normal leading-relaxed mb-4">
                {s.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#23334F] flex items-center justify-between text-xs font-bold text-[#FF7E67] group-hover:text-[#FFA08F] transition-colors">
              <span>Follow Channel</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
