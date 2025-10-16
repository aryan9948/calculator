import styles from "./componentcss.module.css";
const Buttons=({onbuttonclick})=>{
  return (
    <div class="container text-center" >
      <div class="row" id={styles.first}>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick("C")}>C</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick("/")}>/</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick("*")}>*</button>
        </div>
        <div class="col-sm">
        <button class={styles.button} onClick={()=>onbuttonclick("-")}>-</button>
      </div>
      </div>
      <div class="row" id={styles.second}>
        <div class="col-sm">
          <button class={styles.button}onClick={()=>onbuttonclick(1)}>1</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(2)}>2</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(3)}>3</button>
        </div>
      </div>
      <div class="row" id={styles.third}>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(4)}>4</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(5)}>5</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(6)}>6</button>
        </div>
      </div>
      <div class="row" id={styles.forth}>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(7)}>7</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(8)}>8</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(9)}>9</button>
        </div>
      </div>
      <div class="row" id={styles.fifth}>
        <div class="col-sm-8">
          <button id={styles.zero} onClick={()=>onbuttonclick(0)}>0</button>
        </div>
        <div class="col-sm">
          <button class={styles.button} onClick={()=>onbuttonclick(".")}>.</button>
        </div>
      </div>
      <div class="row" id={styles.right}>
      <button id={styles.plus} onClick={()=>onbuttonclick("+")}>+</button>
      <button id={styles.enter} onClick={()=>onbuttonclick("E")}>Enter</button> 
       </div>
      </div>
  );
}

export default Buttons;
