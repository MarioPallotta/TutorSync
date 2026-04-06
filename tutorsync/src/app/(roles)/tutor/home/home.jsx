"use client";

import { useState, useEffect } from "react";
import TopHeader from "@/components/tutor/TopHeader/TopHeader";
import BottomNav from "@/components/tutor/BottomNav/BottomNav";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomeClient() {
  const [pending, setPending] = useState([]);
  const [todaySessions, setTodaySessions] = useState([]);
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [todayGroups, setTodayGroups] = useState([]);
  const [upcomingGroups, setUpcomingGroups] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/tutor/home", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      console.log("Tutor Home Data:", data);

      setPending(data.pendingRequests || []);
      setTodaySessions(data.todaySessions || []);
      setUpcomingSessions(data.upcomingSessions || []);
      setTodayGroups(data.todayStudyGroups || []);
      setUpcomingGroups(data.upcomingStudyGroups || []);
    }

    load();
  }, []);

  async function handleAccept(id) {
    await fetch("/api/tutor/acceptGroup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ groupId: id }),
    });

    setPending((prev) => prev.filter((g) => g.Group_ID !== id));
  }

  async function handleDeny(id) {
    await fetch("/api/tutor/denyGroup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ groupId: id }),
    });

    setPending((prev) => prev.filter((g) => g.Group_ID !== id));
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="user@kent.edu" />

        <div className={styles.content}>
          {/* Pending Requests */}
          {pending.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Pending Group Requests ({pending.length})
              </h2>

              <div className={styles.listContainer}>
                {pending.map((req) => (
                  <div key={req.Group_ID} className={styles.infoCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.subject}>
                        {req.ENROLLMENTS.COURSES.Course_Title}
                      </span>
                      <span className={styles.dateTime}>
                        {req.Group_Time
                          ? new Date(req.Group_Time).toLocaleString()
                          : "TBD"}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.details}>
                        <span className={styles.detailRow}>
                          <Image
                            className={styles.icon}
                            src="/location.svg"
                            alt="location"
                            width={18}
                            height={18}
                          />
                          Study Room Library
                        </span>

                        <span className={styles.detailRow}>
                          <Image
                            className={styles.icon}
                            src="/person.svg"
                            alt="person"
                            width={18}
                            height={18}
                          />
                          {req.Group_Members} / 8
                        </span>
                      </div>

                      <div className={styles.actions}>
                        <button
                          className={styles.acceptBtn}
                          onClick={() => handleAccept(req.Group_ID)}
                        >
                          Accept
                        </button>

                        <button
                          className={styles.denyBtn}
                          onClick={() => handleDeny(req.Group_ID)}
                        >
                          Deny
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Today's Study Groups */}
          {todayGroups.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Today&apos;s Study Groups</h2>
              <div className={styles.listContainer}>
                {todayGroups.map((group) => (
                  <div key={group.Group_ID} className={styles.infoCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.subject}>
                        {group.ENROLLMENTS.COURSES.Course_Title}
                      </span>
                      <span className={styles.dateTime}>
                        {group.Group_Time
                          ? new Date(group.Group_Time).toLocaleTimeString()
                          : ""}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/person.svg"
                          alt="members"
                          width={18}
                          height={18}
                        />
                        {group.Group_Members} / 8
                      </span>

                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/location.svg"
                          alt="location"
                          width={18}
                          height={18}
                        />
                        Study Room Library
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Today Sessions */}
          {todaySessions.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Today&apos;s Tutoring Sessions</h2>
              <div className={styles.listContainer}>
                {todaySessions.map((session) => (
                  <div key={session.Session_ID} className={styles.infoCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.subject}>
                        {session.ENROLLMENTS.COURSES.Course_Title}
                      </span>

                      <span className={styles.dateTime}>
                        {session.Session_Time
                          ? new Date(session.Session_Time).toLocaleTimeString()
                          : ""}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/person.svg"
                          alt="student"
                          width={18}
                          height={18}
                        />
                        {session.USERS?.Name || "Unknown Student"}
                      </span>

                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/location.svg"
                          alt="location"
                          width={18}
                          height={18}
                        />
                        {session.Session_Loc || "Study Room Library"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Tutoring Sessions */}
          {upcomingSessions.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Upcoming Tutoring Sessions</h2>
              <div className={styles.listContainer}>
                {upcomingSessions.map((session) => (
                  <div key={session.Session_ID} className={styles.infoCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.subject}>
                        {session.ENROLLMENTS.COURSES.Course_Title}
                      </span>

                      <span className={styles.dateTime}>
                        {session.Session_Date
                          ? new Date(session.Session_Date).toLocaleDateString()
                          : ""}
                      </span>
                    </div>

                    <span className={styles.detailRow}>
                      <Image
                        className={styles.icon}
                        src="/person.svg"
                        alt="student"
                        width={18}
                        height={18}
                      />
                      {session.USERS?.Name || "Unknown Student"}
                    </span>

                    <div className={styles.cardBody}>
                      <span className={styles.dateTimeUpcoming}>
                        Time:{" "}
                        {session.Session_Time
                          ? new Date(session.Session_Time).toLocaleTimeString()
                          : ""}
                      </span>

                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/location.svg"
                          alt="location"
                          width={18}
                          height={18}
                        />
                        {session.Session_Loc || "Study Room Library"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Study Groups */}
          {upcomingGroups.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Upcoming Study Groups</h2>
              <div className={styles.listContainer}>
                {upcomingGroups.map((group) => (
                  <div key={group.Group_ID} className={styles.infoCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.subject}>
                        {group.ENROLLMENTS.COURSES.Course_Title}
                      </span>

                      <span className={styles.dateTime}>
                        {group.Group_Date
                          ? new Date(group.Group_Date).toLocaleDateString()
                          : ""}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/person.svg"
                          alt="members"
                          width={18}
                          height={18}
                        />
                        {group.Group_Members} / 8
                      </span>

                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/clock.svg"
                          alt="time"
                          width={18}
                          height={18}
                        />
                        {group.Group_Time
                          ? new Date(group.Group_Time).toLocaleTimeString()
                          : ""}
                      </span>

                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/location.svg"
                          alt="location"
                          width={18}
                          height={18}
                        />
                        Study Room Library
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link href="./schedule" className={styles.requestButton}>
            Request Availability
          </Link>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
