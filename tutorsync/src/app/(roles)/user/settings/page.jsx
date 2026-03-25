"use client";

import { useState } from "react";
import TopHeader from "@/components/user/TopHeader/TopHeader";
import BottomNav from "@/components/user/BottomNav/BottomNav";
import styles from "./page.module.css";
import Link from "next/link";

export default function UserSettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [issueText, setIssueText] = useState("");

  const handleSubmitIssue = (e) => {
    e.preventDefault();
    console.log("Submitted issue:", issueText);

    // Later: send to backend / API
    // Example:
    // await fetch("/api/issues", { method: "POST", body: JSON.stringify({ issueText }) });

    setIssueText("");
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");

    // Later: add sign-out logic here
    // Example with next-auth or your auth flow:
    // signOut();
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.content}>
          <div className={styles.titleBar}>
            <h1 className={styles.title}>Settings</h1>
          </div>
            <div className={styles.section}>
              <h2 className={styles.sectionLabel}>Application Settings</h2>

              <div className={styles.settingRow}>
                <span className={styles.settingText}>Dark Mode</span>

                <button
                  type="button"
                  className={`${styles.toggle} ${darkMode ? styles.toggleOn : ""}`}
                  onClick={() => setDarkMode(!darkMode)}
                  aria-pressed={darkMode}
                  aria-label="Toggle dark mode"
                >
                  <span className={styles.toggleKnob}></span>
                </button>
              </div>

              <Link href="/user/notificationPreferences" type="button" className={styles.settingButton}>
                Notification Preferences
              </Link>
            </div>

            <form className={styles.issueSection} onSubmit={handleSubmitIssue}>
              <h2 className={styles.sectionLabel}>Submit an App Issue</h2>

              <textarea
                className={styles.textarea}
                placeholder="Enter Text"
                value={issueText}
                onChange={(e) => setIssueText(e.target.value)}
              />

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>

            <div className={styles.signOutWrapper}>
              <button
                type="button"
                className={styles.signOutButton}
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        <BottomNav />
      </section>
    </main>
  );
}
