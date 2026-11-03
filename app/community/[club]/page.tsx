import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { CommunityContent } from "../page";

export const revalidate = 0;

const VALID_CLUBS = ["arsenal", "chelsea", "tottenham"];

export default async function CommunityClubPage({
  params,
}: {
  params: Promise<{ club: string }>;
}) {
  const { club } = await params;
  if (!VALID_CLUBS.includes(club.toLowerCase())) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="w-full py-16 text-center text-xs text-muted font-mono">
          Loading {club} Community Room...
        </div>
      }
    >
      <CommunityContent initialClub={club} />
    </Suspense>
  );
}
