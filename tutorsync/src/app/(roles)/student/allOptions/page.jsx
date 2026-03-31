"use client";

import TopHeader from "@/components/student/TopHeader/TopHeader";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import Link from "next/link";

import styles from "./page.module.css";

export default function AllOptionsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="student@kent.edu" showEdit={false} />

        <div className={styles.content}>
          {/* Find Tutor */}
          <Link href="/student/tutorPages/findTutor" className={styles.link}>
            <img src="/userplus.svg" alt="Find Tutor" className={styles.icon} />
            <h3 className={styles.linkTitle}>Find Tutor</h3>
          </Link>

          {/* Find Study Group */}
          <Link
            href="/student/studyGroupPages/studyGroups"
            className={styles.link}
          >
            <img
              src="/users.svg"
              alt="Find Study Buddy"
              className={styles.icon}
            />
            <h3 className={styles.linkTitle}>Find Study Buddy</h3>
          </Link>
          <div className={styles.grid}>
            <div className={styles.tile}>
              <img src="/bell.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>Notifications</h3>
            </div>

            <div className={styles.tile}>
              <img src="/calendar.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>Upcoming Tutor Sessions</h3>
            </div>

            <div className={styles.tile}>
              <img src="/check.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>Tutoring Suggestions</h3>
            </div>
            {/* we can make this a link without breaking */}
            <div className={styles.tile}>
              <img src="/flash.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>Flashline</h3>
            </div>

            <div className={styles.tile}>
              <img src="/users.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>View Study Group</h3>
            </div>

            <div className={styles.tile}>
              {/*<img src="/grades.svg" className={styles.icon} />*/}
              <h3 className={styles.linkTitle}>Grades</h3>
            </div>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
