/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-12-05 22:53:53
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-05 23:03:40
 */
import { SignIn } from "@clerk/nextjs";
import { ReactNode, FC, memo } from "react";

// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const SigIn: FC<IProps> = () => {
  return (
    <div className="SigIn flex justify-center items-center p-3">
      <SignIn />
    </div>
  );
};

export default memo(SigIn);
