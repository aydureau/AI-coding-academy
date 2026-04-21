import Link from "next/link";
import { AccountStatus } from "@/components/AccountStatus";
import { PointsBadge } from "@/components/PointsBadge";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/lessons", label: "Lessons" },
  { href: "/practice", label: "Practice" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.brand}>
            AI & Coding Academy
          </Link>
          <div className={styles.rightSide}>
            <div className={styles.links}>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={styles.accountTools}>
              <AccountStatus />
              <PointsBadge />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
