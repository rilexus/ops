import React, {useEffect} from "react";
import {API} from "./env";

const App = () => {

  useEffect(() => {
    (async () => {
      const user = await (await fetch(API)).json();
    })()
  }, [])
  return <div>some</div>;
};

export { App };
