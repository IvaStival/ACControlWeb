import { ReactNode } from "react";
import "../Panel/Panel.css";

const Panel = ({
  className,
  children,
}: {
  className: String;
  children: ReactNode;
}) => {
  return <div className={`panel-content ${className}`}>{children}</div>;
};

export default Panel;
