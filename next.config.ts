/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-11-29 15:03:43
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 16:42:45
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // 忽略 TypeScript 错误，不让它影响构建
  },
};

export default nextConfig;
