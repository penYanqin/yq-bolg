/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-12-05 23:39:28
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-06 00:42:54
 */
import { SignUp } from "@clerk/nextjs";
import { ReactNode, FC, memo } from "react";

// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const SignIn: FC<IProps> = () => {
  return (
    <div className="SignIn flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default memo(SignIn);
