"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import TopHeader from "@/components/user/TopHeader/TopHeader";
import BottomNav from "@/components/user/BottomNav/BottomNav";
import WidgetCard from "@/components/widgets/widgetCard";
import styles from "./page.module.css";

export default function UserHomePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [widgets, setWidgets] = useState([]);
  const [loaded, setLoaded] = useState(false); // ⭐ ensures persistence works

  const searchParams = useSearchParams();
  const router = useRouter();
  const widgetToAdd = searchParams.get("add");

  const addedRef = useRef(false);
  const removeWidget = (type) => {
    setWidgets((prev) => prev.filter((w) => w !== type));
  };

  useEffect(() => {
    addedRef.current = false;
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("widgets");
    if (saved) {
      setWidgets(JSON.parse(saved));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("widgets", JSON.stringify(widgets));
    }
  }, [widgets, loaded]);

  useEffect(() => {
    if (!loaded) return;
    if (!widgetToAdd) return;
    if (addedRef.current) return;

    setWidgets((prev) => {
      if (prev.includes(widgetToAdd)) return prev;
      return [...prev, widgetToAdd];
    });

    addedRef.current = true;

    router.replace("/user/home", undefined, { shallow: true });
  }, [widgetToAdd, loaded]);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <TopHeader
          email="user@kent.edu"
          isEditing={isEditing}
          onEdit={() => setIsEditing(true)}
          onExitEdit={() => setIsEditing(false)}
        />

        <div className={styles.content}>
          <div className={styles.widgetContainer}>
            {widgets.map((type, i) => (
              <WidgetCard
                key={i}
                type={type}
                isEditing={isEditing}
                onDelete={() => removeWidget(type)}
              />
            ))}
          </div>
        </div>
        {isEditing && (
          <Link className={styles.addButton} href="/user/widgetOptions">
            <img src="/plus.svg" alt="Add" className={styles.plusIcon} />
          </Link>
        )}

        <BottomNav />
      </section>
    </main>
  );
}
