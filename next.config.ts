/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-11-29 15:03:43
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 16:36:10
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 忽略 TypeScript 错误，不让它影响构建
  },
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint 错误
  },
};

export default nextConfig;
