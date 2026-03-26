"use client";

import { useState } from "react";
import TopHeader from "@/components/admin/TopHeader/TopHeader";
import BottomNav from "@/components/admin/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function AdminHomePage() {
  const [pending, setPending] = useState([
    { id: 1, name: "Sarah W.", time: "Friday, 3:00 - 5:00 PM" },
    { id: 2, name: "Connor M.", time: "Friday, 3:00 - 5:00 PM" },
  ]);

  const [approved, setApproved] = useState([
    { id: 3, name: "Sarah W.", time: "Monday, 3:00 - 5:00 PM" },
    { id: 4, name: "Connor M.", time: "Tuesday, 2:00 - 5:00 PM" },
    { id: 5, name: "Leslie Q.", time: "Thursday, 1:00 - 4:00 PM" },
  ]);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="user@kent.edu" />

        <div className={styles.content}>
          <h1 className={styles.welcome}>Welcome, Admin</h1>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Pending ({pending.length})</h2>

            <div className={styles.listContainer}>
              {pending.map((req) => (
                <div key={req.id} className={styles.infoCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.name}>{req.name}</span>
                    <span className={styles.time}>{req.time}</span>
                  </div>

                  <div className={styles.actions}>
                    <button className={styles.acceptBtn}>Accept</button>
                    <button className={styles.denyBtn}>Deny</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Approved availability</h2>

            <div className={styles.listContainer}>
              {approved.map((req) => (
                <div key={req.id} className={styles.infoCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.name}>{req.name}</span>
                    <span className={styles.time}>{req.time}</span>
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
