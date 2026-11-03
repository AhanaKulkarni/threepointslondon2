import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { getArticles, getSiteData } from "@/lib/store";
import ClubHubView from "@/components/ClubHubView";

export const revalidate = 0;

const VALID_DESKS = ["news", "transfers", "matchday", "features"];

export default async function ChelseaDeskPage({
  params,
}: {
  params: Promise<{ desk: string }>;
}) {
  const { desk } = await params;
  if (!VALID_DESKS.includes(desk.toLowerCase())) {
    notFound();
  }

  const articles = getArticles("chelsea");
  const siteData = getSiteData();

  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading Chelsea {desk}...</div>}>
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
