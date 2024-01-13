import { auth, signOut } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";

const SettingsPage = async () => {
	const session = await auth();
	return (
		<div>
			<div>Settings Page</div>
			<div>{JSON.stringify(session)}</div>
			<button>
				<LogoutButton>Log Out</LogoutButton>
			</button>
		</div>
	);
};

export default SettingsPage;
