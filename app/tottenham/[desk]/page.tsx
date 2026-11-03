import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { getArticles, getSiteData } from "@/lib/store";
import ClubHubView from "@/components/ClubHubView";

export const revalidate = 0;

const VALID_DESKS = ["news", "transfers", "matchday", "features"];

export default async function TottenhamDeskPage({
  params,
}: {
  params: Promise<{ desk: string }>;
}) {
  const { desk } = await params;
  if (!VALID_DESKS.includes(desk.toLowerCase())) {
    notFound();
  }

  const articles = getArticles("tottenham");
  const siteData = getSiteData();

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Tottenham {desk}...</div>}>
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
