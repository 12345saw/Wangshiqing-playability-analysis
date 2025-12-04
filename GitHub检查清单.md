# GitHub 仓库检查清单

## ✅ 必须提交的文件

### 1. 配置文件（必须）
- ✅ `package.json` - 项目依赖配置
- ✅ `next.config.js` - Next.js 配置
- ✅ `tsconfig.json` - TypeScript 配置
- ✅ `tailwind.config.ts` - Tailwind CSS 配置
- ✅ `postcss.config.mjs` - PostCSS 配置
- ✅ `.gitignore` - Git 忽略文件配置

### 2. 源代码文件（必须）
- ✅ `src/app/layout.tsx` - 根布局文件
- ✅ `src/app/page.tsx` - 首页
- ✅ `src/app/globals.css` - 全局样式
- ✅ `src/components/` - 所有组件文件
- ✅ `src/lib/` - 工具库文件
- ✅ `src/data/` - 数据文件
- ✅ `public/` - 静态资源文件

### 3. 其他重要文件
- ✅ `README.md` - 项目说明
- ✅ `eslint.config.mjs` - ESLint 配置
- ✅ `biome.json` - Biome 配置

## ❌ 不应该提交的文件（已在 .gitignore 中）

- ❌ `node_modules/` - 依赖包（Vercel 会自动安装）
- ❌ `.next/` - 构建输出（Vercel 会自动构建）
- ❌ `.vercel/` - Vercel 配置（本地配置）
- ❌ `.env*` - 环境变量文件
- ❌ `*.tsbuildinfo` - TypeScript 构建信息
- ❌ `next-env.d.ts` - Next.js 环境类型

## 🔍 检查步骤

1. **打开您的 GitHub 仓库页面**
2. **检查根目录是否有以下文件：**
   - `package.json`
   - `next.config.js`
   - `tsconfig.json`
   - `.gitignore`

3. **检查是否有 `src` 目录：**
   - `src/app/layout.tsx`
   - `src/app/page.tsx`
   - `src/components/` 目录

4. **确认没有提交以下内容：**
   - `node_modules` 文件夹（不应该存在）
   - `.next` 文件夹（不应该存在）

## ⚠️ 常见问题

### 问题 1：缺少 package.json
**症状**：Vercel 构建失败，提示找不到 package.json
**解决**：确保 package.json 已提交到 GitHub

### 问题 2：缺少 src/app 目录
**症状**：网站显示 404 错误
**解决**：确保 src/app 目录及其文件已提交

### 问题 3：提交了 node_modules
**症状**：仓库过大，上传缓慢
**解决**：检查 .gitignore 是否包含 node_modules，如果已提交，需要从 Git 历史中删除

### 问题 4：缺少 .gitignore
**症状**：提交了不应该提交的文件
**解决**：创建 .gitignore 文件（您的项目已有）

## 📝 如果发现问题

如果 GitHub 仓库缺少必要文件，需要：
1. 在本地项目目录初始化 Git（如果还没有）
2. 添加所有必要文件
3. 提交并推送到 GitHub
4. Vercel 会自动重新部署

