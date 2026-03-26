"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/user/BottomNav/BottomNav";
import styles from "./page.module.css";

const mockTutors = [
  {
    id: 1,
    name: "Sarah M.",
    subject: "Chemistry",
    availability: "3:00PM - 6:00PM",
  },
  {
    id: 2,
    name: "Joe Q.",
    subject: "Chemistry",
    availability: "3:00PM - 6:00PM",
  },
  {
    id: 3,
    name: "Earl E.",
    subject: "Chemistry",
    availability: "3:00PM - 6:00PM",
  },
  {
    id: 4,
    name: "Samuel M.",
    subject: "Chemistry",
    availability: "3:00PM - 6:00PM",
  },
  {
    id: 5,
    name: "Craig T.",
    subject: "Chemistry",
    availability: "3:00PM - 6:00PM",
  },
];

const subjects = ["Select a subject", "Chemistry", "Math", "Physics", "Biology", "Computer Science"];

export default function FindTutorPage() {
  const [selectedSubject, setSelectedSubject] = useState("Select a subject");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = useMemo(() => {
    return selectedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }, [selectedDate]);

  const filteredTutors = useMemo(() => {
    return mockTutors.filter((tutor) => tutor.subject === selectedSubject);
  }, [selectedSubject]);

  const handleNextDay = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    setSelectedDate(next);
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer}></div>

        <div className={styles.headerRow}>
          <Link href="/user/home" className={styles.backButton} aria-label="Go back">
            <Image src="/backbutton.svg" alt="Back" width={28} height={28} />
          </Link>

          <h1 className={styles.title}>Find Tutor</h1>

          <div className={styles.headerSpacer} />
        </div>

        <div className={styles.content}>
          <div className={styles.subjectSection}>
            <select
              className={styles.subjectSelect}
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.dateBarWrapper}>
            <button
              type="button"
              className={styles.dateBar}
              onClick={handleNextDay}
              aria-label="Select date"
              title="Temporary mock date selector (click advances date)"
            >
              <div className={styles.dateBarLeft}>
                <Image src="/calendar.svg" alt="Calendar" width={18} height={18} />
                <span className={styles.dateText}>Today, {formattedDate}</span>
              </div>

              <span className={styles.dateChevron}>⌄</span>
            </button>
          </div>

          <div className={styles.listSection}>
            <h2 className={styles.sectionTitle}>Available Tutors</h2>

            <div className={styles.tutorList}>
              {filteredTutors.map((tutor) => (
                <div key={tutor.id} className={styles.tutorCard}>
                  <div className={styles.tutorLeft}>
                    <div className={styles.avatarCircle}>
                      <Image
                        src="/user-circle.svg"
                        alt={`${tutor.name} profile`}
                        width={34}
                        height={34}
                      />
                    </div>

                    <div className={styles.tutorInfo}>
                      <p className={styles.tutorName}>{tutor.name}</p>
                      <p className={styles.tutorAvailability}>
                        Available: {tutor.availability}
                      </p>
                    </div>
                  </div>

                  <Link className={styles.bookButton} href="/user/tutorPages/bookTutor" aria-label={`Book ${tutor.name}`}>
                    <span>Book</span>
                    <span className={styles.bookArrow}>›</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}