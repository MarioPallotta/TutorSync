"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import TopHeader from "@/components/student/TopHeader/TopHeader";
import BottomNav from "@/components/student/BottomNav/BottomNav";
import WidgetCard from "@/components/widgets/widgetCard";
import styles from "./page.module.css";

export default function StudentHome({
  gpa,
  upcomingTutorSessions,
  upcomingStudyGroups,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [widgets, setWidgets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [tutorSessions, setTutorSessions] = useState(upcomingTutorSessions || []);
  const [studyGroups, setStudyGroups] = useState(upcomingStudyGroups || []);

  // ⭐ Keep study groups & tutor sessions synced with server props
  useEffect(() => {
    setTutorSessions(upcomingTutorSessions || []);
    setStudyGroups(upcomingStudyGroups || []);
  }, [upcomingTutorSessions, upcomingStudyGroups]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const widgetToAdd = searchParams.get("add");
  const addedRef = useRef(false);

  // Confirmation modal state
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState(null);

  const openConfirm = (message, action) => {
    setConfirmMessage(message);
    setConfirmAction(() => action);
    setConfirmOpen(true);
  };

  // Load editing state
  useEffect(() => {
    const savedEditing = localStorage.getItem("isEditing");
    if (savedEditing === "true") setIsEditing(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("isEditing", isEditing);
  }, [isEditing]);

  // Load widgets
  useEffect(() => {
    const saved = localStorage.getItem("widgets");
    if (saved) setWidgets(JSON.parse(saved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("widgets", JSON.stringify(widgets));
    }
  }, [widgets, loaded]);

  // Add widget from URL param
  useEffect(() => {
    if (!loaded || !widgetToAdd || addedRef.current) return;

    setWidgets((prev) => {
      if (prev.includes(widgetToAdd)) return prev;
      return [...prev, widgetToAdd];
    });

    addedRef.current = true;
    router.replace("/student/home", undefined, { shallow: true });
  }, [widgetToAdd, loaded, router]);

  // Cancel tutoring session
  const cancelSession = async (sessionId) => {
    await fetch("/api/student/cancelSession", {
      method: "DELETE",
      body: JSON.stringify({ sessionId }),
    });

    setTutorSessions((prev) =>
      prev.filter((s) => s.Session_ID !== sessionId)
    );
  };

  // Leave study group
  const leaveGroup = async (groupId) => {
    await fetch("/api/student/leaveGroup", {
      method: "DELETE",
      body: JSON.stringify({ groupId }),
    });

    setStudyGroups((prev) =>
      prev.filter((g) => g.Group_ID !== groupId)
    );
  };

  // Delete (disband) study group
  const deleteGroup = async (groupId) => {
    await fetch("/api/student/deleteGroup", {
      method: "DELETE",
      body: JSON.stringify({ groupId }),
    });

    setStudyGroups((prev) =>
      prev.filter((g) => g.Group_ID !== groupId)
    );
  };

  const removeWidget = (type) => {
    setWidgets((prev) => prev.filter((w) => w !== type));
  };

  const loading = !loaded;

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Suspense fallback={null}>
          <TopHeader
            isEditing={isEditing}
            onEdit={() => setIsEditing(true)}
            onExitEdit={() => setIsEditing(false)}
            showEdit={true}
          />

          <div className={styles.content}>
            <div className={styles.widgetContainer}>
              {widgets.map((type, i) => (
                <WidgetCard
                  key={i}
                  type={type}
                  isEditing={isEditing}
                  onDelete={() => removeWidget(type)}
                  gpa={gpa}
                  upcomingTutorSessions={tutorSessions}
                  upcomingStudyGroups={studyGroups}
                  onCancelSession={(id) =>
                    openConfirm(
                      "Are you sure you want to cancel this tutoring session?",
                      () => cancelSession(id)
                    )
                  }
                  onLeaveGroup={(id) =>
                    openConfirm(
                      "Are you sure you want to leave this study group?",
                      () => leaveGroup(id)
                    )
                  }
                  onDeleteGroup={(id) =>
                    openConfirm(
                      "Are you sure you want to disband this study group?",
                      () => deleteGroup(id)
                    )
                  }
                  loading={loading}
                />
              ))}
            </div>
          </div>

          {isEditing && (
            <Link className={styles.addButton} href="/student/widgetOptions">
              <img src="/plus.svg" alt="Add" className={styles.plusIcon} />
            </Link>
          )}

          <BottomNav />
        </Suspense>
      </section>

      {/* Confirmation Modal */}
      {confirmOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "24px",
              width: "90%",
              maxWidth: "360px",
              borderRadius: "14px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          >
            <h3 style={{ marginBottom: "8px", fontSize: "18px", fontWeight: 600 }}>
              Confirm Action
            </h3>

            <p style={{ marginBottom: "20px", fontSize: "14px", color: "#444" }}>
              {confirmMessage}
            </p>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  background: "#e5e5e5",
                  border: "none",
                }}
                onClick={() => setConfirmOpen(false)}
              >
                Go Back
              </button>

              <button
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  background: "#d9534f",
                  color: "white",
                  border: "none",
                }}
                onClick={() => {
                  if (confirmAction) confirmAction();
                  setConfirmOpen(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
