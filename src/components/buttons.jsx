import styles from "./componentcss.module.css";

const Buttons = ({ onbuttonclick }) => {
  return (
    <div className={styles.buttonsWrapper}>
      {/* Row 1 */}
      <div className={styles.row}>
        <button className={styles.button} onClick={() => onbuttonclick("C")}>
          C
        </button>
        <button className={styles.button} onClick={() => onbuttonclick("/")}>
          /
        </button>
        <button className={styles.button} onClick={() => onbuttonclick("*")}>
          *
        </button>
        <button className={styles.button} onClick={() => onbuttonclick("-")}>
          -
        </button>
      </div>

      {/* Row 2 */}
      <div className={styles.row}>
        <button className={styles.button} onClick={() => onbuttonclick(1)}>
          1
        </button>
        <button className={styles.button} onClick={() => onbuttonclick(2)}>
          2
        </button>
        <button className={styles.button} onClick={() => onbuttonclick(3)}>
          3
        </button>
      </div>

      {/* Row 3 */}
      <div className={styles.row}>
        <button className={styles.button} onClick={() => onbuttonclick(4)}>
          4
        </button>
        <button className={styles.button} onClick={() => onbuttonclick(5)}>
          5
        </button>
        <button className={styles.button} onClick={() => onbuttonclick(6)}>
          6
        </button>
      </div>

      {/* Row 4 */}
      <div className={styles.row}>
        <button className={styles.button} onClick={() => onbuttonclick(7)}>
          7
        </button>
        <button className={styles.button} onClick={() => onbuttonclick(8)}>
          8
        </button>
        <button className={styles.button} onClick={() => onbuttonclick(9)}>
          9
        </button>
      </div>

      {/* Row 5 */}
      <div className={styles.row}>
        <button id={styles.zero} onClick={() => onbuttonclick(0)}>
          0
        </button>
        <button className={styles.button} onClick={() => onbuttonclick(".")}>
          .
        </button>
        <button className={styles.button} onClick={() => onbuttonclick("+")}>
          +
        </button>
      </div>

      {/* Row 6 */}
      <div className={styles.row}>
        <button className={styles.equal} onClick={() => onbuttonclick("E")}>
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;
