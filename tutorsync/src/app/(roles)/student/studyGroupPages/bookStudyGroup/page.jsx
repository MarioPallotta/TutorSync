"use client";

import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function GroupDetailsPage() {
  const participants = ["Josh S.", "Emma L.", "Jose E.", "Sam S."];

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer} />

        {/* Header */}
        <div className={styles.headerRow}>
          <Link href="/student/studyGroupPages/findStudyGroup" className={styles.backButton}>
            <Image src="/backbutton.svg" alt="Back" width={28} height={28} />
          </Link>

          <h1 className={styles.title}>Group Details</h1>

          <div className={styles.headerSpacer} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Course Title */}
          <h2 className={styles.courseTitle}>Calculus I</h2>

          {/* Info Section */}
          <div className={styles.infoBox}>
            <p className={styles.infoLine}>
              <strong>Date:</strong> Tomorrow
            </p>
            <p className={styles.infoLine}>
              <strong>Time:</strong> 4:00 PM
            </p>
            <p className={styles.infoLine}>
              <strong>Location:</strong> 2nd Floor, Library
            </p>
          </div>

          {/* Participants */}
          <div className={styles.participantSection}>
            <p className={styles.participantHeader}>
              Participants (4 / 8 joined)
            </p>

            <div className={styles.participantList}>
              {participants.map((name, i) => (
                <p key={i} className={styles.participantName}>
                  {name}
                </p>
              ))}
            </div>
          </div>

          {/* Tutor Status */}
          <div className={styles.tutorBox}>
            <p className={styles.tutorStatus}>
              <strong>Tutor:</strong> Requested
            </p>
            <p className={styles.tutorSub}>awaiting confirmation</p>
          </div>

          {/* Join Button */}
          <div className={styles.joinWrapper}>
            <button className={styles.joinButton}>Join Group</button>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
