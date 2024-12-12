/*
 * @Descripttion:
 * @version:
 * @Author: pyq
 * @Date: 2024-12-12 14:24:22
 * @LastEditors: pyq
 * @LastEditTime: 2024-12-12 14:28:26
 */
import { ReactNode, FC, memo } from "react";

// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const DashUsers: FC<IProps> = () => {
  return <div className="DashUsers">DashUsers</div>;
};

export default memo(DashUsers);
