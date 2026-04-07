"use client";

import Link from "next/link";
import styles from "./widgetCard.module.css";

export default function WidgetCard({
  type,
  isEditing,
  onDelete,
  gpa,
  upcomingTutorSessions = [],
  upcomingStudyGroups = [],
  onCancelSession,
  onLeaveGroup,
  onDeleteGroup,
  loading = false,
}) {
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

  // GPA WIDGET
  if (type === "grades") {
    return wrap(
      <>
        <h3 className={styles.title}>GPA</h3>
        {loading ? (
          <div className={styles.skeletonGPA}></div>
        ) : (
          <div className={styles.gpaValue}>
            {gpa ? Number(gpa).toFixed(2) : "N/A"}
          </div>
        )}
      </>
    );
  }

  // FIND TUTOR
  if (type === "findTutor") {
    return isEditing ? (
      <div className={styles.linkcard}>
        <img src="/userplus.svg" className={styles.icon} />
        <h3 className={styles.linkTitle}>Find a Tutor</h3>
        <button className={styles.deleteButton} onClick={onDelete}>
          <div className={styles.circle}>
            <img src="/trash.svg" />
          </div>
        </button>
      </div>
    ) : (
      <Link href="/student/tutorPages/findTutor" className={styles.link}>
        <img src="/userplus.svg" className={styles.icon} />
        <h3 className={styles.linkTitle}>Find a Tutor</h3>
      </Link>
    );
  }

  // STUDY GROUPS LINK
  if (type === "studyGroups") {
    return isEditing ? (
      <div className={styles.linkcard}>
        <img src="/users.svg" className={styles.icon} />
        <h3 className={styles.linkTitle}>Study Groups</h3>
        <button className={styles.deleteButton} onClick={onDelete}>
          <div className={styles.circle}>
            <img src="/trash.svg" />
          </div>
        </button>
      </div>
    ) : (
      <Link
        href="/student/studyGroupPages/findStudyGroup"
        className={styles.link}
      >
        <img src="/users.svg" className={styles.icon} />
        <h3 className={styles.linkTitle}>Study Groups</h3>
      </Link>
    );
  }

  // UPCOMING SESSIONS
  if (type === "upcomingSessions") {
    return wrap(
      <>
        <h3 className={styles.title}>Upcoming Sessions</h3>

        {loading && (
          <>
            <div className={styles.skeletonRow}></div>
            <div className={styles.skeletonRow}></div>
            <div className={styles.skeletonRow}></div>
          </>
        )}

        {!loading && (
          <>
            <h4 className={styles.subTitle}>Tutoring Sessions</h4>

            {upcomingTutorSessions.length === 0 ? (
              <p className={styles.emptyText}>No upcoming tutoring sessions</p>
            ) : (
              upcomingTutorSessions.map((s) => (
                <div key={s.Session_ID} className={styles.row}>
                  <div className={styles.leftCol}>
                    <span className={styles.course}>{s.course}</span>
                    <span className={styles.time}>{s.timeFormatted}</span>
                    <span className={styles.location}>
                      {s.Session_Loc || "Study Room Library"}
                    </span>
                  </div>

                  <button
                    className={styles.actionButton}
                    onClick={() => onCancelSession(s.Session_ID)}
                  >
                    Cancel
                  </button>
                </div>
              ))
            )}

            <h4 className={styles.subTitle}>Study Groups</h4>

            {upcomingStudyGroups.length === 0 ? (
              <p className={styles.emptyText}>No upcoming study groups</p>
            ) : (
              upcomingStudyGroups.map((g) => (
                <div key={g.Group_ID} className={styles.row}>
                  <div className={styles.leftCol}>
                    <span className={styles.course}>{g.course}</span>
                    <span className={styles.time}>{g.timeFormatted}</span>
                    <span className={styles.location}>Study Room Library</span>
                    <span className={styles.members}>
                      {g.Group_Members} / 8
                    </span>
                    {g.Has_Tutor && (
                      <span className={styles.tutor}>Tutor Assigned</span>
                    )}
                  </div>

                  {g.isLeader && g.Group_Members === 0 ? (
                    <button
                      className={styles.actionButtonDelete}
                      onClick={() => onDeleteGroup(g.Group_ID)}
                    >
                      Disband
                    </button>
                  ) : (
                    <button
                      className={styles.actionButton}
                      onClick={() => onLeaveGroup(g.Group_ID)}
                    >
                      Leave
                    </button>
                  )}
                </div>
              ))
            )}
          </>
        )}
      </>
    );
  }

  return null;
}
