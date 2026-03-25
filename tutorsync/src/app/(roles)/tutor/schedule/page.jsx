"use client";
import { useState } from "react";
import BottomNav from "@/components/tutor/BottomNav/BottomNav";
import styles from "./page.module.css";

export default function RequestAvailabilityPage() {
  const [newDay, setNewDay] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newEnd, setNewEnd] = useState("");
   const [newDay2, setNewDay2] = useState("");
  const [newStart2, setNewStart2] = useState("");
  const [newEnd2, setNewEnd2] = useState("");

  const handleSubmit = () => {
    console.log("Submitting:", newDay, newStart, newEnd);
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        {/* New Header Header */}
        <div className={styles.titleBar}>
          <h1 className={styles.title}>Request Availability</h1>
        </div>

        <div className={styles.content}>
          <h2 className={styles.userName}>Sarah W.</h2>

          {/* Current Schedule Section */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Current Schedule</p>
            <div className={styles.stackedBox}>
              <div className={styles.row}>
                <span>Monday</span>
                <span>3:00 - 5:00 PM</span>
              </div>
              <div className={styles.row}>
                <span>Wednesday</span>
                <span>3:00 - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Requests Section */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Requests</p>
            <div className={styles.stackedBox}>
              <div className={styles.requestRow}>
                <div className={styles.requestInfo}>
                  <span className={styles.dayText}>Friday</span>
                  <span className={styles.timeText}>3:00 - 5:00 PM</span>
                </div>
                <span className={styles.pendingBadge}>Pending</span>
              </div>
            </div>
          </div>
          
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Add new availability</p>
            <div className={styles.stackedBox}>
              <select 
                className={styles.selectInput}
                value={newDay}
                onChange={(e) => setNewDay(e.target.value)}
              >
                <option value="">Select days</option>
                <option>Mon, Wed, Fri</option>
                <option>Tues, Thurs</option>
              </select>
              
              
              <select 
                placeholder="Start time"
                className={styles.selectInput}
                value={newStart}
                onChange={(e) => setNewStart(e.target.value)}
              >
                <option  value="">
                  Select start time
                </option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
              
              <select 
                placeholder="Start time"
                className={styles.selectInput}
                value={newEnd}
                onChange={(e) => setNewEnd(e.target.value)}
              >
                <option value="">
                  Select end time
                </option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
          </div>
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Add additional availability</p>
            <div className={styles.stackedBox}>
              <select 
                className={styles.selectInput}
                value={newDay2}
                onChange={(e) => setNewDay2(e.target.value)}
              >
                <option value="">Select days</option>
                <option>Mon, Wed, Fri</option>
                <option>Tues, Thurs</option>
              </select>
              
              
              <select 
                placeholder="Start time"
                className={styles.selectInput}
                value={newStart2}
                onChange={(e) => setNewStart2(e.target.value)}
              >
                <option value="">
                  Select start time
                </option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
              
               <select 
                placeholder="Start time"
                className={styles.selectInput}
                value={newEnd2}
                onChange={(e) => setNewEnd2(e.target.value)}
              >
                <option value="">
                  Select end time
                </option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
          </div>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}