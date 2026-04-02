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

  const timeSlots = useMemo(() => {
    if (!tutor?.Times_Requested) return [];
    const base = new Date(tutor.Times_Requested);
    return Array.from(
      { length: 4 },
      (_, i) => new Date(base.getTime() + i * 3600000),
    );
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
          courseTitle: tutor.course,
          sessionDate: new Date(selectedTime).toISOString().split("T")[0],
          sessionTime: selectedTime,
          sessionLocation: selectedLocation,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
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
          <Link
            href="/student/tutorPages/findTutor"
            className={styles.backButton}
          >
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
            <h2 className={styles.sectionTitle}>Subject</h2>
            <div className={styles.subjectTag}>{tutor.course}</div>
          </div>

          <div className={styles.timeSection}>
            <h2 className={styles.sectionTitle}>Select Time</h2>

            <div className={styles.timeList}>
              {timeSlots.map((slot, i) => (
                <button
                  key={i}
                  className={`${styles.timeButton} ${
                    selectedTime === slot.toISOString()
                      ? styles.timeSelected
                      : ""
                  }`}
                  onClick={() => setSelectedTime(slot.toISOString())}
                >
                  Today, {formatTime(slot)}
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

          {error && <p className={styles.errorMessage}>{error}</p>}

          <button
            className={styles.confirmButton}
            disabled={!selectedTime || !selectedLocation || isLoading}
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
