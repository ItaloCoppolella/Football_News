"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar({ view, setView }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        ⚽ Calcio Info Viewer
      </div>

      <div className={styles.links}>
        {/* Torna alla home */}
        <Link href="/" className={styles.link}>
          Home
        </Link>

        {/* Switch vista */}
        <button
          className={`${styles.link} ${
            view === "latest" ? styles.active : ""
          }`}
          onClick={() => setView("latest")}
        >
          Ultima giornata
        </button>

        <button
          className={`${styles.link} ${
            view === "table" ? styles.active : ""
          }`}
          onClick={() => setView("table")}
        >
          Classifica
        </button>
      </div>
    </nav>
  );
}
