export type GameFeature = "farming" | "production" | "citybuilding" | "community" | "tasks" | "decoration";

export interface TownshipFeature {
	id: string;
	name: string;
	title: string;
	feature: GameFeature;
	image: string;
	description: string;
}

export const townshipFeatures: TownshipFeature[] = [
	{
		id: "farming",
		name: "农场经营",
		title: "种植与收获的乐趣",
		feature: "farming",
		image: "/images/farming.jpg",
		description: "种植各种作物，从小麦到草莓，体验从播种到收获的完整农场生活。",
	},
	{
		id: "livestock",
		name: "畜牧业",
		title: "饲养可爱的动物",
		feature: "farming",
		image: "/images/farming.jpg",
		description: "饲养奶牛、绵羊、鸡等动物，获得新鲜的牛奶、羊毛和鸡蛋。",
	},
	{
		id: "factory",
		name: "工厂生产",
		title: "打造生产链",
		feature: "production",
		image: "/images/production.jpg",
		description: "建立面包厂、制糖厂等工厂，将原材料加工成高价值产品。",
	},
	{
		id: "production",
		name: "产业链",
		title: "优化生产流程",
		feature: "production",
		image: "/images/production.jpg",
		description: "规划完整的生产链，从原料到成品，体验经营管理的乐趣。",
	},
	{
		id: "citybuilding",
		name: "城市建设",
		title: "打造梦想小镇",
		feature: "citybuilding",
		image: "/images/citybuilding.jpg",
		description: "建设住宅、商店、公园等建筑，打造属于你的独特小镇。",
	},
	{
		id: "expansion",
		name: "城镇扩张",
		title: "不断扩展版图",
		feature: "citybuilding",
		image: "/images/citybuilding.jpg",
		description: "解锁新区域，扩大城镇规模，容纳更多建筑和设施。",
	},
	{
		id: "community",
		name: "社区互动",
		title: "与好友合作",
		feature: "community",
		image: "/images/community.jpg",
		description: "加入合作社，与全球玩家一起完成任务，互相帮助。",
	},
	{
		id: "cooperation",
		name: "合作社",
		title: "团队协作乐趣",
		feature: "community",
		image: "/images/community.jpg",
		description: "与合作社成员一起参与竞赛，共同建设，分享资源。",
	},
	{
		id: "tasks",
		name: "任务系统",
		title: "丰富的挑战",
		feature: "tasks",
		image: "/images/tasks.jpg",
		description: "完成各种任务，从简单的订单到复杂的挑战，获得丰厚奖励。",
	},
	{
		id: "events",
		name: "限时活动",
		title: "精彩活动不断",
		feature: "tasks",
		image: "/images/tasks.jpg",
		description: "参与节日活动和特殊事件，获得限定装饰和奖励。",
	},
	{
		id: "decoration",
		name: "装饰系统",
		title: "个性化设计",
		feature: "decoration",
		image: "/images/decoration.jpg",
		description: "用各种装饰品美化你的小镇，打造独一无二的城镇风貌。",
	},
	{
		id: "customization",
		name: "个性化定制",
		title: "展现创意",
		feature: "decoration",
		image: "/images/decoration.jpg",
		description: "自由布局建筑和装饰，创造属于你的独特城镇风格。",
	},
];

export const getFeaturesByCategory = (category: GameFeature): TownshipFeature[] => {
	return townshipFeatures.filter((feature) => feature.feature === category);
};
