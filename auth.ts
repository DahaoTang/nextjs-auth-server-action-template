import NextAuth, { NextAuthConfig } from "next-auth";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
	},
	events: {
		async linkAccount({ user }) {
			await db.user.update({
				where: {
					id: user.id,
				},
				data: {
					emailVerified: new Date(),
				},
			});
		},
	},
	callbacks: {
		async signIn({ user, account }) {
			// Allow OAuth without email verification
			if (account?.provider != "credentials") return true;

			const existingUser = await getUserById(user.id);

			// Prevent sigin without email verification
			if (!existingUser?.emailVerified) return false;

			return true;
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			token.role = existingUser.role;

			return token;
		},
	},
	/**
	 * Still waiting for Auth.js to fix this problem.
	 * Otherwise we have to use a mix of Auth.js and NextAuth.js
	 * Last edited: 09/01/2024
	 */
	adapter: PrismaAdapter(db) as unknown as NextAuthConfig["adapter"],
	session: { strategy: "jwt" },
	...authConfig,
});
