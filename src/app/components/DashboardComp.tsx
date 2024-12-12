import { ReactNode, FC, memo } from "react";

// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const DashboardComp: FC<IProps> = () => {
  return <div className="DashboardComp">DashboardComp</div>;
};

export default memo(DashboardComp);
