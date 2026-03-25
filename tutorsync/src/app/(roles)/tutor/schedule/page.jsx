"use client";

import { useState } from "react";
import BottomNav from "@/components/user/BottomNav/BottomNav"; // Assuming you have this
import styles from "./page.module.css";

export default function TutorSchedulePage() {
  // State to manage which dropdown is open: 'none', 'calendar', 'startTime', 'endTime'
  const [activeDropdown, setActiveDropdown] = useState("none");

  // State to hold selected values (mocking the interaction)
  const [selectedDays, setSelectedDays] = useState("Select day(s)");
  const [startTime, setStartTime] = useState("Start time");
  const [endTime, setEndTime] = useState("End time");

  // Mock Data
  const currentSchedule = [
    { day: "Monday", time: "3:00 - 5:00 PM" },
    { day: "Wednesday", time: "3:00 - 5:00 PM" },
  ];

  const requests = [
    { day: "Friday", time: "3:00 - 5:00 PM", status: "Pending" },
  ];

  const timesList = [
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
  ];

  // Handlers
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? "none" : dropdownName);
  };

  const selectTime = (time, type) => {
    if (type === "start") setStartTime(time);
    if (type === "end") setEndTime(time);
    setActiveDropdown("none");
  };

  const selectDaysMock = () => {
    setSelectedDays("Sep 9, Sep 13");
    setActiveDropdown("none");
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        
        {/* Top Banner */}
        <div className={styles.topBanner}>
          Request Availability
        </div>

        <div className={styles.content}>
          <h1 className={styles.tutorName}>Sarah W.</h1>

          {/* Current Schedule */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Current Schedule</h2>
            <div className={styles.tableBox}>
              {currentSchedule.map((item, index) => (
                <div key={index} className={styles.tableRow}>
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requests */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Requests</h2>
            <div className={styles.tableBox}>
              {requests.map((item, index) => (
                <div key={index} className={styles.tableRow}>
                  <div className={styles.requestInfo}>
                    <span className={styles.requestDay}>{item.day}</span>
                    <span className={styles.requestTime}>{item.time}</span>
                  </div>
                  <span className={styles.pendingBadge}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add New Availability */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Add new availability</h2>
            <div className={styles.formGroup}>
              
              {/* Day Selector */}
              <div className={styles.inputWrapper}>
                <button 
                  className={styles.dropdownButton} 
                  onClick={() => toggleDropdown("calendar")}
                >
                  {selectedDays}
                  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </button>
              </div>

              {/* Start Time Selector */}
              <div className={styles.inputWrapper}>
                <button 
                  className={styles.dropdownButton} 
                  onClick={() => toggleDropdown("startTime")}
                >
                  {startTime}
                  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                
                {activeDropdown === "startTime" && (
                  <div className={styles.timeDropdown}>
                    {timesList.map((t) => (
                      <div key={t} className={styles.timeOption} onClick={() => selectTime(t, "start")}>
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* End Time Selector */}
              <div className={styles.inputWrapper}>
                <button 
                  className={styles.dropdownButton} 
                  onClick={() => toggleDropdown("endTime")}
                >
                  {endTime}
                  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </button>

                {activeDropdown === "endTime" && (
                  <div className={styles.timeDropdown}>
                    {timesList.map((t) => (
                      <div key={t} className={styles.timeOption} onClick={() => selectTime(t, "end")}>
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Submit Button */}
          <button className={styles.submitButton}>Submit</button>
        </div>

        {/* Floating Calendar Overlay */}
        {activeDropdown === "calendar" && (
          <>
            <div className={styles.overlayBg} onClick={() => setActiveDropdown("none")}></div>
            <div className={styles.calendarModal}>
              <div className={styles.calendarHeader}>
                <button className={styles.calNav}>&lt;</button>
                <div className={styles.calSelects}>
                  <span className={styles.calMonth}>Sep ▾</span>
                  <span className={styles.calYear}>2025 ▾</span>
                </div>
                <button className={styles.calNav}>&gt;</button>
              </div>
              <div className={styles.calendarGrid}>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className={styles.calDayName}>{d}</div>)}
                <div className={styles.calDay}></div>
                <div className={styles.calDay}>1</div><div className={styles.calDay}>2</div><div className={styles.calDay}>3</div>
                <div className={styles.calDay}>4</div><div className={styles.calDay}>5</div><div className={styles.calDay}>6</div>
                <div className={styles.calDay}>7</div><div className={styles.calDay}>8</div>
                <div className={`${styles.calDay} ${styles.calDaySelected}`} onClick={selectDaysMock}>9</div>
                <div className={styles.calDay}>10</div><div className={styles.calDay}>11</div><div className={styles.calDay}>12</div>
                <div className={`${styles.calDay} ${styles.calDaySelected}`} onClick={selectDaysMock}>13</div>
                <div className={styles.calDay}>14</div><div className={styles.calDay}>15</div><div className={styles.calDay}>16</div>
                <div className={styles.calDay}>17</div><div className={styles.calDay}>18</div><div className={styles.calDay}>19</div>
                <div className={styles.calDay}>20</div><div className={styles.calDay}>21</div><div className={styles.calDay}>22</div>
                <div className={styles.calDay}>23</div><div className={styles.calDay}>24</div><div className={styles.calDay}>25</div>
                <div className={styles.calDay}>26</div><div className={styles.calDay}>27</div><div className={styles.calDay}>28</div>
                <div className={styles.calDay}>29</div><div className={styles.calDay}>30</div>
              </div>
            </div>
          </>
        )}

        {/* Note: In a real app, BottomNav would be placed here. Replacing with a blue block to match screenshot temporarily if missing. */}
        <div className={styles.bottomNavMock}>
           {/* Replace with <BottomNav /> */}
           <div className={styles.navIcon}>🏠</div>
           <div className={styles.navIcon}>⚙️</div>
        </div>
      </section>
    </main>
  );
}