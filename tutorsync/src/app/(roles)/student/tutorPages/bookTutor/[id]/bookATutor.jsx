"use client";

import BottomNav from "@/components/student/BottomNav/BottomNav";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function BookingTutorPage({ tutor }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");

  // ⭐ Generate 4 possible time slots AND filter out booked ones
  const timeSlots = useMemo(() => {
    if (!tutor?.Times_Requested) return [];

    const base = new Date(tutor.Times_Requested);

    // Generate 4-hour block: base, +1h, +2h, +3h
    const slots = Array.from({ length: 4 }, (_, i) => {
      return new Date(base.getTime() + i * 3600000);
    });

    // Booked times passed from server
    const booked = tutor.bookedTimes || [];

    // Filter out booked times
    const available = slots.filter(
      (slot) => !booked.includes(slot.toISOString())
    );

    return available;
  }, [tutor]);

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

  const handleConfirmBooking = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/createBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorId: tutor.id,
          studentId: session?.user?.id,
          courseTitle: tutor.selectedCourse,
          sessionDate: tutor.date,
          sessionTime: selectedTime,
          sessionLocation: selectedLocation,
          availabilityId: tutor.availabilityId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Booking failed");
      }

      setIsConfirmed(true);

      setTimeout(() => {
        router.push("/student/home");
      }, 3000);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  if (isConfirmed) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.topSpacer} />
          <div className={styles.confirmationModal}>
            <div className={styles.confirmationContent}>
              <Image src="/check.svg" alt="Confirmed" width={64} height={64} />
              <h2 className={styles.confirmationTitle}>Booking Confirmed!</h2>
              <p className={styles.confirmationText}>
                Your tutoring session with {tutor.name} in {selectedLocation} at{" "}
                {formatTime(selectedTime)} has been booked.
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
          <Link href="/student/tutorPages/findTutor" className={styles.backButton}>
            <Image src="/backbutton.svg" alt="Back" width={28} height={28} />
          </Link>

          <h1 className={styles.title}>{tutor.name}</h1>

          <div className={styles.headerSpacer} />
        </div>

        <div className={styles.content}>
          <div className={styles.profileSection}>
            <div className={styles.avatarCircle}>
              <Image src="/person.svg" alt="Tutor" width={60} height={60} />
            </div>

            <p className={styles.email}>{tutor.email}</p>
            <p className={styles.bio}>{tutor.bio}</p>
          </div>

          <div className={styles.subjectSection}>
            <h2 className={styles.sectionTitle}>Subjects</h2>

            <div className={styles.subjectTagList}>
              {tutor.courses.map((course) => (
                <div
                  key={course}
                  className={`${styles.subjectTag} ${
                    course === tutor.selectedCourse ? styles.subjectTagSelected : ""
                  }`}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.timeSection}>
            <h2 className={styles.sectionTitle}>Select Time</h2>

            {/* 🔴 Show banner when no times available */}
            {timeSlots.length === 0 && (
              <div className={styles.errorMessage}>
                No time slots available.
              </div>
            )}

            <div className={styles.timeList}>
              {timeSlots.map((slot, i) => (
                <button
                  key={i}
                  className={`${styles.timeButton} ${
                    selectedTime === slot.toISOString() ? styles.timeSelected : ""
                  }`}
                  onClick={() => setSelectedTime(slot.toISOString())}
                >
                  {formatTime(slot)}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.locationSection}>
            <h2 className={styles.sectionTitle}>Choose Location</h2>

            <select
              className={styles.locationSelect}
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select a location</option>
              <option value="Study Room Library">Study Room Library</option>
            </select>
          </div>

          {error && (
            <div className={styles.errorBox}>
              <p className={styles.errorText}>{error}</p>
            </div>
          )}
          {error && <p className={styles.errorMessage}>{error}</p>}

          <button
            className={styles.confirmButton}
            disabled={
              !selectedTime ||
              !selectedLocation ||
              isLoading ||
              timeSlots.length === 0
            }
            onClick={handleConfirmBooking}
          >
            {isLoading ? "Confirming..." : "Confirm Booking"}
          </button>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}
