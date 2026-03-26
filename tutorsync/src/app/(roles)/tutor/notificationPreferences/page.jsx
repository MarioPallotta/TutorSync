"use client";

import { useState } from "react";
import BottomNav from "@/components/tutor/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function NotificationPreferencesPage() {
  const [pendingRequests, setPendingRequests] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.titleBar}>
          <h1 className={styles.title}>Notifications</h1>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Notification Types</h2>

            <div className={styles.settingRow}>
              <span className={styles.settingText}>New Pending Requests</span>

              <button
                type="button"
                className={`${styles.toggle} ${pendingRequests ? styles.toggleOn : ""}`}
                onClick={() => setPendingRequests(!pendingRequests)}
                aria-pressed={pendingRequests}
                aria-label="Toggle new pending requests notifications"
              >
                <span className={styles.toggleKnob}></span>
              </button>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Communication Channels</h2>

            <div className={styles.settingRow}>
              <span className={styles.settingText}>Email</span>

              <button
                type="button"
                className={`${styles.toggle} ${emailEnabled ? styles.toggleOn : ""}`}
                onClick={() => setEmailEnabled(!emailEnabled)}
                aria-pressed={emailEnabled}
                aria-label="Toggle email notifications"
              >
                <span className={styles.toggleKnob}></span>
              </button>
            </div>

            <div className={styles.settingRow}>
              <span className={styles.settingText}>Push Notification</span>

              <button
                type="button"
                className={`${styles.toggle} ${pushEnabled ? styles.toggleOn : ""}`}
                onClick={() => setPushEnabled(!pushEnabled)}
                aria-pressed={pushEnabled}
                aria-label="Toggle push notifications"
              >
                <span className={styles.toggleKnob}></span>
              </button>
            </div>
          </section>
        </div>

        <BottomNav active="settings" />
      </section>
    </main>
  );
}
