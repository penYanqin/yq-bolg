/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-11-29 16:42:58
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-06 10:11:16
 */
"use client"; // 这行代码告诉 Next.js 该文件是客户端组件
import { ReactNode, FC, memo, useState, useEffect } from "react";
import { useTheme } from "next-themes";
// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const ThemeCom: FC<IProps> = ({ children }) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rbg(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default memo(ThemeCom);
