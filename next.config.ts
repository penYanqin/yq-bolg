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
  eslint: {
    ignoreDuringBuilds: true, // 在构建时忽略 ESLint 错误
  },
};

export default nextConfig;
