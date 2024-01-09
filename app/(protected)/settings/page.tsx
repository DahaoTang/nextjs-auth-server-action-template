import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
	const session = await auth();
	return (
		<div>
			<div>Settings Page</div>
			<div>{JSON.stringify(session)}</div>
			<form
				action={async () => {
					"use server";
					await signOut();
				}}
			>
				<button type="submit">Sign Out</button>
			</form>
		</div>
	);
};

export default SettingsPage;
