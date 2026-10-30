"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle, RefreshCw, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "advertise",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [resendCount, setResendCount] = useState(0);
  const [lastSubmittedData, setLastSubmittedData] = useState<typeof formData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver message");
      }

      setLastSubmittedData({ ...formData });
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const handleResend = async () => {
    if (!lastSubmittedData) return;
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lastSubmittedData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to resend message");
      }

      setResendCount((prev) => prev + 1);
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to resend. Please try again.");
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "advertise",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="max-w-[1050px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      {/* Header with Clickable Logo */}
      <div className="pb-8 border-b border-hairline mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" title="Three Points London - Return to Home" className="cursor-pointer">
            <img
              src="/logo.png"
              alt="Three Points London"
              className="h-8 w-auto object-contain cursor-pointer"
            />
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-muted">
            EDITORIAL & COMMERCIAL DESK
          </span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-navy uppercase mb-3 tracking-tight">
          Get In Touch With The Newsroom
        </h1>
        <p className="text-sm sm:text-base text-[#444] font-body max-w-2xl leading-relaxed">
          Editorial inquiries, commercial advertising, sponsored placements, and story pitches across Arsenal, Chelsea, and Tottenham Hotspur.
        </p>
      </div>

      {/* 3 Channels — Clean Borderless Minimalist Typography (unnecessary boxes & borders removed) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-14">
        <div id="advertise" className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-[2px] bg-ember"></span>
            <span className="text-xs font-black uppercase tracking-wider text-navy">
              ADVERTISE & SPONSORSHIPS
            </span>
          </div>
          <p className="text-xs text-[#555] leading-relaxed font-body">
            Direct £500 sponsored editorial placements, bespoke newsletter takeovers, and native partnerships targeted specifically to London football supporters.
          </p>
          <a
            href="mailto:commercial@threepointslondon.com"
            className="text-xs font-bold text-indigo hover:text-ember inline-flex items-center gap-1 pt-1 transition-colors"
          >
            commercial@threepointslondon.com
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div id="write" className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-[2px] bg-[#1C6BB0]"></span>
            <span className="text-xs font-black uppercase tracking-wider text-navy">
              WRITE FOR US / PITCH
            </span>
          </div>
          <p className="text-xs text-[#555] leading-relaxed font-body">
            We commission tactical breakdowns, data analyses, and match reports across our three desks. Paid per piece, named byline, and edited rather than rewritten.
          </p>
          <a
            href="mailto:pitches@threepointslondon.com"
            className="text-xs font-bold text-indigo hover:text-ember inline-flex items-center gap-1 pt-1 transition-colors"
          >
            pitches@threepointslondon.com
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div id="feedback" className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-[2px] bg-[#24376B]"></span>
            <span className="text-xs font-black uppercase tracking-wider text-navy">
              CORRECTIONS & FEEDBACK
            </span>
          </div>
          <p className="text-xs text-[#555] leading-relaxed font-body">
            Spotted a factual error, statistical discrepancy, or broken link? Our editorial standards team reviews corrections rapidly.
          </p>
          <a
            href="mailto:corrections@threepointslondon.com"
            className="text-xs font-bold text-indigo hover:text-ember inline-flex items-center gap-1 pt-1 transition-colors"
          >
            corrections@threepointslondon.com
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Direct Dispatch Section — Clean, uncluttered layout without harsh outer boxes */}
      <div className="pt-8 border-t border-hairline max-w-2xl">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Mail className="w-4 h-4 text-indigo" />
            <h2 className="font-headline font-bold text-lg text-navy">
              Send a Direct Message
            </h2>
          </div>
          <p className="text-xs text-muted">
            Delivered directly to Vayam Lahoti and the Three Points London newsdesk via Resend.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-emerald-50/80 border-l-4 border-emerald-600 p-6 rounded-xs space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-sm text-emerald-950">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed font-body">
                  Thank you for reaching out. Your dispatch has been transmitted to the Three Points London editorial desk.
                  {resendCount > 0 && ` (Resent ${resendCount} time${resendCount > 1 ? "s" : ""})`}
                </p>
              </div>
            </div>

            {/* Email Resend Functionality */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleResend}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xs transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Resend Email</span>
              </button>
              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-emerald-300 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold rounded-xs transition-colors cursor-pointer"
              >
                <span>Send Another Message</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs font-semibold">
            {status === "error" && (
              <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-navy font-bold mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface border border-hairline p-3 rounded-xs text-xs font-medium focus:outline-none focus:border-indigo transition-colors"
                  placeholder="e.g. Alex Morgan"
                />
              </div>

              <div>
                <label className="block text-navy font-bold mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface border border-hairline p-3 rounded-xs text-xs font-medium focus:outline-none focus:border-indigo transition-colors"
                  placeholder="alex@domain.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-navy font-bold mb-1.5">
                Subject & Department <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-surface border border-hairline p-3 rounded-xs text-xs font-medium focus:outline-none focus:border-indigo transition-colors"
              >
                <option value="advertise">Advertising / Sponsored Placement (£500)</option>
                <option value="pitch">Freelance Pitch (Arsenal / Chelsea / Spurs)</option>
                <option value="correction">Report a Factual Correction</option>
                <option value="general">General Inquiries / Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-navy font-bold mb-1.5">
                Message Content <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-surface border border-hairline p-3 rounded-xs text-xs font-medium focus:outline-none focus:border-indigo transition-colors"
                placeholder="Include your pitch, campaign dates, or feedback..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 bg-[#1D2B45] hover:bg-indigo text-white font-bold px-7 py-3 rounded-xs text-xs transition-colors cursor-pointer disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Dispatching via Resend...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Three Points London</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
