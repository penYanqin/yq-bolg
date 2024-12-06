/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-12-05 22:53:53
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-06 09:51:22
 */
import { SignIn } from "@clerk/nextjs";

// 定义组件的Props类型

const SigIn = () => {
  return (
    <div className="SigIn flex justify-center items-center p-3">
      <SignIn />
    </div>
  );
};

export default SigIn;
