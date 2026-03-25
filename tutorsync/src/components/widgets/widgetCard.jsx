"use client";

import styles from "./widgetCard.module.css";

export default function WidgetCard({ type, isEditing, onDelete }) {
  // Mock data for now
  const mockData = {
    grades: [
      { course: "Algebra", grade: "A+" },
      { course: "Writing", grade: "B+" },
      { course: "Chemistry", grade: "A" },
    ],
    findTutor: {
      tutor: "Dr. Smith",
      subject: "Calculus",
      availability: "Today 3–5 PM",
    },
    studyGroups: [
      { name: "Bio 101 Group", members: 5 },
      { name: "History Review", members: 3 },
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
          <img src="/trash.svg" alt="Delete widget" />
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
    const t = mockData.findTutor;
    return wrap(
      <>
        <h3 className={styles.title}>Tutor Match</h3>
        <p>{t.tutor}</p>
        <p>{t.subject}</p>
        <p>{t.availability}</p>
      </>
    );
  }

  if (type === "studyGroups") {
    return wrap(
      <>
        <h3 className={styles.title}>Study Groups</h3>
        {mockData.studyGroups.map((g, i) => (
          <div key={i} className={styles.row}>
            <span>{g.name}</span>
            <span>{g.members} members</span>
          </div>
        ))}
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
