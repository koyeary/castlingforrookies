// from sanjeebkc.com.np's NextAuth configuration
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

const toFormData = (obj: Record<string, string>) => {
  const formBody = [];
  for (const property in obj) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(obj[property]);
    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  return formBody.join("&");
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
          value: "administrator",
        },
        password: { label: "Password", type: "password", value: "admin" },
      },

      async authorize(credentials, req) {
        // Include hidden values here
        const data = {
          username: credentials?.username ?? "",
          password: credentials?.password || "",
        };
        const formData = toFormData(data);
        try {
          const res = await fetch(
            "http://development.localhost:8000/api/method/lms_api.api.auth",
            {
              method: "POST",
              body: formData,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          const resData = await res.json();
          if (res.ok && resData && resData.data) {
            return resData.data;
          } else {
            console.error("Authorization failed:", resData);
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
