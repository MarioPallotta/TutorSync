"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BottomNav from "@/components/tutor/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function RequestAvailabilityClient({
  tutorId,
  tutorName,
  courses,
}) {
  const [courseId, setCourseId] = useState("");

  // Date modal state
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [date, setDate] = useState("");

  const formattedDateText = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      })
    : "Select Date";

  // Time modal state
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [selectedHour, setSelectedHour] = useState(8);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState("AM");
  const [time, setTime] = useState("");

  // Confirmation + error state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");

  const daysInMonth = Array.from(
    { length: new Date(currentYear, currentMonth + 1, 0).getDate() },
    (_, i) => i + 1
  );

  // Scroll lock when modals open
  useEffect(() => {
    if (showCalendar || showTimeModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showCalendar, showTimeModal]);

  async function handleSubmit() {
    setError("");

    if (!courseId || !date || !time) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch("/api/tutor/requestAvailability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tutorId, courseId, date, time }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit availability");
      }

      setIsConfirmed(true);

      // Auto redirect after 3 seconds
      setTimeout(() => {
        window.location.href = "/tutor/home";
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  }

  // ---------------------- SUCCESS MODAL ----------------------
  if (isConfirmed) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.topSpacer} />

          <div className={styles.confirmationModal}>
            <div className={styles.confirmationContent}>
              <Image src="/check.svg" alt="Confirmed" width={64} height={64} />
              <h2 className={styles.confirmationTitle}>
                Availability Submitted!
              </h2>
              <p className={styles.confirmationText}>
                Your availability for {formattedDateText} at {time} has been
                submitted.
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
        <div className={styles.titleBar}>
          <h1 className={styles.title}>Request Availability</h1>
        </div>

        <div className={styles.content}>
          <h2 className={styles.userName}>{tutorName}</h2>

          {/* Course Selection */}
          <div className={styles.inputSection}>
            <label className={styles.label}>Select Course</label>
            <select
              className={styles.yellowInput}
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            >
              <option value="">Choose a course</option>
              {courses.map((c) => (
                <option key={c.Course_ID} value={c.Course_ID}>
                  {c.Course_Title}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker Trigger */}
          <div className={styles.inputSection}>
            <label className={styles.label}>Select Date</label>
            <div
              className={styles.yellowInputCal}
              onClick={() => setShowCalendar(true)}
            >
              <button type="button" className={styles.dateBar}>
                <div className={styles.dateBarLeft}>
                  <img src="/calendar.svg" width={18} height={18} alt="Calendar" />
                  <span className={styles.dateText}>{formattedDateText}</span>
                </div>
                <img src="/chevron-down.svg" width={18} height={18} alt="Expand" />
              </button>
            </div>
          </div>

          {/* Time Picker Trigger */}
          <div className={styles.inputSection}>
            <label className={styles.label}>Select Time</label>
            <div
              className={styles.yellowInputCal}
              onClick={() => setShowTimeModal(true)}
            >
              <button type="button" className={styles.dateBar}>
                <div className={styles.dateBarLeft}>
                  <img src="/clock.svg" width={18} height={18} alt="Clock" />
                  <span className={styles.dateText}>{time || "Select Time"}</span>
                </div>
                <img src="/chevron-down.svg" width={18} height={18} alt="Expand" />
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <div className={styles.errorMessage}>{error}</div>}

          {/* Submit Button */}
          <div className={styles.sessionButtonWrapper}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        {/* ---------------------- CALENDAR MODAL ---------------------- */}
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
                      {new Date(0, i).toLocaleString("en-US", { month: "long" })}
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
                        currentMonth + 1
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

        {/* ---------------------- TIME PICKER MODAL ---------------------- */}
        {showTimeModal && (
          <div className={styles.calendarOverlay}>
            <div className={styles.calendarModal}>
              <h3 className={styles.modalTitle}>Select Time</h3>

              <div className={styles.timePickerContainer}>
                {/* Hour Column */}
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

                {/* Minute Column */}
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
                      )
                    )}
                  </div>
                </div>

                {/* AM/PM Column */}
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

        <BottomNav />
      </section>
    </main>
  );
}
