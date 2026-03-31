"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function CreateStudyGroupPage() {
  const [course, setCourse] = useState("Select Course");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [maxMembers, setMaxMembers] = useState(8);
  const [includeTutor, setIncludeTutor] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState("Select Tutor");

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer} />

        {/* Header */}
        <div className={styles.headerRow}>
          <Link href="/student/studyGroupPages/findStudyGroup" className={styles.backButton}>
            <Image src="/backbutton.svg" alt="Back" width={28} height={28} />
          </Link>

          <h1 className={styles.title}>Create Study Group</h1>

          <div className={styles.headerSpacer} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Course */}
          <div className={styles.inputSection}>
            <label className={styles.label}>Select Course</label>
            <select
              className={styles.yellowInput}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>Select Course</option>
              <option>Calculus I</option>
              <option>Calculus II</option>
              <option>Biology</option>
              <option>Chemistry I</option>
              <option>Physics</option>
            </select>
          </div>

          {/* Date */}
          <div className={styles.inputSection}>
            <label className={styles.label}>Select Date</label>
            <input
              type="date"
              className={styles.yellowInput}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Time */}
          <div className={styles.inputSection}>
            <label className={styles.label}>Select Time</label>
            <input
              type="time"
              className={styles.yellowInput}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* Max Members */}
          <div className={styles.inputSection}>
            <label className={styles.label}>Max Members</label>
            <input
              type="number"
              min={2}
              max={8}
              className={styles.yellowInput}
              value={maxMembers}
              onChange={(e) => setMaxMembers(e.target.value)}
            />
          </div>

          {/* Include Tutor Toggle */}
          <div className={styles.toggleRow}>
            <label className={styles.label}>Include Tutor?</label>
            <input
              type="checkbox"
              className={styles.toggle}
              checked={includeTutor}
              onChange={() => setIncludeTutor(!includeTutor)}
            />
          </div>

          {/* Tutor Dropdown */}
          {includeTutor && (
            <div className={styles.inputSection}>
              <label className={styles.label}>Select Tutor</label>
              <select
                className={styles.yellowInput}
                value={selectedTutor}
                onChange={(e) => setSelectedTutor(e.target.value)}
              >
                <option>Select Tutor</option>
                <option>John Doe</option>
                <option>Sarah Smith</option>
                <option>Michael Lee</option>
              </select>
            </div>
          )}

          {/* Create Button */}
          <div className={styles.createGroupWrapper}>
            <button className={styles.createGroupButton}>Create Group</button>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
