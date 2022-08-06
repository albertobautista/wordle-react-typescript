import { BoxStatus } from "../../interfaces/types";
import { Box } from "../Box";
import styles from "../../sass/row.module.scss";

interface RowCompletedProps {
  word: string;
  solution: string;
  animate: boolean;
}

const RowCompleted = ({
  word,
  solution,
  animate = false,
}: RowCompletedProps) => {
  function checkLetter(letter: string, pos: number): BoxStatus {
    if (solution.includes(letter)) {
      if (solution[pos] === letter) {
        return "correct";
      } else {
        return "present";
      }
    } else {
      return "absent";
    }
  }
  return (
    <div className={styles.row}>
      {Array.from(Array(5)).map((_, i) => (
        <Box
          key={i}
          value={word[i]}
          status={checkLetter(word[i], i)}
          animate={animate}
          pos={i}
        />
      ))}
    </div>
  );
};

export { RowCompleted };
