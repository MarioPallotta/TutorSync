"use client";

import { useState } from "react";
import TopHeader from "@/components/tutor/TopHeader/TopHeader";
import BottomNav from "@/components/tutor/BottomNav/BottomNav";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function TutorHomePage() {
  // Mock data - replace these with your actual state/API calls
  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 1,
      subject: "Calculus I",
      date: "Wednesday, 3:00 PM",
      location: "Library",
      capacity: "4 / 8",
    },
    {
      id: 2,
      subject: "Calculus I",
      date: "Wednesday, 3:00 PM",
      location: "Library",
      capacity: "4 / 8",
    },
  ]);

  const [todaySessions, setTodaySessions] = useState([
    {
      id: 3,
      subject: "Calculus I",
      time: "3:00 PM",
      student: "Josh S.",
      platform: "Zoom",
    },
    {
      id: 4,
      subject: "Calculus I",
      time: "4:00 PM",
      student: "Josh S.",
      platform: "Zoom",
    },
  ]);

  const [upcomingSessions, setUpcomingSessions] = useState([
    { id: 5, subject: "Calculus I", date: "Mon, Feb 23", time: "3:00 PM" },
    { id: 6, subject: "Calculus II", date: "Mon, Feb 23", time: "4:00 PM" },
  ]);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader email="user@kent.edu" />

        <div className={styles.content}>
          {/* Pending Group Requests */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Pending Group Requests ({pendingRequests.length})
            </h2>
            <div className={styles.listContainer}>
              {pendingRequests.map((req) => (
                <div key={req.id} className={styles.infoCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.subject}>{req.subject}</span>
                    <span className={styles.dateTime}>{req.date}</span>
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
                        {req.location}
                      </span>
                      <span className={styles.detailRow}>
                        <Image
                          className={styles.icon}
                          src="/person.svg"
                          alt="person"
                          width={18}
                          height={18}
                        />
                        {req.capacity}
                      </span>
                    </div>
                    <div className={styles.actions}>
                      <button className={styles.acceptBtn}>Accept</button>
                      <button className={styles.denyBtn}>Deny</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Today</h2>
            <div className={styles.listContainer}>
              {todaySessions.map((session) => (
                <div key={session.id} className={styles.infoCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.subject}>{session.subject}</span>
                    <span className={styles.dateTime}>{session.time}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.detailsHorizontal}>
                      <span className={styles.detailRow}>
                        <svg
                          className={styles.icon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        {session.student}
                      </span>
                      <span className={styles.detailRow}>
                        <svg
                          className={styles.icon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polygon points="23 7 16 12 23 17 23 7"></polygon>
                          <rect
                            x="1"
                            y="5"
                            width="15"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                        </svg>
                        {session.platform}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Upcoming</h2>
            <div className={styles.listContainer}>
              {upcomingSessions.map((session) => (
                <div key={session.id} className={styles.infoCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.subject}>{session.subject}</span>
                    <span className={styles.dateTime}>{session.date}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.dateTimeUpcoming}>
                      {session.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link href="./schedule" className={styles.requestButton}>
            Request Availability
          </Link>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
