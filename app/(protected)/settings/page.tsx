import { auth } from "@/auth";

const SettingsPage = async () => {
	const session = await auth();
	return (
		<div>
			<div>Settings Page</div>
			<div>{JSON.stringify(session)}</div>
		</div>
	);
};

export default SettingsPage;
