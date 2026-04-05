"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function GroupDetailsClient({ group }) {
  const { data: session } = useSession();
  const userId = Number(session?.user?.id);

  const [isJoining, setIsJoining] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");

  const isCreator = userId === group.User_ID;

  const participants = group.STUDY_GROUP_MEMBERS
    .filter((m) => m.User_ID !== group.User_ID)
    .map((m) => ({
      name: m.USERS.Name,
    }));

  const isMember = group.STUDY_GROUP_MEMBERS.some(
    (m) => m.User_ID === userId
  );

  const isFull = participants.length >= 8;

  async function handleJoin() {
    if (isCreator) {
      setError("You cannot join a group you created.");
      return;
    }

    if (isMember) {
      setError("You are already a member of this group.");
      return;
    }

    if (isFull) {
      setError("This group is already full.");
      return;
    }

    setIsJoining(true);
    setError("");

    const res = await fetch("/api/joinStudyGroup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        groupId: group.Group_ID,
        userId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setIsJoining(false);
      return;
    }

    setIsConfirmed(true);
  }

  async function handleJoin() {
  setError("");

  if (isCreator) {
    setError("You created this group.");
    return;
  }

  if (isMember) {
    setError("You have already joined this group.");
    return;
  }

  if (isFull) {
    setError("This group is already full.");
    return;
  }

  setIsJoining(true);

  const res = await fetch("/api/joinStudyGroup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      groupId: group.Group_ID,
      userId,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    setError(data.error);
    setIsJoining(false);
    return;
  }

  setIsConfirmed(true);
}


  if (isConfirmed) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.topSpacer} />
          <div className={styles.confirmationModal}>
            <div className={styles.confirmationContent}>
              <Image src="/check.svg" alt="Confirmed" width={64} height={64} />
              <h2 className={styles.confirmationTitle}>Joined!</h2>
              <p className={styles.confirmationText}>
                You have successfully joined the study group for{" "}
                {group.ENROLLMENTS.COURSES.Course_Title}.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer} />

        <div className={styles.headerRow}>
          <Link
            href="/student/studyGroupPages/findStudyGroup"
            className={styles.backButton}
          >
            <Image src="/backbutton.svg" alt="Back" width={28} height={28} />
          </Link>

          <h1 className={styles.title}>Group Details</h1>

          <div className={styles.headerSpacer} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.courseTitle}>
            {group.ENROLLMENTS.COURSES.Course_Title}
          </h2>

          <div className={styles.infoBox}>
            <p className={styles.infoLine}>
              <strong>Date:</strong>{" "}
              {new Date(group.Group_Date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className={styles.infoLine}>
              <strong>Time:</strong>{" "}
              {group.Group_Time
                ? new Date(group.Group_Time).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })
                : "TBD"}
            </p>
            <p className={styles.infoLine}>
              <strong>Location:</strong> Study Room Library
            </p>
          </div>

          <div className={styles.creatorSection}>
            <p className={styles.creatorHeader}>Group Creator:</p>
            <p className={styles.creatorName}>{group.ENROLLMENTS.USERS.Name}</p>
          </div>

          <div className={styles.participantSection}>
            <p className={styles.participantHeader}>
              Participants ({participants.length} / 8)
            </p>

            <div className={styles.participantList}>
              {participants.map((p, i) => (
                <p key={i} className={styles.participantName}>
                  {p.name}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.tutorBox}>
            <p className={styles.tutorStatus}>
              <strong>Tutor:</strong>{" "}
              {group.Has_Tutor ? "Assigned" : "Requested"}
            </p>
            {!group.Has_Tutor && (
              <p className={styles.tutorSub}>awaiting confirmation</p>
            )}
          </div>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.joinWrapper}>
            <button
  className={styles.joinButton}
  disabled={isJoining}
  onClick={handleJoin}
>
  {isJoining ? "Joining..." : "Join Group"}
</button>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
