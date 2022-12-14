import { Box } from "../Box";
import styles from "../../sass/row.module.scss";

const RowEmpty = () => {
  return (
    <div className={styles.row}>
      {Array.from(Array(5)).map((_, i) => (
        <Box key={i} value="" status="empty" />
      ))}
    </div>
  );
};

export { RowEmpty };
