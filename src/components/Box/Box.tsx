import { BoxStatus } from "../../interfaces/types";
import styles from "./Box.module.scss";
import classNames from "classnames/bind";

const classes = classNames.bind(styles);

interface BoxProps {
  value: string;
  status: BoxStatus;
  animate?: boolean;
  pos?: number;
}

const Box = ({ value, status, animate = false, pos }: BoxProps) => {
  const boxStatus = classes({
    correct: status === "correct",
    absent: status === "absent",
    edit: status === "edit",
    empty: status === "empty",
    present: status === "present",
  });
  return <div className={boxStatus}>{value}</div>;
};

export { Box };
