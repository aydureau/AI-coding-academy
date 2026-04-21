"use client";

import Link from "next/link";
import { useAccount } from "@/components/AccountProvider";

type StartPractisingLinkProps = {
  className?: string;
};

export function StartPractisingLink({ className }: StartPractisingLinkProps) {
  const { isAuthenticated, hydrated } = useAccount();

  const href = !hydrated
    ? "/signup?next=%2Fpractice"
    : isAuthenticated
      ? "/practice"
      : "/signup?next=%2Fpractice";

  return (
    <Link href={href} className={className}>
      Start practising →
    </Link>
  );
}
