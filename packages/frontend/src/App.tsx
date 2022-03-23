import React, {useEffect} from "react";
import {API} from "./env";

const App = () => {

  useEffect(() => {
    (async () => {
      await fetch(API)
    })()
  }, [])
  return <div>some</div>;
};

export { App };
