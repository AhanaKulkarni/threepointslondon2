import React, { Suspense } from "react";
import { getArticles, getSiteData } from "@/lib/store";
import ClubHubView from "@/components/ClubHubView";

export const revalidate = 0;

export default async function ArsenalPage({
  searchParams,
}: {
  searchParams?: Promise<{ desk?: string }>;
}) {
  const resolved = searchParams ? await searchParams : {};
  const desk = resolved.desk;
  const articles = getArticles("arsenal");
  const siteData = getSiteData();

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Arsenal Desk...</div>}>
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
