import React, { useEffect } from "react";
import { API } from "./env";
import { ErrorBoundary } from "@components";

const App = () => {
  useEffect(() => {
    (async () => {
      const user = await (await fetch(API)).json();
      console.log(user);
    })();
  }, []);
  const handleApplicationError = () => {
    //
  };

  return (
    <ErrorBoundary
      onError={handleApplicationError}
      fallback={<div>Application nuked itself!</div>}
    >
      OPS
    </ErrorBoundary>
  );
};

export { App };
