"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function CreateStudyGroupPage({ courses, tutors }) {
  const [course, setCourse] = useState("Select Course");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [maxMembers, setMaxMembers] = useState(8);
  const [includeTutor, setIncludeTutor] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState("Select Tutor");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const router = useRouter();

  // Calendar modal state
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState(false);

  // Time modal state
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [selectedHour, setSelectedHour] = useState(8);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState("AM");

  // Max Members modal state
  const [showMaxMembersModal, setShowMaxMembersModal] = useState(false);

  const daysInMonth = Array.from(
    { length: new Date(currentYear, currentMonth + 1, 0).getDate() },
    (_, i) => i + 1,
  );

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const memberOptions = Array.from({ length: 7 }, (_, i) => i + 2);

  const formattedDate = useMemo(() => {
    if (!date) return "Select Date";

    const [year, month, day] = date.split("-");
    const dateObj = new Date(`${year}-${month}-${day}T00:00:00`);

    const today = new Date();
    const isToday =
      dateObj.getFullYear() === today.getFullYear() &&
      dateObj.getMonth() === today.getMonth() &&
      dateObj.getDate() === today.getDate();

    const shortDate = dateObj.toLocaleDateString("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
    });

    return isToday ? `Today, ${shortDate}` : shortDate;
  }, [date]);

  const formattedTime = useMemo(() => {
    const hourStr = String(selectedHour).padStart(2, "0");
    const minStr = String(selectedMinute).padStart(2, "0");
    return `${hourStr}:${minStr}`;
  }, [selectedHour, selectedMinute]);

  const formattedMaxMembers = useMemo(() => {
    return `${maxMembers} Members`;
  }, [maxMembers]);

  useEffect(() => {
    if (showCalendar || showTimeModal || showMaxMembersModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showCalendar, showTimeModal, showMaxMembersModal]);

  const handleOpenDatePicker = () => {
    setShowCalendar(true);
  };

  const handleOpenTimeModal = () => {
    setShowTimeModal(true);
  };

  const handleOpenMaxMembersModal = () => {
    setShowMaxMembersModal(true);
  };

  async function handleCreate() {
    setError("");

    const timeString = `${String(selectedHour).padStart(2, "0")}:${String(
      selectedMinute,
    ).padStart(2, "0")} ${selectedPeriod}`;

    if (
      course === "Select Course" ||
      !date ||
      (includeTutor && selectedTutor === "Select Tutor")
    ) {
      setError("Please fill out all required fields");
      return;
    }

    try {
      const res = await fetch("/api/createStudyGroup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseTitle: course,
          date,
          time: timeString,
          maxMembers,
          includeTutor,
          tutorId: includeTutor ? selectedTutor : null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create group");
        return;
      }

      setSuccess(true);

      setTimeout(() => {
        router.push("/student/home");
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  }

  if (success) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.topSpacer} />

          <div className={styles.confirmationModal}>
            <div className={styles.confirmationContent}>
              <Image src="/check.svg" alt="Confirmed" width={64} height={64} />
              <h2 className={styles.confirmationTitle}>Group Created!</h2>
              <p className={styles.confirmationText}>
                Your study group for {course} on {date} at {time} has been
                created.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  const uniqueTutors = Array.from(
    new Map(tutors.map((t) => [t.id, t])).values(),
  );

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

          <h1 className={styles.title}>Create Study Group</h1>

          <div className={styles.headerSpacer} />
        </div>

        <div className={styles.content}>
          <div className={styles.inputSection}>
            <label className={styles.label}>Select Course</label>
            <select
              className={styles.yellowInput}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>Select Course</option>
              {courses.map((c) => (
                <option key={c.Course_ID} value={c.Course_Title}>
                  {c.Course_Title}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputSection}>
            <label className={styles.label}>Select Date</label>
            <div
              className={styles.yellowInputCal}
              onClick={handleOpenDatePicker}
            >
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
          </div>

          <div className={styles.inputSection}>
            <label className={styles.label}>Select Time</label>
            <div
              className={styles.yellowInputCal}
              onClick={handleOpenTimeModal}
            >
              <button
                type="button"
                className={styles.dateBar}
                onClick={handleOpenTimeModal}
              >
                <div className={styles.dateBarLeft}>
                  <Image src="/clock.svg" alt="Time" width={18} height={18} />
                  <span className={styles.dateText}>{formattedTime}</span>
                </div>

                <Image
                  className={styles.dateChevron}
                  src="/chevron-down.svg"
                  alt="Expand time picker"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
          {/* Can add if we alter database to include max members for study groups

          <div className={styles.inputSection}>
            <label className={styles.label}>Max Members</label>
            <div className={styles.yellowInputCal} onClick={handleOpenMaxMembersModal}>
              <button
                type="button"
                className={styles.dateBar}
                onClick={handleOpenMaxMembersModal}
              >
                <div className={styles.dateBarLeft}>
                  <Image
                    src="/users.svg"
                    alt="Members"
                    width={18}
                    height={18}
                  />
                  <span className={styles.dateText}>{formattedMaxMembers}</span>
                </div>

                <Image
                  className={styles.dateChevron}
                  src="/chevron-down.svg"
                  alt="Expand members picker"
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </div>
          */}

          <div className={styles.toggleRow}>
            <label className={styles.label}>Include Tutor?</label>
            <input
              type="checkbox"
              className={styles.toggle}
              checked={includeTutor}
              onChange={() => setIncludeTutor(!includeTutor)}
            />
          </div>

          {includeTutor && (
            <div className={styles.inputSection}>
              <label className={styles.label}>Select Tutor</label>
              <select
                className={styles.yellowInput}
                value={selectedTutor}
                onChange={(e) => setSelectedTutor(e.target.value)}
              >
                <option>Select Tutor</option>
                {uniqueTutors.map((t, index) => (
                  <option key={`${t.id}-${index}`} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.createGroupWrapper}>
            <button
              className={styles.createGroupButton}
              disabled={isJoining}
              onClick={handleCreate}
            >
              {isJoining ? "Creating..." : "Create Group"}
            </button>
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
                        timeZone: "America/New_York",
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
                      setDate(formatted);
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

        {showTimeModal && (
          <div className={styles.calendarOverlay}>
            <div className={styles.calendarModal}>
              <h3 className={styles.modalTitle}>Select Time</h3>

              <div className={styles.timePickerContainer}>
                <div className={styles.timeColumn}>
                  <h4 className={styles.timeColumnLabel}>Hour</h4>
                  <div className={styles.timeScroller}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((hour) => (
                      <button
                        key={hour}
                        className={`${styles.timeOption} ${
                          selectedHour === hour ? styles.timeOptionSelected : ""
                        }`}
                        onClick={() => setSelectedHour(hour)}
                      >
                        {hour}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.timeColumn}>
                  <h4 className={styles.timeColumnLabel}>Minute</h4>
                  <div className={styles.timeScroller}>
                    {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(
                      (minute) => (
                        <button
                          key={minute}
                          className={`${styles.timeOption} ${
                            selectedMinute === minute
                              ? styles.timeOptionSelected
                              : ""
                          }`}
                          onClick={() => setSelectedMinute(minute)}
                        >
                          {String(minute).padStart(2, "0")}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className={styles.timeColumn}>
                  <h4 className={styles.timeColumnLabel}>AM / PM</h4>
                  <div className={styles.timeScroller}>
                    {["AM", "PM"].map((period) => (
                      <button
                        key={period}
                        className={`${styles.timeOption} ${
                          selectedPeriod === period
                            ? styles.timeOptionSelected
                            : ""
                        }`}
                        onClick={() => setSelectedPeriod(period)}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                className={styles.closeCalendar}
                onClick={() => {
                  const hourStr = String(selectedHour).padStart(2, "0");
                  const minStr = String(selectedMinute).padStart(2, "0");
                  setTime(`${hourStr}:${minStr} ${selectedPeriod}`);
                  setShowTimeModal(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        )}

        {showMaxMembersModal && (
          <div className={styles.calendarOverlay}>
            <div className={styles.calendarModal}>
              <h3 className={styles.modalTitle}>Select Max Members</h3>

              <div className={styles.membersGrid}>
                {memberOptions.map((num) => (
                  <button
                    key={num}
                    className={`${styles.memberOption} ${maxMembers === num ? styles.memberOptionSelected : ""}`}
                    onClick={() => {
                      setMaxMembers(num);
                      setShowMaxMembersModal(false);
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <button
                className={styles.closeCalendar}
                onClick={() => setShowMaxMembersModal(false)}
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
