"use client";

import { useState } from "react";
import TopHeader from "@/components/admin/TopHeader/TopHeader";
import BottomNav from "@/components/admin/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function AdminHomeClient({ pending, approved }) {
  const [pendingList, setPendingList] = useState(pending);
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

          {/* Pending */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Pending ({pendingList.length})
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
            <h2 className={styles.sectionTitle}>Approved availability</h2>

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
