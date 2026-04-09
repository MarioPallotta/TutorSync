"use client";

import Image from "next/image";
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
      <div className={styles.gpaCard}>
        <h3 className={styles.gpaTitle}>Semester GPA:</h3>
        {loading ? (
          <div className={styles.skeletonGPA}></div>
        ) : (
          <div className={styles.gpaValue}>
            {gpa ? Number(gpa).toFixed(2) : "N/A"}
          </div>
        )}
      </div>,
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
    return isEditing ? (
      <>
        <div className={styles.sessionCard}>
          <button className={styles.deleteButton} onClick={onDelete}>
            <div className={styles.circle}>
              <img src="/trash.svg" />
            </div>
          </button>
          <h3 className={styles.sessiontitle}>Upcoming Sessions</h3>

          {loading && (
            <>
              <div className={styles.skeletonRow}></div>
              <div className={styles.skeletonRow}></div>
              <div className={styles.skeletonRow}></div>
            </>
          )}

          {!loading && (
            <>
              {/* TUTORING SESSIONS */}
              <h4 className={styles.subTitle}>
                <Image
                  src="/userplus.svg"
                  alt="user plus icon"
                  width={16}
                  height={16}
                  className={styles.subIcon}
                />
                Tutoring Sessions
              </h4>

              {upcomingTutorSessions.length === 0 ? (
                <p className={styles.emptyText}>
                  No upcoming tutoring sessions
                </p>
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
                  </div>
                ))
              )}

              {/* STUDY GROUPS */}
              <h4 className={styles.subTitle}>
                <Image
                  src="/users.svg"
                  alt="users icon"
                  width={16}
                  height={16}
                  className={styles.subIcon}
                />
                Study Groups
              </h4>

              {upcomingStudyGroups.length === 0 ? (
                <p className={styles.emptyText}>No upcoming study groups</p>
              ) : (
                upcomingStudyGroups.map((g) => (
                  <div key={g.Group_ID} className={styles.row}>
                    <div className={styles.leftCol}>
                      <span className={styles.course}>{g.course}</span>
                      <span className={styles.time}>{g.timeFormatted}</span>
                      <span className={styles.location}>
                        Study Room Library
                      </span>
                      <span className={styles.members}>
                        {g.Group_Members} / 8
                      </span>

                      {g.Has_Tutor && !g.Is_Accepted && (
                        <span className={styles.tutor}>Tutor Requested</span>
                      )}

                      {g.Has_Tutor && g.Is_Accepted && (
                        <span className={styles.tutorAccepted}>
                          Tutor: {g.Tutor_Name} Accepted
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </>
    ) : (
      <div className={styles.sessionCard}>
        <h3 className={styles.sessiontitle}>Upcoming Sessions</h3>

        {loading && (
          <>
            <div className={styles.skeletonRow}></div>
            <div className={styles.skeletonRow}></div>
            <div className={styles.skeletonRow}></div>
          </>
        )}

        {!loading && (
          <>
            {/* TUTORING SESSIONS */}
            <h4 className={styles.subTitle}>
              <Image
                src="/userplus.svg"
                alt="user plus icon"
                width={16}
                height={16}
                className={styles.subIcon}
              />
              Tutoring Sessions
            </h4>

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

            {/* STUDY GROUPS */}
            <h4 className={styles.subTitle}>
              <Image
                src="/users.svg"
                alt="users icon"
                width={16}
                height={16}
                className={styles.subIcon}
              />
              Study Groups
            </h4>

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

                    {g.Has_Tutor && !g.Is_Accepted && (
                      <span className={styles.tutor}>Tutor Requested</span>
                    )}

                    {g.Has_Tutor && g.Is_Accepted && (
                      <span className={styles.tutorAccepted}>
                        Tutor: {g.Tutor_Name} Accepted
                      </span>
                    )}
                  </div>

                  {g.isLeader && g.Group_Members === 1 ? (
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
      </div>
    );
  }

  // NOTIFICATIONS WIDGET
  if (type === "notifications") {
    return wrap(
      <div className={styles.notificationsCard}>
        <div className={styles.notificationsHeader}>
          <Image
            src="/bellwhite.svg"
            alt="notifications icon"
            width={20}
            height={20}
            className={styles.icon}
          />
          <h3 className={styles.notificationsTitle}>Notifications</h3>
        </div>
        <div className={styles.nrow}>
          <Image
            src="/redellipse.svg"
            alt="notifications icon"
            width={10}
            height={10}
            className={styles.nicon}
          />
          <span className={styles.course}>
            Your tutor accepted your request
          </span>
        </div>

        <div className={styles.nrow}>
          <Image
            src="/redellipse.svg"
            alt="notifications icon"
            width={10}
            height={10}
            className={styles.nicon}
          />
          <span className={styles.course}>
            A new study group was created for Calculus
          </span>
        </div>

        <div className={styles.nrow}>
          <Image
            src="/redellipse.svg"
            alt="notifications icon"
            width={10}
            height={10}
            className={styles.nicon}
          />
          <span className={styles.course}>
            Reminder: Session tomorrow at 3 PM
          </span>
        </div>
      </div>,
    );
  }

  // TUTORING SUGGESTIONS WIDGET
  if (type === "tutoringSuggestions") {
    return wrap(
      <div className={styles.tutoringSuggestionsCard}>
        <h3 className={styles.tutoringSuggestionsTitle}>
          Tutoring Suggestions
        </h3>

        <div className={styles.tutoringSuggestionsRows}>
          <div className={styles.tSrow}>
            <span className={styles.suggestion}>
              Try a Calculus I review session
            </span>
          </div>

          <div className={styles.tSrow}>
            <span className={styles.suggestion}>
              Improve study habits with weekly tutoring
            </span>
          </div>

          <div className={styles.tSrow}>
            <span className={styles.suggestion}>
              Recommended: Chemistry II tutoring
            </span>
          </div>
        </div>
      </div>,
    );
  }

  // FLASHLINE LINK WIDGET
  if (type === "flashline") {
    return isEditing ? (
      <div className={styles.flashlineCard}>
        <div className={styles.flashlineHeader}>
          <Image
            src="/kentstateimage.png"
            alt="external link icon"
            width={100}
            height={50}
            className={styles.flashlineicon}
          />
          <h3 className={styles.flashlineTitle}>FlashLine Portal</h3>

          <button className={styles.deleteButton} onClick={onDelete}>
            <div className={styles.circle}>
              <img src="/trash.svg" alt="Delete widget" />
            </div>
          </button>
        </div>
        <div className={styles.flashlineContent}>
          <p className={styles.flashlineText}>Take Me To FlashLine</p>
        </div>
      </div>
    ) : (
      <div className={styles.flashlineCard}>
        <div className={styles.flashlineLinkHeader}>
          <Image
            src="/kentstateimage.png"
            alt="external link icon"
            width={100}
            height={50}
            className={styles.flashlineicon}
          />
          <h3 className={styles.flashlineLinkTitle}>FlashLine Portal</h3>
        </div>
        <Link href="https://flashline.kent.edu/" target="_blank">
          <div className={styles.flashlineLinkContent}>
            <p className={styles.flashlineLinkText}>Take Me To FlashLine</p>
          </div>
        </Link>
      </div>
    );
  }

  return null;
}
