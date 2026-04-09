"use client";

import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function WidgetOptionsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer}></div>
        <div className={styles.titleBar}>
          <h1 className={styles.title}>Select a Widget</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <Link
              href="/student/home?add=findTutor"
              className={styles.widgetRow}
            >
              <div className={styles.widgetLeft}>
                <Image
                  src="/userplus.svg"
                  alt="Find a Tutor"
                  width={32}
                  height={32}
                />
                <span className={styles.widgetText}>Find a Tutor</span>
              </div>
            </Link>

            <Link
              href="/student/home?add=studyGroups"
              className={styles.widgetRow}
            >
              <div className={styles.widgetLeft}>
                <Image
                  src="/users.svg"
                  alt="Find Study Group"
                  width={32}
                  height={32}
                />
                <span className={styles.widgetText}>Find Study Group</span>
              </div>
            </Link>

            <Link
              href="/student/home?add=upcomingSessions"
              className={styles.widgetRow}
            >
              <div className={styles.widgetLeft}>
                <Image
                  src="/calendar.svg"
                  alt="Upcoming Sessions"
                  width={32}
                  height={32}
                />
                <span className={styles.widgetText}>Upcoming Sessions</span>
              </div>
            </Link>

            <Link href="/student/home?add=grades" className={styles.widgetRow}>
              <div className={styles.widgetLeft}>
                <div className={styles.aPlus}>A+</div>
                <span className={styles.widgetText}>Grades</span>
              </div>
            </Link>

            <Link href="/student/home?add=tutoringSuggestions" className={styles.widgetRow}>
              <div className={styles.widgetLeft}>
                <div className={styles.aPlus}></div>
                <span className={styles.widgetText}>Tutoring Suggestions</span>
              </div>
            </Link>

            <Link href="/student/home?add=notifications" className={styles.widgetRow}>
              <div className={styles.widgetLeft}>
                <div className={styles.aPlus}></div>
                <span className={styles.widgetText}>Notifications</span>
              </div> 
            </Link>

            <Link href="/student/home?add=flashline" className={styles.widgetRow}>
              <div className={styles.widgetLeft}>
                <div className={styles.aPlus}></div>
                <span className={styles.widgetText}>Flashline</span>
              </div>
            </Link>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
