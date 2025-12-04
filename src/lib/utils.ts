import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 获取 basePath（用于 GitHub Pages）
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '/Wangshiqing-playability-analysis';
}

// 获取正确的图片路径（自动添加 basePath）
export function getImagePath(path: string): string {
  const basePath = getBasePath();
  // 如果路径已经以 basePath 开头，直接返回
  if (path.startsWith(basePath)) {
    return path;
  }
  // 如果路径以 / 开头，添加 basePath
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  // 否则直接添加 basePath 和 /
  return `${basePath}/${path}`;
}
