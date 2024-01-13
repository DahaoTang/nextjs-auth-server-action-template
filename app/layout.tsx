import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nextjs Auth Example",
	description: "This is an example for auth in Next.js",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();
	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={outfit.className}>{children}</body>
			</html>
		</SessionProvider>
	);
}
