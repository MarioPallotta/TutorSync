"use client";

import { useState } from "react";
import TopHeader from "@/components/student/TopHeader/TopHeader";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import WidgetCard from "@/components/widgets/widgetCard";
import Modal from "@/components/ui/modal";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function AllOptionsClient({
  gpa,
  upcomingTutorSessions,
  upcomingStudyGroups,
}) {
  const [modalType, setModalType] = useState(null);
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="student@kent.edu" showEdit={false} />

        <div className={styles.content}>
            <div className={styles.links}>
          {/* Find Tutor */}
          <Link href="/student/tutorPages/findTutor" className={styles.link}>
            <img src="/userplus.svg" className={styles.icon} />
            <h3 className={styles.linkTitle}>Find Tutor</h3>
          </Link>

          {/* Find Study Buddy */}
          <Link
            href="/student/studyGroupPages/findStudyGroup"
            className={styles.link2}
          >
            <img src="/users.svg" className={styles.icon} />
            <h3 className={styles.linkTitle}>Find Study Buddy</h3>
          </Link>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            <div className={styles.tile} onClick={() => setModalType("notifications")}>
              <img src="/bell.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>Notifications</h3>
            </div>

            <div className={styles.tile} onClick={() => setModalType("upcomingSessions")}>
              <img src="/calendar.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>Upcoming Tutor Sessions</h3>
            </div>

            <div className={styles.tile} onClick={() => setModalType("tutoringSuggestions")}>
              <img src="/check.svg" className={styles.icon} />
              <h3 className={styles.linkTitle}>Tutoring Suggestions</h3>
            </div>
            <div className={styles.tile} onClick={() => setModalType("grades")}>
                <h3 className={styles.gradesTitle}>A+</h3>
              <h3 className={styles.linkTitle}>GPA</h3>
            </div>
            </div>
            <Link href="https://flashline.kent.edu/" className={styles.flashline}>
            <div className={styles.flashlineHeader}>
          <Image
            src="/kentstateimage.png"
            alt="external link icon"
            width={100}
            height={50}
            className={styles.flashlineicon}
          />
          <h3 className={styles.linkTitle}>FlashLine Portal</h3>
          </div>
        </Link>
        </div>

        <BottomNav />

        {/* Modal */}
        {modalType && (
          <Modal onClose={() => setModalType(null)}>
            <WidgetCard
              type={modalType}
              gpa={gpa}
              upcomingTutorSessions={upcomingTutorSessions}
              upcomingStudyGroups={upcomingStudyGroups}
              isEditing={false}
            />
          </Modal>
        )}
      </section>
    </main>
  );
}
