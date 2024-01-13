"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";

const SettingsPage = () => {
	const currentUser = useCurrentUser();
	return (
		<div>
			<div>Settings Page</div>
			<div>{JSON.stringify(currentUser)}</div>
			<button>
				<LogoutButton>Log Out</LogoutButton>
			</button>
		</div>
	);
};

export default SettingsPage;
