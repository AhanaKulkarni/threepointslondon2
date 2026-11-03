import React, { Suspense } from "react";
import { getArticles, getSiteData } from "@/lib/store";
import ClubHubView from "@/components/ClubHubView";

export const revalidate = 0;

export default async function ChelseaPage({
  searchParams,
}: {
  searchParams?: Promise<{ desk?: string }>;
}) {
  const resolved = searchParams ? await searchParams : {};
  const desk = resolved.desk;
  const articles = getArticles("chelsea");
  const siteData = getSiteData();

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Chelsea Desk...</div>}>
      <ClubHubView
        club="chelsea"
        clubTitle="Chelsea"
        tagline="Tactics, recruitment, and financial accounting from Stamford Bridge to Cobham."
        themeColor="text-[#1C6BB0]"
        borderColor="border-[#1C6BB0]"
        standings={siteData.standings.chelsea}
        articles={articles}
        initialDesk={desk}
      />
    </Suspense>
  );
}
