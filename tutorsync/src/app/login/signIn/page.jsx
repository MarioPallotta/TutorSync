"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./page.module.css";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your Flashline email.");
      return;
    }

    setError(""); // clears the old errors

    const res = await signIn("credentials", {
      email,
      redirect: false,
      callbackUrl: "/redirect",
    });

    if (!res || res.error) {
      setError("Invalid Flashline email.");
      return;
    }

    window.location.href = res.url;
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topSection}>
          <Image
            src="/kentstateimage.png"
            alt="Kent State University"
            width={420}
            height={170}
            className={styles.logo}
            priority
          />

          <h1 className={styles.title}>TutorSync</h1>
        </div>

        <div className={styles.bottomSection}>
          <h2 className={styles.flashlineTitle}>Flashline Login</h2>

          <form className={styles.loginForm} onSubmit={handleSubmit}>
            {error && <p className={styles.errorMessage}>{error}</p>}

            <input
              type="text"
              placeholder="Flashline Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className={styles.signInButton}>
              Sign In
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
