import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { getArticles, getSiteData } from "@/lib/store";
import ClubHubView from "@/components/ClubHubView";

export const revalidate = 0;

const VALID_DESKS = ["news", "transfers", "matchday", "features"];

export default async function ArsenalDeskPage({
  params,
}: {
  params: Promise<{ desk: string }>;
}) {
  const { desk } = await params;
  if (!VALID_DESKS.includes(desk.toLowerCase())) {
    notFound();
  }

  const articles = getArticles("arsenal");
  const siteData = getSiteData();

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Arsenal {desk}...</div>}>
      <ClubHubView
        club="arsenal"
        clubTitle="Arsenal"
        tagline="Tactics, data, recruitment, and academy reporting from London Colney."
        themeColor="text-[#E8192C]"
        borderColor="border-[#E8192C]"
        standings={siteData.standings.arsenal}
        articles={articles}
        initialDesk={desk}
      />
    </Suspense>
  );
}
