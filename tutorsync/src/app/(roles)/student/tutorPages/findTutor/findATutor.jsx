"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function FindTutorClient({ courses }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Select a subject");
  const [selectedDate, setSelectedDate] = useState("");
  const [tutors, setTutors] = useState([]);
  const daysInMonth = Array.from(
    { length: new Date(currentYear, currentMonth + 1, 0).getDate() },
    (_, i) => i + 1,
  );

  const subjects = useMemo(() => {
    return ["Select a subject", ...courses.map((c) => `${c.Course_Title}`)];
  }, [courses]);

  const formattedDate = useMemo(() => {
    if (!selectedDate) return "Select Date";

    const [year, month, day] = selectedDate.split("-");
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

  async function fetchTutors() {
    if (selectedSubject === "Select a subject" || !selectedDate) return;

    const res = await fetch("/api/getTutors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseTitle: selectedSubject,
        date: selectedDate,
      }),
    });

    const data = await res.json();
    setTutors(data.tutors || []);
  }

  useEffect(() => {
    fetchTutors();
  }, [selectedSubject, selectedDate]);

  useEffect(() => {
    if (showCalendar) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showCalendar]);

  const handleOpenDatePicker = () => {
    setShowCalendar(true);
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSpacer} />

        <div className={styles.headerRow}>
          <Link href="/student/home" className={styles.backButton}>
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

              <Image
                className={styles.dateChevron}
                src="/chevron-down.svg"
                alt="Expand date picker"
                width={18}
                height={18}
              />
            </button>
          </div>

          <div className={styles.listSection}>
            <h2 className={styles.sectionTitle}>Available Tutors</h2>

            <div className={styles.tutorList}>
              {tutors.length === 0 && (
                <p className={styles.emptyState}>
                  {selectedSubject === "Select a subject"
                    ? "Please select a subject to view available tutors."
                    : "No tutors available for this subject on the selected date."}
                </p>
              )}

              {tutors.map((tutor) => (
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
                    href={`/student/tutorPages/bookTutor/${tutor.id}`}
                  >
                    <span>Book</span>
                    <span className={styles.bookArrow}>›</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showCalendar && (
          <div className={styles.calendarOverlay}>
            <div className={styles.calendarModal}>
              <div className={styles.calendarHeader}>
                <select
                  value={currentMonth}
                  onChange={(e) => setCurrentMonth(Number(e.target.value))}
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i} value={i}>
                      {new Date(0, i).toLocaleString("en-US", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>

                <select
                  value={currentYear}
                  onChange={(e) => setCurrentYear(Number(e.target.value))}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <option key={i} value={currentYear - 2 + i}>
                      {currentYear - 2 + i}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.calendarGrid}>
                {daysInMonth.map((day) => (
                  <button
                    key={day}
                    className={styles.calendarDay}
                    onClick={() => {
                      const formatted = `${currentYear}-${String(
                        currentMonth + 1,
                      ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                      setSelectedDate(formatted);
                      setShowCalendar(false);
                    }}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <button
                className={styles.closeCalendar}
                onClick={() => setShowCalendar(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <BottomNav />
      </section>
    </main>
  );
}
