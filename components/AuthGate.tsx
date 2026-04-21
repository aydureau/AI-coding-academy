"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount } from "@/components/AccountProvider";
import styles from "./AuthGate.module.css";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, hydrated } = useAccount();
  const pathname = usePathname();

  if (!hydrated) {
    return (
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className={styles.card}>
          <h1>Loading your access...</h1>
          <p>Please wait a moment.</p>
        </div>
      </section>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className={styles.card}>
        <p className={styles.badge}>Free account required</p>
        <h1>Create your free account</h1>
        <p>
          Enter your email to unlock course content and practice labs. No payment required.
        </p>
        <Link href={`/signup?next=${encodeURIComponent(pathname)}`} className={styles.button}>
          Create free account
        </Link>
      </div>
    </section>
  );
}
