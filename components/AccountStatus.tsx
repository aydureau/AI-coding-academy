"use client";

import Link from "next/link";
import { useAccount } from "@/components/AccountProvider";
import styles from "./AccountStatus.module.css";

export function AccountStatus() {
  const { hydrated, isAuthenticated, email, logout } = useAccount();

  if (!hydrated) return null;

  if (!isAuthenticated) {
    return (
      <Link href="/signup" className={styles.signup}>
        Create free account
      </Link>
    );
  }

  return (
    <div className={styles.row}>
      <span className={styles.email}>{email}</span>
      <button type="button" onClick={logout} className={styles.logout}>
        Log out
      </button>
    </div>
  );
}
