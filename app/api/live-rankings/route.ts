import { NextResponse } from "next/server";
import { getSiteData } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const club = searchParams.get("club")?.toLowerCase();

    const data = getSiteData();
    const standings = data.standings;

    if (club && (club === "arsenal" || club === "chelsea" || club === "tottenham")) {
      return NextResponse.json({
        success: true,
        club,
        data: standings[club],
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      standings,
      comparison: {
        derbies: [
          {
            home: "Arsenal",
            away: "Chelsea",
            homeClub: "arsenal",
            awayClub: "chelsea",
            score: "5–0",
            venue: "Emirates Stadium",
            date: "Last Derby",
            nextMeeting: "Stamford Bridge · 14 Mar",
          },
          {
            home: "Tottenham",
            away: "Arsenal",
            homeClub: "tottenham",
            awayClub: "arsenal",
            score: "0–1",
            venue: "Tottenham Hotspur Stadium",
            date: "Last Derby",
            nextMeeting: "Emirates Stadium · 25 Apr",
          },
          {
            home: "Chelsea",
            away: "Tottenham",
            homeClub: "chelsea",
            awayClub: "tottenham",
            score: "2–0",
            venue: "Stamford Bridge",
            date: "Last Derby",
            nextMeeting: "Tottenham Hotspur Stadium · 2 May",
          },
        ],
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to retrieve live match & rankings data" },
      { status: 500 }
    );
  }
}
