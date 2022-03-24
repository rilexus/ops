import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { USER } from "@ops/types";
import { API } from "../env";

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      const user: USER = await fetch(API);
      console.log(user);
    })();
  }, []);

  return <div className={styles.container}>OPS</div>;
};

export default Home;
