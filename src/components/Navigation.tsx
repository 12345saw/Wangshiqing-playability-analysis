"use client";

import { Menu, Globe, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const smoothScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			setIsOpen(false);
		}
	};

	const navLinks = [
		{ href: "#hero", label: "首页", isScroll: true },
		{ href: "#product-overview", label: "产品概况", isScroll: true },
		{ href: "#game-overview", label: "游戏概括", isScroll: true },
		{ href: "#features", label: "核心特色", isScroll: true },
		{ href: "#gameplay", label: "可玩性分析", isScroll: true },
		{ href: "#game-features-analysis", label: "特色分析", isScroll: true },
		{ href: "#buildings", label: "建筑设施", isScroll: true },
		{ href: "#events", label: "限时活动", isScroll: true },
		{ href: "#modes", label: "游戏模式", isScroll: true },
		{ href: "#about", label: "关于", isScroll: true },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-sm border-b border-gray-800">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center gap-8">
					<button onClick={() => smoothScroll("hero")} className="flex items-center">
						<img 
							src={getImagePath("/images/TS.jpg")} 
							alt="Township Logo" 
							className="h-10 w-auto object-contain"
						/>
					</button>
					<button onClick={() => smoothScroll("hero")} className="gold-text text-2xl font-bold tracking-wider hidden md:block leading-tight">
						梦想<sup className="text-xs">城镇</sup>
						<br />
						TOWNSHIP
					</button>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center gap-8">
					{navLinks.map((link) => (
						<button
							key={link.href}
							onClick={() => smoothScroll(link.href.replace("#", ""))}
							className="text-white hover:text-[#c89b3c] transition-colors uppercase text-sm font-semibold"
						>
							{link.label}
						</button>
					))}
				</nav>

				<div className="flex items-center gap-4">
					<button className="text-white hover:text-gray-300 transition-colors">
						<Globe className="w-6 h-6" />
					</button>
					<button className="text-white hover:text-gray-300 lg:hidden transition-colors" onClick={toggleMenu}>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`fixed top-[73px] right-0 h-screen w-80 bg-[#0a1428] border-l border-gray-800 transform transition-transform duration-300 ease-in-out lg:hidden ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<nav className="flex flex-col p-8 gap-6">
					{navLinks.map((link) => (
						<button
							key={link.href}
							onClick={() => smoothScroll(link.href.replace("#", ""))}
							className="text-white hover:text-[#c89b3c] transition-colors uppercase text-lg font-semibold text-left"
						>
							{link.label}
						</button>
					))}
				</nav>
			</div>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 top-[73px] lg:hidden z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</header>
	);
}
