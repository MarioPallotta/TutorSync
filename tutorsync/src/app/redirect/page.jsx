import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function RedirectPage() {
  const session = await getServerSession(authOptions);

  console.log("[REDIRECT] Session:", session);

  if (!session) {
    console.log("[REDIRECT] No session found, redirecting to login");
    redirect("/login/signIn");
  }

  console.log(`[REDIRECT] Session user roles - isAdmin: ${session.user.isAdmin}, isTutor: ${session.user.isTutor}, isStudent: ${session.user.isStudent}`);

  if (session.user.isAdmin) {
    console.log("[REDIRECT] Redirecting to /admin/home");
    redirect("/admin/home");
  }
  if (session.user.isTutor) {
    console.log("[REDIRECT] Redirecting to /tutor/home");
    redirect("/tutor/home");
  }
  if (session.user.isStudent) {
    console.log("[REDIRECT] Redirecting to /student/home");
    redirect("/student/home");
  }

  return <p>No role assigned</p>;
}
