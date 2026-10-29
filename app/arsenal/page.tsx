import React from "react";
import { getArticles, getSiteData } from "@/lib/store";
import ClubHubView from "@/components/ClubHubView";

export const revalidate = 0;

export default function ArsenalPage() {
  const articles = getArticles("arsenal");
  const siteData = getSiteData();

  return (
    <ClubHubView
      club="arsenal"
      clubTitle="Arsenal"
      tagline="Tactics, data, recruitment, and academy reporting from London Colney."
      themeColor="text-[#E8192C]"
      borderColor="border-[#E8192C]"
      standings={siteData.standings.arsenal}
      articles={articles}
    />
  );
}
