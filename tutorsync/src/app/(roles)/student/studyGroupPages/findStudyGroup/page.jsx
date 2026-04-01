"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

const mockGroups = [
  {
    id: 1,
    course: "Calculus I",
    time: "Today, 4:00 PM",
    spots: "4 of 8 spots filled",
  },
  {
    id: 2,
    course: "Biology",
    time: "Tomorrow, 5:00 PM",
    spots: "6 of 8 spots filled",
  },
  {
    id: 3,
    course: "Chemistry I",
    time: "Wednesday, 9:00 AM",
    spots: "2 of 8 spots filled",
  },
  {
    id: 4,
    course: "Calculus I",
    time: "Wednesday, 11:00 AM",
    spots: "3 of 8 spots filled",
  },
  {
    id: 5,
    course: "Calculus II",
    time: "Thursday, 1:00 PM",
    spots: "7 of 8 spots filled",
  },
];

export default function StudyBuddyPage() {
  const [selectedCourse, setSelectedCourse] = useState("Select Course");

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer} />

        <div className={styles.headerRow}>
          <Link href="/user/home" className={styles.backButton}>
            <Image src="/backbutton.svg" alt="Back" width={28} height={28} />
          </Link>

          <h1 className={styles.title}>Find Study Buddy</h1>

          <div className={styles.headerSpacer} />
        </div>

        <div className={styles.content}>
          {/* Course Dropdown */}
          <div className={styles.dropdownSection}>
            <select
              className={styles.courseSelect}
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option>Select Course</option>
              <option>Calculus I</option>
              <option>Calculus II</option>
              <option>Biology</option>
              <option>Chemistry I</option>
              <option>Physics</option>
            </select>
          </div>

          {/* List Section */}
          <div className={styles.listSection}>
            {mockGroups.map((group) => (
              <div key={group.id} className={styles.groupCard}>
                <div className={styles.groupLeft}>
                  <p className={styles.groupCourse}>{group.course}</p>
                  <p className={styles.groupTime}>{group.time}</p>
                  <p className={styles.groupSpots}>{group.spots}</p>
                </div>

                <Link href="/student/studyGroupPages/bookStudyGroup" className={styles.joinButton}>
                  Join
                </Link>
              </div>
            ))}
          </div>

          {/* Group Button */}
          <div className={styles.createGroupWrapper}>
            <Link
              href="/student/studyGroupPages/createStudyGroup"
              className={styles.createGroupButton}
            >
              Create Group
            </Link>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
