"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./widgetCard.module.css";

export default function WidgetCard({ type, isEditing, onDelete }) {
  // Mock data for now
  const mockData = {
    grades: [
      { course: "Algebra", grade: "A+" },
      { course: "Writing", grade: "B+" },
      { course: "Chemistry", grade: "A" },
    ],
    upcomingSessions: [
      { title: "Math Tutoring", time: "Tomorrow 2 PM" },
      { title: "Study Group", time: "Friday 4 PM" },
    ],
  };

  // ⭐ Helper to wrap each widget with delete button
  const wrap = (content) => (
    <div className={styles.card}>
      {isEditing && (
        <button className={styles.deleteButton} onClick={onDelete}>
          <div className={styles.circle}>
          <img src="/trash.svg" alt="Delete widget" />
          </div>
        </button>
      )}
      {content}
    </div>
  );

  // Render based on widget type
  if (type === "grades") {
    return wrap(
      <>
        <h3 className={styles.title}>Grades</h3>
        {mockData.grades.map((g, i) => (
          <div key={i} className={styles.row}>
            <span>{g.course}</span>
            <span>{g.grade}</span>
          </div>
        ))}
      </>
    );
  }

  if (type === "findTutor") {
    return (
      <>
        {isEditing ? (
        <div className={styles.linkcard}>
        <img src="/userplus.svg" alt="Find a Tutor" className={styles.icon} />
        <h3 className={styles.linkTitle}>Find a Tutor</h3>
        <button className={styles.deleteButton} onClick={onDelete}>
          <div className={styles.circle}>
          <img src="/trash.svg" alt="Delete widget" />
          </div>
        </button>
      </div>
      ) : (
      <Link href="/user/findTutor" className={styles.link}>
      <img src="/userplus.svg" alt="Find a Tutor" className={styles.icon} />
        <h3 className={styles.linkTitle}>Find a Tutor</h3>
      </Link>
    )}
    </>
  );
}

  if (type === "studyGroups") {
    return (
      <>
        {isEditing ? (
        <div className={styles.linkcard}>
        <img src="/users.svg" alt="Study Groups" className={styles.icon} />
        <h3 className={styles.linkTitle}>Study Groups</h3>
        <button className={styles.deleteButton} onClick={onDelete}>
          <div className={styles.circle}>
          <img src="/trash.svg" alt="Delete widget" />
          </div>
        </button>
      </div>
      ) : (
      <Link href="/user/studyGroups" className={styles.link}>
      <img src="/users.svg" alt="Study Groups" className={styles.icon} />
        <h3 className={styles.linkTitle}>Study Groups</h3>
      </Link>
    )}
    </>
  );
}

  if (type === "upcomingSessions") {
    return wrap(
      <>
        <h3 className={styles.title}>Upcoming Sessions</h3>
        {mockData.upcomingSessions.map((s, i) => (
          <div key={i} className={styles.row}>
            <span>{s.title}</span>
            <span>{s.time}</span>
          </div>
        ))}
      </>
    );
  }

  return null;
}
