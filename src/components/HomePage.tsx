"use client";

import { useState, useEffect } from "react";
import {
	FarmingIcon,
	ProductionIcon,
	CityBuildingIcon,
	CommunityIcon,
	TasksIcon,
	DecorationIcon,
} from "@/components/RoleIcons";
import { townshipFeatures, getFeaturesByCategory, type GameFeature } from "@/data/champions";
import { ParticleBackground } from "@/components/ParticleBackground";
import { getImagePath } from "@/lib/utils";

const featureIcons = {
	farming: FarmingIcon,
	production: ProductionIcon,
	citybuilding: CityBuildingIcon,
	community: CommunityIcon,
	tasks: TasksIcon,
	decoration: DecorationIcon,
};

export function HomePage() {
	const [selectedFeature, setSelectedFeature] = useState<GameFeature>("farming");
	const [selectedFeatureItem, setSelectedFeatureItem] = useState(townshipFeatures[0]);
	const [featureIndex, setFeatureIndex] = useState(0);

	const currentCategoryFeatures = getFeaturesByCategory(selectedFeature);

	useEffect(() => {
		setSelectedFeatureItem(currentCategoryFeatures[0]);
		setFeatureIndex(0);
	}, [selectedFeature]);

	useEffect(() => {
		const interval = setInterval(() => {
			setFeatureIndex((prev) => (prev + 1) % currentCategoryFeatures.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [currentCategoryFeatures.length]);

	useEffect(() => {
		setSelectedFeatureItem(currentCategoryFeatures[featureIndex]);
	}, [featureIndex, currentCategoryFeatures]);

	return (
		<>
			{/* Hero Section */}
			<section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
				<ParticleBackground />
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage:
							`url('${getImagePath('/images/hero-bg.jpg')}')`,
						zIndex: 0,
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0a1428]" />
				</div>
				<div className="relative z-10 text-center px-4">
					<h1 className="gold-text text-7xl md:text-9xl font-bold mb-6 tracking-wider">
						梦想<sup className="text-3xl md:text-5xl">城镇</sup>
						<br />
						TOWNSHIP
					</h1>
					<p className="text-white text-xl md:text-2xl mb-8 italic font-light tracking-wide">
						梦想城镇 — 一款融合农场经营、城市建设和社区互动的模拟经营游戏
					</p>
					<button 
						onClick={() => {
							document.getElementById('gameplay')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
						}}
						className="btn-gold px-12 py-4 rounded-3xl text-lg"
					>
						了解详情
					</button>
				</div>
			</section>

			{/* Product Overview - 产品概况 */}
			<section id="product-overview" className="relative py-20 bg-gradient-to-b from-[#0d2438] to-[#0a1428]">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">产品概况</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
							{/* Manufacturer Background */}
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a]">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src={getImagePath("/images/playrix-company.jpg")}
										alt="Playrix公司"
										className="w-full h-48 object-cover"
									/>
								</div>
								<h3 className="text-2xl font-bold text-[#c89b3c] mb-4 flex items-center gap-3">
									<span className="w-2 h-8 bg-[#c89b3c]"></span>
									厂商背景
								</h3>
								<div className="space-y-3 text-gray-300 leading-relaxed">
									<p>
										<strong className="text-white">Playrix</strong>是梦想城镇（Township）的开发商，于2004年在爱尔兰成立。
									</p>
									<p>
										公司最初专注于高品质的三消和解谜游戏开发，在休闲游戏领域积累了丰富经验。
									</p>
									<p>
										<strong className="text-white">主要代表产品：</strong>
									</p>
									<ul className="list-disc list-inside ml-4 space-y-1 text-sm">
										<li>梦想城镇（Township）</li>
										<li>梦幻花园（Gardenscapes）</li>
										<li>梦幻家园（Homescapes）</li>
									</ul>
									<p className="pt-2">
										<strong className="text-[#c89b3c]">2022年全球营收：</strong>160亿元人民币
									</p>
								</div>
						</div>

							{/* 游戏表现 */}
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a]">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src={getImagePath("/images/township-stats.jpg")}
										alt="游戏数据表现"
										className="w-full h-48 object-cover"
									/>
								</div>
								<h3 className="text-2xl font-bold text-[#c89b3c] mb-4 flex items-center gap-3">
									<span className="w-2 h-8 bg-[#c89b3c]"></span>
									游戏表现
								</h3>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										梦想城镇（Township）是Playrix开发的经典休闲模拟经营游戏，融合了农场建设和城市管理玩法。
									</p>
									<div className="bg-[#0a1428]/50 p-4 rounded-lg space-y-2">
										<div className="flex items-center justify-between">
											<span className="text-gray-400">累计下载量</span>
											<span className="text-2xl font-bold text-[#c89b3c]">6亿+</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-400">累计收入</span>
											<span className="text-2xl font-bold text-[#c89b3c]">21亿美元</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-400">日活跃用户</span>
											<span className="text-2xl font-bold text-[#c89b3c]">500万</span>
										</div>
									</div>
									<p className="text-sm text-gray-400 pt-2">
										数据截至2023年10月 | 长期畅销游戏，持续位居App Store下载榜前列
									</p>
								</div>
							</div>
						</div>

						{/* 关键里程碑 */}
						<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a]">
							<h3 className="text-xl font-bold text-[#c89b3c] mb-4">发展历程</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 text-sm">
								<div>
									<p className="font-bold text-white mb-1">2015年初</p>
									<p>首次对Township和Fishdom进行用户获取实验</p>
								</div>
								<div>
									<p className="font-bold text-white mb-1">2016年中</p>
									<p>Gardenscapes（梦幻花园）正式上线</p>
								</div>
								<div>
									<p className="font-bold text-white mb-1">2017年中</p>
									<p>Homescapes（梦幻家园）上线，12个月后开始规模化推广</p>
								</div>
							</div>
							<p className="text-gray-400 text-sm mt-4">
								Playrix开始规模化推广四大核心产品（Homescapes、Gardenscapes、Township和Fishdom），
								下载量持续增长，在2020年中期达到月下载量超过8000万的高峰。
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Game Overview - 游戏概括 */}
			<section id="game-overview" className="relative py-20 bg-gradient-to-b from-[#0a1428] to-[#0d2438]">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
							{/* Left Column - Game Overview */}
							<div className="space-y-6">
								<div>
									<h3 className="text-2xl font-bold text-[#c89b3c] mb-4 flex items-center gap-3">
										<span className="w-2 h-8 bg-[#c89b3c]"></span>
										什么是梦想城镇？
									</h3>
									<p className="text-gray-300 text-lg leading-relaxed">
										梦想城镇是一款融合农场经营、城市建设和社区互动的模拟经营游戏。玩家可以种植作物、饲养动物、建设工厂、打造属于自己的梦想小镇。游戏结合了策略规划、资源管理和社交互动，为玩家提供丰富多样的游戏体验。
									</p>
								</div>

								<div>
									<h3 className="text-2xl font-bold text-[#c89b3c] mb-4 flex items-center gap-3">
										<span className="w-2 h-8 bg-[#c89b3c]"></span>
										核心玩法
									</h3>
									<p className="text-gray-300 text-lg leading-relaxed">
										游戏的核心玩法围绕"生产-加工-销售"的完整产业链展开。玩家需要合理规划农场布局，优化生产流程，完成各种订单任务，逐步扩大城镇规模。通过不断解锁新建筑、新作物和新功能，保持游戏的新鲜感和挑战性。
									</p>
								</div>
							</div>

							{/* Right Column - Key Features */}
							<div className="space-y-6">
								<div>
									<h3 className="text-2xl font-bold text-[#c89b3c] mb-4 flex items-center gap-3">
										<span className="w-2 h-8 bg-[#c89b3c]"></span>
										游戏特色
									</h3>
									<div className="space-y-4">
										<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-4 rounded-lg border border-[#2a2a2a] hover:border-[#c89b3c] transition-colors">
											<h4 className="text-white font-bold mb-2 text-lg">多元化玩法</h4>
											<p className="text-gray-400">从农场种植到工厂生产，从城市建设到社区互动，游戏提供多种玩法模式，满足不同玩家的喜好。</p>
										</div>
										<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-4 rounded-lg border border-[#2a2a2a] hover:border-[#c89b3c] transition-colors">
											<h4 className="text-white font-bold mb-2 text-lg">策略深度</h4>
											<p className="text-gray-400">需要合理规划资源分配、优化生产链、管理库存，考验玩家的策略思维和规划能力。</p>
										</div>
										<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-4 rounded-lg border border-[#2a2a2a] hover:border-[#c89b3c] transition-colors">
											<h4 className="text-white font-bold mb-2 text-lg">社交互动</h4>
											<p className="text-gray-400">加入合作社，与全球玩家一起完成任务、参与竞赛，体验团队协作的乐趣。</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Game Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							<div className="text-center p-6 bg-[#1a1a1a]/30 backdrop-blur-sm rounded-lg border border-[#2a2a2a]">
								<div className="text-4xl font-bold text-[#c89b3c] mb-2">100+</div>
								<div className="text-gray-400 text-sm uppercase tracking-wide">建筑类型</div>
							</div>
							<div className="text-center p-6 bg-[#1a1a1a]/30 backdrop-blur-sm rounded-lg border border-[#2a2a2a]">
								<div className="text-4xl font-bold text-[#c89b3c] mb-2">50+</div>
								<div className="text-gray-400 text-sm uppercase tracking-wide">作物种类</div>
							</div>
							<div className="text-center p-6 bg-[#1a1a1a]/30 backdrop-blur-sm rounded-lg border border-[#2a2a2a]">
								<div className="text-4xl font-bold text-[#c89b3c] mb-2">全天候</div>
								<div className="text-gray-400 text-sm uppercase tracking-wide">随时可玩</div>
							</div>
							<div className="text-center p-6 bg-[#1a1a1a]/30 backdrop-blur-sm rounded-lg border border-[#2a2a2a]">
								<div className="text-4xl font-bold text-[#c89b3c] mb-2">免费</div>
								<div className="text-gray-400 text-sm uppercase tracking-wide">下载游玩</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Game Features Showcase - 核心特色 */}
			<section id="features" className="relative py-20 bg-gradient-to-b from-[#0a1428] to-[#0d2438]">
				<div className="container mx-auto px-4 text-center">
					<p className="text-gray-400 text-lg mb-2">探索游戏</p>
					<h2 className="text-6xl font-bold text-white mb-4 italic">
						核心特色
					</h2>
					<p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
						从农场经营到城市建设，从生产加工到社区互动，梦想城镇提供丰富多样的游戏体验。
					</p>

					{/* Feature Icons */}
					<div className="flex flex-wrap justify-center gap-8 mb-12">
						{(["farming", "production", "citybuilding", "community", "tasks", "decoration"] as GameFeature[]).map((feature) => {
							const Icon = featureIcons[feature];
							return (
								<div
									key={feature}
									className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${
										selectedFeature === feature
											? "opacity-100 scale-110"
											: "opacity-50 hover:opacity-75"
									}`}
									onClick={() => setSelectedFeature(feature)}
								>
									<div className="w-16 h-16 flex items-center justify-center">
										<Icon
											className={`w-12 h-12 transition-colors ${
												selectedFeature === feature ? "text-[#c89b3c]" : "text-gray-400"
											}`}
										/>
									</div>
									<span
										className={`text-sm font-bold uppercase ${
											selectedFeature === feature ? "text-[#c89b3c]" : "text-gray-500"
										}`}
									>
										{feature === "farming" ? "农场" : 
										 feature === "production" ? "生产" :
										 feature === "citybuilding" ? "建设" :
										 feature === "community" ? "社区" :
										 feature === "tasks" ? "任务" : "装饰"}
									</span>
								</div>
							);
						})}
					</div>

					{/* Feature Display */}
					<div className="relative max-w-2xl mx-auto mb-12">
						<div className="relative">
							<div className="w-96 h-96 mx-auto rounded-full border-4 border-[#c89b3c] overflow-hidden flex items-center justify-center bg-[#0a1428]">
								<img
									src={selectedFeatureItem.image}
									alt={selectedFeatureItem.name}
									className="w-full h-full object-cover transition-opacity duration-500"
									key={selectedFeatureItem.id}
								/>
							</div>
							<div
								className="absolute inset-0 rounded-full border-4 border-[#c89b3c]/30"
								style={{
									transform: "scale(1.1)",
								}}
							/>
						</div>
						<div className="mt-8">
							<h3 className="text-4xl font-bold text-white mb-2">
								{selectedFeatureItem.name}
							</h3>
							<p className="text-gray-400 text-lg mb-4">{selectedFeatureItem.title}</p>
							<p className="text-gray-300 text-base max-w-xl mx-auto">{selectedFeatureItem.description}</p>
						</div>

						{/* Feature Navigation Dots */}
						<div className="flex justify-center gap-2 mt-6">
							{currentCategoryFeatures.map((feature, index) => (
								<button
									key={feature.id}
									className={`h-3 rounded-full transition-all ${
										featureIndex === index
											? "bg-[#c89b3c] w-8"
											: "bg-gray-600 hover:bg-gray-500 w-3"
									}`}
									onClick={() => setFeatureIndex(index)}
									aria-label={`View ${feature.name}`}
								/>
							))}
						</div>
					</div>

					<div className="flex flex-wrap gap-4 justify-center">
						<button 
							onClick={() => {
								document.getElementById('game-features-analysis')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
							}}
							className="btn-gold px-10 py-4 rounded"
						>
							了解更多特色
						</button>
						<button 
							onClick={() => {
								document.getElementById('gameplay')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
							}}
							className="btn-cyan px-10 py-4 rounded-3xl"
						>
							了解详情
						</button>
					</div>
				</div>
			</section>

			{/* Game Features Analysis - 游戏特色深度分析 */}
			<section id="game-features-analysis" className="relative bg-[#0a1428] py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">游戏特色深度分析</h2>
						<p className="text-gray-400 text-lg max-w-3xl mx-auto">
							从农场经营到城市建设，从生产加工到社区互动，梦想城镇的每个系统都经过精心设计，为玩家提供丰富多样的游戏体验。
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden mb-4 rounded">
								<img
									src="/images/farming.jpg"
									alt="农场经营"
									className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<span className="text-[#c89b3c] text-sm font-bold uppercase">
									核心玩法
								</span>
								<span className="text-gray-400 text-sm">2025/01/15</span>
							</div>
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#c89b3c] transition-colors">
								农场经营系统深度解析
							</h3>
							<p className="text-gray-300">
								从作物种植到动物饲养，探索梦想城镇农场系统的完整玩法和策略要点。
							</p>
						</div>
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden mb-4 rounded">
								<img
									src="/images/citybuilding.jpg"
									alt="城市建设"
									className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<span className="text-[#c89b3c] text-sm font-bold uppercase">
									更新内容
								</span>
								<span className="text-gray-400 text-sm">2025/01/10</span>
							</div>
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#c89b3c] transition-colors">
								最新版本更新 - 新建筑与功能
							</h3>
							<p className="text-gray-300">
								了解最新版本中新增的建筑类型、装饰物品和游戏功能，让你的城镇更加精彩！
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Game Introduction - 可玩性分析 */}
			<section id="gameplay" className="relative py-24 bg-gradient-to-b from-[#0a1428] to-[#0d2438]">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-5xl md:text-6xl font-bold text-white mb-6 italic">
								可玩性分析
							</h2>
							<p className="text-[#c89b3c] text-xl md:text-2xl font-semibold uppercase tracking-wide">
								深度解析梦想城镇的游戏魅力
							</p>
						</div>

						{/* Detailed Gameplay Analysis */}
						<div className="mt-16 space-y-8">
							<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-8 rounded-lg border border-[#2a2a2a]">
								<h3 className="text-3xl font-bold text-[#c89b3c] mb-6 flex items-center gap-3">
									<span className="w-2 h-10 bg-[#c89b3c]"></span>
									游戏机制深度分析
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h4 className="text-xl font-bold text-white mb-3">资源管理系统</h4>
										<p className="text-gray-300 leading-relaxed">
											游戏采用多层次的资源管理机制。玩家需要平衡土地、时间、金币和绿钞等资源。合理的资源分配策略直接影响城镇发展速度。库存管理尤为重要，既要保证生产链的连续性，又要避免资源浪费。
										</p>
									</div>
									<div>
										<h4 className="text-xl font-bold text-white mb-3">生产链优化</h4>
										<p className="text-gray-300 leading-relaxed">
											从原材料到最终产品的完整生产链是游戏的核心。玩家需要理解每个工厂的生产时间和所需原料，优化生产顺序，减少等待时间。高级玩家会建立多条并行生产线，提高整体效率。
										</p>
									</div>
									<div>
										<h4 className="text-xl font-bold text-white mb-3">任务系统设计</h4>
										<p className="text-gray-300 leading-relaxed">
											游戏提供多种任务类型：直升机订单、火车订单、飞机订单等。每种任务有不同的奖励机制和完成难度。玩家需要根据当前资源状况和任务奖励，选择最优的任务组合，最大化收益。
										</p>
									</div>
									<div>
										<h4 className="text-xl font-bold text-white mb-3">社交合作机制</h4>
										<p className="text-gray-300 leading-relaxed">
											合作社系统是游戏长期可玩性的重要保障。玩家可以加入合作社，参与团队任务和竞赛。良好的团队协作不仅能获得丰厚奖励，还能增强游戏的社交属性和粘性。
										</p>
									</div>
								</div>
							</div>

							<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-8 rounded-lg border border-[#2a2a2a]">
								<h3 className="text-3xl font-bold text-[#c89b3c] mb-6 flex items-center gap-3">
									<span className="w-2 h-10 bg-[#c89b3c]"></span>
									长期可玩性分析
								</h3>
								<div className="space-y-4">
									<div className="flex items-start gap-4">
										<div className="w-8 h-8 bg-[#c89b3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold">1</span>
										</div>
										<div>
											<h4 className="text-xl font-bold text-white mb-2">持续的内容更新</h4>
											<p className="text-gray-300">
												游戏定期推出新建筑、新作物、新装饰和限时活动，保持内容新鲜感。季节性活动和节日主题让玩家始终保持期待。
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-8 h-8 bg-[#c89b3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold">2</span>
										</div>
										<div>
											<h4 className="text-xl font-bold text-white mb-2">渐进式难度设计</h4>
											<p className="text-gray-300">
												游戏采用渐进式难度曲线，新手玩家可以轻松上手，而高级玩家则面临更复杂的资源管理和策略挑战。这种设计确保了不同水平玩家都能找到乐趣。
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-8 h-8 bg-[#c89b3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold">3</span>
										</div>
										<div>
											<h4 className="text-xl font-bold text-white mb-2">个性化定制空间</h4>
											<p className="text-gray-300">
												丰富的装饰系统和自由布局功能让每个玩家的城镇都独一无二。这种个性化体验增强了玩家的归属感和创作欲望。
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="w-8 h-8 bg-[#c89b3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-bold">4</span>
										</div>
										<div>
											<h4 className="text-xl font-bold text-white mb-2">成就与收集系统</h4>
											<p className="text-gray-300">
												完善的成就系统和收集要素为玩家提供长期目标。完成成就、收集稀有物品、解锁新区域等机制持续激励玩家投入时间。
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-8 rounded-lg border border-[#2a2a2a]">
								<h3 className="text-3xl font-bold text-[#c89b3c] mb-6 flex items-center gap-3">
									<span className="w-2 h-10 bg-[#c89b3c]"></span>
									策略要点与技巧
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									<div className="bg-[#0a1428]/50 p-6 rounded-lg">
										<div className="mb-4 rounded-lg overflow-hidden">
											<img
												src="/images/early-strategy.jpg"
												alt="初期策略"
												className="w-full h-32 object-cover"
											/>
										</div>
										<h4 className="text-lg font-bold text-[#c89b3c] mb-3">初期策略</h4>
										<ul className="text-gray-300 space-y-2 text-sm">
											<li>• 优先解锁基础生产建筑</li>
											<li>• 建立稳定的作物种植循环</li>
											<li>• 完成简单订单积累初始资金</li>
											<li>• 合理规划土地布局</li>
										</ul>
									</div>
									<div className="bg-[#0a1428]/50 p-6 rounded-lg">
										<div className="mb-4 rounded-lg overflow-hidden">
											<img
												src="/images/mid-strategy.jpg"
												alt="中期发展"
												className="w-full h-32 object-cover"
											/>
										</div>
										<h4 className="text-lg font-bold text-[#c89b3c] mb-3">中期发展</h4>
										<ul className="text-gray-300 space-y-2 text-sm">
											<li>• 扩展生产链，增加产品种类</li>
											<li>• 优化工厂生产顺序</li>
											<li>• 加入活跃的合作社</li>
											<li>• 参与限时活动获取奖励</li>
										</ul>
									</div>
									<div className="bg-[#0a1428]/50 p-6 rounded-lg">
										<div className="mb-4 rounded-lg overflow-hidden">
											<img
												src="/images/advanced-strategy.jpg"
												alt="高级技巧"
												className="w-full h-32 object-cover"
											/>
										</div>
										<h4 className="text-lg font-bold text-[#c89b3c] mb-3">高级技巧</h4>
										<ul className="text-gray-300 space-y-2 text-sm">
											<li>• 建立多条并行生产线</li>
											<li>• 精准计算生产时间</li>
											<li>• 优化库存管理策略</li>
											<li>• 参与高级合作社竞赛</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* 游戏系统详解 */}
						<div className="mt-16 space-y-8">
							<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-8 rounded-lg border border-[#2a2a2a]">
								<h3 className="text-3xl font-bold text-[#c89b3c] mb-6 flex items-center gap-3">
									<span className="w-2 h-10 bg-[#c89b3c]"></span>
									核心系统详解
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									<div className="space-y-4">
										<div className="mb-4 rounded-lg overflow-hidden">
											<img
												src="/images/farming-system.jpg"
												alt="农场系统"
												className="w-full h-48 object-cover"
											/>
										</div>
										<h4 className="text-xl font-bold text-white mb-3">农场系统</h4>
										<div className="space-y-3 text-gray-300">
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">作物种植：</strong>游戏提供超过50种作物，从快速成熟的小麦（2分钟）到需要长时间培育的草莓（20小时）。每种作物都有不同的生长周期和收益，玩家需要根据订单需求和时间安排合理选择。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">动物饲养：</strong>饲养奶牛、绵羊、鸡、猪等动物，定期收获牛奶、羊毛、鸡蛋、培根等产品。动物需要定期喂食，合理安排喂食时间可以最大化产出效率。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">土地管理：</strong>初始只有少量土地，通过升级和扩展可以解锁更多土地。合理规划土地布局，平衡作物种植和动物饲养区域，是高效经营的关键。
											</p>
										</div>
									</div>
									<div className="space-y-4">
										<div className="mb-4 rounded-lg overflow-hidden">
											<img
												src="/images/factory-system.jpg"
												alt="工厂系统"
												className="w-full h-48 object-cover"
											/>
										</div>
										<h4 className="text-xl font-bold text-white mb-3">工厂系统</h4>
										<div className="space-y-3 text-gray-300">
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">生产建筑：</strong>从基础的面包厂、制糖厂到高级的纺织厂、珠宝店，每种工厂都有独特的生产配方。理解每个工厂的投入产出比，是优化生产链的基础。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">生产时间：</strong>不同产品需要不同的生产时间，从几分钟到几小时不等。合理安排生产顺序，利用等待时间处理其他任务，可以显著提高效率。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">升级系统：</strong>工厂可以升级以提高生产速度或增加生产槽位。优先升级常用工厂，可以大幅提升整体生产效率。
											</p>
										</div>
									</div>
									<div className="space-y-4">
										<div className="mb-4 rounded-lg overflow-hidden">
											<img
												src="/images/order-system.jpg"
												alt="订单系统"
												className="w-full h-48 object-cover"
											/>
										</div>
										<h4 className="text-xl font-bold text-white mb-3">订单系统</h4>
										<div className="space-y-3 text-gray-300">
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">直升机订单：</strong>快速完成的小订单，奖励金币和经验。适合在等待工厂生产时完成，保持游戏节奏。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">火车订单：</strong>需要大量产品的长期订单，奖励丰厚但需要提前准备。建议优先准备常用产品，随时准备完成火车订单。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">飞机订单：</strong>高价值订单，需要特定组合的产品。完成飞机订单可以获得大量经验和特殊奖励，是快速升级的重要途径。
											</p>
										</div>
									</div>
									<div className="space-y-4">
										<div className="mb-4 rounded-lg overflow-hidden">
											<img
												src="/images/community-system.jpg"
												alt="合作社系统"
												className="w-full h-48 object-cover"
											/>
										</div>
										<h4 className="text-xl font-bold text-white mb-3">合作社系统</h4>
										<div className="space-y-3 text-gray-300">
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">团队任务：</strong>合作社成员共同完成大型任务，获得团队奖励。积极参与团队任务不仅可以获得丰厚奖励，还能增强团队凝聚力。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">合作社竞赛：</strong>与其他合作社竞争，完成特定目标获得排名奖励。活跃的合作社通常能获得更好的排名和奖励。
											</p>
											<p className="leading-relaxed">
												<strong className="text-[#c89b3c]">互助系统：</strong>成员之间可以互相帮助，加速生产或完成任务。建立良好的互助关系，可以让游戏体验更加顺畅。
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* 进阶攻略指南 */}
							<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-8 rounded-lg border border-[#2a2a2a]">
								<h3 className="text-3xl font-bold text-[#c89b3c] mb-6 flex items-center gap-3">
									<span className="w-2 h-10 bg-[#c89b3c]"></span>
									进阶攻略指南
								</h3>
								<div className="space-y-6">
									<div className="bg-[#0a1428]/50 p-6 rounded-lg">
										<h4 className="text-xl font-bold text-[#c89b3c] mb-4">资源管理策略</h4>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
											<div>
												<p className="mb-2"><strong className="text-white">金币管理：</strong></p>
												<ul className="space-y-1 text-sm ml-4">
													<li>• 优先投资生产建筑，而非装饰品</li>
													<li>• 完成高价值订单获得更多金币</li>
													<li>• 合理使用市场购买稀缺资源</li>
													<li>• 避免过度扩张导致资金链断裂</li>
												</ul>
											</div>
											<div>
												<p className="mb-2"><strong className="text-white">绿钞使用：</strong></p>
												<ul className="space-y-1 text-sm ml-4">
													<li>• 优先用于加速关键生产</li>
													<li>• 解锁重要建筑和功能</li>
													<li>• 参与限时活动时合理使用</li>
													<li>• 避免浪费在非必要项目上</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="bg-[#0a1428]/50 p-6 rounded-lg">
										<h4 className="text-xl font-bold text-[#c89b3c] mb-4">生产链优化技巧</h4>
										<div className="text-gray-300 space-y-3">
											<p className="leading-relaxed">
												<strong className="text-white">建立核心生产链：</strong>确定3-5个核心产品，建立稳定的生产链。这些产品应该覆盖大部分订单需求，确保随时有产品可交付。
											</p>
											<p className="leading-relaxed">
												<strong className="text-white">时间管理：</strong>利用不同生产时间的差异，合理安排生产顺序。短时间产品用于填充等待时间，长时间产品在离线前启动。
											</p>
											<p className="leading-relaxed">
												<strong className="text-white">库存平衡：</strong>保持合理的库存水平，既要有足够的储备应对突发订单，又要避免库存积压占用仓库空间。
											</p>
										</div>
									</div>
									<div className="bg-[#0a1428]/50 p-6 rounded-lg">
										<h4 className="text-xl font-bold text-[#c89b3c] mb-4">城镇布局建议</h4>
										<div className="text-gray-300 space-y-3">
											<p className="leading-relaxed">
												<strong className="text-white">功能分区：</strong>将农场、工厂、住宅、装饰品分区布局，既美观又便于管理。农场区域集中管理，工厂区域靠近仓库，住宅区域打造生活氛围。
											</p>
											<p className="leading-relaxed">
												<strong className="text-white">道路规划：</strong>合理规划道路系统，确保所有建筑都能方便访问。美观的道路设计还能提升城镇的整体视觉效果。
											</p>
											<p className="leading-relaxed">
												<strong className="text-white">装饰搭配：</strong>使用装饰品美化城镇，但不要过度装饰影响功能布局。选择与建筑风格匹配的装饰品，打造独特的城镇风格。
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* 常见问题与解答 */}
							<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-8 rounded-lg border border-[#2a2a2a]">
								<h3 className="text-3xl font-bold text-[#c89b3c] mb-6 flex items-center gap-3">
									<span className="w-2 h-10 bg-[#c89b3c]"></span>
									常见问题解答
								</h3>
								<div className="space-y-4">
									<div className="bg-[#0a1428]/50 p-5 rounded-lg">
										<h4 className="text-lg font-bold text-white mb-2">Q: 如何快速提升等级？</h4>
										<p className="text-gray-300 text-sm">
											A: 优先完成飞机订单和火车订单，这些订单提供大量经验值。同时积极参与合作社任务和限时活动，也能获得丰厚的经验奖励。保持活跃度，定期登录游戏处理生产任务。
										</p>
									</div>
									<div className="bg-[#0a1428]/50 p-5 rounded-lg">
										<h4 className="text-lg font-bold text-white mb-2">Q: 如何选择合适的合作社？</h4>
										<p className="text-gray-300 text-sm">
											A: 选择活跃度高、成员在线时间长的合作社。查看合作社的竞赛排名和历史表现，选择与你的游戏风格和活跃度匹配的团队。积极参与团队活动，建立良好的合作关系。
										</p>
									</div>
									<div className="bg-[#0a1428]/50 p-5 rounded-lg">
										<h4 className="text-lg font-bold text-white mb-2">Q: 仓库空间不够怎么办？</h4>
										<p className="text-gray-300 text-sm">
											A: 优先升级仓库容量，这是长期投资。同时优化库存管理，及时完成订单消耗库存。对于不常用的产品，可以通过市场出售或暂时停止生产。合理规划生产，避免过度囤积。
										</p>
									</div>
									<div className="bg-[#0a1428]/50 p-5 rounded-lg">
										<h4 className="text-lg font-bold text-white mb-2">Q: 如何最大化收益？</h4>
										<p className="text-gray-300 text-sm">
											A: 建立稳定的生产链，优先生产高价值产品。完成高价值订单，特别是飞机订单。参与限时活动获得特殊奖励。合理使用市场买卖，在价格合适时进行交易。加入活跃的合作社，获得团队奖励。
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="text-center mt-12">
							<button 
								onClick={() => {
									document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
								}}
								className="btn-gold px-12 py-5 rounded-3xl text-lg"
							>
								了解详情
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Game Features Analysis */}
			<section id="game-features-analysis" className="relative bg-[#0a1428] py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">游戏特色深度分析</h2>
						<p className="text-gray-400 text-lg max-w-3xl mx-auto">
							从农场经营到城市建设，从生产加工到社区互动，梦想城镇的每个系统都经过精心设计，为玩家提供丰富多样的游戏体验。
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden mb-4 rounded">
								<img
									src="/images/farming.jpg"
									alt="农场经营"
									className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<span className="text-[#c89b3c] text-sm font-bold uppercase">
									核心玩法
								</span>
								<span className="text-gray-400 text-sm">2025/01/15</span>
							</div>
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#c89b3c] transition-colors">
								农场经营系统深度解析
							</h3>
							<p className="text-gray-300">
								从作物种植到动物饲养，探索梦想城镇农场系统的完整玩法和策略要点。
							</p>
						</div>
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden mb-4 rounded">
								<img
									src="/images/citybuilding.jpg"
									alt="城市建设"
									className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="flex items-center gap-2 mb-2">
								<span className="text-[#c89b3c] text-sm font-bold uppercase">
									更新内容
								</span>
								<span className="text-gray-400 text-sm">2025/01/10</span>
							</div>
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#c89b3c] transition-colors">
								最新版本更新 - 新建筑与功能
							</h3>
							<p className="text-gray-300">
								了解最新版本中新增的建筑类型、装饰物品和游戏功能，让你的城镇更加精彩！
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 建筑与设施详解 */}
			<section id="buildings" className="relative py-20 bg-gradient-to-b from-[#0d2438] to-[#0a1428]">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">建筑与设施详解</h2>
							<p className="text-gray-400 text-lg">了解各类建筑的功能和升级策略，打造高效运转的梦想城镇</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a] hover:border-[#c89b3c] transition-colors">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src="/images/production-buildings.jpg"
										alt="生产建筑"
										className="w-full h-40 object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold text-[#c89b3c] mb-3">生产建筑</h3>
								<ul className="text-gray-300 space-y-2 text-sm">
									<li>• 面包厂：生产面包、蛋糕等基础食品</li>
									<li>• 制糖厂：加工糖类产品，多种配方可选</li>
									<li>• 纺织厂：生产布料、服装等纺织品</li>
									<li>• 乳制品厂：加工牛奶、奶酪等产品</li>
									<li>• 更多工厂等待解锁...</li>
								</ul>
							</div>
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a] hover:border-[#c89b3c] transition-colors">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src="/images/community-buildings.jpg"
										alt="社区建筑"
										className="w-full h-40 object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold text-[#c89b3c] mb-3">社区建筑</h3>
								<ul className="text-gray-300 space-y-2 text-sm">
									<li>• 住宅区：增加人口上限，解锁新功能</li>
									<li>• 商店：提供特殊商品和资源</li>
									<li>• 学校：提升生产效率或解锁新功能</li>
									<li>• 医院：提供特殊服务和奖励</li>
									<li>• 更多社区设施...</li>
								</ul>
							</div>
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a] hover:border-[#c89b3c] transition-colors">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src="/images/decoration-buildings.jpg"
										alt="装饰建筑"
										className="w-full h-40 object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold text-[#c89b3c] mb-3">装饰建筑</h3>
								<ul className="text-gray-300 space-y-2 text-sm">
									<li>• 公园：美化城镇，提升居民满意度</li>
									<li>• 喷泉：装饰性建筑，增加城镇魅力</li>
									<li>• 雕像：特殊装饰，纪念重要成就</li>
									<li>• 季节性装饰：限时装饰品</li>
									<li>• 个性化定制选项...</li>
								</ul>
							</div>
						</div>

						<div className="bg-[#1a1a1a]/30 backdrop-blur-sm p-8 rounded-lg border border-[#2a2a2a]">
							<h3 className="text-2xl font-bold text-[#c89b3c] mb-6">建筑升级策略</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
								<div>
									<h4 className="text-lg font-bold text-white mb-3">优先升级原则</h4>
									<ul className="space-y-2 text-sm">
										<li>• 优先升级使用频率高的工厂</li>
										<li>• 仓库容量是长期投资，优先考虑</li>
										<li>• 生产速度提升比槽位增加更有效</li>
										<li>• 根据订单需求选择升级目标</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-bold text-white mb-3">升级资源规划</h4>
									<ul className="space-y-2 text-sm">
										<li>• 合理分配金币和绿钞</li>
										<li>• 利用限时活动获得升级材料</li>
										<li>• 合作社互助加速升级进程</li>
										<li>• 制定长期升级计划</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 限时活动与特殊事件 */}
			<section id="events" className="relative py-20 bg-[#0a1428]">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">限时活动与特殊事件</h2>
							<p className="text-gray-400 text-lg">参与精彩活动，获得限定奖励和特殊装饰</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a]">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src="/images/festival-events.jpg"
										alt="节日活动"
										className="w-full h-48 object-cover"
									/>
								</div>
								<h3 className="text-2xl font-bold text-[#c89b3c] mb-4">节日活动</h3>
								<div className="space-y-3 text-gray-300">
									<p className="leading-relaxed">
										游戏定期举办各种节日主题活动，如春节、圣诞节、万圣节等。参与活动可以解锁限定装饰品、特殊建筑和独特奖励。
									</p>
									<p className="leading-relaxed">
										<strong className="text-white">活动特点：</strong>限时任务、特殊商店、节日主题装饰、丰厚奖励
									</p>
								</div>
							</div>
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a]">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src="/images/coop-competition.jpg"
										alt="合作社竞赛"
										className="w-full h-48 object-cover"
									/>
								</div>
								<h3 className="text-2xl font-bold text-[#c89b3c] mb-4">合作社竞赛</h3>
								<div className="space-y-3 text-gray-300">
									<p className="leading-relaxed">
										定期举办的合作社竞赛活动，团队协作完成挑战目标，根据排名获得不同等级的奖励。活跃的合作社可以获得更好的排名。
									</p>
									<p className="leading-relaxed">
										<strong className="text-white">竞赛奖励：</strong>排名奖励、团队宝箱、特殊装饰、绿钞和金币
									</p>
								</div>
							</div>
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a]">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src="/images/special-challenges.jpg"
										alt="特殊挑战"
										className="w-full h-48 object-cover"
									/>
								</div>
								<h3 className="text-2xl font-bold text-[#c89b3c] mb-4">特殊挑战</h3>
								<div className="space-y-3 text-gray-300">
									<p className="leading-relaxed">
										不定期推出的特殊挑战活动，完成特定任务获得独特奖励。这些挑战通常有时间限制，需要玩家合理安排资源。
									</p>
									<p className="leading-relaxed">
										<strong className="text-white">挑战类型：</strong>生产挑战、收集挑战、建设挑战、合作挑战
									</p>
								</div>
							</div>
							<div className="bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg border border-[#2a2a2a]">
								<div className="mb-4 rounded-lg overflow-hidden">
									<img
										src="/images/update-content.jpg"
										alt="更新内容"
										className="w-full h-48 object-cover"
									/>
								</div>
								<h3 className="text-2xl font-bold text-[#c89b3c] mb-4">更新内容</h3>
								<div className="space-y-3 text-gray-300">
									<p className="leading-relaxed">
										游戏持续更新，定期推出新建筑、新作物、新功能和新的游戏机制。保持关注更新内容，体验最新的游戏功能。
									</p>
									<p className="leading-relaxed">
										<strong className="text-white">更新内容：</strong>新建筑、新作物、新工厂、新装饰、新功能
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Customize Your Town */}
			<section
				id="style"
				className="relative min-h-screen flex items-center py-20"
				style={{
					backgroundImage:
						`url('${getImagePath("/images/citybuilding.jpg")}')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/90 to-[#1a3a52]/80" />
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-2xl">
						<p className="text-white/80 text-xl mb-2 italic">个性化</p>
						<h2 className="text-7xl font-bold text-white mb-6 italic">
							打造你的城镇
						</h2>
						<p className="text-white/90 text-xl mb-8">
							用各种装饰品和建筑打造属于你的独特小镇风格，展现你的创意和个性。
						</p>
					</div>
				</div>
			</section>

			{/* Game Modes */}
			<section id="modes" className="relative py-20 bg-[#0d2438]">
				<div
					className="absolute inset-0 opacity-30"
					style={{
						backgroundImage:
							`url('${getImagePath("/images/citybuilding.jpg")}')`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<div className="container mx-auto px-4 relative z-10 text-center">
					<p className="text-white/80 text-lg mb-2">多种</p>
					<h2 className="text-6xl font-bold text-white mb-4 italic">游戏模式</h2>
					<p className="text-white/90 text-lg mb-12 max-w-3xl mx-auto">
						无论你喜欢农场经营、城市建设还是社区互动，梦想城镇都能满足你的游戏需求。
					</p>

					{/* Game Mode Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
								<img
									src="/images/farming.jpg"
									alt="农场模式"
									className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<p className="text-white text-sm font-bold uppercase">
										农场经营
									</p>
									<p className="text-white/70 text-xs mt-1">
										种植作物，饲养动物
									</p>
								</div>
							</div>
						</div>
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
								<img
									src="/images/production.jpg"
									alt="生产模式"
									className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<p className="text-white text-sm font-bold uppercase">工厂生产</p>
									<p className="text-white/70 text-xs mt-1">
										建立工厂，加工产品
									</p>
								</div>
							</div>
						</div>
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
								<img
									src="/images/citybuilding.jpg"
									alt="建设模式"
									className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<p className="text-white text-sm font-bold uppercase">
										城市建设
									</p>
									<p className="text-white/70 text-xs mt-1">
										规划布局，打造小镇
									</p>
								</div>
							</div>
						</div>
						<div className="group cursor-pointer">
							<div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
								<img
									src="/images/community.jpg"
									alt="社区模式"
									className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<p className="text-white text-sm font-bold uppercase">
										社区互动
									</p>
									<p className="text-white/70 text-xs mt-1">
										加入合作社，团队协作
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Gameplay Depth Section */}
			<section className="relative min-h-[70vh] flex items-center">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage:
							`url('${getImagePath("/images/farming.jpg")}')`,
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-b from-[#0d2438] via-black/50 to-[#0a1428]" />
				</div>
				<div className="container mx-auto px-4 relative z-10 text-center">
					<p className="text-white/80 text-sm mb-4 italic uppercase tracking-wider">
						深度玩法
					</p>
					<h2 className="text-6xl font-bold text-white mb-6 italic">
						策略与规划
					</h2>
					<p className="text-white/90 text-lg max-w-2xl mx-auto">
						合理规划生产链，优化资源分配，通过策略性的布局和管理，让你的城镇高效运转，获得最大收益。
					</p>
				</div>
			</section>

			{/* Core Gameplay Highlight */}
			<section className="relative py-20 bg-[#0a1428]">
				<div className="container mx-auto px-4 text-center">
					<div className="max-w-4xl mx-auto mb-12">
						<div className="w-96 h-96 mx-auto rounded-full overflow-hidden border-4 border-[#c89b3c] mb-8 shadow-2xl shadow-[#c89b3c]/20">
							<img
								src="/images/farming.jpg"
								alt="梦想城镇核心玩法"
								className="w-full h-full object-cover"
							/>
						</div>
						<p className="text-white/80 text-sm mb-4 italic uppercase tracking-wider">
							核心玩法体验
						</p>
						<p className="text-white text-lg">
							从种植作物到建设工厂，从完成订单到扩展城镇，体验完整的模拟经营乐趣。每一步决策都影响你的城镇发展，打造属于你的梦想小镇。
						</p>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section
				className="relative min-h-[60vh] flex items-center"
					style={{
						backgroundImage:
							`url('${getImagePath("/images/citybuilding.jpg")}')`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-transparent to-transparent" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<button 
						onClick={() => {
							document.getElementById('gameplay')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
						}}
						className="btn-gold px-12 py-5 rounded-3xl text-xl"
					>
						了解详情
					</button>
				</div>
			</section>


			{/* Back to Top Button */}
			<button
				onClick={() => {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
				className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#c89b3c] hover:bg-[#d4af4a] text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
				aria-label="回到顶部"
			>
				<svg
					className="w-6 h-6 transition-transform group-hover:-translate-y-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
				</svg>
			</button>
		</>
	);
}
