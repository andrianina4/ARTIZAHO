"use client";

import React from "react";
import { LeftLine } from "@/constants/link/icons";
import Button from "@/components/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const InfoLayout = ({ id }: { id: string }) => {
  return (
    <>
      <div className="px-3 py-3 border-b-4 border-bronze text-brown font-semibold">
        Workshop informations
      </div>
      <Link href={`/admin/workshop/${id}/participant`} passHref>
        <div className="px-3 py-3 cursor-pointer">Participants</div>
      </Link>
      <Link href={`/admin/workshop/${id}/planning`} passHref>
        <div className="px-3 py-3 cursor-pointer">Planning</div>
      </Link>
    </>
  );
};

const ParticipantLayout = ({ id }: { id: string }) => {
  return (
    <>
      <Link href={`/admin/workshop/${id}/about`} passHref>
        <div className="px-3 py-3 cursor-pointer">Workshop informations</div>
      </Link>
      <div className="px-3 py-3 border-b-4 border-bronze text-brown font-semibold">
        Participants
      </div>
      <Link href={`/admin/workshop/${id}/planning`} passHref>
        <div className="px-3 py-3 cursor-pointer">Planning</div>
      </Link>
    </>
  );
};

const PlanningLayout = ({ id }: { id: string }) => {
  return (
    <>
      <Link href={`/admin/workshop/${id}/about`} passHref>
        <div className="px-3 py-3 cursor-pointer">Workshop informations</div>
      </Link>
      <Link href={`/admin/workshop/${id}/participant`} passHref>
        <div className="px-3 py-3 cursor-pointer">Participants</div>
      </Link>
      <div className="px-3 py-3 border-b-4 border-bronze text-brown font-semibold">
        Planning
      </div>
    </>
  );
};

export default function Layout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  let content: number = 0;
  const pathname = usePathname();
  if (pathname.endsWith("/about")) {
    content = 1;
  } else if (pathname.endsWith("/participant")) {
    content = 2;
  } else if (pathname.endsWith("/planning")) {
    content = 3;
  }

  return (
    <div className="flex flex-col w-full h-full gap-4 bg-white rounded-3xl pt-8 px-8">
      {/* HEADER AVEC RETOUR */}
      <div className="flex items-center gap-4">
        <Button
          content=""
          isBackButton
          leftIcon={<LeftLine />}
          className="!w-6 !h-6 !bg-transparent !text-brown font-bold "
        />
        <span className="text-2xl font-semibold text-brown-80%">
          Workshop informations
        </span>
      </div>
      {/* CHOIX CONTENU */}
      <div className="border-b-2 border-bronze flex gap-3 w-full font-semibold opacity-80">
        {content === 1 && <InfoLayout id={params.id} />}
        {content === 2 && <ParticipantLayout id={params.id} />}
        {content === 3 && <PlanningLayout id={params.id} />}
      </div>
      {children}
    </div>
  );
}
