/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-11-29 15:03:43
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 16:28:07
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // 自定义 webpack 配置
    if (!isServer) {
      config.ignoreWarnings = [
        { message: /Warning: .* is defined but never used/ },
      ];
    }
    return config;
  },
};

export default nextConfig;
