import { cn } from "@/lib/utils";

interface HeaderProps {
	label: string;
}

export const Header = ({ label }: HeaderProps) => {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center justify-center">
			<div className={cn("text-3xl font-semibold")}>Auth</div>
			<div className="text-muted-foreground text-sm">
				{label}
			</div>
		</div>
	);
};
