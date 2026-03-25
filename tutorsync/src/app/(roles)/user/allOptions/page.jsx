"use client";

import TopHeader from "@/components/user/TopHeader/TopHeader";
import BottomNav from "@/components/user/BottomNav/BottomNav";
import Link from "next/link";

import styles from "./page.module.css";

export default function AllOptionsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="user@kent.edu" />

        <div className={styles.content}>

          {/* ⭐ FIND TUTOR */}
          <Link href="/user/findTutor" className={styles.link}>
            <img src="/userplus.svg" alt="Find Tutor" className={styles.icon} />
            <h3 className={styles.linkTitle}>Find Tutor</h3>
          </Link>

          {/* ⭐ FIND STUDY BUDDY */}
          <Link href="/user/studyGroups" className={styles.link}>
            <img src="/users.svg" alt="Find Study Buddy" className={styles.icon} />
            <h3 className={styles.linkTitle}>Find Study Buddy</h3>
          </Link>

          {/* ⭐ NOTIFICATIONS */}
          <Link href="/user/notifications" className={styles.link}>
            <img src="/bell.svg" alt="Notifications" className={styles.icon} />
            <h3 className={styles.linkTitle}>Notifications</h3>
          </Link>

          {/* ⭐ UPCOMING SESSIONS */}
          <Link href="/user/upcomingSessions" className={styles.link}>
            <img src="/calendar.svg" alt="Upcoming Sessions" className={styles.icon} />
            <h3 className={styles.linkTitle}>Upcoming Tutor Sessions</h3>
          </Link>

          {/* ⭐ TUTORING SUGGESTIONS */}
          <Link href="/user/suggestions" className={styles.link}>
            <img src="/lightbulb.svg" alt="Suggestions" className={styles.icon} />
            <h3 className={styles.linkTitle}>Tutoring Suggestions</h3>
          </Link>

          {/* ⭐ FLASHLINE */}
          <Link href="https://flashline.kent.edu" className={styles.link}>
            <img src="/flash.svg" alt="Flashline" className={styles.icon} />
            <h3 className={styles.linkTitle}>Flashline</h3>
          </Link>

          {/* ⭐ VIEW STUDY GROUP */}
          <Link href="/user/studyGroups" className={styles.link}>
            <img src="/users.svg" alt="Study Groups" className={styles.icon} />
            <h3 className={styles.linkTitle}>View Study Group</h3>
          </Link>

          {/* ⭐ GRADES */}
          <Link href="/user/grades" className={styles.link}>
            <img src="/grades.svg" alt="Grades" className={styles.icon} />
            <h3 className={styles.linkTitle}>Grades</h3>
          </Link>

        </div>

        <BottomNav />
      </section>
    </main>
  );
}
