import styles from "./componentcss.module.css";
const Inputs = ({aryan})=>{
   return(
    <div class="row">
            <div class="col-sm-8" id={styles.inputdiv}>
              <input type="text" id={styles.input} 
               value={aryan}
               readOnly/>
            </div>
          </div>
   )
}

export default Inputs;