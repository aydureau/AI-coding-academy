"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAccount } from "@/components/AccountProvider";
import styles from "./page.module.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { register, isAuthenticated, hydrated } = useAccount();
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextPath = useMemo(() => {
    const next = searchParams.get("next");
    return next && next.startsWith("/") ? next : "/courses";
  }, [searchParams]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalized = email.trim().toLowerCase();

    if (!emailPattern.test(normalized)) {
      setError("Please enter a valid email address.");
      return;
    }

    register(normalized);
    router.push(nextPath);
  }

  if (!hydrated) {
    return (
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className={styles.card}>
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  if (isAuthenticated) {
    return (
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className={styles.card}>
          <p className={styles.badge}>Account active</p>
          <h1>You already have free access</h1>
          <p>You can continue your learning path now.</p>
          <Link href={nextPath} className={styles.primary}>
            Continue
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className={styles.card}>
        <p className={styles.badge}>100% free</p>
        <h1>Create your account</h1>
        <p>Use your email to unlock course content and start practising.</p>

        <form onSubmit={onSubmit} className={styles.form}>
          <label htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError("");
            }}
            placeholder="you@example.com"
            required
          />
          {error ? <p className={styles.error}>{error}</p> : null}
          <button type="submit" className={styles.primary}>
            Create free account
          </button>
        </form>
      </div>
    </section>
  );
}
