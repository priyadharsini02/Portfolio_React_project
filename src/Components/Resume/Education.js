import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";


const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div className={styles.timeline_icon}>
          <FaGraduationCap />
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              Sri Krishna College of Engineering and Technology
            </h4>
            <p className={styles.timeline_date}>2021-2025</p>
            <p className={styles.timeline_desc}>
              Bachelor of Engineering (Electrical and Electronics)
            </p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              TMHNU Matric Higher Sec School,Theni
            </h4>
            <p className={styles.timeline_date}>2019-2021</p>
            <p className={styles.timeline_desc}>12th (State Board)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;