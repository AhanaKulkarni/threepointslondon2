import React, { Suspense } from "react";
import { getArticles, getSiteData } from "@/lib/store";
import ClubHubView from "@/components/ClubHubView";

export const revalidate = 0;

export default async function TottenhamPage({
  searchParams,
}: {
  searchParams?: Promise<{ desk?: string }>;
}) {
  const resolved = searchParams ? await searchParams : {};
  const desk = resolved.desk;
  const articles = getArticles("tottenham");
  const siteData = getSiteData();

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Tottenham Desk...</div>}>
      <ClubHubView
        club="tottenham"
        clubTitle="Tottenham"
        tagline="Tactics, data-led reporting, and recruitment strategy from Tottenham Hotspur Way."
        themeColor="text-[#24376B]"
        borderColor="border-[#24376B]"
        standings={siteData.standings.tottenham}
        articles={articles}
        initialDesk={desk}
      />
    </Suspense>
  );
}
