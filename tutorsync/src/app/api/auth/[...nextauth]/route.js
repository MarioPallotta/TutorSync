import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },

  jwt: {
    maxAge: 60 * 60,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const user = await prisma.uSERS.findUnique({
          where: { Email: credentials.email },
        });

        if (!user) return null;

        let tutorId = null;

        if (user.Is_Tutor) {
          const tutor = await prisma.tutor.findUnique({
            where: { User_ID: user.User_ID },
          });
          tutorId = tutor?.Tutor_ID || null;
        }

        return {
          id: user.User_ID,
          name: user.Name,
          email: user.Email,
          isAdmin: user.Is_Admin,
          isTutor: user.Is_Tutor,
          isStudent: user.Is_Student,
          tutorId,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.isTutor = user.isTutor;
        token.isStudent = user.isStudent;
        token.tutorId = user.tutorId;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.isAdmin = token.isAdmin;
      session.user.isTutor = token.isTutor;
      session.user.isStudent = token.isStudent;
      session.user.tutorId = token.tutorId;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
