"use client";

import { signIn } from "next-auth/react"; // This is a way to do it without using server components

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export const Social = () => {
	const onClick = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};
	return (
		<div className="w-full flex items-center gap-x-2">
			<Button
				className="w-full"
				size="lg"
				variant="outline"
				onClick={() => onClick("google")}
			>
				<FcGoogle className="h-5 w-5" />
			</Button>
			<Button
				className="w-full"
				size="lg"
				variant="outline"
				onClick={() => onClick("github")}
			>
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
	);
};
