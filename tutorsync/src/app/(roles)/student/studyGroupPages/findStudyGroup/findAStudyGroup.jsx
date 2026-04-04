"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function StudyGroupClient({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState("Select Course");
  const [groups, setGroups] = useState([]);

  const subjects = useMemo(() => {
    return ["Select Course", ...courses.map((c) => c.Course_Title)];
  }, [courses]);

  async function fetchGroups() {
    if (selectedCourse === "Select Course") return;

    try {
      const res = await fetch("/api/getStudyGroups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseTitle: selectedCourse }),
      });

      if (!res.ok) {
        console.error("API error:", res.status, res.statusText);
        setGroups([]);
        return;
      }

      const data = await res.json();
      setGroups(data.groups || []);
    } catch (error) {
      console.error("fetchGroups error:", error);
      setGroups([]);
    }
  }

  useEffect(() => {
    fetchGroups();
  }, [selectedCourse]);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer} />

        <div className={styles.headerRow}>
          <Link href="/student/home" className={styles.backButton}>
            <Image src="/backbutton.svg" alt="Back" width={28} height={28} />
          </Link>

          <h1 className={styles.title}>Find Study Group</h1>

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
              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div className={styles.listSection}>
            {groups.length === 0 && (
              <p className={styles.emptyState}>
                {selectedCourse === "Select Course"
                  ? "Please select a course to view study groups."
                  : "No study groups available for this course."}
              </p>
            )}

            {groups.map((group) => (
              <div key={group.id} className={styles.groupCard}>
                <div className={styles.groupLeft}>
                  <p className={styles.groupCourse}>{group.course}</p>
                  <p className={styles.groupTime}>{group.date} at {group.time}</p>
                  <p className={styles.groupSpots}>
                    {group.members} of {group.max} spots filled
                  </p>
                </div>

                <Link
                  href={`/student/studyGroupPages/bookStudyGroup/${group.id}`}
                  className={styles.joinButton}
                >
                  Join
                </Link>
              </div>
            ))}
          </div>

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
