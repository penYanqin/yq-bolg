import { ReactNode, FC, memo } from "react";

// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const DashboardPage: FC<IProps> = () => {
  return <div className="DashboardPage">DashboardPage</div>;
};

export default memo(DashboardPage);
