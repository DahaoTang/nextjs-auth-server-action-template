import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="h-full flex flex-col items-center justify-center">
			<div className="space-y-6 text-center">
				<div className="text-6xl">Auth</div>
				<div>
					<LoginButton>
						<Button>Sign In</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
