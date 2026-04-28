"use client";

import { useState, useEffect } from "react";
import TopHeader from "@/components/admin/TopHeader/TopHeader";
import BottomNav from "@/components/admin/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function AdminHomeClient({ pending, approved }) {
  const [pendingList, setPendingList] = useState(pending);
  const [analytics, setAnalytics] = useState(null);
useEffect(() => {
  async function loadAnalytics() {
    const res = await fetch("/api/admin/analytics");
    const data = await res.json();
    setAnalytics(data);
  }
  loadAnalytics();
}, []);
  const [approvedList, setApprovedList] = useState(
    [...approved].sort((a, b) => b.Availability_ID - a.Availability_ID),
  );

  async function handleApprove(id) {
    await fetch("/api/admin/approveAvailability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const item = pendingList.find((p) => p.Availability_ID === id);

    setPendingList(pendingList.filter((p) => p.Availability_ID !== id));
    setApprovedList(
      [{ ...item, Is_Approved: true }, ...approvedList].sort(
        (a, b) => b.Availability_ID - a.Availability_ID,
      ),
    );
  }

  async function handleDeny(id) {
    await fetch("/api/admin/denyAvailability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setPendingList(pendingList.filter((p) => p.Availability_ID !== id));
  }

  function formatTimeRange(item) {
    const start = new Date(item.Times_Requested);
    const end = new Date(start.getTime() + 4 * 60 * 60 * 1000); // 4 hours

    return `${start.toLocaleDateString("en-US", {
      weekday: "long",
    })}, ${start.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })} - ${end.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })}`;
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="admin@kent.edu" />

        <div className={styles.content}>
          <h1 className={styles.welcome}>Welcome, Admin</h1>

{analytics && (
  <div className={styles.analyticsCard}>
    <h2 className={styles.sectionTitle}>Platform Analytics</h2>

    <div className={styles.analyticsGrid}>
      <div className={styles.analyticsItem}>
        <span className={styles.analyticsLabel}>Monthly Visits</span>
        <span className={styles.analyticsValue}>
          {analytics.visits.reduce((sum, m) => sum + m.visits, 0)}
        </span>
      </div>

      <div className={styles.analyticsItem}>
        <span className={styles.analyticsLabel}>Study Groups</span>
        <span className={styles.analyticsValue}>
          {analytics.totalStudyGroups}
        </span>
      </div>

      <div className={styles.analyticsItem}>
        <span className={styles.analyticsLabel}>Tutor Sessions</span>
        <span className={styles.analyticsValue}>
          {analytics.totalSessions}
        </span>
      </div>
    </div>
  </div>
)}

          {/* Pending */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Pending Availability ({pendingList.length})
            </h2>

            <div className={styles.listContainer}>
              {pendingList.map((req) => (
                <div key={req.Availability_ID} className={styles.infoCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.name}>{req.Tutor.USERS.Name}</span>
                    <span className={styles.time}>{formatTimeRange(req)}</span>
                  </div>

                  <div className={styles.actions}>
                    <button
                      className={styles.acceptBtn}
                      onClick={() => handleApprove(req.Availability_ID)}
                    >
                      Accept
                    </button>
                    <button
                      className={styles.denyBtn}
                      onClick={() => handleDeny(req.Availability_ID)}
                    >
                      Deny
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approved */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Approved Availability ({approvedList.length})</h2>

            <div className={styles.listContainer}>
              {approvedList.map((req) => (
                <div key={req.Availability_ID} className={styles.infoCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.name}>{req.Tutor.USERS.Name}</span>
                    <span className={styles.time}>{formatTimeRange(req)}</span>
                  </div>

                  <div className={styles.approvedBadge}>Approved</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
