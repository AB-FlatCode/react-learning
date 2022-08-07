import React, { useEffect } from "react";

const Alert = ({ type, msg, autoremove, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      autoremove(); // we invoke the function -  it has default value to show:false so it will hide it
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
