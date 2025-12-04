import { Navigation } from "@/components/Navigation";
import { HomePage } from "@/components/HomePage";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#0a1428]">
			<Navigation />
			<HomePage />
		</div>
	);
}
