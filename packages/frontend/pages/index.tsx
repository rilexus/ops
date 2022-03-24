import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { USER } from "@ops/types";
import { API } from "../env";

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      fetch(API)
        .then((res) => res.json())
        .then((user: USER) => {
          console.log(user);
        });
    })();
  }, []);

  return <div className={styles.container}>OPS</div>;
};

export default Home;
