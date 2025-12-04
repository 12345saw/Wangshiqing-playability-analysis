export function FarmingIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 100 100" fill="currentColor">
			<path d="M20 70 L30 50 L40 60 L50 40 L60 50 L70 40 L80 60 L80 70 L20 70 Z" />
			<circle cx="30" cy="50" r="3" />
			<circle cx="50" cy="40" r="3" />
			<circle cx="70" cy="40" r="3" />
		</svg>
	);
}

export function ProductionIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 100 100" fill="currentColor">
			<rect x="25" y="30" width="50" height="40" rx="2" />
			<rect x="30" y="35" width="15" height="8" />
			<rect x="50" y="35" width="15" height="8" />
			<rect x="30" y="50" width="15" height="8" />
			<rect x="50" y="50" width="15" height="8" />
			<path d="M50 20 L45 30 L55 30 Z" />
		</svg>
	);
}

export function CityBuildingIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 100 100" fill="currentColor">
			<rect x="20" y="40" width="15" height="30" />
			<rect x="40" y="30" width="15" height="40" />
			<rect x="60" y="35" width="15" height="35" />
			<path d="M27.5 40 L27.5 30 L32.5 30 L32.5 40" />
			<path d="M47.5 30 L47.5 20 L52.5 20 L52.5 30" />
			<path d="M67.5 35 L67.5 25 L72.5 25 L72.5 35" />
		</svg>
	);
}

export function CommunityIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 100 100" fill="currentColor">
			<circle cx="30" cy="40" r="12" />
			<circle cx="70" cy="40" r="12" />
			<path d="M20 60 Q30 50 40 60 Q50 70 60 60 Q70 50 80 60" stroke="currentColor" strokeWidth="3" fill="none" />
		</svg>
	);
}

export function TasksIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 100 100" fill="currentColor">
			<rect x="25" y="25" width="50" height="50" rx="5" />
			<path d="M35 45 L42 52 L65 32" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
		</svg>
	);
}

export function DecorationIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 100 100" fill="currentColor">
			<circle cx="50" cy="50" r="20" />
			<path d="M50 30 L52 40 L62 40 L54 46 L56 56 L50 50 L44 56 L46 46 L38 40 L48 40 Z" />
		</svg>
	);
}

export const featureIcons = {
	farming: FarmingIcon,
	production: ProductionIcon,
	citybuilding: CityBuildingIcon,
	community: CommunityIcon,
	tasks: TasksIcon,
	decoration: DecorationIcon,
};
