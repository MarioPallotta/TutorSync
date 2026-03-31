"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
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

const subjects = [
  "Select a subject",
  "Chemistry",
  "Math",
  "Physics",
  "Biology",
  "Computer Science",
];

export default function FindTutorPage() {
  const [selectedSubject, setSelectedSubject] = useState("Select a subject");
  // store date as raw YYYY-MM-DD string to avoid timezone issues
  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);

  // formatted display string (e.g., "Today, Mar 25" or "Mar 25")
  const formattedDate = useMemo(() => {
    if (!selectedDate) return "Select Date";

    const [year, month, day] = selectedDate.split("-");
    // create a date at local midnight to avoid timezone shift
    const dateObj = new Date(`${year}-${month}-${day}T00:00:00`);

    const today = new Date();
    const isToday =
      dateObj.getFullYear() === today.getFullYear() &&
      dateObj.getMonth() === today.getMonth() &&
      dateObj.getDate() === today.getDate();

    const shortDate = dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    return isToday ? `Today, ${shortDate}` : shortDate;
  }, [selectedDate]);

  const filteredTutors = useMemo(() => {
    if (selectedSubject === "Select a subject") return [];
    return mockTutors.filter((tutor) => tutor.subject === selectedSubject);
  }, [selectedSubject]);

  const handleOpenDatePicker = () => {
    if (!dateInputRef.current) return;
    if (typeof dateInputRef.current.showPicker === "function") {
      dateInputRef.current.showPicker();
    } else {
      dateInputRef.current.click();
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer} />

        <div className={styles.headerRow}>
          <Link
            href="/student/home"
            className={styles.backButton}
            aria-label="Go back"
          >
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
              onClick={handleOpenDatePicker}
              aria-label="Select date"
            >
              <div className={styles.dateBarLeft}>
                <Image
                  src="/calendar.svg"
                  alt="Calendar"
                  width={18}
                  height={18}
                />
                <span className={styles.dateText}>{formattedDate}</span>
              </div>

              <span className={styles.dateChevron}>⌄</span>
            </button>

            <input
              type="date"
              ref={dateInputRef}
              className={styles.hiddenDateInput}
              value={selectedDate}
              onChange={(e) => {
                // store raw YYYY-MM-DD string to avoid timezone conversion issues
                setSelectedDate(e.target.value);
              }}
            />
          </div>

          <div className={styles.listSection}>
            <h2 className={styles.sectionTitle}>Available Tutors</h2>

            <div className={styles.tutorList}>
              {filteredTutors.length === 0 && (
                <p className={styles.emptyState}>
                  {selectedSubject === "Select a subject"
                    ? "Please select a subject to view available tutors."
                    : "No tutors available for this subject on the selected date."}
                </p>
              )}

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

                  <Link
                    className={styles.bookButton}
                    href="/student/tutorPages/bookTutor"
                    aria-label={`Book ${tutor.name}`}
                  >
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
