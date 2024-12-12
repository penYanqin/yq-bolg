/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-12-12 14:24:22
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 14:31:33
 */
"use client";

import { UserProfile } from "@clerk/nextjs";
import { ReactNode, FC, memo } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const DashProfile: FC<IProps> = () => {
  const { theme } = useTheme();
  return (
    <div className="DashProfile">
      <div className="flex justify-center items-center w-full">
        <UserProfile
          appearance={{
            baseTheme: theme === "dark" ? dark : undefined,
          }}
          routing="hash"
        />
      </div>
    </div>
  );
};

export default memo(DashProfile);
