/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  // GitHub Pages 需要静态导出
  output: 'export',
  // GitHub Pages basePath：仓库名
  // GitHub Actions 会自动注入，但如果自动注入失败，使用环境变量或默认值
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '/Wangshiqing-playability-analysis',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '/Wangshiqing-playability-analysis',
  // 图片配置：优化图片处理，确保在 GitHub Pages 和 Vercel 上正常显示
  images: {
    unoptimized: true, // 在静态导出时禁用图片优化，直接使用原始图片
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "ddragon.leagueoflegends.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
