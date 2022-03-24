import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    console.log("heir");
  }, []);

  return <div className={styles.container}>OPS</div>;
};

export default Home;
