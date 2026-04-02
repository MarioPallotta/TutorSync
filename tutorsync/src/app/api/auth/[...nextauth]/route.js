import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log("[AUTH] authorize called with credentials:", credentials);

        try {
          const user = await prisma.uSERS.findUnique({
            where: { Email: credentials.email },
          });

          console.log("[AUTH] Prisma query result:", user);

          if (!user) {
            console.log("[AUTH] User not found for email:", credentials.email);
            return null;
          }

          console.log(
            `[AUTH] User found: ${user.Name}, isAdmin: ${user.Is_Admin}, isTutor: ${user.Is_Tutor}, isStudent: ${user.Is_Student}`,
          );

          return {
            id: user.User_ID,
            name: user.Name,
            email: user.Email,
            isAdmin: user.Is_Admin,
            isTutor: user.Is_Tutor,
            isStudent: user.Is_Student,
          };
        } catch (error) {
          console.error("[AUTH] Error during authorize:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      console.log("[JWT] jwt callback called with user:", user);
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.isTutor = user.isTutor;
        token.isStudent = user.isStudent;
        console.log("[JWT] Token after adding user data:", token);
      }
      return token;
    },

    async session({ session, token }) {
      console.log("[SESSION] session callback called with token:", token);
      session.user.id = token.id;
      session.user.isAdmin = token.isAdmin;
      session.user.isTutor = token.isTutor;
      session.user.isStudent = token.isStudent;
      console.log("[SESSION] Session after adding token data:", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
